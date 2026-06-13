# Niet-conventionele vragen bij 1 Samuël 14:24-45 (BHSA 2023)

*Passage: 1 Samuël 14:24-30 en 14:43-45 (10 verzen, 265 woorden, twee
segmenten; genre narratief, periode EBH). Bron: ETCBC/BHSA versie 2023 via
Text-Fabric. Anomalie-engine tegen het OT-corpus, gestratificeerd
(global/boek/genre/taal/periode), baseline-schema v9; run van 2 juni 2026,
35 bevindingen (`evidence.json` in deze map). Robuustheidslabels in dit
rapport: robuust (robust), gedeeltelijk robuust (partially_robust),
alleen-globaal (global_only); betrouwbaarheid Hoog, Middel of Laag.
Zoekregels zijn na te lopen in de
[zoekbrowser](https://wmotte.github.io/OTpatterns_public/); achtergrond bij
BHSA en Text-Fabric staat in [ACHTERGROND.md](../../ACHTERGROND.md). BHSA legt
formele syntaxis vast, geen betekenis of theologie; duidingen blijven door het
bewijs gedragen hypothesen.*

> Zesde dialoog uit de Samuël-reeks, en de tweede met een macht-asymmetrie
> binnen één huis: de koning ondervraagt zijn zoon. Saul bindt het uitgeputte
> leger met een vloek-eed: "vervloekt de man die brood eet voor de avond"
> (v24). Jonatan, die de eed niet hoorde, proeft onderweg honing. Bij de
> ontdekking opent Saul met "vertel mij wat je gedaan hebt" (v43); Jonatan
> minimaliseert ("ik proefde slechts een beetje honing... hier ben ik, ik zal
> sterven"); Saul escaleert tot een zelfvervloekende doods-eed (v44); het volk
> keert de eed om met een tegen-eed en koopt Jonatan vrij (v45). De beroemde
> laag (de overhaaste eed, de doodsformule מוֹת תָּמוּת, Jonatans
> litotes-verweer, de eed-tegen-eed-inversie waarin het volk de koning
> overrulet) is in de literatuur volledig uitgewerkt en dient hier als ijk.
> Drie dragende vragen liggen een laag dieper: het gemeten verloop van de
> zinstypen in de ondervraging, de grammaticale individualisering van het
> collectief, en de afstandelijke tweede persoon.

## Vraag 1 — de ondervraging die strakker loopt dan ze klinkt

**Vraag:** Lezers en commentatoren ervaren deze scène als kortaf en stroef. Is
die schokkerigheid ook meetbaar in de zinstype-overgangen?

**Wat de data toont:** De engine telt twaalf lokaal-onverwachte
zinstype-overgangen (een clausetype dat in het directe voorvenster afwezig of
zeldzaam is), waar het corpus er voor een stuk van deze lengte ongeveer 19,9
verwacht (G² = 5,2): een ondervertegenwoordiging. De afwijking is robuust
(robust) en houdt in elk stratum dezelfde richting aan: same_book G² = 5,9,
same_genre G² = 5,8 (p ≈ 0,016), same_period G² = 5,4. De passage wisselt dus
minder onverwacht van zinstype dan vergelijkbaar proza. De overgangen die wél
lokaal onverwacht zijn, liggen op de naden van het toneel: v28, waar het volk
Jonatan inlicht over de eed (וַיֹּאמֶר → הַשְׁבֵּעַ הִשְׁבִּיעַ אָבִיךָ); v29,
Jonatans protest (עָכַר אָבִי אֶת הָאָרֶץ); en v43, de ondervraging zelf, waar
Sauls verhalende inleiding omslaat in de imperatief הַגִּידָה לִּי ("vertel
mij!").

**Text-Fabric-query:**

    clause typ; vergelijk overgang met voorafgaand lokaal venster

*Samengestelde meting; alleen in een volledige Text-Fabric-omgeving
reproduceerbaar.*

**Duiding:** De ervaren ruwheid van het verhoor vindt in deze maat geen steun;
de keten van zinstypen verloopt juist regelmatiger dan het corpusgemiddelde.
De confrontatie wordt in opvallend geordende vorm gevoerd, met lange
voorspelbare reeksen en schaarse sprongen die precies op de gespreksnaden
vallen: het volk dat Jonatan waarschuwt, Jonatan die zijn vader aanklaagt,
Saul die rekenschap eist. Wat lezers als abrupt ervaren zit dan vermoedelijk
in de inhoud van eed en vonnis en in de tekstuele moeilijkheden die de
commentaren signaleren, terwijl de opeenvolging van zinstypen strak in het
spoor blijft.


**Staat dit al in de commentaren?:** gedeeltelijk (partially_covered).
Campbell noemt het Michmas-verhaal een van de "most perplexing texts",
geschreven in "terse and allusive Hebrew" met grote tekstuele moeilijkheden.
Tsumura noemt de syntaxis van v43 expliciet "strange" (een VSO-bouw met een
bepaling en relatiefzin midden in de kern). McCarter typeert overgangen in dit
hoofdstuk als "much too abrupt" en gebruikt dat als argument om de
Masoretische tekst voor de Septuaginta in te ruilen. Het stijloordeel is dus
een bekend gegeven; de gestratificeerde telling van de zinstype-overgangen
staat nergens, en ze wijst bovendien een andere kant op dan dat oordeel: tegen
het corpus gemeten is de keten gelijkmatiger dan gemiddeld.

**Confidence:** Hoog (≤ plafond Hoog) · feature(s): syntactic_surprise
(local_clause_type_transition) · robustness: robust · versie 2023

## Vraag 2 — een leger dat grammaticaal uiteenvalt in personen

**Vraag:** De scène gaat over collectieven: "het volk" en "de vijanden".
Spreekt de grammatica die collectieven ook als groep aan, of kantelt ze naar
het enkelvoud, naar losse figuren?

**Wat de data toont:** Het meervoud is sterk ondervertegenwoordigd: elf
meervoudsvormen waar het corpus er ongeveer 34 verwacht (G² = 23,6). De
afwijking is robuust (robust) en zwaar significant in elk stratum: same_genre
G² = 20,9 (p ≈ 0,000005), same_book G² = 14,5, same_period G² = 21,3. Het is
geen artefact van weinig tekst: de noemer omvat alle 265 woorden. In een
passage waarin הָעָם ("het volk"), de Filistijnen en "de vijanden" telkens
terugkeren, blijft de grammaticale telling enkelvoudig.

**Text-Fabric-query:**

    word nu=pl

*In de zoekbrowser na te tellen: 11 treffers in deze passage.*

**Duiding:** Het collectief wordt grammaticaal uit elkaar gehaald. Het leger
heet "het volk", het Hebreeuws behandelt dat als een enkelvoudige eenheid, en
de aandacht verschuift intussen naar twee individuen, Saul en Jonatan, die het
meervoud verder verdringen. De scène spitst zich toe op een vader en een zoon
die tegenover elkaar komen te staan, terwijl het volk eromheen tot een
enkelvoudig decor verdicht, tot het aan het slot als handelend meervoud
terugkeert om Jonatan te redden. Op de as macht-asymmetrie is de
individualisering de grammaticale voorbereiding van het duel: het toneel wordt
leeggemaakt tot twee personen en een eed.


**Staat dit al in de commentaren?:** gedeeltelijk. Tsumura wijst er
herhaaldelijk op dat הָעָם een collectief-enkelvoud is met enkelvoudige
congruentie, als grammaticafeit zonder corpusvergelijking. McCarter bespreekt
de enkelvoudsvormen van de Masoretische tekst tekstkritisch. Bodner leest de
scène als een toespitsing op Saul en Jonatan als "tegenpolen", zonder die
individualisering aan een gemeten gebrek aan meervoud te verbinden. De
thematische focus op de twee mannen is dus bekend; BHSA voegt toe dat het
meervoud tegen het corpus meetbaar wegvalt en die focus grammaticaal
ondersteunt.

**Confidence:** Hoog (≤ plafond Hoog) · feature(s): categorical (nu=pl,
onder) · robustness: robust · versie 2023

## Vraag 3 — de confrontatie die langs de tweede persoon heen gaat

**Vraag:** Een ondervraging verwacht je vol "jij": jij at, jij zult sterven.
Staat de directe tweede-persoons-aanspraak hier inderdaad voorop, of wordt de
confrontatie op afstand, in de derde persoon gevoerd?

**Wat de data toont:** De tweede persoon is ondervertegenwoordigd: vijf vormen
in de tweede persoon (vier werkwoordsvormen en één pronominaal suffix) waar
het corpus er ongeveer 14 verwacht (G² = 9,3), robuust (robust) in elk stratum
(same_book G² = 6,7, same_genre G² = 4,6 met p ≈ 0,032, same_period G² =
10,0). De weinige directe "jij"-momenten clusteren in de kern van de
ondervraging: v43 הַגִּידָה לִּי ("vertel mij!") en מֶה עָשִׂיתָה ("wat heb je
gedaan?"), v44 תָּמוּת ("je zult sterven"). Het omhullende dispuut verloopt
grotendeels in de derde persoon: de vloek-eed treft "de man die eet" (v24),
het volk vraagt "zal Jonatan sterven?" (v45). Deze meting covarieert met
Vraag 2: twee onafhankelijke tellingen, numerus en persoon, wijzen dezelfde
kant op, weg van groep en aanspraak, naar afstand.

**Text-Fabric-query:**

    word ps=p2

*In de zoekbrowser na te tellen: 4 treffers in deze passage; het
tweede-persoonssuffix via `word prs_ps=p2` (1 treffer); samen de vijf vormen
van de meting.*

**Duiding:** De confrontatie wordt op afstand gevoerd. Sauls vloek richt zich
in de derde persoon op "de man die eet"; ook het volk spreekt over Jonatan in
de derde persoon wanneer het zijn leven verdedigt ("zal Jonatan sterven?").
Zelfs waar de macht het scherpst is, bij het doodvonnis, blijft de directe
aanspraak schaars, alsof de sprekers liever over elkaar dan tot elkaar praten.
De enkele "jij"-momenten vallen samen met de scherpste beten: de eis om
rekenschap en het vonnis. Op de as ontwijking is de lage tweede persoon de
grammaticale vorm van een gesprek dat de rechtstreekse ontmoeting vermijdt en
de breuk in de derde persoon afhandelt.


**Staat dit al in de commentaren?:** gedeeltelijk. Alter merkt op dat Sauls
eed (v24) een formele derde-persoons-vloek is ("vervloekt is de man") waar een
directe instructie aan de troepen voor de hand lag, en leest dat als zijn
onvermogen rechtstreeks te communiceren. Woodhouse benadrukt Sauls "totale
isolatie" en het langs-elkaar-heen-praten van koning en volk. De
afstandelijkheid is thematisch dus goed in beeld; de ondervertegenwoordiging
van de tweede persoon tegen het corpus, en de samenloop met het wegvallende
meervoud, benoemt geen van de commentaren.

**Confidence:** Middel (≤ plafond Middel) · feature(s): person_shift (p2,
onder) · robustness: robust · versie 2023

### IJk: wat de commentaren al volledig dekken

De volgende metingen bevestigen wat de literatuur uitwerkt; ze dienen als ijk
en scoren alle novelty bekend (standard). De eed-metingen komen uit
exploratieve dynamische queries (provenance llm_hypothesis); enkele hebben een
klein monster.

1. **De infinitivus-absolutus-opeenhoping** (finding-id 22,
   infabs_climax_overkill, deterministisch, 4 treffers). Vier tautologische
   wortelverdubbelingen door de scène: הַשְׁבֵּעַ הִשְׁבִּיעַ (Saul "bezwoer
   nadrukkelijk", v28), אָכֹל אָכַל ("had het volk maar gegeten", v30), טָעֹם
   טָעַמְתִּי ("ik proefde wel degelijk", v43), מוֹת תָּמוּת ("je zult zeker
   sterven", v44). Eed, wens, verweer en vonnis staan in dezelfde
   absolute-dubbeling-grammatica. Alter leest טָעֹם טָעַמְתִּי als
   nadrukkelijke erkenning van verantwoordelijkheid; Tsumura analyseert מוֹת
   תָּמוּת als juridische eedformule; Long ziet de vormen als onderstreping
   van de wanverhouding tussen misdaad en straf. Auld benoemt expliciet dat
   Samuël-Koningen zich onderscheidt door veelvuldige versterkende infinitivus
   absolutus in scènes met hoge inzet, precies de dichtheids-observatie.
   Text-Fabric: `infa en finiet werkwoord delen wortel; inspecteer lokale
   finiete dichtheid`. *Samengestelde meting; alleen in een volledige
   Text-Fabric-omgeving reproduceerbaar.*

2. **Jonatans minimaliserende verweer** (finding-id 9, dynamische query
   minimizing_taste_defense_diminutive, exploratief, 2 treffers). De koppeling
   van het proef-werkwoord טעם en het diminutief מְעַט ("weinig"): "ik proefde
   slechts een beetje honing" (v43). Alter prijst de precisie: het minimale
   werkwoord "proeven" in plaats van "eten", het minimale object tot het
   zinseinde bewaard; Woodhouse leest het als scherp sarcasme; Evans
   contrasteert de "vloeiende" honing met Jonatans "beetje". De
   litotes-verkleining is volledig becommentarieerd. Text-Fabric:

       clause domain=Q
         word lex=V<M[
         word lex=M<V/

   *In de zoekbrowser na te tellen: 2 treffers in deze passage.*

3. **De hier-en-nu-deixis** (finding-id 15, deictic_shift_here_now,
   deterministisch, 6 treffers). Proximale markers הִנֵּה/עַתָּה/הִנְנִי die
   de verteltijd binnendringen: v26 וְהִנֵּה הֵלֶךְ דְּבָשׁ ("zie, vloeiende
   honing"), v43 הִנְנִי אָמוּת ("hier ben ik, ik zal sterven"). Van Wijk-Bos
   leest הִנֵּה als strategisch aandacht-sturend; Auld noemt הִנְנִי אָמוּת
   uniek in de Hebreeuwse Bijbel; Tsumura behandelt deictische termen als
   "hinges". Text-Fabric: `HNH/<TH/HNNJ na lokaal finiet-narratief venster`.
   *Samengestelde meting; alleen in een volledige Text-Fabric-omgeving
   reproduceerbaar.*

4. **De eed-munt: vloek, doods-eed, tegen-eed** (finding-ids 27
   self_maledictory_curse_oath_arur, 30 death_word_contested_in_speech, 35
   counter_oath_hay_yhwh_override; alle exploratief). Drie
   eed-spraakhandelingen: Sauls bindende vloek אָרוּר ("vervloekt", v24/v28),
   het sterf-woord מוֹת dat tussen drie sprekers circuleert (v43-45), en de
   tegen-eed חַי יְהוָה ("zo waar JHWH leeft", v45) waarmee het volk Jonatan
   vrijkoopt. Dit is de zwaarst becommentarieerde laag van de scène. Bergen:
   de eed van het volk verbrijzelt de koninklijke eed en legt bloot dat Sauls
   vervloeking zonder handhavingsmacht blijft. Brueggemann: het volk oefent
   een "veto" uit. Van Wijk-Bos telt de wortel "sterven" vijfmaal als Leitwort
   dat vooruitblikt op Gilboa. Chisholm: door de vrijkoping (padah) komt de
   doodsvloek boven Saul zelf te hangen. Alter: een ironische omkering van
   1 Samuël 11, waar Saul het volk redde en het volk nu zijn zoon redt. De
   eed-tegen-eed-inversie, het hart van het toneel, is geheel in beeld.
   Text-Fabric: anker `clause domain=Q` met respectievelijk `word lex=>RR[`,
   `word lex=MWT[` en `word lex=XJ/` plus `word lex=JHWH/`. *In de
   zoekbrowser na te tellen: respectievelijk 2, 3 en 1 treffers in deze
   passage.*

De beroemde laag van deze scène (de overhaaste eed, de doodsformule, het
minimaliserende verweer, de eed-tegen-eed-inversie) is in de literatuur
grondig uitgewerkt. De BHSA-meting voegt een laag daaronder toe. De
commentaren beschrijven de toespitsing op Saul en Jonatan thematisch; de
metingen onderbouwen die toespitsing grammaticaal, met een meervoud dat
wegvalt en een tweede persoon die schaars wordt, twee tellingen die
samenlopen. Het stijloordeel "abrupt" uit de literatuur vindt in de telling
van de zinstype-overgangen geen steun: tegen het corpus gemeten verloopt de
keten van zinstypen gelijkmatig, met schaarse sprongen op de gespreksnaden.
De winst van de analyse ligt in deze vormlaag, die de commentaren, gericht op
eed en theologie, niet tellen.

**Claim-ledger**
Koppeling van de rapportclaims aan velden in `evidence.json`, per
finding-id; de nieuwheidsoordelen staan samengevat in
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).

```json
{"claim_ledger": [
  {"finding_id": 8, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 8, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 8, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 10, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 10, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 10, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 29, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 29, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 29, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 22, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 22, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 9, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 9, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 15, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 15, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 27, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 27, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 30, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 30, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 35, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 35, "evidence_field": "examples", "claim_type": "commentary_novelty"}
]}
```
