# Niet-conventionele vragen bij 1 Samuël 1:12-18 (BHSA 2023)

*Passage: 1 Samuël 1:12-18 (7 verzen, 124 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), baseline-schema
v19; run van 11 juni 2026, 60 bevindingen (`evidence.json` in deze map).
Robuustheidslabels in dit rapport: robuust (robust), gedeeltelijk robuust
(partially_robust), alleen-globaal (global_only); betrouwbaarheid Hoog, Middel
of Laag. Zoekregels zijn na te lopen in de
[zoekbrowser](https://wmotte.github.io/OTpatterns_public/); achtergrond bij
BHSA en Text-Fabric staat in [ACHTERGROND.md](../../ACHTERGROND.md). BHSA legt
formele syntaxis vast, geen betekenis of theologie; duidingen blijven door het
bewijs gedragen hypothesen.*

> Eerste dialoog uit de Samuël-reeks. As: macht-asymmetrie in spraak en
> ontwijking/mislukte communicatie. Eli (priester) leest Hanna's stille gebed
> als dronkenschap; Hanna verdedigt zich; Eli zegent haar weg. De vraag is
> telkens hoe het Hebreeuws de rangverhouding tussen de twee codeert, en waar
> de communicatie eerst klapt voor ze zich herstelt.

## Vraag 1 — de genoemde meerdere, de naamloze mindere

**Vraag:** Wie houdt het verhaal bij naam vast, wie laat het vervagen tot een
voornaamwoord, en valt die keuze samen met de machtsverhouding?

**Wat de data toont:** Eli wordt in deze zeven verzen vier keer expliciet bij
naam genoemd (עֵלִי in 1:12, 1:13, 1:14, 1:17). Hanna draagt haar naam (חַנָּה)
nog in 1:13 en 1:15, maar verdwijnt daarna uit de naamgeving: in het slotvers
heet ze הָאִשָּׁה, "de vrouw" (1:18). Twee aanvullende metingen wijzen dezelfde
kant op. De passage telt zes plaatsen waar een expliciet genoemde referent in
een pronominale of subjectloze keten vervalt vóór hij ververst wordt (verwacht
ongeveer één; 1:17 draagt een keten van lengte 6). En het lidwoord, dat in een
passage van deze lengte ongeveer negen keer verwacht wordt, komt hier één keer
voor: precies op die ene הָ van הָאִשָּׁה in 1:18.

```
naamgeving over de scène (× = expliciete naam):
Eli     12 ×   13 ×   14 ×          17 ×
Hanna          13 ×          15 ×                → "de vrouw" 18
                                              (enige lidwoord van de passage)
```

**Text-Fabric-query:**

    nmpr subject followed by pronoun/suffix/zero-subject run

*Samengestelde meting; alleen in een volledige Text-Fabric-omgeving
reproduceerbaar. De naamtelling (`word lex=<LJ==/`, 4 treffers) en het
lidwoord (`word sp=art`, 1 treffer) zijn wel direct in de zoekbrowser na te
tellen.*

**Duiding:** De meerdere blijft expliciet in beeld; de mindere lost op in
voornaamwoorden en wordt aan het slot een soortnaam. Het enige lidwoord van de
hele passage markeert juist het moment waarop Hanna haar eigennaam kwijtraakt
en "de vrouw" wordt. Voor wie de scène voorleest of preekt is dit een meetbaar
ankerpunt: de tekst voert het statusverschil ook op in wie het waard wordt
geacht herhaald genoemd te worden.


**Staat dit al in de commentaren?:** nieuw. Frolov en McCarter signaleren
referentie-verschuivingen, maar tekstkritisch (LXX/4QSamᵃ-varianten in 1:13,
1:18), niet als bewuste machtscodering; van Wijk-Bos en Bergen bespreken het
statusverschil thematisch, zonder de naamgeving of het lidwoord als bewijs.
De formulering van 1:18 is wel gedekt: Tsumura leest wayyiqtol met expliciet
subject als alinea-markering, van Wijk-Bos leest "de vrouw" juist als teken
van agency; de collostructionele binding van het patroon is de toevoeging.

**Confidence:** Middel (≤ plafond Middel) · feature(s): referential_decay_rate,
categorical sp=art, leitwort · robustness: robust (decay, lidwoord), global_only
(naamtelling) · versie 2023

## Vraag 2 — een scène in de vrouwelijke vorm

**Vraag:** Welke grammaticale stem beheerst deze verzen, en strookt dat met wie
hier institutioneel de macht heeft?

**Wat de data toont:** Grammaticaal vrouwelijk geslacht is sterk
oververtegenwoordigd: 27 vormen waar er in een vergelijkbaar venster ongeveer 11
verwacht worden. De oververtegenwoordiging houdt stand tegen elk stratum
(same_book: 27 vs 7,9; same_genre: vs 9,3; G² = 19,9; q significant). De vormen
lopen door de hele scène: הִרְבְּתָה (1:12), חַנָּה, הִיא, מְדַבֶּרֶת,
שְׂפָתֶיהָ (1:13), תִּשְׁתַּכָּרִין (1:14).

**Text-Fabric-query:**

    word gn=f

*In de zoekbrowser na te tellen: 27 treffers in deze passage.*

**Duiding:** De sociaal ondergeschikte partij verzadigt de grammatica van de
scène. Eli heeft het ambt en opent met een bevel, maar de werkwoorden,
suffixen en voornaamwoorden buigen overwegend naar Hanna. Er zit spanning tussen
wie de institutionele macht draagt en wie de grammaticale ruimte vult; de
preeklijn dat dit haar verhaal is, vindt zo al steun in de morfologie.


**Staat dit al in de commentaren?:** nieuw. Van Wijk-Bos, Evans en Frolov
bespreken Hanna's narratieve dominantie (zij blijft het centrum, Elkana
verdwijnt later onder haar), maar voeren de grammaticaal-vrouwelijke
oververtegenwoordiging niet als bewijsvorm aan.

