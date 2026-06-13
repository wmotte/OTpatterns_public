# Niet-conventionele vragen bij 2 Samuël 16:1-4 (BHSA 2023)

*Passage: 2 Samuël 16:1-4 (4 verzen, 123 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), run van 12 juni
2026, 64 bevindingen. De run gebruikt morfosyntaxis, discours-pragmatiek,
voorspellende families, tekstdynamiek, NER, novelty-families, de
querybibliotheek en zeven passagespecifieke dynamische queries. Dynamische
queries zijn exploratief en krijgen hoogstens confidence Middel. De
commentaar- en nieuwheidstoets is afgerond; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

Twintigste dialoog uit de Samuël-reeks: David ontmoet Ziba tijdens de vlucht
uit Jeruzalem. Ziba brengt goederen, verklaart ze als voorziening voor het
koninklijk huis en beschuldigt de afwezige Mefiboset van dynastieke hoop. David
geeft vervolgens Mefibosets bezit aan Ziba. De scène is kort, maar de vorm is
compact geladen: veel nominale clauses, vertraging rond inventaris en vragen,
een regelmatige getallenecho, en robuuste dynamische treffers rond identiteit,
vraag en gunstformule.

## Vraag 1 — Waarom vertraagt de inventaris?

**Vraag:** Is Ziba's geschenk alleen decor, of remt de vorm van de tekst de
vertelling rond de goederen af?

**Wat de data toont:** De passage heeft robuust veel nominale clauses: tien
waar ongeveer 3,5 verwacht zijn (G² = 10,05; q ≈ 0,0015). De engine vindt ook
vier robuuste onderbrekingen van de wayyiqtol-keten door nominale of
participiale clauses (G² = 11,4; q ≈ 0,00073). De voorbeelden liggen precies
bij Davids vragen en de goederen: "wat zijn deze voor u?", "waar is de zoon
van uw heer?", en "zie, voor u is alles wat Mefiboset heeft".

**Text-Fabric-query:**

```text
clause typ=NmCl
```

```text
% narratieve wayq-clause + 1-4 nominale/participiale clauses + narratieve wayq-clause
```

**Duiding:** De inventaris vertraagt de scène. De tekst beweegt niet alleen
vooruit met handelingen; hij blijft staan bij wat de goederen zijn, voor wie ze
bestemd zijn, en waar de afwezige eigenaar is. Dat is belangrijk voor de as van
deceptie: de gift wordt eerst als nuttige voorziening zichtbaar, voordat de
beschuldiging tegen Mefiboset het bezit van betekenis verandert.


**Staat dit al in de commentaren?:** gedeeltelijk. Commentaren bespreken de
strategische vertraging rond gift, vragen en overdracht; de hoge
nominale-clause-dichtheid en de onderbroken wayyiqtol-keten zijn de meetlaag.

**Confidence:** Middel (≤ plafond Middel) · feature: `typ=NmCl` /
`circumstantial_slowdown` · robustness: robust · versie 2023

## Vraag 2 — Hoe wordt Ziba aan Mefiboset vastgemaakt?

**Vraag:** Verschijnt Ziba als zelfstandige helper, of houdt de grammatica hem
vanaf het begin aan Mefiboset gekoppeld?

**Wat de data toont:** Een dynamische query, exploratief en
hypothese-gegenereerd, vindt één robuuste clause waarin Ziba (`YJB>/`) en
Mefiboset (`MPJBCT/`) samen voorkomen (G² = 12,83; q ≈ 0,0017). De treffer ligt
in 2 Samuël 16:1, waar Ziba als knecht van Mefiboset wordt geïntroduceerd.
Een tweede dynamische query vindt Davids vraag naar "de zoon van uw heer" in
16:3 (G² = 14,22; q ≈ 0,0012).

**Text-Fabric-query:**

```text
clause
  word lex=YJB>/
  word lex=MPJBCT/
```

```text
clause domain=Q
  word lex=>JH
  word lex=BN/
  word lex=>DWN/
```

**Duiding:** Ziba staat grammaticaal niet los van Mefiboset. De scène noemt hem
eerst als knecht van de afwezige eigenaar, en David vraagt daarna niet naar een
politieke tegenstander, maar naar de "zoon van uw heer". Ziba's verhaal krijgt
daarmee een dubbele lading: hij spreekt over iemand aan wie hij door dienst en
huisrelatie verbonden is.


**Staat dit al in de commentaren?:** bekend. De commentaren bespreken Ziba als
knecht/beheerder van de afwezige Mefiboset en lezen Davids vraag naar de zoon
van Ziba's heer als loyaliteitstest.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=ziba_mephibosheth_servant_identity` /
`dynamic_query=where_is_lord_son_question` · robustness: robust · versie 2023

## Vraag 3 — Hoe verkoopt Ziba de goederen?

**Vraag:** Worden de goederen als bezit gepresenteerd, of als onmiddellijk
bruikbare noodvoorziening voor Davids kamp?

