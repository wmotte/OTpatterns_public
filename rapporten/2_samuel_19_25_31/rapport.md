# Niet-conventionele vragen bij 2 Samuël 19:25-31 (BHSA 2023)

*Passage: 2 Samuël 19:25-31 (7 verzen, 174 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), run van 12 juni
2026, 80 bevindingen. De run gebruikt morfosyntaxis, discours-pragmatiek,
voorspellende families, tekstdynamiek, NER, novelty-families, de
querybibliotheek en acht passagespecifieke dynamische queries. Dynamische
queries zijn exploratief en krijgen hoogstens confidence Middel. De
commentaar- en nieuwheidstoets is afgerond; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

Tweeëntwintigste dialoog uit de Samuël-reeks: Mefiboset komt David tegemoet na
de vlucht uit Jeruzalem. David vraagt waarom hij niet meeging. Mefiboset
antwoordt dat zijn knecht hem bedroog, beroept zich op Davids oordeel en krijgt
een half vonnis: hij en Ziba moeten het veld delen. De scène is kort, maar de
vorm is dicht: weinig meervoud, weinig vrouwelijke vormen, veel konings- en
knechttaal, diepe inbedding en enkele robuuste dynamische treffers rond
deferentie, deceptie en verdeling.

## Vraag 1 — Hoe klein wordt Mefibosets verdediging?

**Vraag:** Wordt Mefibosets zaak als bredere familie- of hofkwestie verteld, of
vernauwt de grammatica haar tot enkele enkelvoudige rollen?

**Wat de data toont:** Meervoudsvormen zijn robuust laag: zeven waar ongeveer
22,4 verwacht zijn (G² = 16,05; q ≈ 0,000097). Vrouwelijk gemarkeerde vormen
zijn ook robuust laag: drie waar ongeveer vijftien verwacht zijn (G² = 15,19;
q ≈ 0,000097). De voorbeelden van meervoud zijn beperkt: kleren, God, mannen,
woorden, delen en "na". De scène wordt dus niet gedragen door groepen of
huishoudenstaal, maar door koning, heer, knecht en Mefiboset.

**Text-Fabric-query:**

```text
word nu=pl
```

```text
word gn=f
```

**Duiding:** Mefibosets verdediging is grammaticaal smal. Hij heeft geen groep
die zijn verhaal draagt. Zelfs zijn fysieke verwaarlozing in 19:25 blijft
voorbereiding op een enkelvoudige confrontatie: David vraagt, Mefiboset
antwoordt, Ziba blijft als afwezige knecht aanwezig.


**Staat dit al in de commentaren?:** gedeeltelijk. Commentaren bespreken de
persoonlijke, individuele aard van de ontmoeting tussen David en Mefiboset; de
lage meervoudsdichtheid en vrouwelijke vormdichtheid zijn de meettoevoeging.

**Confidence:** Hoog (≤ plafond Hoog) · feature: `nu=pl` / `gn=f` · robustness:
robust · versie 2023

## Vraag 2 — Waarom klinkt Mefiboset zo onderdanig?

**Vraag:** Spreekt Mefiboset David als aangeklaagde recht tegenover, of houdt
zijn grammatica hem voortdurend onder de koning?

**Wat de data toont:** Een dynamische query naar directe rede met `>DWN/`
("heer") en `MLK/` ("koning") levert vier robuuste treffers op in 19:27, 19:28,
19:29 en 19:31 (G² = 31,81; q ≈ 0,00000029). De query is exploratief. De
losse lexeemtellingen zijn global-only maar q-significant: `MLK/` komt dertien
keer voor, `>DWN/` vijf keer en `<BD/` ("knecht") vijf keer.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=>DWN/
  word lex=MLK/
```

```text
word lex=MLK/
word lex=>DWN/
word lex=<BD/
```

**Duiding:** Mefiboset verdedigt zich niet door zijn status te verhogen. Hij
spreekt juist in de taal van "mijn heer de koning" en "uw knecht". Dat is
belangrijk voor het contrast met Ziba in 2 Samuël 16: Ziba wint bezit door een
beschuldiging; Mefiboset antwoordt vanuit afhankelijkheid en krijgt geen
volledig herstel.


**Staat dit al in de commentaren?:** gedeeltelijk. De herhaling van "mijn heer
de koning" en "uw knecht" is bekend en wordt soms geteld; de dynamische
clause-query maakt de dichtheid als vormpatroon zichtbaar.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=mephibosheth_addresses_my_lord_king` · robustness: robust ·
versie 2023

## Vraag 3 — Waar zit de deceptie grammaticaal?

**Vraag:** Wordt Ziba's eerdere beschuldiging alleen narratief herroepen, of
legt Mefiboset een formele bedrogformule op tafel?

