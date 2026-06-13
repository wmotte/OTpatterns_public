# Niet-conventionele vragen bij 1 Samuël 22:11-19 (BHSA 2023)

*Passage: 1 Samuël 22:11-19 (9 verzen, 256 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), run van 12 juni
2026, 89 bevindingen. De run gebruikt morfosyntaxis, discours-pragmatiek,
voorspellende families, tekstdynamiek, NER, novelty-families, de
querybibliotheek en zes passagespecifieke dynamische queries. Dynamische
queries zijn exploratief en krijgen hoogstens confidence Middel. De
commentaar- en nieuwheidstoets is afgerond; de oordelen staan samengevat in
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

Tiende dialoog uit de Samuël-reeks: Saul laat Achimelech en de priesters van
Nob komen, maakt Davids bezoek tot samenzwering, hoort Achimelechs verdediging
aan en geeft daarna het doodsbevel. De scène draait om macht zonder recht:
Achimelech antwoordt in de taal van dienst en trouw, maar Saul behandelt de
priesterlijke positie als schuldpositie. De gegevens laten vooral zien hoe de
grammatica de rollen scheef trekt: koning en priester worden ongelijk verdeeld,
het doodswerkwoord gaat over van vonnis naar uitvoering, Achimelechs naam keert
op vaste afstanden terug, en het slot van de passage laat pas laat zien wie
buiten het mannelijke ambtsconflict mee wordt vernietigd.

## Vraag 1 — Wie draagt de handeling?

**Vraag:** Is het verhoor alleen inhoudelijk scheef, of verdeelt de syntaxis de
handelende en ondergane rollen ook meetbaar ongelijk?

**Wat de data toont:** De actantenverdeling is robuust scheef. De engine vindt
vijf dominante actanten waar vergelijkbare passages er ongeveer een tot anderhalf
verwachten (G² = 5,46; q ≈ 0,019). Het patroon houdt stand tegenover het hele
corpus, 1 Samuël, narratief, Hebreeuws en EBH. In de voorbeelden heeft `MLK/`
vijf uitgaande en één inkomende relatie, terwijl `KHN/` nul uitgaande en vier
inkomende relaties heeft. De koning fungeert dus als syntactische bron van
handeling; de priesterrol verschijnt vooral als datgene waarop gehandeld wordt.

**Text-Fabric-query:**

```text
count subject vs object mentions by lexical/person key
```

Deze meting is een samengestelde graafproxy uit de engine en is daarom niet als
één eenvoudige zoekregel in de statische browser te reproduceren.

**Duiding:** De scène zet Achimelech narratief en grammaticaal klem. Saul
spreekt vanuit de positie van handelende koning; de
priesterlijke groep wordt het object van oproep, beschuldiging en bevel. Dat
past bij de machtsas van de reeks: de meerdere gebruikt informatie niet ter
weging; hij organiseert de rollen zo dat het antwoord van de mindere al in een
schuldpositie terechtkomt.

**Wat het niet bewijst:** Actantcentraliteit is een proxy. Zij bewijst niet dat
Saul juridisch ongelijk heeft en zegt niets over intentie van de auteur. De
meting laat alleen zien dat syntactische handelingsrollen ongewoon ongelijk
verdeeld zijn.

**Staat dit al in de commentaren?:** gedeeltelijk gedekt. De commentaren
beschrijven Saul breed als aanklager en handelende macht tegenover de priesters
als beklaagden en slachtoffers. De exacte actantmeting, met uitgaande en
inkomende syntactische relaties, voegt een formele onderbouwing toe.

**Confidence:** Middel (≤ plafond Middel) · feature: `actant_in_out_degree` ·
robustness: robust · versie 2023

## Vraag 2 — Wanneer wordt het verhoor een doodsbevel?

**Vraag:** Waar kantelt Sauls ondervraging grammaticaal naar geweld tegen de
priesters?