**Confidence:** Hoog (≤ plafond Hoog) · feature(s): categorical gn=f ·
robustness: robust · versie 2023

## Vraag 3 — de wervelende werkwoordstijd van de confrontatie

**Vraag:** Waarom stapelen zich in zo'n korte scène zoveel verschillende
werkwoordsvormen op?

**Wat de data toont:** De passage telt 14 vensters van vijf clauses met drie of
meer verschillende tempus-aspect-modus-waarden naast elkaar, waar er over het
corpus ongeveer 3,6 verwacht worden (G² = 22,9; robuust over alle strata). De
opeenhoping piekt op de scharnieren: 1:13 schakelt participium naar participium
naar imperfectum naar wayyiqtol (de naderende, sprakeloze Hanna die Eli
gadeslaat), 1:15 gaat van qatal naar wayyiqtol naar imperfectum naar qatal
(Hanna's verweer).

**Text-Fabric-query:**

    sliding window over Pred verb vt values

*Samengestelde meting; alleen in een volledige Text-Fabric-omgeving
reproduceerbaar.*

**Duiding:** De dichtheid van vormwisselingen volgt de registerbeweging van de
scène: het participiale stilzetten van 1:12-13 waarin Eli kijkt en oordeelt,
het imperatieve uithalen van 1:14, het verdedigende qatal van 1:15. De
werkwoordstijd zelf draagt de onrust van een gesprek dat eerst misloopt en zich
dan herstelt.


**Staat dit al in de commentaren?:** gedeeltelijk. Frolov wijst op de "wild
mix" van vormen in 1:2-7 en op de participiale digressie van 1:12-13a; Keil
leest de "crowding together of the words" als teken van Hanna's nood; Tsumura
koppelt vormvariatie aan tempo. De gestratificeerde dichtheidsmeting in de
dialoog zelf voegt de kwantificering toe.

**Confidence:** Hoog (≤ plafond Hoog) · feature(s): tam_chaos · robustness:
robust · versie 2023

## Vraag 4 — de diep ingebedde zelfverdediging

**Vraag:** Waarom is de syntaxis van deze verzen veel sterker onderschikkend dan
verhalend proza gewoonlijk is?

**Wat de data toont:** De passage draagt clauses tot inbeddingsdiepte 13 (vier
keer, verwacht ongeveer 0,8) en diepte 15 (drie keer, verwacht ongeveer 0,4),
beide robuust over de strata (same_book diepte 15: 3 vs 0,15; G² = 12,5). Zulke
diepe hypotaxe hoort bij betoog en wet; verhalend proza werkt gewoonlijk in
paratactische ketens. De zichtbare drager is Hanna's verweer in 1:15-16, met de
ondergeschikte כִּי-clause מֵרֹב שִׂיחִי וְכַעְסִי דִּבַּרְתִּי ("want uit mijn
grote zorg en verdriet heb ik gesproken").

**Text-Fabric-query:**

    clause_atom tab=15

*Alleen in een volledige Text-Fabric-omgeving reproduceerbaar; de
inbeddingsdiepte (`tab`) zit niet in de geëxporteerde featureset van de
zoekbrowser.*

**Duiding:** De onderschikking concentreert zich in de rede waarin de mindere
zich moet rechtvaardigen. Eli beveelt in vlakke hoofdzinnen ("doe weg!");
Hanna stapelt bijzinnen om uit te leggen wie ze is en waarom ze deed wat Eli
verkeerd las. De syntactische gelaagdheid is de vorm van het je-moeten-verklaren
naar boven toe.


**Staat dit al in de commentaren?:** nieuw. McCarter bestempelt 1:16 als crux
interpretum en richt zich op emendaties; Frolov typeert de dialoog als "verbal
match"; Alter ziet een geparodieerde annunciatie. Een formele analyse van de
inbeddingsdiepte ontbreekt.

**Confidence:** Middel (≤ plafond Middel) · feature(s): clause_embedding ·
robustness: robust · versie 2023

## Vraag 5 — de petitie waarin de wens de spreker verdringt

**Vraag:** Hoe bouwt Hanna haar verzoeken op? Wie is het grammaticale subject
als ze iets vraagt?

**Wat de data toont:** Twee keer combineert een directe-rede-clause een volitief
(jussief-proxy imperfectum) met een onderdanig zelf-substantief als subject,
waar het corpus dat vrijwel nooit doet (2 treffers tegen verwacht ongeveer 0;
G² = 19,6). In 1:16 staat אַל־תִּתֵּן אֶת־אֲמָתְךָ ("geef uw dienstmaagd
niet…"), in 1:18 תִּמְצָא שִׁפְחָתְךָ חֵן ("moge uw dienstmaagd genade vinden").
Het subject van het werkwoord is in beide gevallen "uw dienstmaagd"; de eerste
persoon komt er niet in voor.

**Text-Fabric-query:**

    clause domain=Q
      word vt=impf
      word lex=>MH/|CPXH/ prs_ps=p2

*In de zoekbrowser na te tellen: 2 treffers in deze passage.*

**Duiding:** Hanna's verzoek demoteert haarzelf grammaticaal: de wens hangt aan
"uw dienstmaagd", de eerste persoon ontbreekt. De zelfvernedering zit daarmee
ook in de zinsbouw van de bede: de spreker maakt zich tot derde-persoons object
van haar eigen verzoek aan de meerdere.


**Staat dit al in de commentaren?:** gedeeltelijk. Bodner, Tsumura en Keil
lezen 1:18 als beleefdheidsformule en gunst-zoekende zet; de zelfvernedering is
standaard. De grammaticale versmelting van wens en onderdanig zelf-subject, en
dat die over 1:16 én 1:18 covarieert, is wat de meting toevoegt.

**Confidence:** Middel (≤ plafond Middel) · feature(s): dynamic_query
(deferential_volitive_petition) · robustness: robust, exploratief · versie 2023

## Vraag 6 — het rangregister dat heel het antwoord draagt

**Vraag:** Erkent Hanna de rangverhouding in één beleefdheidswoord, of trekt dat
register door haar hele weerwoord heen?

**Wat de data toont:** Drie van haar spraak-clauses dragen een rang-aanduidend
lexeem, waar het corpus er bijna nooit drie zo dicht opeen heeft (3 treffers
tegen verwacht ongeveer 0,1; G² = 13,7). Ze noemt Eli אֲדֹנִי, "mijn heer"
(1:15), en zichzelf twee keer zijn dienstmaagd: אֲמָתְךָ (1:16), שִׁפְחָתְךָ
(1:18). De twee zelf-aanduidingen dragen bovendien het 2e-persoonssuffix van de
aangesprokene: een aparte, eveneens robuuste meting (amatka, shifchatka).

**Text-Fabric-query:**

    clause domain=Q
      word lex=>DWN/|>MH/|CPXH/

*In de zoekbrowser na te tellen: 3 treffers in deze passage; de
zelf-aanduiding met suffix via `word lex=>MH/|CPXH/|<BD/ prs_ps=p2`
(2 treffers).*

**Duiding:** Het statusverschil keert over Hanna's hele reactie terug: één keer
door Eli "heer" te noemen, twee keer door zichzelf zijn dienstmaagd te noemen,
telkens met het suffix dat naar hem verwijst. Ze codeert de meerdere
grammaticaal in haar eigen zelfbenoeming. Het verweer is fel van inhoud ("geen
dochter van Belial") en onderdanig van vorm tegelijk.


**Staat dit al in de commentaren?:** gedeeltelijk. Breed besproken als
nederigheid en etiquette (Bergen, van Wijk-Bos, Cartledge, Weiss als standaard;
Bodner, Frolov, Alter, Goldingay, Tsumura, Keil als deels). McCarter en Tsumura
benoemen de aanspreekformule zelf expliciet als conventie. De covariantie van
drie rang-clauses over de hele rede, en het 2e-persoonssuffix als grammaticale
zelf-objectivering, is wat BHSA hier meetbaar maakt.

**Confidence:** Laag (≤ plafond Laag) · feature(s): dynamic_query
(deferential_status_register, servile_self_term) · robustness: robust,
exploratief · versie 2023

## Vraag 7 — twee vormen die nergens anders voorkomen

**Vraag:** Welke woordvormen van deze scène komen in het hele Oude Testament
alleen hier voor, en wat hebben die twee gemeen?

**Wat de data toont:** De passage draagt twee vorm-hapaxen: exacte
werkwoordsvormen die in het hele corpus precies één keer voorkomen terwijl het
werkwoord zelf frequent is (2 treffers tegen verwacht ongeveer 0,3; G² = 4,5;
q-significant en robuust over alle strata). הִרְבְּתָה in 1:12 ("zij bleef
overvloedig bidden"; de wortel רבה telt 224 voorkomens, deze vorm alleen hier)
en הָסִירִי in 1:14 ("doe je wijn weg"; de wortel סור telt 297 voorkomens,
deze vrouwelijke imperatief alleen hier). Beide unieke vormen zijn vrouwelijk
gemarkeerd: de eerste vervoegt Hanna's bidden, de tweede richt Eli's bevel aan
een vrouw.

```
vorm-hapaxen van de scène:
1:12  הִרְבְּתָה   perf 3vr.ev.  : Hanna's aanhoudende gebed (de aanleiding)
1:14  הָסִירִי     impv vr.ev.   : Eli's misplaatste bevel (de misser)
```

**Text-Fabric-query:**

    word met freq_occ<=1 en freq_lex>=100, geen nmpr, geen pronominaal
    suffix, geen qere; aandeel vs corpus

*Samengestelde meting met drempelwaarden; alleen in een volledige
Text-Fabric-omgeving reproduceerbaar.*

**Duiding:** De twee morfologische unica van de scène staan precies op de twee
scharnieren van het misverstand: het bidden dat Eli verkeerd las, en het bevel
waarmee hij dat misverstand uitsprak. Dat allebei de vormen vrouwelijk zijn,
sluit aan bij Vraag 2: de scène is ook in haar zeldzaamste morfologie op Hanna
gericht. Wie de passage leest of bepreekt kan hier letterlijk zeggen dat de
tekst voor dit gebed en dit bevel vormen gebruikt die nergens anders in het
Oude Testament staan.


**Staat dit al in de commentaren?:** gedeeltelijk. Auld plaatst de constructie
"veel doen" plus infinitief in een breder corpusbeeld, Alter vertaalt de duur
("she went on praying"), Frolov ziet de ironie van het wijn-bevel voor een
aanstaande nazireeërmoeder. Niemand signaleert dat beide vormen morfologische
unica zijn, of dat de enige twee unieke vormen van de scène allebei vrouwelijk
gemarkeerd zijn.

**Confidence:** Middel (≤ plafond Hoog) · feature(s): morphological_hapax ·
robustness: robust · versie 2023

**Claim-ledger**
Koppeling van de rapportclaims aan velden in `evidence.json`, per
finding-id; de nieuwheidsoordelen staan samengevat in
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).

```json
{"claim_ledger": [
  {"finding_id": 31, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 31, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 31, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 33, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 33, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 11, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 11, "evidence_field": "examples", "claim_type": "annotation_fact"},
  {"finding_id": 18, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 18, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 21, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 21, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 21, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 16, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 16, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 16, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 56, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 56, "evidence_field": "tf_query", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 56, "evidence_field": "tf_query", "claim_type": "commentary_novelty"},
  {"finding_id": 22, "evidence_field": "tf_query", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 22, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 22, "evidence_field": "tf_query", "claim_type": "commentary_novelty"},
  {"finding_id": 28, "evidence_field": "tf_query", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 28, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 28, "evidence_field": "tf_query", "claim_type": "commentary_novelty"},
  {"finding_id": 48, "evidence_field": "examples", "claim_type": "statistical_finding"},
  {"finding_id": 5, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 55, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 55, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 55, "evidence_field": "examples", "claim_type": "commentary_novelty"}
]}
```
