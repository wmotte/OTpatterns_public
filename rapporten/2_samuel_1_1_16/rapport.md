# Niet-conventionele vragen bij 2 Samuël 1:1-16 (BHSA 2023)

*Passage: 2 Samuël 1:1-16 (16 verzen, 330 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), run van 12 juni
2026, 108 bevindingen. De run gebruikt morfosyntaxis, discours-pragmatiek,
voorspellende families, tekstdynamiek, NER, novelty-families, de
querybibliotheek en zeven passagespecifieke dynamische queries. Dynamische
queries zijn exploratief en krijgen hoogstens confidence Middel. De
commentaar- en nieuwheidstoets is uitgevoerd op 13 juni 2026; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

Veertiende dialoog uit de Samuël-reeks: een Amalekitische jongeman brengt
David het bericht van Sauls en Jonatans dood en belast zichzelf met de claim
dat hij Saul heeft gedood. De meting laat een kort bericht zien waarin
narratieve clauses overheersen, directe rede juist laag is en enkele
zelfpresentatiepunten zwaar wegen: "ik ben Amalekiet", "dood mij", kroon en
armband, en ten slotte "uw mond heeft tegen u geantwoord".

## Vraag 1 — Hoe maakt de spreker zichzelf zichtbaar?

**Vraag:** Is de Amalekiet alleen boodschapper, of zet zijn grammatica hem als
persoon in het geding?

**Wat de data toont:** De dynamische query naar directe rede waarin
`<MLQJ/` ("Amalekiet") en eerste persoon samen voorkomen levert twee robuuste
treffers op, in 2 Samuël 1:8 en 1:13 (G² = 23,87; q ≈ 0,000015). De query is
exploratief. De bredere referential-decay-meting is ook robuust hoog: elf
gevallen van expliciete naam gevolgd door pronominale of nulreferentie, waar
ongeveer vijf verwacht zijn (G² = 7,20; q ≈ 0,0073).

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=<MLQJ/
  word ps=p1