**Wat de data toont:** Een dynamische query naar directe rede met `<BD/`
("knecht") en `RMH=[` ("bedriegen") levert één robuuste treffer op in 19:27
(G² = 13,58; q ≈ 0,00097). De query is exploratief. In dezelfde omgeving vindt
de engine geneste directe rede: Mefiboset citeert zijn voorgenomen woorden en
handelingen over het zadelen van de ezel, opstijgen en naar de koning gaan.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=<BD/
  word lex=RMH=[
```

```text
% clause met ≥2 'Q' in txt
```

**Duiding:** Mefiboset maakt van zijn verdediging geen algemene klacht. Hij
formuleert het als bedrog door "mijn knecht" en plaatst daar een geciteerde
intentie tegenover: ik zou zadelen, rijden en naar de koning gaan. De inbedding
maakt zijn verweer gelaagd: hij moet zowel Ziba's daad als zijn eigen
voorgenomen beweging reconstrueren.


**Staat dit al in de commentaren?:** grotendeels wel. De claim dat Ziba of
Mefibosets knecht hem bedroog of belasterde wordt expliciet besproken. De
geneste-rede-meting blijft een aanvullende vormlaag.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=servant_deceived_me` / `nested_speech` · robustness: robust ·
versie 2023

## Vraag 4 — Waarom is het antwoord zo diep ingebed?

**Vraag:** Maakt Mefiboset zijn zaak eenvoudig, of stapelt hij lagen van
verklaring, citaat en onderwerping?

**Wat de data toont:** Clause-atoms met inbeddingsdiepte 11 zijn robuust hoog:
zes waar ongeveer 1,8 verwacht zijn (G² = 6,59; q ≈ 0,010). Diepte 14 is ook
robuust hoog: vier waar ongeveer 0,74 verwacht zijn (G² = 7,29; q ≈ 0,010).
De engine vindt bovendien een robuust ongelijk actantpatroon: vier dominante
actanten waar ongeveer één verwacht is (G² = 4,77; q ≈ 0,029). Voorbeelden zijn
de derde-persoons actor uit de vertellende opening, Mefibosets eerste persoon,
Davids tweede persoon en de knecht.

**Text-Fabric-query:**

```text
clause_atom tab=11
clause_atom tab=14
```

```text
count subject vs object mentions by lexical/person key
```

**Duiding:** Mefibosets antwoord is niet vlak. De scène beweegt door lagen:
Davids vraag, Mefibosets aanspreking, de bedrogclaim, de geciteerde intentie,
het beroep op Davids oordeel en de herinnering aan het huis van zijn vader. De
grammatica past bij een verdediging die veel moet herstellen met weinig formele
macht.


**Staat dit al in de commentaren?:** gedeeltelijk. Commentaren herkennen de
uitvoerige onderwerping en Davids abrupte reactie; actantdominantie is bekend,
maar de formele inbeddingsmaat blijft vooral BHSA-terminologie.

**Confidence:** Middel (≤ plafond Middel) · feature: `tab` /
`actant_in_out_degree` · robustness: robust · versie 2023

## Vraag 5 — Hoe hard kapt David de zaak af?

**Vraag:** Herstelt David Mefiboset volledig, of sluit de grammatica af met een
compromis dat de beschuldiger naast de verdediger laat staan?

**Wat de data toont:** Een dynamische query naar directe rede met `>TH`
("jij"), `YJB>/` ("Ziba"), `XLQ[` ("delen") en `FDH/` ("veld") levert één
robuuste treffer op in 19:30 (G² = 13,58; q ≈ 0,00097). De query is
exploratief. De engine vindt ook vijf voorkomens van `<WD/` ("nog/meer") in de
omgeving van Davids afsluitende vraag naar verdere woorden, maar die bevinding
is global-only.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=>TH
  word lex=YJB>/
  word lex=XLQ[
  word lex=FDH/
```

**Duiding:** David behandelt de zaak niet als volledige vrijspraak. Zijn
uitspraak zet "jij en Ziba" in één verdelingsclause. Dat is grammaticaal hard:
Mefibosets verdediging eindigt met een veld dat hij moet delen met de man die
hem volgens zijn eigen woorden bedroog.


**Staat dit al in de commentaren?:** ja. Davids verdelingsuitspraak wordt breed
besproken als juridisch of politiek compromis. De query specificeert de
clausevorm waarin "jij" en "Ziba" naast elkaar worden gezet.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=you_and_ziba_divide_field` · robustness: robust · versie 2023

```json
{"claim_ledger":[
  {"finding_id":12,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":15,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":7,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":7,"evidence_field":"examples","claim_type":"interpretive_hypothesis"},
  {"finding_id":18,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":18,"evidence_field":"q_value","claim_type":"dynamic_hypothesis"},
  {"finding_id":14,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":14,"evidence_field":"examples","claim_type":"interpretive_hypothesis"},
  {"finding_id":17,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":19,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":19,"evidence_field":"q_value","claim_type":"dynamic_hypothesis"},
  {"finding_id":11,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":11,"evidence_field":"examples","claim_type":"interpretive_hypothesis"}
]}
```
