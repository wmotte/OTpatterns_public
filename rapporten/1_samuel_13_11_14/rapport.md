# Niet-conventionele vragen bij 1 Samuël 13:11-14 (BHSA 2023)

*Passage: 1 Samuël 13:11-14 (4 verzen, 96 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), baseline-schema
v9; run van 2 juni 2026, 30 bevindingen (`evidence.json` in deze map).
Robuustheidslabels in dit rapport: robuust (robust), gedeeltelijk robuust
(partially_robust), alleen-globaal (global_only); betrouwbaarheid Hoog, Middel
of Laag. De passage is kort (kleine-monster-regime, lage n_context); de
betrouwbaarheid is daardoor navenant begrensd. Zoekregels zijn na te lopen in
de [zoekbrowser](https://wmotte.github.io/OTpatterns_public/); achtergrond bij
BHSA en Text-Fabric staat in [ACHTERGROND.md](../../ACHTERGROND.md). BHSA legt
formele syntaxis vast, geen betekenis of theologie; duidingen blijven door het
bewijs gedragen hypothesen.*

> Vijfde dialoog uit de Samuël-reeks, en de eerste waarin de macht-asymmetrie
> is omgekeerd: de profeet ondervraagt de koning. Samuël komt in Gilgal aan
> nadat Saul zonder hem het brandoffer heeft gebracht. Hij opent met twee
> woorden ("wat heb je gedaan?") en Saul antwoordt met zevenentwintig: het
> volk liep weg, jij kwam niet, de Filistijnen verzamelden zich, dus bedwong
> ik mij en bracht het offer. Samuël velt het vonnis dat de dynastie ontneemt:
> "nu zal je koningschap niet standhouden" (v14). De beroemde laag, het
> werkwoord וָאֶתְאַפַּק ("ik bedwong mij") en de aanklacht-vraag "wat heb je
> gedaan", is in de literatuur uitgewerkt en dient hier als ijk. Drie dragende
> vragen wijken af van de commentaren: de gemeten temporele instabiliteit van
> Sauls excuus, het עַתָּה ("nu") dat van rechtvaardiging naar vonnis kantelt,
> en de causale כִּי-stapeling die beide sprekers tegen elkaar uitspelen.

## Vraag 1: de tijd die niet stilstaat in het excuus

**Vraag:** Klinkt Sauls zelfrechtvaardiging alleen "wanhopig", of is de
ongedurigheid ook syntactisch meetbaar, in de werkwoordstijd die niet tot rust
komt?

**Wat de data toont:** In een schuivend venster van vijf clauses telt de
engine tien zones met drie of meer verschillende TAM-waarden
(tijd/aspect/modus) naast elkaar, tegen verwacht ongeveer 2,4 (G² = 18,0). De
afwijking is robuust (robust) en houdt stand in elk stratum: same_genre
G² = 15,8 (p ongeveer 0,00007), same_book G² = 13,0, same_period G² = 17,0. De
vormenreeksen liggen in Sauls antwoord (v11-12):
wayyiqtol-perfectum-perfectum-participium-imperfectum, telkens binnen één
ademtocht. Verhalend proza heeft zijn ruggengraat gewoonlijk in een
gelijkmatige wayyiqtol-keten; deze rede springt van voltooid naar lopend naar
toekomstig en terug.

**Text-Fabric-query:**

    sliding window over Pred verb vt-values (≥3 distinct in 5-clause window)

*Samengestelde meting; alleen in een volledige Text-Fabric-omgeving
reproduceerbaar.*

**Duiding:** De tijd staat niet stil in het excuus. Saul moet in één antwoord
drie dingen tegelijk doen: een afgesloten verleden verantwoorden ("het volk
liep weg", perfectum), een lopende noodtoestand schetsen ("de Filistijnen
verzamelden zich", participium) en een dreigende toekomst projecteren ("nu
zullen ze afdalen", imperfectum). De grammaticale tijd kantelt mee met de drie
rechtvaardigingsgronden, en dat levert een meetbaar onrustige tijdstructuur
op. Op de as zelfrechtvaardiging is de TAM-instabiliteit het syntactische
spoor van een verweer dat vooruit en achteruit tegelijk moet praten om de
overtreding recht te leggen.

**Wat het niet bewijst:** Rapid TAM-switching is een formele proxy
(formal_proxy) voor timeline-instabiliteit, geen bewijs van een psychische
toestand. Dat de tijdsprongen "wanhoop" of "drukte" markeren is mijn lezing
boven de telling. Het monster is klein (n_context 18) en de vensters
overlappen, zodat enkele dichte clauses het cijfer optillen.

**Staat dit al in de commentaren?:** nieuw. De commentaren richten zich op de
toon. Tsumura geeft een nauwkeurige structurele lijst van precies deze
werkwoordsvormen (wayqtl, qtl, yiqtol) door de scène heen, maar leest die als
discourse-opbouw (setting, event) en koppelt de snelle afwisseling niet aan
Sauls verweer. Bodner merkt op dat het antwoord "desperate" klinkt en dat
zevenentwintig woorden tegenover Samuëls twee op overcompensatie wijzen; die
observatie betreft toon en lengte. De stap van "wanhopig" naar een gemeten
TAM-instabiliteit tegen het corpus, robuust ook tegen het verhaalgenre, staat
nergens.

**Confidence:** Middel (≤ plafond Middel) · feature: tam_chaos
(rapid_tam_switching) · robustness: robust · versie 2023

## Vraag 2: het "nu" dat van kant wisselt

**Vraag:** Is het herhaalde עַתָּה ("nu") in deze scène een toevallig
stopwoord, of een scharnier waarop dezelfde tijdsmarkering eerst het excuus
draagt en dan het vonnis?

**Wat de data toont:** Twee onafhankelijke detectoren wijzen één kant op. De
dynamische query vindt עַתָּה direct gekoppeld aan een imperfectum dat een
toekomst projecteert: 2 treffers tegen verwacht ongeveer 0,01 (G² = 15,9),
robuust: v12 וְעַתָּה יֵרְדוּ פְלִשְׁתִּים ("nu zullen de Filistijnen
afdalen", Sauls dreiging) en v14 וְעַתָּה מַמְלַכְתְּךָ לֹא תָקוּם ("en nu zal
je koningschap niet standhouden", Samuëls vonnis). De deterministische
deixis-detector bevestigt het los daarvan: een proximaal "nu/hier/zie"-merker
dringt driemaal de verleden-tijdsstroom binnen, 3 treffers tegen verwacht
ongeveer 0,6 (G² = 5,1; same_genre p ongeveer 0,047): de drie עַתָּה in
v12-14.

**Text-Fabric-query:**

    clause domain=Q
      word lex=<TH
      word vt=impf

*In de zoekbrowser na te tellen: 2 treffers in deze passage.*

**Duiding:** Hetzelfde "nu" wisselt van kant. Saul gebruikt עַתָּה om zijn
noodoffer te rechtvaardigen: nu, op dit beslissende moment, komen de
Filistijnen en moet er geofferd zijn. Samuël neemt het woord over en keert het
om: nu, op ditzelfde moment, zou God je dynastie bevestigd hebben (v13), en nu
zal ze niet standhouden (v14). De deictische markering die Saul inzet om het
heden dringend te maken, wordt het scharnier waaraan Samuël het vonnis
ophangt. Op de as macht-asymmetrie is dit de syntactische greep van de
meerdere: hij buigt het "nu" van de mindere om tot het ogenblik van afwijzing.

**Wat het niet bewijst:** De dynamische tak is exploratief (provenance
llm_hypothesis), plafond Middel, met een klein monster (2 treffers). Dat de
twee sprekers het partikel "tegen elkaar uitspelen" is een lezing die de twee
treffers verbindt; de telling zegt alleen dat de koppeling עַתָּה+imperfectum
hier zeldzaam dicht is. De deterministische deixis-tak telt de "nu"-merkers
maar duidt hun onderlinge spel niet.

**Staat dit al in de commentaren?:** gedeeltelijk. Het effect is gezien, de
drievoudige structuur ontbreekt. Auld behandelt het dubbele עַתָּה in v13-14
expliciet als "key problem" voor de logica van het argument: het hypothetische
"nu" (wat God had kunnen doen) tegenover het oordeels-"nu". Bodner noteert
eveneens dat Samuël met עַתָּה de onvermijdelijkheid van het vonnis markeert.
De uitbreiding tot een reeks van drie, met Sauls eigen rechtvaardigend "nu
komen de Filistijnen" (v12) als eerste lid dat Samuël vervolgens kaapt, wordt
nergens als samenhangende figuur behandeld. Dat de twee detectoren elkaar
bevestigen (dynamisch én deterministisch) is de toevoeging.

**Confidence:** Middel (≤ plafond Middel) · feature: dynamic_query
(attah_future_projection), corroboratie deictic_shift_here_now · robustness:
robust, exploratief · versie 2023

## Vraag 3: een twist die met "want" wordt gevoerd

**Vraag:** Is het meningsverschil tussen profeet en koning syntactisch een
ruzie van beschuldigingen, of een over-en-weer van redengeving, argument tegen
argument met "want"?

**Wat de data toont:** Het voegwoord כִּי (causaal/grond, "want/omdat") staat
viermaal in directe rede, tegen verwacht ongeveer 0,9 (G² = 6,5), robuust. De
treffers verdelen zich over beide sprekers: Saul opent zijn verweer met
grond-clauses (v11 כִּי רָאִיתִי, "want ik zag", gevolgd door de redenen), en
Samuël grondt zijn vonnis op dezelfde manier (v13 כִּי עַתָּה, "want nu zou
Hij bevestigd hebben"; v14 כִּי לֹא שָׁמַרְתָּ, "want je hebt niet bewaard").
Het dispuut is aan beide zijden opgebouwd uit redenen die met כִּי worden
ingeleid.

**Text-Fabric-query:**

    clause domain=Q
      word lex=KJ

*In de zoekbrowser na te tellen: 4 treffers in deze passage.*

**Duiding:** De twist wordt met "want" gevoerd. Saul verdedigt zich met een
keten van gronden: omdat ik zag, omdat het volk uiteenviel, omdat jij niet
kwam. Samuël zet er een eigen grond-keten tegenover: omdat je niet gehoorzaamd
hebt. Beide partijen spelen het spel van de redengeving, en juist daarin toont
zich de asymmetrie: Sauls gronden zijn omstandig en concreet (de soldaten, de
tijd, de vijand), Samuëls grond is één en absoluut (het gebod). De
כִּי-stapeling maakt zichtbaar dat de mindere zich uitput in redenen terwijl
de meerdere met één grond volstaat. Op de as zelfrechtvaardiging is het
grond-voegwoord de syntactische drager van het hele dispuut.

**Wat het niet bewijst:** Dit is een exploratieve zoekvraag (provenance
llm_hypothesis), plafond Middel, met een bescheiden effect (G² = 6,5, 4
treffers). De classificatie van כִּי als causaal/grond is interpretatief;
sommige treffers zijn in vertaling ook recitatief of temporeel te lezen. Dat
de asymmetrie "omstandig versus absoluut" in de כִּי-verdeling zit, is mijn
lezing boven de telling.

**Staat dit al in de commentaren?:** gedeeltelijk. Het thema is geraakt, de
grammaticale figuur blijft buiten beeld. Bodner wijst op de "abundant
specificity" in Sauls rechtvaardiging (de soldaten, Samuëls afwezigheid, de
Filistijnen) tegenover de algemene termen van Samuëls antwoord; dat is precies
het contrast omstandig versus absoluut, gelezen als communicatiestijl. Auld
noemt het idioom כִּי עַתָּה in een lijst van vindplaatsen. De symmetrische
stapeling van het grond-voegwoord over beide sprekers, als de telbare drager
van een argument-door-grond, benoemt niemand. Dat voegt BHSA toe.

**Confidence:** Middel (≤ plafond Middel) · feature: dynamic_query
(causal_ki_grounding_in_speech) · robustness: robust, exploratief · versie
2023

### IJk: wat de commentaren al volledig dekken

De volgende twee metingen bevestigen wat de literatuur uitwerkt. Ze dienen als
ijk. Beide scoren novelty standard en komen uit exploratieve dynamic_queries
(provenance llm_hypothesis), wat ik hier expliciet vermeld; beide hebben een
klein monster (1 treffer).

1. **De reflexieve zelfbeheersing** (finding_id 16, dynamic_query
`self_restraint_hitpael_excuse`, exploratief). De hitpael וָאֶתְאַפַּק ("ik
bedwong mij", v12), 1 treffer (G² = 10,8). Dit werkwoord is uitvoerig
becommentarieerd. Long betoogt dat Saul claimt zich onder druk "herpakt" te
hebben, in plaats van toe te geven aan gewetenswroeging; Alter verbindt het
met Jozefs zelfbeheersing in Genesis 45; Chapman leest "ik bedwong mij" als
terughouding van de strijd, eerder dan als dwang tot het offer; Bodner volgt
de standaardbetekenis "zelfbeheersing" uit de zes andere vindplaatsen. De
excuus-functie van de hitpael (overtreding verpakt als moeizame zelfdwang) is
precies wat de commentaren al uitwerken. TF: `clause / word lex=>PQ[ vs=hit`
(*in de zoekbrowser na te tellen: 1 treffer in deze passage*).

2. **De aanklacht-vraag** (finding_id 29, dynamic_query
`account_demand_meh_asita`, exploratief). מֶה עָשִׂיתָ ("wat heb je gedaan",
v11), interrogatief naast een perfectum van עשה, 1 treffer (G² = 7,3).
Woodhouse en Bergen bestempelen de vraag expliciet als aanklacht in plaats van
informatieverzoek, en trekken de directe parallel met Gods beschuldigende
vragen aan Adam, Eva, Kaïn en Achan (Genesis 3 en 4; Jozua 7). Zij benadrukken
dat Samuël hier optreedt als superieure autoriteit (rechter en aanklager) die
de koning ter verantwoording roept, en dat dit de machtsverschuiving in de
theocratie markeert. Bodner: Samuël weet wat Saul gedaan heeft, dus het is
geen informatievraag. De rol-inversie zelf is dus al volledig gezien. TF:
`clause domain=Q / word lex=MH / word lex=<FH[ vt=perf` (*in de zoekbrowser na
te tellen: 1 treffer in deze passage*).

De rol-inversie van deze scène (de profeet die de koning ondervraagt en zijn
dynastie ontneemt) is in de literatuur goed in beeld. De BHSA-meting voegt een
laag daaronder toe: de syntactische vorm van Sauls verweer (de werkwoordstijd
die niet tot rust komt) en het scharnier waarop Samuëls laatste woord draait
(het עַתָּה dat van kant wisselt). Dit midden-verzadigde, zwaar
becommentarieerde fragment levert zo één nieuwe bevinding en twee gedeeltelijk
gedekte op. De beroemde laag (וָאֶתְאַפַּק, מֶה עָשִׂיתָ) valt zoals verwacht
in de ijk; de novelty zit in de gemeten temporele structuur, die de
commentaren, gericht op woordbetekenis en theologie, niet tellen.

## Claim-ledger

Koppeling van de rapportclaims aan velden in `evidence.json`, per finding-id;
de nieuwheidsoordelen staan samengevat in
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).

```json
{"claim_ledger": [
  {"finding_id": 4, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 4, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 4, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 5, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 5, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 5, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 20, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 20, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 30, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 30, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 30, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 16, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 16, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 29, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 29, "evidence_field": "examples", "claim_type": "commentary_novelty"}
]}
```
