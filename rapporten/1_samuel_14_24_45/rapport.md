# Niet-conventionele vragen bij 1 Samuël 14:24-45 (BHSA 2023)

*Passage: 1 Samuël 14:24-30 en 14:43-45 (10 verzen, 265 woorden, twee
segmenten; genre narratief, periode EBH). Bron: ETCBC/BHSA versie 2023 via
Text-Fabric. Anomalie-engine tegen het OT-corpus, gestratificeerd
(global/boek/genre/taal/periode), baseline-schema v19; run van 13 juni 2026, 120 bevindingen (`evidence.json` in deze map). Robuustheidslabels in dit
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
> sterven"); Saul escaleert tot een zelfvervloekende doodseed (v44); het volk
> keert de eed om met een tegeneed en koopt Jonatan vrij (v45). De beroemde
> laag (de overhaaste eed, de doodsformule מוֹת תָּמוּת, Jonatans
> litotes-verweer, de eed-tegen-eed-omkering waarin het volk de koning
> overrulet) is in de literatuur volledig uitgewerkt en dient hier als ijk.
> Drie dragende vragen liggen een laag dieper: het gemeten verloop van de
> zinstypen in de ondervraging, de grammaticale individualisering van het
> collectief, en de afstandelijke tweede persoon.

## Vraag 1 — de ondervraging die strakker loopt dan ze klinkt

**Vraag:** Lezers en commentatoren ervaren deze scène als kortaf en stroef. Is
die schokkerigheid ook meetbaar in de zinstype-overgangen?

**Wat de data toont:** De full-run telt 33 lokaal-onverwachte
zinstype-overgangen: clausetypen die in het directe voorvenster afwezig of
zeldzaam zijn. Tegen de globale baseline ligt dat lager dan verwacht
(verwacht 43,25; G² = 3,90; q ≈ 0,048), en dezelfde richting blijft zichtbaar
in boek, genre en periode. De afwijking is dus robuust, maar minder sterk dan
de andere kernmetingen in dit rapport. De voorbeelden liggen vooral op de
naden van het toneel: v28, waar het volk Jonatan inlicht over de eed
(WayX→Way0 en Way0→xQtX), v29, Jonatans protest (WayX→ZQtX), en daarna de
overgangen rond de voortzetting van het verhaal en het verhoor.

**Text-Fabric-query:**

    clause typ; vergelijk overgang met voorafgaand lokaal venster

*Samengestelde meting; alleen in een volledige Text-Fabric-omgeving
reproduceerbaar.*

**Duiding:** De ervaren ruwheid van het verhoor wordt door deze meting
genuanceerd. De full-run ziet wel veel lokale sprongen, maar tegen vergelijkbaar
proza zijn het er juist minder dan verwacht. Wat lezers als abrupt ervaren zit
dan vermoedelijk in de inhoud van eed en vonnis, in tekstuele moeilijkheden en
in de plaatsing van enkele gespreksnaden, niet in een algemene overmaat aan
zinstypewisselingen.


**Staat dit al in de commentaren?:** gedeeltelijk gedekt (`partially_covered`).
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

**Wat de data toont:** De actuele top-120 drager is smaller dan de oude
breedteclaim: pluralis-suffixen (`prs_nu=pl`) zijn robuust
ondervertegenwoordigd. De engine telt vier pluralissuffixen waar ongeveer 15,3
verwacht zijn (G² = 12,11; q ≈ 0,00060), met dezelfde richting in boek, genre,
taal en periode. In een passage waarin הָעָם ("het volk"), de Filistijnen en
"de vijanden" telkens terugkeren, blijft juist de suffixale verwijzing naar
groepen schaars.

**Text-Fabric-query:**

    word prs_nu=pl

*In de zoekbrowser na te tellen: 4 treffers in deze passage.*

**Duiding:** Het collectief wordt grammaticaal uit elkaar gehaald. Het leger
heet "het volk", het Hebreeuws behandelt dat vaak als een enkelvoudige eenheid,
en de suffixale verwijzing naar groepen blijft laag. De scène spitst zich toe
op een vader en een zoon die tegenover elkaar komen te staan, terwijl het volk
eromheen grammaticaal minder als pluralis-referent aanwezig is. Op de as
macht-asymmetrie is die individualisering de grammaticale voorbereiding van
het duel: het toneel wordt leeggemaakt tot twee personen en een eed.


