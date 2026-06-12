# Niet-conventionele vragen bij 1 Samuël 17:28-37 (BHSA 2023)

*Passage: 1 Samuël 17:28-37 (10 verzen, 246 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), baseline-schema
v9; run van 2 juni 2026, 35 bevindingen (`evidence.json` in deze map).
Robuustheidslabels in dit rapport: robuust (robust), gedeeltelijk robuust
(partially_robust), alleen-globaal (global_only); betrouwbaarheid Hoog, Middel
of Laag. Zoekregels zijn na te lopen in de
[zoekbrowser](https://wmotte.github.io/OTpatterns_public/); achtergrond bij
BHSA en Text-Fabric staat in [ACHTERGROND.md](../../ACHTERGROND.md). BHSA legt
formele syntaxis vast, geen betekenis of theologie; duidingen blijven door het
bewijs gedragen hypothesen.*

> Achtste dialoog uit de Samuël-reeks, op de as van de macht-asymmetrie in
> spraak (kleinering van de jongste). David komt in het legerkamp aan; zijn
> oudste broer Eliab vaart tegen hem uit ("waarom ben je afgekomen, en bij wie
> heb je die paar schapen gelaten?", v28), en koning Saul wijst zijn aanbod af
> met de status-diskwalificatie "jij bent maar een knaap" (v33). David weerlegt
> beiden met een verhaal, de leeuw en de beer die hij als herder versloeg
> (v34-36), en met het deferentie-register "uw dienaar" (vv32, 34, 36). Dit is
> de zwaarst becommentarieerde scène van het boek, en de beroemde laag valt
> navenant uit: Davids "uw dienaar", zijn actantiële dominantie en de
> iteratieve leeuw-en-beer-vertelling zijn in de literatuur volledig uitgewerkt
> en dienen hier als ijk. Eén meting wijkt af van de commentaren: de
> referentiële signatuur waarmee David als hoofdreferent het toneel
> grammaticaal naar zich toe trekt.

## Vraag 1: de jongste die het toneel naar zich toe trekt

**Vraag:** Eliab en Saul zetten David vast op zijn rang ("die paar schapen",
"maar een knaap"). Keert de tekst die kleinering ook grammaticaal om, in de
manier waarop David als referent de scène domineert?

**Wat de data toont:** De detector voor referentieel verval (een expliciete
naam die mag overgaan in voornaamwoord of nul-subject voordat hij wordt
ververst) telt twaalf zulke runs, tegen verwacht ongeveer 2,7 (G² = 19,3,
effect_size 3,6). De afwijking is robuust in elk stratum: same_genre G² = 16,5
(verwacht 3,1), same_book G² = 12,9, same_period G² = 18,0. De runs hangen aan
Davids naam: hij wordt geïntroduceerd (v28 בְּדָוִד, "tegen David"; v29
וַיֹּאמֶר דָּוִד; v32 וַיֹּאמֶר דָּוִד אֶל שָׁאוּל) en zakt daarna telkens weg
in voornaamwoord en werkwoordssuffix. De man die door anderen wordt
gereduceerd tot "een knaap", trekt de referentie van de scène naar zich toe.

**Text-Fabric-query:**

    nmpr subject gevolgd door pronoun/suffix/zero-subject-run

*Samengestelde meting; alleen in een volledige Text-Fabric-omgeving
reproduceerbaar. De bouwsteen ervan, de eigennamen (`word sp=nmpr`,
17 treffers), is wel direct in de zoekbrowser na te tellen.*

**Duiding:** De kleinering kantelt om in de grammatica. Eliab en Saul drukken
David naar beneden met status-termen, terwijl de tekst hem tot het
referentiële zwaartepunt maakt: zijn naam is het anker waaromheen de
voornaamwoorden en suffixen zich rangschikken. Op de as van de kleinering is
het referentiële verval het syntactische spoor van een omkering: de afgewezen
jongste is degene naar wie de tekst telkens terugverwijst. De scène kent hem
grammaticaal toe wat de sprekers hem in woorden ontzeggen.

**Wat het niet bewijst:** Referentieel verval is een discourse-proxy
(`discourse_uncertain`), geen bewijs van een verteller-intentie. Een scène met
één dominant handelend personage levert sowieso veel
naam-naar-voornaamwoord-runs op; dat dit precies de kleinering "omkeert" is
mijn lezing boven de telling. Plafond Middel; de detector meet de vorm van de
referentie, de bedoeling erachter blijft buiten bereik.

**Staat dit al in de commentaren?:** nieuw. De commentaren zien Davids
dominantie, maar niet als referentiële signatuur. Alter typeert David als
"poised master of rhetoric" en merkt op dat dit zijn eerste sprekende scène
is: een observatie die de retoriek betreft. Bodner wijst erop dat David "het
eerste woord krijgt" bij de koning en de belediging omkeert. Tsumura past
discourse-grammatica toe en spreekt van "agent focusing", maar betoogt het
omgekeerde mechanisme: dat de verteller de naam "David" herhaalt (in plaats
van naar voornaamwoorden te vervallen) om hem als hoofdpersoon te markeren.
Campbell erkent expliciet dat de distributie van eigennaam tegenover titel in
Samuël statistisch niet-willekeurig is, maar past dat toe op 2 Samuël 6-24, en
laat deze perikoop buiten beschouwing. Dat Davids dominantie hier juist via
een hoge dichtheid van referentieel verval gemeten wordt (twaalf runs waar er
bijna drie verwacht worden) staat nergens, en wijst tegen Tsumura's
naam-herhalingslezing in.

**Confidence:** Middel (≤ plafond Middel) · feature(s): referential_decay_rate
(name_to_pronominal_run) · robustness: robust · versie 2023

### IJk: wat de commentaren al volledig dekken

De drie sterkste signalen op de as liggen in de ijk: ze bevestigen wat de
literatuur uitwerkt, ze dragen niet. Alle drie scoren novelty standard
(bekend). Dat juist de meest as-relevante metingen hier in de ijk vallen, is
het kenmerk van een hoog-verzadigde scène: de commentaren hebben Davids
zelfpresentatie tegenover Saul al woord voor woord ontleed.

1. **Het dienaar-register** (finding_id 23, dynamic_query
`servant_self_designation_to_superior`, exploratief). Het zelfstandig
naamwoord עֶבֶד ("dienaar") met 2e-persoons suffix (*avdeka*, "uw dienaar")
staat driemaal in de directe rede (vv32, 34, 36), observed 3 tegen verwacht
ongeveer 0,15 (G² = 12,6), robuust in alle strata (same_genre G² = 9,4). De
mindere codeert zijn rang grammaticaal in zijn zelfaanduiding terwijl hij het
gewaagde aanbod doet. Dit is het sterkste signaal op de as macht-asymmetrie,
en precies daarom volledig becommentarieerd. Woodhouse: David accepteert "met
vreugde" de rol van dienaar die Goliath als belediging gebruikte. Alter:
"carefully contrived speech", David gebruikt de taal van de mindere als
gepolijste performance. McCarter: *na'ar*/dienaar markeert dat hij aan het
front staat als dienaar in plaats van als getrainde soldaat, een onderstreping
van zijn afhankelijkheid van JHWH. Weiss, Cartledge en Bergen bevestigen het
register. De deferentie-zelfaanduiding is dus geen onontgonnen terrein.
Text-Fabric-query: `clause domain=Q` met daaronder `word lex=<BD/ prs_ps=p2`.
*In de zoekbrowser na te tellen: 3 treffers in deze passage.*

2. **De actantiële dominantie** (finding_id 17, `actant_centrality`,
discourse_uncertain). Eén actant (David, sleutel DWD==/) domineert de
subject- en objectgraden van de scène, observed 5 tegen verwacht ongeveer 1,7
(G² = 4,4), robuust (same_book G² = 7,4). Dit is de inhoudelijke tegenhanger
van vraag 1, en als narratief gegeven volledig gezien: Tsumura's "agent
focusing", Alter's "master of rhetoric", Bodner's "uniek geconstrueerde
scène", Auld's transformatie van David van object (hfdst 16) naar actief
subject (hfdst 17), van Wijk-Bos' David die weigert zich door Eliabs verwijt
te laten definiëren en de controle neemt, en Chapman's thema van de omkering
machtige↔zwakke. De dominantie-als-omkering is de gangbare lezing.
Text-Fabric-query: `count subject vs object mentions by lexical/person key`.
*Samengestelde meting; alleen in een volledige Text-Fabric-omgeving
reproduceerbaar.*

3. **De ingebedde deed-vertelling** (finding_id 18, `weqatal_procedural_chain`,
formal_proxy). Een keten van vijf weqatal/perfectum-consecutivum-vormen binnen
Davids rede (v34-35: וּבָא … וְנָשָׂא … וְיָצָאתִי … וְהִכִּתִיו …
וְהִצַּלְתִּי), observed 5 tegen verwacht ongeveer 1,4 (G² = 5,6, plafond
Hoog), robuust (same_genre G² = 10,1). David bewijst zich door een verhaal:
de leeuw en de beer, in iteratieve "ik plàcht … te"-vorm. De grammaticale vorm
zelf is expliciet becommentarieerd: Tsumura noteert dat vv34b-35 vrijwel alle
`<waw+perfectum>` zijn (herhaalde handeling); McCarter ("suffixed forms …
habitual or repeated action"); Chisholm ("conjunction with perfect form
indicates these actions are customary"); Cartledge ("series of verbs
suggesting continuous action"); Alter ("carefully contrived speech"). De
iteratieve deed-vertelling is tot op de werkwoordsvorm gedekt.
Text-Fabric-query: `≥3 opeenvolgende clauses met WQt*/W+perf-predicaat`.
*Samengestelde meting met drempelwaarden; alleen in een volledige
Text-Fabric-omgeving reproduceerbaar. De perfectum-clauses zelf (`clause` met
daaronder `word vt=perf`, 20 treffers) zijn wel in de zoekbrowser na te
tellen.*

De kleinering-as van deze scène, de jongste die door oudste broer en koning op
zijn rang wordt gezet en zich verbaal staande houdt, is in de literatuur dus
grondig in beeld. Wat de BHSA-meting toevoegt zit een laag dieper en is smal:
de referentiële signatuur waarmee de tekst David, ondanks de kleinering, tot
het zwaartepunt maakt waar alle verwijzing naar terugvalt. Dat hij zich als
dienaar presenteert en zijn daden opsomt, valt volledig in de ijk. In de reeks
bevestigt deze dialoog het verwachte patroon van een hoog-verzadigd fragment:
de meest as-dragende metingen vallen in de ijk, en de enige novelty zit in een
formele, gemeten structuur die de commentaren (gericht op retoriek, theologie
en woordbetekenis) niet tellen.

## Claim-ledger

Koppeling van de rapportclaims aan velden in `evidence.json`, per
finding-id; de nieuwheidsoordelen staan samengevat in
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).

```json
{"claim_ledger": [
  {"finding_id": 12, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 12, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 12, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 23, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 23, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 17, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 17, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 18, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 18, "evidence_field": "examples", "claim_type": "commentary_novelty"}
]}
```
