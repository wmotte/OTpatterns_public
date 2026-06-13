# Niet-conventionele vragen bij 2 Samuël 20:16-22 (BHSA 2023)

*Passage: 2 Samuël 20:16-22 (7 verzen, 175 woorden; genre narratief,
periode EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine
tegen het OT-corpus, gestratificeerd (global/boek/genre/taal/periode), run van 13 juni 2026, 120 bevindingen. De run gebruikt morfosyntaxis,
discours-pragmatiek, voorspellende families, tekstdynamiek, NER,
novelty-families, de querybibliotheek en acht passagespecifieke dynamische
queries. Dynamische queries zijn exploratief en krijgen hoogstens confidence
Middel. De commentaar- en nieuwheidstoets is afgerond; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

Drieëntwintigste dialoog uit de Samuël-reeks: een wijze vrouw uit Abel spreekt
Joab aan terwijl de stad belegerd wordt. Zij vraagt gehoor, beroept zich op de
vreedzame en trouwe identiteit van de stad en krijgt Joab zover dat hij zijn
doel vernauwt tot Seba, de zoon van Bichri. De meting laat een korte tekst zien
met abrupte verbale druk, ongewoon diepe inbedding en robuuste dynamische
treffers rond vrouw, stad, Joab, horen en de overdracht van het hoofd.

## Vraag 1 — Hoe krijgt de stad een stem?

**Vraag:** Wordt Abel vooral als belegerde ruimte getekend, of krijgt de stad
grammaticaal een spreekpositie?

**Wat de data toont:** De lexeemmetingen voor vrouw en stad zijn global-only,
maar q-significant: `>CH/` ("vrouw") komt vier keer voor en `<JR/` ("stad") ook
vier keer. De dynamische query naar een vers met vrouw, stad, Joab en horen
levert één robuuste treffer op in 20:16 (G² = 14,36; q ≈ 0,00090). Een tweede
dynamische vers-query met Joab, vrouw, horen en spreken levert twee robuuste
treffers op in 20:16 en 20:17 (G² = 29,06; q ≈ 0,0000011). Beide queries zijn
exploratief.

**Text-Fabric-query:**

```text
word lex=>CH/
word lex=<JR/
```

```text
verse
  word lex=>CH/
  word lex=<JR/
  word lex=JW>B/
  word lex=CM<[
```

```text
verse
  word lex=JW>B/
  word lex=>CH/
  word lex=CM<[
  word lex=DBR[|>MR[
```

**Duiding:** De vrouw functioneert als toegang van de stad tot het gesprek.
Zij roept niet alleen uit de stad; de meting vangt dat vrouw, stad, Joab en
horen in één versconcentratie samenkomen. Het militaire object krijgt zo een
spreekbare vertegenwoordiger.


**Staat dit al in de commentaren?:** standard. De rol van de wijze vrouw en de
spreek-hoorstructuur met Joab worden al expliciet besproken; BHSA voegt vooral
kwantificering van de versconcentratie vrouw-stad-Joab-horen toe.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=joab_and_woman_hear_speak` · robustness: robust · versie 2023

## Vraag 2 — Waarom klinkt de onderhandeling zo staccato?

**Vraag:** Loopt de scène als gewone narratieve rede, of stapelt zij korte
verbale handelingen onder belegeringsdruk?

**Wat de data toont:** Verbal clauses zonder initieel voegwoord zijn robuust
hoog: twaalf waar ongeveer vijf verwacht zijn (G² = 8,50; q ≈ 0,0036). De
voorbeelden liggen bij de herhaalde oproep "hoor", bij de formule "spreken
spreken" / "vragen vragen" en bij de zelfpresentatie van de vrouw.

**Text-Fabric-query:**

```text
verbal clause run where first word is not sp=conj
```

**Duiding:** De scène klinkt niet breed uitgesponnen. De vrouw forceert contact
met korte verbale stappen: hoor, zeg, kom dichterbij, luister. Dat past bij een
gesprek dat moet ontstaan voordat de belegering haar uitkomst krijgt.


**Staat dit al in de commentaren?:** standard. Commentaren beschrijven de
rede van de vrouw al als verhoogd, repetitief en retorisch geconcentreerd;
BHSA specificeert de spreekdruk als asyndetische clause-stapeling.

**Confidence:** Hoog (≤ plafond Hoog) · feature:
`verbal_clause_run_without_waw` · robustness: robust · versie 2023

## Vraag 3 — Hoe vernauwt Joab het geweld?

**Vraag:** Blijft Joabs aanval gericht op de hele stad, of wordt het geweld in
zijn antwoord grammaticaal tot één man teruggebracht?

**Wat de data toont:** De actantcentraliteit is robuust hoog: vijf dominante
actanten waar ongeveer 1,4 verwacht zijn (G² = 5,86; q ≈ 0,015). De voorbeelden
omvatten de vrouw, een derde-persoons mannelijke actant, eerste persoon en
meervoudige adressaten. Een dynamische query naar directe rede met "man",
"gebergte/Efraïm", "hand opheffen" en "hand" levert één robuuste treffer op in
20:21 (G² = 13,18; q ≈ 0,00090). Die query is exploratief.

**Text-Fabric-query:**

```text
count subject vs object mentions by lexical/person key
```

```text
clause domain=Q
  word lex=>JC/
  word lex=HR/|>PRJM/
  word lex=NF>[
  word lex=JD/
```

**Duiding:** De vrouw vraagt naar de bedreigde stad; Joab antwoordt door het
conflict tot Seba te reduceren. Dat is onderhandelingstaal: als het probleem
één man is, hoeft de stad niet als geheel vernietigd te worden.


**Staat dit al in de commentaren?:** standard. Joabs vernauwing van de stad
naar de ene rebel Seba is breed bekend; BHSA markeert vooral de precieze
identificatieclause.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=man_from_ephraim_lifted_hand` · robustness: robust · versie 2023

## Vraag 4 — Waarom is deze korte scène zo diep ingebed?

**Vraag:** Maakt de tekst de onderhandeling eenvoudig, of stapelt zij lagen van
rede, citaatformule en voorwaardelijke uitvoering?

**Wat de data toont:** Clause-atoms met inbeddingsdiepte 12 zijn robuust hoog:
zeven waar ongeveer 1,65 verwacht zijn (G² = 10,21; q ≈ 0,0014). Diepte 18 is
ook robuust hoog: drie waar ongeveer 0,22 verwacht zijn (G² = 10,20; q ≈
0,0014). Daarnaast registreert de engine twee robuuste infinitivus-absolutus-
clusters rond "spreken spreken" en "vragen vragen" in 20:18 (G² = 4,75; q ≈
0,029).

**Text-Fabric-query:**

```text
clause_atom tab=12
clause_atom tab=18
```

```text
infa and finite verb share root; inspect local finite density
```

**Duiding:** De scène is kort, maar haar argument is gelaagd. De vrouw beroept
zich op een vroegere spreekpraktijk rond Abel, formuleert de identiteit van de
stad en dwingt Joab tot een voorwaardelijk antwoord. De diepe inbedding past
bij overleg onder geweldsdruk.


**Staat dit al in de commentaren?:** partially_covered. Commentaren herkennen
de rede als welsprekend, verhoogd en zorgvuldig opgebouwd, maar niet de
formele BHSA-meting van extreme inbeddingsdiepte.

**Confidence:** Middel (≤ plafond Middel) · feature: `tab` · robustness:
robust · versie 2023

## Vraag 5 — Hoe wordt redding tot een overdrachtsclause?

**Vraag:** Eindigt de onderhandeling in abstracte vrede, of in een concrete
grammatica van hoofd, muur en overgave?

**Wat de data toont:** Een dynamische query naar directe rede met `R>C/`
("hoofd"), `CLK[` ("werpen"), `XWMH/` ("muur") en tweede-persoonsmarkering
levert één robuuste treffer op in 20:21 (G² = 13,18; q ≈ 0,00090). De query is
exploratief. In de bredere lexeemlaag blijft `JW>B/` met zes voorkomens sterk
aanwezig, maar die lexeemmeting is global-only.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=R>C/
  word lex=CLK[
  word lex=XWMH/
  word prs_ps=p2
```

**Duiding:** De vrouw vertaalt Joabs eis in een uitvoerbare clausule: het hoofd
wordt over de muur naar hem geworpen. Daarmee wordt stadsredding niet als
gevoel of belofte geformuleerd, maar als harde overdracht die de belegering
kan beëindigen.


**Staat dit al in de commentaren?:** standard. De overdracht van Seba's hoofd
over de muur als beslissende deal is al besproken; BHSA specificeert de
concrete overdrachtsclause.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=head_thrown_over_wall_to_you` · robustness: robust · versie 2023

```json
{
  "claim_ledger": [
    {
      "finding_id": 39,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 19,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 19,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 45,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 41,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 61,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 62,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 70,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 42,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 42,
      "evidence_field": "q_value",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 60,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    }
  ]
}
```
