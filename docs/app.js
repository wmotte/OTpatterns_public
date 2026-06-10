"use strict";

// Tiny Text-Fabric query engine — mirrors scripts/export_tf_browser.py exactly.
// Supported subset: one anchor object (word|clause|phrase|sentence) with optional
// nested word lines, `feat=val` constraints, `|` alternation in values.

const OTYPES = new Set(["word", "clause", "phrase", "sentence"]);
const META_KEYS = new Set(["n", "ref", "s", "cl"]);

let DATA = null;            // current passage data
let KNOWN_WORD_FEATS = new Set();
let KNOWN_CLAUSE_FEATS = new Set();

function consOf(line) {
  const toks = line.trim().split(/\s+/);
  const otype = toks[0];
  const cons = {};
  for (const t of toks.slice(1)) {
    const i = t.indexOf("=");
    if (i > 0) cons[t.slice(0, i)] = new Set(t.slice(i + 1).split("|"));
  }
  return { otype, cons };
}

function parseTemplate(tmpl) {
  const lines = tmpl.split("\n").filter((l) => l.trim().length);
  if (!lines.length) return null;
  return { anchor: consOf(lines[0]), children: lines.slice(1).map(consOf) };
}

function matchObj(features, cons) {
  for (const k of Object.keys(cons)) {
    const val = features[k];
    if (val == null || !cons[k].has(val)) return false;
  }
  return true;
}

function runTemplate(tmpl) {
  const q = parseTemplate(tmpl);
  if (!q) return { count: 0, hits: [] };
  const words = DATA.words;
  if (q.anchor.otype === "word" && q.children.length === 0) {
    const hits = words.filter((w) => matchObj(w, q.anchor.cons));
    return { count: hits.length, hits: hits.map((w) => [w.ref, w.s]) };
  }
  // container anchor with nested word lines
  const byClause = {};
  for (const w of words) (byClause[w.cl] ||= []).push(w);
  let rows = 0;
  const hits = [];
  for (const cid of Object.keys(byClause)) {
    const cfeat = Object.assign({}, DATA.clauses[cid] || {}, { otype: "clause" });
    if (!matchObj(cfeat, q.anchor.cons)) continue;
    const cwords = byClause[cid];
    const matchedPerChild = q.children.map((ch) =>
      cwords.filter((w) => matchObj(w, ch.cons))
    );
    let prod = 1;
    for (const mm of matchedPerChild) prod *= mm.length;
    rows += prod;
    if (prod) for (const mm of matchedPerChild) for (const w of mm) hits.push([w.ref, w.s]);
  }
  return { count: rows, hits };
}

// Warn about features in the query that were not exported for this passage.
function unknownFeatures(tmpl) {
  const q = parseTemplate(tmpl);
  if (!q) return [];
  const out = new Set();
  const check = (line, known) => {
    for (const k of Object.keys(line.cons)) if (!known.has(k)) out.add(k);
  };
  check(q.anchor, q.anchor.otype === "word" ? KNOWN_WORD_FEATS : KNOWN_CLAUSE_FEATS);
  for (const ch of q.children) check(ch, KNOWN_WORD_FEATS);
  return [...out];
}

// ---- UI ---------------------------------------------------------------------

const $ = (id) => document.getElementById(id);

function showError(msg) {
  $("meta").textContent = msg;
  $("result").innerHTML = "";
}

async function fetchJson(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`${url}: HTTP ${resp.status}`);
  return resp.json();
}

async function loadIndex() {
  let idx;
  try {
    idx = await fetchJson("data/index.json");
  } catch (e) {
    showError(`Kon data/index.json niet laden (${e.message}).`);
    return;
  }
  const sel = $("passage");
  idx.passages.forEach((p) => {
    const o = document.createElement("option");
    o.value = p.file;
    o.textContent = p.label;
    sel.appendChild(o);
  });
  sel.addEventListener("change", () => loadPassage(sel.value));
  await loadPassage(idx.passages[0].file);
}

async function loadPassage(file) {
  try {
    DATA = await fetchJson(file);
  } catch (e) {
    DATA = null;
    showError(`Kon passage niet laden (${e.message}).`);
    return;
  }
  KNOWN_WORD_FEATS = new Set(
    DATA.words.length
      ? Object.keys(DATA.words[0]).filter((k) => !META_KEYS.has(k))
      : []
  );
  KNOWN_CLAUSE_FEATS = new Set();
  for (const cid of Object.keys(DATA.clauses))
    Object.keys(DATA.clauses[cid]).forEach((k) => KNOWN_CLAUSE_FEATS.add(k));
  $("meta").textContent =
    `${DATA.passage} — ${DATA.n_words} woorden. Beschikbare woord-kenmerken: ` +
    [...KNOWN_WORD_FEATS].join(", ") + ".";
  renderPresets();
  $("query").value = "";
  $("result").innerHTML = "";
}

function renderPresets() {
  const box = $("presets");
  box.innerHTML = "";
  DATA.presets.forEach((p) => {
    const b = document.createElement("button");
    b.className = "preset";
    b.textContent = `${p.label}  → ${p.expected}`;
    b.title = p.query;
    b.addEventListener("click", () => {
      $("query").value = p.query;
      run(p.expected);
    });
    box.appendChild(b);
  });
}

function run(expected) {
  const tmpl = $("query").value;
  const res = $("result");
  if (!DATA) { res.innerHTML = '<p class="bad">Geen passage geladen.</p>'; return; }
  if (!tmpl.trim()) { res.innerHTML = ""; return; }
  const unknown = unknownFeatures(tmpl);
  const { count, hits } = runTemplate(tmpl);
  let html = `<p class="count">${count} treffer${count === 1 ? "" : "s"} in ${DATA.passage}.</p>`;
  if (typeof expected === "number") {
    html += count === expected
      ? `<p class="ok">✓ Komt overeen met het verwachte aantal (${expected}).</p>`
      : `<p class="bad">✗ Verwacht ${expected}; gevonden ${count}.</p>`;
  }
  if (unknown.length)
    html += `<p class="warn">Let op: kenmerk(en) niet geëxporteerd voor deze passage: ${unknown.join(", ")}. Telt als geen match.</p>`;
  if (hits.length) {
    html += '<table class="hits"><thead><tr><th>vers</th><th>woord</th></tr></thead><tbody>';
    for (const [ref, s] of hits)
      html += `<tr><td>${ref}</td><td class="heb" dir="rtl">${s}</td></tr>`;
    html += "</tbody></table>";
  }
  res.innerHTML = html;
}

$("run").addEventListener("click", () => run(undefined));
loadIndex();
