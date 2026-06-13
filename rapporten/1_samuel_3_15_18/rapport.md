# Niet-conventionele vragen bij 1 Samuël 3:15-18 (BHSA 2023)

*Passage: 1 Samuël 3:15-18 (4 verzen, 85 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), baseline-schema
v9; run van 13 juni 2026, 67 bevindingen (`evidence.json` in deze map).
Robuustheidslabels in dit rapport: robuust (robust), gedeeltelijk robuust
(partially_robust), alleen-globaal (global_only); betrouwbaarheid Hoog, Middel
of Laag. Zoekregels zijn na te lopen in de
[zoekbrowser](https://wmotte.github.io/OTpatterns_public/); achtergrond bij
BHSA en Text-Fabric staat in [ACHTERGROND.md](../../ACHTERGROND.md). BHSA legt
formele syntaxis vast, geen betekenis of theologie; duidingen blijven door het
bewijs gedragen hypothesen.*

> Tweede dialoog uit de Samuël-reeks. As: macht-asymmetrie in spraak en
> ontwijking/mislukte communicatie. Samuël heeft 's nachts de godsspraak over
> Eli's huis ontvangen en vreest die door te geven; hij opent zwijgend de
> tempeldeuren. Eli roept hem, dwingt met een zelfvervloekings-eed de volledige
> onthulling af en berust dan: "Het is JHWH." De vraag is telkens hoe het
> Hebreeuws de dwang van de oudere meerdere en de ontwijking van het kind
> codeert, en waar de morfologie het conflict over verhullen en vertellen
> draagt.

## Vraag 1 — het verhul-werkwoord dat de confrontatie beheerst

**Vraag:** Welke werkwoordsvorm draagt grammaticaal het deelstuk waarin Eli de
onthulling afdwingt, en valt die samen met de spanning tussen spreken en
verhullen?

**Wat de data toont:** De oude piel-concentratie is in de full-run geen
actuele top-120 drager meer. De nieuwe evidence legt de nadruk smaller op
`KXD[` ("verhullen"). Dat lexeem komt drie keer voor in v17-18 waar de globale
baseline vrijwel nul verwacht (G² = 31,04; q ≈ 0,000000038; global-only,
confidence Laag). Daarnaast vindt de engine drie argumentframes rond dezelfde
wortel (G² = 13,50; q ≈ 0,00024; global-only) en een robuuste
werkwoord-objectbinding `KXD[ × DBR/` in v17 (G² = 13,41; q ≈ 0,00025).
Het conflict wordt dus niet meer als algemene stamconcentratie geclaimd, maar
als herhaalde en formeel gebonden verhul-taal.

**Text-Fabric-query:**

    word lex=KXD[

*In de zoekbrowser na te tellen: 3 treffers in deze passage.*

**Duiding:** Het confrontatie-deelstuk rust grammaticaal op het verbod om te
verhullen. De tegenstelling tussen vertellen en verbergen wordt niet gedragen
door een zelfstandige stamclaim, maar door de herhaling van `KXD[`, de
argumentframes rond die wortel en de binding van verhullen aan "woord". Wie
v17-18 leest, ziet het twistpunt telkens terugkeren: niet achterhouden, niets
verhullen, alles vertellen.


**Staat dit al in de commentaren?:** gedeeltelijk. Tsumura bespreekt "did not
hide" (כחד) als ontkende antoniem van "told" en wijst op de Akkadische
diviner-protocol-parallel *lu aqabbi la akattamu* ("ik zal vertellen en niet
verhullen"); Auld noemt de "double insistence" op geen-geheimhouding. Het
thema verhulling tegenover onthulling is gedekt. Wat BHSA toevoegt is de
formele concentratie van `KXD[` en de binding tussen verhullen en "woord".

**Confidence:** Laag/Middel · feature(s): `lex=KXD[`,
`verb_root_argument_frames`, `KXD[ × DBR/` · robustness: global_only / robust ·
versie 2023

## Vraag 2 — de vrees om te vertellen, het hifil dat haar omkadert

**Vraag:** Is de spanning tussen Samuëls vrees en zijn gedwongen onthulling
ook grammaticaal afgebakend, of staat ze alleen in de inhoud?

**Wat de data toont:** Het causatieve hifil van נגד ("higgid", aankondigen /
vertellen) komt twee keer voor: obs 2 tegen verwacht ongeveer 0,07 (G² = 9,8;
robuust). De twee vormen staan op de uiteinden van de scène. In v15 הַגִּיד
(infinitief: Samuël "vreesde te vertellen") en in v18 וַיַּגֶּד ("en hij
vertelde [alles]"). Het werkwoord omsluit de scène van ontwijking naar
gedwongen onthulling. Als ijkpunt dient een bekende vondst: de
zelfvervloekings-eed כֹּה יַעֲשֶׂה לְּךָ אֱלֹהִים ("zo doe God u en zo voege
hij eraan toe", v17, obs 1, G² = 7,9) staat als dwangmiddel breed in de
literatuur (Cartledge over de adjuratie, ongebruikelijk omdat de vloek op de
ánder gericht is om openheid af te dwingen; Long over de eed waardoor Samuël
niets achterhoudt; McCarter over een abjuration van grote ernst). Die eed is
de bekende, becommentarieerde kern; de nieuwe meting zit in het causatieve
werkwoord dat de eed omlijst.

**Text-Fabric-query:**

    word lex=NGD[ vs=hif

*In de zoekbrowser na te tellen: 2 treffers in deze passage.*

**Duiding:** Beide uiteinden van de scène dragen hetzelfde causatieve
"doen-vertellen". Eerst is het wat Samuël vreest te doen, daarna wat hij
gedwongen doet. De dwang tot spreken zit zo in de causatieve stam, en de
eedformule van v17 staat precies tussen de twee hifil-vormen in.


**Staat dit al in de commentaren?:** gedeeltelijk. Bergen leest v15 ("de
deuren openen") als double entendre voor het gedwongen openen of bekendmaken
(higgid); Auld noemt Samuël "understandably fearful" om te verklaren. Het
kader van vrees naar onthulling is thematisch gedekt. De
causatieve-stam-bracket als gemeten dichtheid op de twee uiteinden is een
toevoeging.

**Confidence:** Middel (≤ plafond Middel) · feature(s): dynamic_query
(disclosure_hifil_bracket); ijk: self_imprecation_oath_formula · robustness:
robust, exploratief · versie 2023

## Vraag 3 — het verbod dat zich op de eiser terugricht

**Vraag:** Hoe is Eli's eis grammaticaal opgebouwd: vraagt hij om vertellen,
of om iets anders?

**Wat de data toont:** Twee dynamische metingen wijzen dezelfde kant op. Een
directe-rede-clause combineert de vetitieve ontkenning אַל ("al") met het
verhul-werkwoord כחד in piel: obs 1 tegen verwacht ongeveer 0,002 (G² = 11,0;
robuust). De clause is אַל־נָא תְכַחֵד מִמֶּנִּי ("verhul het toch niet voor
mij", v17). Daarnaast staat hetzelfde verhul-werkwoord כחד samen met de
prepositie מן plus 1e-persoonssuffix ("mimmenni" = van mij, twee keer in v17;
"mimmennu" in v18): obs 2 tegen verwacht ongeveer 0,002 (G² = 24,8, de
sterkste dynamische treffer; robuust). De ontwijking wordt grammaticaal
gedefinieerd als onthouding-aan-de-eiser.

**Text-Fabric-query:**

    clause domain=Q
      word lex=>L=
      word lex=KXD[ vs=piel

*In de zoekbrowser na te tellen: 1 treffer in deze passage; de variant met
het 1e-persoonssuffix via `clause domain=Q` met `word lex=KXD[ vs=piel` en
`word lex=MN prs_ps=p1` (2 treffers).*

**Duiding:** Eli's eis luidt: geen-verhullen-voor-MIJ. Het verbod hangt aan
een verhul-werkwoord dat via de prepositie naar Eli zelf wijst. De dwang is
grammaticaal teruggericht op de meerdere als degene aan wie niets onthouden
mag worden; de eiser plaatst zichzelf met het suffix in het werkwoord van de
ander.


**Staat dit al in de commentaren?:** gedeeltelijk. Auld noemt de "double
insistence" op geen-geheimhouding (thematisch). Tsumura brengt in zijn
chiastische analyse van v17 de elementen "hide it from me" (B) en "hide from
me" (B′) expliciet in kaart, dus de gerichtheid op Eli is door hem al
structureel gevisualiseerd. De BHSA-meting voegt de corpus-kwantificering toe.

**Confidence:** Middel (≤ plafond Middel) · feature(s): dynamic_query
(vetitive_against_concealment, concealment_with_ablative_speaker) ·
robustness: robust, exploratief · versie 2023

## Vraag 4 — het woord dat alleen ondergaat

**Vraag:** Wie handelt in deze scène grammaticaal, en wat ondergaat alleen
maar?

**Wat de data toont:** Eén actant domineert de subject- en object-graad sterk:
obs 3 tegen verwacht ongeveer 1 (G² = 4,7; robuust, same_book G² = 6,7). De
graaf-meting laat het zien. De mannelijke derde persoon (Samuël en Eli als
sprekers) heeft een uitgaande graad van 9 en een inkomende graad van 0, dus
puur handelend. "Het woord", דָּבָר, heeft een inkomende graad van 3 en een
uitgaande graad van 1, dus vrijwel puur ondergaand. Het davar wordt gesproken,
verhuld en verteld; zelf onderneemt het niets.

**Text-Fabric-query:**

    count subject vs object mentions by lexical/person key

*Samengestelde meting; alleen in een volledige Text-Fabric-omgeving
reproduceerbaar.*

**Duiding:** Het betwiste "woord" is grammaticaal het object waarop alles
inwerkt en dat zelf niets onderneemt. Als puur patiens ligt het als inzet van
het machtsspel tussen Eli en Samuël in: de twee mannen handelen, en het woord
ondergaat hun spreken, verhullen en vertellen.


**Staat dit al in de commentaren?:** gedeeltelijk. Tsumura toont davar als
centrale as (A / A′) van de chiastische dialoog; Auld bespreekt het "woord van
JHWH" (3:1) dat in 3:17-18 het object van de confrontatie wordt. Het thema en
de structuur zijn gedekt. De graaf-meting van actant-asymmetrie via in- en
uitgaande graad is wat BHSA toevoegt.

**Confidence:** Middel (≤ plafond Middel) · feature(s): actant_centrality ·
robustness: robust · versie 2023

## Vraag 5 — de naam die pas na het voornaamwoord komt

**Vraag:** In welke volgorde pint de tekst vast wie spreekt: eerst de persoon,
of eerst een voornaamwoord dat zijn referent uitstelt?

**Wat de data toont:** Pronominale of persoonsvorm-referentie die voorafgaat
aan de expliciete nominale referent is sterk oververtegenwoordigd: obs 11
tegen verwacht ongeveer 1 (global 3,4; G² = 13,9; robuust, ook same_genre G² =
12,7 bij p = 0,0004, dus geen louter dialoog-genre-effect). Voorbeelden zijn
de wayyiqtol-spreekvormen וַיֹּאמֶר in v16-17 die hun subject pas later
expliciteren, en הִנֵּנִי ("hier ben ik") in v16.

**Text-Fabric-query:**

    clause with pronoun/suffix before later nmpr/subs in short window

*Samengestelde meting; alleen in een volledige Text-Fabric-omgeving
reproduceerbaar.*

**Duiding:** De scène houdt referentiële slots open: wie spreekt, wordt
grammaticaal pas later vastgepind. In een dialoog die om uitstel en onthouding
van informatie draait, loopt diezelfde vooruit-binding door de
verwijzingsstructuur. De tekst stelt het expliciteren uit, net zoals Samuël
het vertellen uitstelt.


**Staat dit al in de commentaren?:** nieuw. De geconsulteerde commentaren
(Tsumura, Auld, Cartledge, Long, McCarter, Bergen) raken dit patroon niet. Zij
analyseren het chiasme, de eedformule en de thematiek; de referentiële
vooruit-binding komt er niet in voor.

**Confidence:** Middel (≤ plafond Middel) · feature(s):
forward_predictive_scaffolding · robustness: robust · versie 2023

## Vraag 6 — de onverwachte wending naar JHWH

**Vraag:** Hoe is Eli's berusting in v18 syntactisch gevormd: zet het verhaal
zijn ritme voort, of breekt de vorm?

**Wat de data toont:** In v18 zit een lokaal onverwachte
clause-type-overgang (G² = 12,0; robuust). De overgang is Way0 → CPen: na een
keten van wayyiqtol-clauses springt de tekst naar een
casus-pendens-constructie met JHWH vooropgeplaatst, יְהוָה הוּא ("Het is JHWH;
laat hem doen wat goed is in zijn ogen"). In het voorafgaande venster werden
ongeveer 0 van zulke overgangen op 4 verwacht.

**Text-Fabric-query:**

    clause typ sequence; compare transition with preceding local window

*Samengestelde meting; alleen in een volledige Text-Fabric-omgeving
reproduceerbaar.*

**Duiding:** Eli's berusting valt samen met een syntactische breuk. De
verhaalketen wordt onderbroken door een vooropgeplaatste godsnaam. De vorm van
de onderwerping is een gemarkeerde wending in het vertelritme.


**Staat dit al in de commentaren?:** gedeeltelijk. Long koppelt de respons
thematisch aan Davids vrijwel identiek geformuleerde onderwerping later in
2 Samuël (vrome berusting), maar geeft geen technische analyse; een
syntactische lezing van de casus-pendens-wending ontbreekt in de geraadpleegde
fragmenten. De thematische berusting is gedekt. De syntactische markering is
wat de meting toevoegt.

**Confidence:** Middel (≤ plafond Middel) · feature(s): syntactic_surprise ·
robustness: robust · versie 2023

**Claim-ledger**
Koppeling van de rapportclaims aan velden in `evidence.json`, per
bevinding-id; de nieuwheidsoordelen staan samengevat in
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).

```json
{
  "claim_ledger": [
    {
      "finding_id": 14,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 28,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 29,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 38,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 38,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 38,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 44,
      "evidence_field": "examples",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 36,
      "evidence_field": "tf_query",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 36,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 17,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 17,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 33,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 33,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 18,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 18,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 18,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 52,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 52,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 52,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    }
  ]
}
```
