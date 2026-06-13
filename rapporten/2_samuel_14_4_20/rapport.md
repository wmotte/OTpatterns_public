# Niet-conventionele vragen bij 2 Samuël 14:4-20 (BHSA 2023)

*Passage: 2 Samuël 14:4-20 (17 verzen, 465 woorden; genre narratief,
periode EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine
tegen het OT-corpus, gestratificeerd (global/boek/genre/taal/periode), run van
12 juni 2026, 120 bevindingen. De run gebruikt morfosyntaxis,
discours-pragmatiek, voorspellende families, tekstdynamiek, NER,
novelty-families, de querybibliotheek en acht passagespecifieke dynamische
queries. Dynamische queries zijn exploratief en krijgen hoogstens confidence
Middel. De commentaar- en nieuwheidstoets is afgerond; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

Negentiende dialoog uit de Samuël-reeks: de wijze vrouw van Tekoa spreekt met
David in een door Joab geregisseerde fictieve rechtszaak. Zij begint als
rouwende weduwe en petitioner, laat David een beschermend oordeel uitspreken
en draait dat oordeel daarna naar Davids eigen huis: waarom brengt de koning
zijn verdrevene niet terug? De gegevens laten vooral zien hoe indirecte
correctie werkt. De scène houdt eigennamen laag, vernauwt het meervoud,
verdeelt handelingsrollen ongelijk, stapelt aanspreek- en diensttaal, en laat
aan het einde Joabs hand achter de rede zichtbaar worden.

## Vraag 1 — Waar blijven de namen?

**Vraag:** Waarom voelt de vrouw haar zaak als algemeen recht aan, terwijl de
scène tegelijk over Davids eigen huis gaat?

**Wat de data toont:** Eigennamen zijn robuust ondervertegenwoordigd: zes
waar het corpus er ongeveer 36 verwacht (G² = 40,5; q ≈ 0,000000002). De
afwijking houdt stand tegenover 2 Samuël, narratief, Hebreeuws en EBH. De
zes voorbeelden zijn bovendien beperkt: JHWH in 2 Samuël 14:11 en 14:17, en
Joab in 14:19-20. De fictieve familieleden uit de casus blijven naamloos:
weduwe, man, zonen, broer, erfgenaam.

**Text-Fabric-query:**

```text
word sp=nmpr
```

**Duiding:** De tekst houdt de fictie juridisch overdraagbaar. De vrouw laat
David eerst oordelen over een anonieme weduwe en een anonieme overblijvende
zoon; Absalom blijft daarbij nog ongenoemd. Pas wanneer David de verborgen hand
herkent, krijgt Joab naamruimte. De lage naamdichtheid werkt zo als indirecte
druk: de koning moet zichzelf herkennen in een zaak die nog niet als zijn zaak
is gelabeld.


**Staat dit al in de commentaren?:** gedeeltelijk. Commentaren bespreken de
naamloze fictieve casus en de parabelachtige valstrik uitvoerig; de extreme
ondervertegenwoordiging van eigennamen als corpusmeting is de toegevoegde
laag.

**Confidence:** Hoog (≤ plafond Hoog) · feature: `sp=nmpr` · robustness:
robust · versie 2023

## Vraag 2 — Hoe klein wordt de familie?

**Vraag:** De fictie gaat over familie, erfopvolging en collectieve druk. Houdt
de grammatica dat als groepsconflict vast?

**Wat de data toont:** Meervoudsvormen zijn robuust laag: 25 waargenomen waar
ongeveer 60 verwacht zijn (G² = 29,0; q ≈ 0,0000003). Meervoudige suffixen
zijn nog schaarser: twee waar ongeveer dertien verwacht zijn (G² = 14,4;
q ≈ 0,0003). De voorbeelden concentreren zich in de fictieve casus:
"twee zonen", "zij tweeën", "tussen hen", de familie die spreekt, en de
groep die wil doden en uitroeien.

**Text-Fabric-query:**

```text
word nu=pl
```

```text
word prs_nu=pl
```

**Duiding:** De vrouw vertelt een familiegeschiedenis, maar de grammatica
trekt het conflict naar enkelvoudige overleving toe. De groep is aanwezig als
dreiging; de zaak draait om de ene zoon die overblijft en om de ene koning die
moet oordelen. Dat maakt de brug naar Absalom mogelijk. David wordt niet met
een abstracte clanpolitiek geconfronteerd, maar met het verlies van de laatste
drager van een naam.


**Staat dit al in de commentaren?:** gedeeltelijk. De laatste-zoonlogica en de
collectieve dreiging van de familie zijn bekend; de lage dichtheid van
meervoudsvormen en meervoudige suffixen kwantificeert die versmalling.

**Confidence:** Hoog (≤ plafond Hoog) · feature: `nu=pl` / `prs_nu=pl` ·
robustness: robust · versie 2023

## Vraag 3 — Hoe houdt de vrouw de onderpositie vast?

**Vraag:** Spreekt de vrouw David frontaal tegen, of bouwt zij haar correctie
grammaticaal vanuit diensttaal op?

**Wat de data toont:** De actantverdeling is robuust ongelijk. De engine vindt
acht dominante actanten waar vergelijkbare passages er ongeveer drie verwachten
(G² = 6,16; q ≈ 0,013). In de voorbeelden heeft de vrouw als actant alleen
uitgaande relaties, de koning eveneens, terwijl `DBR/` als "woord/zaak" vooral
als ondergane pool verschijnt. Een dynamische query, exploratief en
hypothese-gegenereerd, vindt daarnaast twee robuuste clauses waarin
dienstvrouwtaal (`CPXH/` of `>MH/`) en koningstaal (`MLK/`) samen in directe
rede staan (G² = 23,13; q ≈ 0,000024). Ook interjectie-/aanspreekfuncties zijn
robuust hoog: acht waar ongeveer twee verwacht zijn (G² = 11,1; q ≈ 0,0011).
Het lexeem `>DWN/` ("mijn heer") komt negen keer voor en vormt een bekend
onderdeel van die aanspreekdruk.

**Text-Fabric-query:**

```text
count subject vs object mentions by lexical/person key
```

```text
word lex=>DWN/
```

```text
clause domain=Q
  word lex=CPXH/|>MH/
  word lex=MLK/
```

```text
phrase function=Intj
```

**Duiding:** De vrouw corrigeert David zonder haar sociale positie te verlaten.
Zij blijft "uw dienstvrouw", spreekt de koning aan, vraagt toestemming om nog
een woord te zeggen en laat het woord zelf het object van de scène worden. De
machtsinversie zit dus niet in formele gelijkheid. Zij gebruikt de onderpositie
als retorische vorm om David aan zijn eigen oordeel te binden.


**Staat dit al in de commentaren?:** overwegend wel. Commentaren bespreken de
dienstvrouwtaal, "mijn heer de koning"-herhaling, vleierij en diplomatieke
berisping expliciet. De actantcentraliteit en de telling van
interjectie-/aanspreekfuncties blijven vooral formele ondersteuning.

**Confidence:** Middel (≤ plafond Middel) · feature:
`actant_in_out_degree` / `dynamic_query=maidservant_petition_to_king` /
`lex=>DWN/` · robustness: robust · versie 2023

## Vraag 4 — Waar draait de fictie naar David?

**Vraag:** Is de toepassing op Davids verbannen zoon alleen inhoudelijk helder,
of markeert de grammatica de draaibeweging?

**Wat de data toont:** Twee dynamische queries, exploratief en
hypothese-gegenereerd, isoleren de draai. De combinatie van "zoon" (`BN/`) met
uitroeien (`CMD[`) in directe rede komt één keer voor in 2 Samuël 14:11
(G² = 11,56; q ≈ 0,0036). De combinatie van terugbrengen (`CWB[`) en
verdrevene (`NDX[`) in directe rede komt één keer voor in 14:13 (G² = 9,36;
q ≈ 0,0071). De eerste query hoort bij de fictieve zoon die beschermd moet
worden; de tweede bij Davids "verdrevene". De bredere ruimtelijke bewegingsas
ordent daarnaast vijf bewegingen als opkomen, naar huis gaan, naar de koning
brengen, terugbrengen en komen.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=BN/
  word lex=CMD[
```

```text
clause domain=Q
  word lex=CWB[
  word lex=NDX[
```

```text
% motion roots QWM/HLK/BW>/CWB with subject and direction/complement
```

**Duiding:** De vrouw laat David eerst spreken over bescherming van een zoon,
en daarna over terugkeer van een verdrevene. De verschuiving is grammaticaal
zichtbaar: van behoud tegen uitroeiing naar herstel van de verstotene. Dat is
het moment waarop de fictieve rechtszaak haar doel bereikt. Davids oordeel
over de weduwe wordt een oordeel over zijn eigen weigering om terug te brengen.


**Staat dit al in de commentaren?:** bekend, met een gedeeltelijke meettoevoeging.
Commentaren bespreken de overgang van zoon/uitroeiing naar
terugbrengen/verdrevene als kern van de parabeltoepassing op Absalom. De
bredere directionele bewegingsas is vooral een ondersteunende formalisering.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=son_and_destroy_in_petition` /
`dynamic_query=banished_return_frame` / `spatial_kinetic_axis` · robustness:
robust · versie 2023

## Vraag 5 — Hoe verraadt de tekst Joabs hand?

**Vraag:** Wordt Joab pas aan het slot genoemd, of bereidt de vorm van de rede
zijn verborgen regie voor?

**Wat de data toont:** Een dynamische query naar directe rede waarin hand
(`JD/`) en Joab (`JW>B/`) samen voorkomen, levert één robuuste treffer op in
2 Samuël 14:19 (G² = 10,17; q ≈ 0,0057). De bredere telling van nul-complement-
verbale clauses is ook robuust hoog: 36 waar ongeveer 25 verwacht zijn
(G² = 7,19; q ≈ 0,0073). De scène bevat dus veel kale predicaten en pas aan
het einde de expliciete koppeling van Joab met de "hand" achter het gebeuren.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=JD/
  word lex=JW>B/
```

```text
clause kind=VC  (#Objc/Cmpl/Loca/Time/Adju)
```

**Duiding:** De vrouw spreekt lang alsof de zaak van haarzelf is, maar de koning
herkent een andere actor. De kale predicaatstructuur ondersteunt dat: de rede
beweegt vaak in korte handelingen van spreken, vragen, gaan, bevelen en doen,
tot David de verborgen agent benoemt. Joab verschijnt dan niet als gesprekspartner
maar als hand achter de gesprekspartner.


**Staat dit al in de commentaren?:** gedeeltelijk. Joabs verborgen regie en de
"hand van Joab" zijn standaardmateriaal. De nul-complement-valentie is niet als
zodanig uitgewerkt en blijft een voorzichtige vormlaag bij die bekende lezing.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=joab_hand_revealed` / `complements=0 complementen` · robustness:
robust · versie 2023

```json
{"claim_ledger":[
  {"finding_id":14,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":14,"evidence_field":"examples","claim_type":"interpretive_hypothesis"},
  {"finding_id":18,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":41,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":24,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":22,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":69,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":13,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":62,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":78,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":40,"evidence_field":"observed","claim_type":"interpretive_hypothesis"},
  {"finding_id":73,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":100,"evidence_field":"observed","claim_type":"statistical_finding"}
]}
```