**Wat de data toont:** Twee dynamische queries, exploratief en
hypothese-gegenereerd, isoleren de kanteling. De combinatie van priesterlexeem
`KHN/` met het doodswerkwoord `MWT[` in directe rede komt één keer voor, waar
de verwachte waarde vrijwel nul is (G² = 13,01; q ≈ 0,002; robuust). De
parallelle combinatie `KHN/` met `PG<[` ("treffen/slaan") in directe rede komt
eveneens één keer voor, met dezelfde statistische uitkomst. De voorbeelden
liggen in 1 Samuël 22:17 en 1 Samuël 22:18: eerst Sauls bevel aan zijn knechten,
daarna de opdracht aan Doëg.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=KHN/
  word lex=MWT[
```

```text
clause domain=Q
  word lex=KHN/
  word lex=PG<[
```

**Duiding:** De overgang zit in de lexicale koppeling: priester + doden,
priester + slaan. Sauls vraag aan Achimelech wordt een bevel dat het
priesterambt zelf in het objectveld van geweld trekt. Dat Doëgs uitvoering met
`PG<[` volgt op Sauls doodsbevel maakt de machtslijn zichtbaar: het woord van de
koning zoekt een uitvoerder en vindt die pas buiten de gewone knechten.

**Wat het niet bewijst:** De twee queries zijn dynamisch en exploratief. Zij
zijn robuust binnen de scoring, maar blijven hypothesen die uit dit passagebeeld
zijn geformuleerd. De bredere werkwoordframebevindingen bij `MWT[` en `PG<[`
zijn global-only; die ondersteunen de lezing, maar dragen haar niet alleen.

**Staat dit al in de commentaren?:** gemengd. De koppeling priester +
doodswerkwoord is gedeeltelijk gedekt: commentaren zien het doodsbevel als
kantelpunt, maar tellen de lexicale koppeling niet. De koppeling priester +
`PG<[` is bekend, vooral doordat commentaren het rauwe fysieke karakter van
het treffen expliciet bespreken. De ondersteunende framebevindingen bij `MWT[`
en `PG<[` zijn respectievelijk gedeeltelijk gedekt en bekend.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=priest_object_of_royal_death_command` · robustness: robust ·
versie 2023

## Vraag 3 — Hoe verdedigt Achimelech zich?

**Vraag:** Probeert Achimelech zichzelf vrij te pleiten door Saul tegen te
spreken, of door David binnen Sauls eigen dienstorde te plaatsen?

**Wat de data toont:** Een dynamische query naar directe rede waarin `servant`
(`<BD/`) en koning (`MLK/`) samen voorkomen, levert één robuuste treffer op in
1 Samuël 22:15 (G² = 6,68; q ≈ 0,045). De query is exploratief, maar zij
vangt precies het verdedigingspatroon: Achimelech spreekt niet primair als
tegenpartij, maar binnen het register van knecht en koning. Daarnaast keert
zijn naam op opvallend regelmatige afstand terug: `>XJMLK/` in 1 Samuël 22:11,
22:14 en 22:16, met woordafstanden 66 en 64 (robust; q ≈ 0,028). De naam
kadert oproep, verdediging en vonnis.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=<BD/
  word lex=MLK/
```

**Duiding:** Achimelech kiest een verdediging die Saul niet frontaliseert. Hij
plaatst David als betrouwbare dienaar rond de koning en zichzelf als iemand die
binnen die orde heeft gehandeld. Juist daardoor wordt Sauls antwoord harder:
hij laat de diensttaal niet als ontlasting gelden. De regelmatige terugkeer van
Achimelechs naam versterkt dat kader: de priester wordt eerst opgeroepen, dan
antwoordt hij, daarna wordt hij met naam ter dood veroordeeld.

**Wat het niet bewijst:** De servant/king-query is dynamisch en blijft
exploratief. De resonantieafstand van de naam is formeel, maar de duiding dat
die afstand oproep, verdediging en vonnis kadert, is interpretatief.

**Staat dit al in de commentaren?:** gedeeltelijk gedekt. De diensttaal in
Achimelechs verdediging is bekend: commentaren lezen "uw dienaar" en "koning"
als juridische kern van zijn pleidooi. De regelmatige naamafstand rond
oproep, verdediging en vonnis wordt niet geteld; die meting verfijnt een
bestaande narratieve observatie.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=servant_defense_before_king` · robustness: robust · versie 2023

## Vraag 4 — Wie verdwijnt uit het grammaticale veld?

**Vraag:** De scène gaat over mannen met ambtstitels: koning, priester,
knechten, Doëg. Is dat mannelijke register ook formeel zichtbaar?

**Wat de data toont:** Vrouwelijk gemarkeerde vormen zijn robuust
ondervertegenwoordigd: negen waar het corpus er ongeveer tweeëntwintig
verwacht (G² = 10,67; q ≈ 0,001). Het tekort houdt stand in alle strata. De
voorbeelden zijn schaars en vallen op door hun plaatsing: `חֶרֶב` ("zwaard") in
1 Samuël 22:13, `זֹאת` in 22:15, `עִיר`, `חֶרֶב` en `אִשָּׁה` in 22:19. De
vrouw verschijnt dus vooral in de slotlijst van wat in Nob wordt geslagen.

**Text-Fabric-query:**

```text
word gn=f
```

**Duiding:** De grammatica houdt de hoofddialoog smal: mannelijke personen,
mannelijke ambten, mannelijke machtsposities. Het slot breekt dat register open
wanneer de stad wordt geraakt: dan verschijnen stad, zwaard en vrouw in de
vormlijst. De telling maakt het geweld niet groter dan de tekst zegt; zij laat
zien dat de slachtoffers buiten het eigenlijke ambtsverhoor pas aan het einde
grammaticaal zichtbaar worden.

**Wat het niet bewijst:** Gendercodering is een vormcategorie. Zij is niet
hetzelfde als sociale genderanalyse en bewijst geen bewuste compositie. De
lezing hangt aan de combinatie van de lage dichtheid en de plaats van de
voorbeelden.

**Staat dit al in de commentaren?:** nieuw. Commentaren bespreken het
slotgeweld uitvoerig, vooral de overeenkomst met het Amalek-bevel en Sauls
morele omkering. Geen geraadpleegde bron verbindt dat met de lage dichtheid
van vrouwelijke vormen en hun late grammaticale zichtbaarheid in de passage.

**Confidence:** Hoog (≤ plafond Hoog) · feature: `gn=f` · robustness: robust ·
versie 2023

## Vraag 5 — Waar wordt de taal compact?

**Vraag:** Is de hele scène telegramstijl, of verdichten juist enkele
geweldszinnen?

**Wat de data toont:** Clauses met een hoge verhouding tussen inhoudswoorden en
functiewoorden zijn in de passage ondervertegenwoordigd: twee waar de globale
baseline er ongeveer zes verwacht (G² = 3,96; q ≈ 0,047). De bevinding is
robuust, maar klein en met een waarschuwing voor lage aantallen. De twee
voorbeelden zijn niet willekeurig: 1 Samuël 22:17, "doodt de priesters van
JHWH", en 22:18, "drager van een linnen efod". De sterke compactheid ligt dus
precies bij bevel en identificatie rond de uitvoering.

**Text-Fabric-query:**

```text
count content sp vs function sp per clause
```

Deze meting is een engineproxy en geen enkele statische zoekregel.

**Duiding:** Het verhoor als geheel is niet simpelweg kort en kaal. Achimelech
krijgt zelfs een relatief lange verdediging. De compactheid concentreert zich
bij het moment waarop de taal van verantwoording overgaat in bevel en uitvoering.
Dat maakt de vorm van het geweld scherper: de tekst drukt vooral het
beslissende bevel samen.

**Wat het niet bewijst:** De telling is klein en same-book/same-genre zijn niet
significant. Deze vraag mag daarom alleen als ondersteunende observatie dienen,
niet als zelfstandige kernclaim.

**Staat dit al in de commentaren?:** gedeeltelijk gedekt. Commentaren noemen
de stijl van de scène kort en snel en bespreken de directe bevelstaal rond
22:17-18. De content/function-ratio als technische meting blijft een
toevoeging; deze vraag blijft daarom ondersteunend, niet dragend.

**Confidence:** Middel (≤ plafond Middel) · feature:
`content_function_ratio=high content/function ratio` · robustness: robust ·
versie 2023

```json
{"claim_ledger":[
  {"finding_id":16,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":16,"evidence_field":"examples","claim_type":"interpretive_hypothesis"},
  {"finding_id":24,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":21,"evidence_field":"examples","claim_type":"statistical_finding"},
  {"finding_id":22,"evidence_field":"examples","claim_type":"statistical_finding"},
  {"finding_id":25,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":69,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":74,"evidence_field":"examples","claim_type":"interpretive_hypothesis"},
  {"finding_id":42,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":42,"evidence_field":"examples","claim_type":"interpretive_hypothesis"},
  {"finding_id":62,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":62,"evidence_field":"examples","claim_type":"interpretive_hypothesis"}
]}
```