```

```text
nmpr subject followed by pronoun/suffix/zero-subject run
```

**Duiding:** De jongeman meldt feiten, maar hij construeert ook zijn eigen
positie. Eerst noemt hij zich Amalekiet in het geciteerde verhaal; later herhaalt
hij die identiteit tegenover David. Dat maakt zijn afkomst en zijn "ik" niet tot
achtergrondinformatie, maar tot deel van het proces dat op zijn veroordeling
uitloopt.


**Staat dit al in de commentaren?:** standard/partially_covered. De
zelfidentificatie als Amalekiet is standaardcommentaar; de
naam-naar-pronomen/nulreferentie is gedeeltelijk gedekte BHSA-formalisering.

**Confidence:** Middel (≤ plafond Middel) · features:
`dynamic_query=amalekite_identity_self_report`, `name_to_pronominal_run` ·
robustness: robust · versie 2023

## Vraag 2 — Waarom is er zoveel verhaal en relatief weinig citaat?

**Vraag:** Staat de scène vooral in gesproken woorden, of draagt de narratieve
keten het tempo?

**Wat de data toont:** Narratieve clauses zijn robuust oververtegenwoordigd:
`domain=N` komt zesenvijftig keer voor, waar ongeveer zevenentwintig verwacht
zijn (G² = 41,91; q < 0,000001). Directe rede is juist ondervertegenwoordigd:
vierentwintig clauses waar ongeveer vijftig verwacht zijn (G² = 34,11;
q < 0,000001). Ook wayyiqtol is hoog: zesendertig vormen waar ongeveer twaalf
verwacht zijn (G² = 34,73; q < 0,000001).

**Text-Fabric-query:**

```text
clause domain=N
clause domain=Q
word vt=wayq
```

**Duiding:** De passage is geen lange pleitrede van de Amalekiet. Het verhaal
duwt door: aankomst, val, vraag, antwoord, opdracht, executie. De directe rede
is aanwezig, maar kort en ingebed in een sterke narratieve machine. Daardoor
krijgt de eigen claim van de man weinig ruimte om zich te herstellen.


**Staat dit al in de commentaren?:** novel/standard. Het staccato tempo is
bekend en door wayyiqtol bevestigd; de combinatie van hoge narratieve
clause-dichtheid en lage citaatdichtheid wordt niet als vormclaim besproken.

**Confidence:** Hoog (≤ plafond Hoog) · features: `domain=N`, `domain=Q`,
`vt=wayq` · robustness: robust · versie 2023

## Vraag 3 — Hoe klinkt de doodsclaim?

**Vraag:** Wordt Sauls dood als één feit gemeld, of krijgt het doodswerkwoord
meerdere frames?

**Wat de data toont:** Het lexeem `MWT[` is global-only maar q-significant:
zeven voorkomens waar minder dan één verwacht is (G² = 20,78; q ≈ 0,000014).
De voorbeelden lopen van het slagveldbericht in 1:4-5 via Sauls geciteerde
"dood mij" in 1:9 en de claim "ik doodde hem" in 1:10 naar de executie in 1:15
en Davids vonnis in 1:16. Een dynamische query naar "dood mij" met
eerste-persoonssuffix vindt één treffer in 1:9, maar is na FDR niet
q-significant.

**Text-Fabric-query:**

```text
word lex=MWT[
```

```text
clause domain=Q
  word lex=MWT[
  word prs_ps=p1
```

**Duiding:** De doodstaal beweegt door verschillende monden en rollen. Eerst is
er bericht, daarna geciteerd verzoek, daarna zelfbelastende uitvoering, daarna
Davids oordeel. Juist die keten maakt de claim gevaarlijk voor de boodschapper.


**Staat dit al in de commentaren?:** standard. De doodstaal en Sauls verzoek
"dood mij" worden besproken; BHSA kwantificeert de lexicale dichtheid en de
specifieke verzoekvorm.

**Confidence:** Laag (≤ plafond Laag) · features: `lex=MWT[`,
`dynamic_query=kill_me_request` · robustness: global_only / robust maar
q-significant=false voor de query · versie 2023

## Vraag 4 — Wat doen kroon en armband?

**Vraag:** Zijn kroon en armband alleen bewijsstukken, of vertragen zij de
claim grammaticaal?

**Wat de data toont:** De circumstantial-slowdown-meting is robuust: acht
onderbrekingen van de wayyiqtol-stroom door nominale of participiale clauses,
waar ongeveer vier verwacht zijn (G² = 4,86; q ≈ 0,028). De voorbeelden omvatten
2 Samuël 1:10, waar de clauses "die op zijn hoofd" en "die aan zijn arm" rond
de overdracht staan. Een dynamische query naar kroon, armband, hoofd en arm
levert één robuuste treffer op in 1:10 (G² = 12,62; q ≈ 0,0014), maar door de
semantische tier blijft de confidence Laag.

**Text-Fabric-query:**

```text
% narratieve wayq-clause + 1-4 nominale/participiale clauses + narratieve wayq-clause
```

```text
verse
  word lex=NZR/
  word lex=>Y<DH/
  word lex=R>C/
  word lex=ZRW</
```

**Duiding:** De bewijsstukken onderbreken de vertelling. De man brengt geen
abstract bericht mee; hij brengt objecten die aan Sauls lichaam waren gekoppeld.
Die vertraging maakt de claim tastbaar en juridisch gevaarlijk.


**Staat dit al in de commentaren?:** standard. Kroon en armband als
bewijsstukken en machtssymbolen worden breed besproken; BHSA markeert de
narratieve vertraging en het objectcluster.

**Confidence:** Middel voor de vertraging, Laag voor de dynamische objectquery ·
features: `circumstantial_slowdown`,
`dynamic_query=crown_armlet_transfer` · robustness: robust · versie 2023

## Vraag 5 — Waarom wordt zijn mond het bewijs?

**Vraag:** Komt Davids vonnis van buitenaf, of laat de tekst de eigen woorden
van de man tegen hem werken?

**Wat de data toont:** Een dynamische query naar mond, antwoorden/getuigen en
bloed levert één robuuste treffer op in 1:16 (G² = 12,62; q ≈ 0,0014), met
confidence Laag door de semantische tier. Daarnaast zijn extreem korte verbale
clauses zonder subject/object robuust hoog: negentien waar ongeveer tien
verwacht zijn (G² = 8,90; q ≈ 0,0029). De asyndetische druk concentreert zich
bij 1:14, "hoe hebt u niet gevreesd..." (G² = 6,80; q ≈ 0,0091).

**Text-Fabric-query:**

```text
verse
  word lex=PH/
  word lex=<NH[
  word lex=DM/
```

```text
% extreem korte verbale clause (≤2 woorden) zonder Subj- en zonder Objc-frase
```

```text
verbal clause run where first word is not sp=conj
```

**Duiding:** Davids vonnis grijpt terug op de eigen mond van de boodschapper.
De korte clauses geven de slotscène weinig uitwijkruimte: vraag, opdracht,
slag, dood, vonnis. De man wordt niet veroordeeld op een uitgebreid dossier,
maar op de eigen claim die hij in de dialoog heeft neergelegd.


**Staat dit al in de commentaren?:** standard/partially_covered/novel. De
juridische formule van de eigen mond is standaardcommentaar; korte elliptische
clauses zijn gedeeltelijk gedekt en de asyndetische druk is de
BHSA-specifieke toevoeging.

**Confidence:** Middel voor de ellips/asyndese, Laag voor de dynamische
mond-bloedquery · features: `dynamic_query=mouth_testifies_blood`,
`clause_ellipsis_pressure`, `verbal_clause_run_without_waw` · robustness:
robust · versie 2023

```json
{"claim_ledger":[
  {"finding_id":22,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":29,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":10,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":13,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":12,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":25,"evidence_field":"examples","claim_type":"interpretive_hypothesis"},
  {"finding_id":97,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":24,"evidence_field":"examples","claim_type":"statistical_finding"},
  {"finding_id":49,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":50,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":15,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":77,"evidence_field":"examples","claim_type":"statistical_finding"}
]}
```