**Staat dit al in de commentaren?:** gedeeltelijk. Tsumura wijst er
herhaaldelijk op dat הָעָם een collectief-enkelvoud is met enkelvoudige
congruentie, als grammaticafeit zonder corpusvergelijking. McCarter bespreekt
de enkelvoudsvormen van de Masoretische tekst tekstkritisch. Bodner leest de
scène als een toespitsing op Saul en Jonatan als "tegenpolen", zonder die
individualisering aan een gemeten gebrek aan meervoud te verbinden. De
thematische focus op de twee mannen is dus bekend; BHSA voegt toe dat
pluralissuffixen tegen het corpus meetbaar wegvallen en die focus grammaticaal
ondersteunen.

**Confidence:** Middel (≤ plafond Middel) · feature(s): categorical
(`prs_nu=pl`, onder) · robustness: robust · versie 2023

## Vraag 3 — de confrontatie die langs de tweede persoon heen gaat

**Vraag:** Een ondervraging verwacht je vol "jij": jij at, jij zult sterven.
Staat de directe tweede-persoons-aanspraak hier inderdaad voorop, of wordt de
confrontatie op afstand, in de derde persoon gevoerd?

**Wat de data toont:** De actuele top-120 drager is de
tweede-persoonssuffixdichtheid. De engine telt drie pronominale
tweede-persoonssuffixen waar ongeveer 14,5 verwacht zijn (G² = 13,84; q ≈
0,00041), robuust in elk stratum. De voorbeelden zijn "uw vader" (v28) en
"uw ogen" (v36, v40). Het omhullende dispuut verloopt intussen vaak zonder
bezittelijke of relationele "jouw"-markering: de vloek-eed treft "de man die
eet" (v24), het volk vraagt "zal Jonatan sterven?" (v45). Deze meting loopt
samen met Vraag 2: suffixale numerus en suffixale persoon wijzen dezelfde kant
op, weg van groeps- en jij-markering, naar afstand.

**Text-Fabric-query:**

    word prs_ps=p2

*In de zoekbrowser na te tellen: 3 treffers in deze passage.*

**Duiding:** De confrontatie wordt op afstand gevoerd. Sauls vloek richt zich
in de derde persoon op "de man die eet"; ook het volk spreekt over Jonatan in
de derde persoon wanneer het zijn leven verdedigt ("zal Jonatan sterven?").
Zelfs waar de macht het scherpst is, bij het doodvonnis, spreken de personages
vaak over elkaar in de derde persoon. De enkele directe "jij"-momenten in het
verhaal blijven inhoudelijk scherp, maar de gemeten afwijking zit nu
specifieker in de suffixen. Op de as ontwijking is de lage
tweede-persoonssuffixdichtheid een vorm van relationele afstand: het gesprek
vermijdt herhaald bezit of aanspreekrelatie en handelt de breuk vaak in de
derde persoon af.


**Staat dit al in de commentaren?:** gedeeltelijk. Alter merkt op dat Sauls
eed (v24) een formele derde-persoons-vloek is ("vervloekt is de man") waar een
directe instructie aan de troepen voor de hand lag, en leest dat als zijn
onvermogen rechtstreeks te communiceren. Woodhouse benadrukt Sauls "totale
isolatie" en het langs-elkaar-heen-praten van koning en volk. De
afstandelijkheid is thematisch dus goed in beeld; de ondervertegenwoordiging
van tweede-persoonssuffixen tegen het corpus, en de samenloop met de schaarse
pluralissuffixen, benoemt geen van de commentaren.

**Confidence:** Middel (≤ plafond Middel) · feature(s): categorical
(`prs_ps=p2`, onder) · robustness: robust · versie 2023

### IJk: wat de commentaren al volledig dekken

De volgende metingen bevestigen wat de literatuur uitwerkt; ze dienen als ijk
en hebben alle het nieuwheidsoordeel bekend (`standard`). De eed-metingen komen
uit exploratieve dynamische query's (herkomst `llm_hypothesis`); enkele hebben een
kleine steekproef.