**Wat de data toont:** Een dynamische query naar directe rede met ezels
(`XMWR/`), huis (`BJT/`) en koning (`MLK/`) levert één robuuste treffer op in
2 Samuël 16:2 (G² = 14,22; q ≈ 0,0012). Daarnaast toont de engine een
regelmatige lexicale echo rond `M>H/` ("honderd"): drie voorkomens met gelijke
tussenafstanden in 16:1 (G² = 6,29; q ≈ 0,012). De goederen worden dus niet als
losse props genoemd, maar als strak geordende voorraad.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=XMWR/
  word lex=BJT/
  word lex=MLK/
```

```text
positions of repeated content lexemes; compare adjacent gaps
```

**Duiding:** Ziba framed het bezit functioneel: ezels voor het koninklijk huis,
brood en zomervruchten voor de knechten, wijn voor de vermoeide in de woestijn.
De regelmatige "honderd"-echo versterkt de indruk van een geordende gift. Juist
die bruikbaarheid maakt de beschuldiging gevaarlijk effectief: David ontvangt
voorziening op het moment dat hij afhankelijk is.


**Staat dit al in de commentaren?:** bekend, met een gedeeltelijke meettoevoeging.
De strategische gift en noodvoorraad zijn standaardmateriaal. De herhaling en
regelmatige afstand van `M>H/` ("honderd") zijn vooral formele ondersteuning.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=gift_inventory_for_king_house` /
`regular_lexeme_echo_distance` · robustness: robust · versie 2023

## Vraag 4 — Waarom klinkt de scène gespiegeld?

**Vraag:** Heeft de korte passage een vormspiegeling die past bij vraag,
antwoord en beslissing?

**Wat de data toont:** De engine vindt drie robuuste palindromische patronen in
de clause-type-volgorde, waar vergelijkbare passages er minder dan één verwachten
(G² = 4,51; q ≈ 0,034). De voorbeelden zijn `NmCl-WayX-NmCl-WayX-NmCl` in
16:1 en twee patronen rond `NmCl` en `InfC` in 16:2. Daarnaast zijn vier lokale
clause-overgangen robuust onverwacht, waaronder de overgang naar Ziba's
"hij zit in Jeruzalem" en naar zijn afsluitende neerbuiging.

**Text-Fabric-query:**

```text
clause typ window equals its reverse
```

```text
clause typ sequence; compare transition with preceding local window
```

**Duiding:** De scène heeft een korte, bijna responsoriale vorm: goederen,
vraag, verklaring; afwezige heer, beschuldiging, overdracht; gunstformule. De
vormspiegeling is geen chiasmeclaim op literair niveau, maar een formele aanwijzing
dat de tekst in compacte vraag-antwoordblokken werkt.


**Staat dit al in de commentaren?:** gedeeltelijk. Commentaren bespreken de
compacte vraag-antwoordstructuur en de gespannen loyaliteitstest; de
palindromische clause-typevensters en lokale overgangsmeting blijven
ondersteunende vormobservaties.

**Confidence:** Middel (≤ plafond Middel) · feature:
`palindromic_clause_type_sequence` / `local_clause_type_transition` · robustness:
robust · versie 2023

## Vraag 5 — Hoe eindigt Ziba's winst?

**Vraag:** Sluit de passage af met rechtspraak over Mefiboset, of met een
gunstrelatie tussen David en Ziba?

**Wat de data toont:** Een dynamische query naar de formule "genade vinden in
iemands ogen" vindt één robuuste treffer in 2 Samuël 16:4 (G² = 7,13;
q ≈ 0,028). Die treffer volgt direct op Davids uitspraak dat alles wat van
Mefiboset is, aan Ziba toekomt. De nominale clause-overmaat uit vraag 1 omvat
ook deze overdrachtszin: "zie, voor u is alles wat Mefiboset heeft".

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=MY>[
  word lex=XN/
  word lex=<JN/
```

```text
clause typ=NmCl
```

**Duiding:** De scène eindigt niet met hoor en wederhoor. Zij eindigt met bezit
en gunst: David draagt het bezit van de afwezige over, Ziba buigt en vraagt
gunst in Davids ogen. De grammatica sluit dus aan bij de narratieve verdenking:
Ziba's woorden leveren hem onmiddellijk een nieuwe verhouding tot David op.


**Staat dit al in de commentaren?:** bekend. Commentaren bespreken Davids
onmiddellijke overdracht zonder wederhoor, Ziba's winst en de gunstformule als
sluitstuk van zijn succesvolle intrige.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=favor_formula_after_transfer` / `typ=NmCl` · robustness: robust ·
versie 2023

```json
{"claim_ledger":[
  {"finding_id":30,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":13,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":17,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":10,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":11,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":26,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":50,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":23,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":16,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":44,"evidence_field":"observed","claim_type":"dynamic_hypothesis"}
]}
```