1. **De infinitivus-absolutus-opeenhoping** (bevinding-id 65,
   infabs_climax_overkill, deterministisch, 5 treffers). Vijf tautologische
   wortelverdubbelingen door de scène: הַשְׁבֵּעַ הִשְׁבִּיעַ (Saul "bezwoer
   nadrukkelijk", v28), אָכֹל אָכַל ("had het volk maar gegeten", v30), טָעֹם
   טָעַמְתִּי ("ik proefde wel degelijk", v43), כִּי מוֹת יָמוּת (v39) en
   מוֹת תָּמוּת ("je zult zeker sterven", v44). Eed, wens, verweer en vonnis
   staan in dezelfde
   absolute-dubbeling-grammatica. Alter leest טָעֹם טָעַמְתִּי als
   nadrukkelijke erkenning van verantwoordelijkheid; Tsumura analyseert מוֹת
   תָּמוּת als juridische eedformule; Long ziet de vormen als onderstreping
   van de wanverhouding tussen misdaad en straf. Auld benoemt expliciet dat
   Samuël-Koningen zich onderscheidt door veelvuldige versterkende infinitivus
   absolutus in scènes met hoge inzet, precies de dichtheids-observatie.
   Text-Fabric: `infa en finiet werkwoord delen wortel; inspecteer lokale
   finiete dichtheid`. *Samengestelde meting; alleen in een volledige
   Text-Fabric-omgeving reproduceerbaar.*

2. **Jonatans minimaliserende verweer** (bevinding-id 46, dynamische query
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

3. **De hier-en-nu-deixis** (bevinding-id 49, `deictic_shift_here_now`,
   deterministisch, 9 treffers). Proximale markers הִנֵּה/עַתָּה/זֶה die
   de verteltijd binnendringen: v26 וְהִנֵּה הֵלֶךְ דְּבָשׁ ("zie, vloeiende
   honing"), v43 הִנְנִי אָמוּת ("hier ben ik, ik zal sterven"). Van Wijk-Bos
   leest הִנֵּה als strategisch aandacht-sturend; Auld noemt הִנְנִי אָמוּת
   uniek in de Hebreeuwse Bijbel; Tsumura behandelt deictische termen als
   "hinges". Text-Fabric: `HNH/<TH/HNNJ na lokaal finiet-narratief venster`.
   *Samengestelde meting; alleen in een volledige Text-Fabric-omgeving
   reproduceerbaar.*

4. **De eedmunt: vloek, doodseed, tegeneed** (bevindingen 115
   self_maledictory_curse_oath_arur, 116 death_word_contested_in_speech, 114
   counter_oath_hay_yhwh_override; alle exploratief). Drie
   eed-spraakhandelingen: Sauls bindende vloek אָרוּר ("vervloekt", v24/v28),
   het sterf-woord מוֹת dat tussen drie sprekers circuleert (v43-45), en de
   tegeneed חַי יְהוָה ("zo waar JHWH leeft", v45) waarmee het volk Jonatan
   vrijkoopt. Dit is de zwaarst becommentarieerde laag van de scène. Bergen:
   de eed van het volk verbrijzelt de koninklijke eed en legt bloot dat Sauls
   vervloeking zonder handhavingsmacht blijft. Brueggemann: het volk oefent
   een "veto" uit. Van Wijk-Bos telt de wortel "sterven" vijfmaal als Leitwort
   dat vooruitblikt op Gilboa. Chisholm: door de vrijkoping (padah) komt de
   doodsvloek boven Saul zelf te hangen. Alter: een ironische omkering van
   1 Samuël 11, waar Saul het volk redde en het volk nu zijn zoon redt. De
   eed-tegen-eed-omkering, het hart van het toneel, is geheel in beeld.
   Text-Fabric: anker `clause domain=Q` met respectievelijk `word lex=>RR[`,
   `word lex=MWT[` en `word lex=XJ/` plus `word lex=JHWH/`. *In de
   zoekbrowser na te tellen: respectievelijk 2, 3 en 1 treffers in deze
   passage.*

De beroemde laag van deze scène (de overhaaste eed, de doodsformule, het
minimaliserende verweer, de eed-tegen-eed-omkering) is in de literatuur
grondig uitgewerkt. De BHSA-meting voegt een laag daaronder toe. De
commentaren beschrijven de toespitsing op Saul en Jonatan thematisch; de
metingen onderbouwen die toespitsing grammaticaal met schaarse
pluralissuffixen en schaarse tweede-persoonssuffixen. Het stijloordeel
"abrupt" uit de literatuur wordt door de zinstype-meting genuanceerd: de
engine vindt lokale sprongen op gespreksnaden, maar tegen het corpus gemeten
ligt het aantal lager dan verwacht. De winst van de analyse ligt in deze
vormlaag, die de commentaren, gericht op eed en theologie, niet tellen.

**Claim-ledger**
Koppeling van de rapportclaims aan velden in `evidence.json`, per
bevinding-id; de nieuwheidsoordelen staan samengevat in
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).

```json
{
  "claim_ledger": [
    {
      "finding_id": 19,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 19,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 87,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 87,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 72,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 72,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 65,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 65,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 46,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 46,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 49,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 49,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 115,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 115,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 116,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 116,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 114,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 114,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    }
  ]
}
```
