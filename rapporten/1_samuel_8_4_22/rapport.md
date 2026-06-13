# Niet-conventionele vragen bij 1 Samuël 8:4-22 (BHSA 2023)

*Passage: 1 Samuël 8:4-22 (19 verzen, 353 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), baseline-schema
v9; run van 1 juni 2026, 30 bevindingen (`evidence.json` in deze map).
Robuustheidslabels in dit rapport: robuust (robust), gedeeltelijk robuust
(partially_robust), alleen-globaal (global_only); betrouwbaarheid Hoog, Middel
of Laag. Zoekregels zijn na te lopen in de
[zoekbrowser](https://wmotte.github.io/OTpatterns_public/); achtergrond bij
BHSA en Text-Fabric staat in [ACHTERGROND.md](../../ACHTERGROND.md). BHSA legt
formele syntaxis vast, geen betekenis of theologie; duidingen blijven door het
bewijs gedragen hypothesen.*

> Derde dialoog uit de Samuël-reeks. As: macht-asymmetrie in spraak. De oudsten
> van Israël komen bij Samuël te Rama en eisen een koning "om ons te richten,
> zoals alle volken". Samuël legt het voor aan JHWH, die hem zegt te luisteren
> maar het volk eerst te waarschuwen met het *mishpat hammelekh*, het "recht van
> de koning": die zal hun zonen, dochters, akkers en dienaren nemen. Het volk
> weigert te horen en herhaalt de eis. Dit hoofdstuk is zwaar becommentarieerd:
> de beroemde "nemen"-spine en de mishpat-woordspeling zijn in de literatuur
> uitgewerkt en dienen hier als ijk; de dragende vragen liggen bij vijf
> minder-belichte, gemeten patronen.

## Vraag 1 — de stem die gehoorzaamd moet worden

**Vraag:** Wie moet in dit hoofdstuk naar wiens stem luisteren, en valt die
gezagsrichting samen met de machtsverhouding?

**Wat de data toont:** Het werkwoord שׁמע (CM<, "horen/gehoorzamen") staat
driemaal naast קוֹל (QWL, "stem") binnen directe-rede-clauses: 3 treffers tegen
verwacht ongeveer 0,1 (G² = 14,0). De afwijking houdt stand in de strata:
same_genre G² = 16,1 (p ≈ 0,00006), same_book G² = 10,1. De drie treffers zijn
alle bevelen van JHWH aan Samuël: v7 שְׁמַע ... [בְּ]קוֹל, v9 שְׁמַע ... קוֹלָם,
v22 שְׁמַע ... קוֹלָם ("hoor naar hun stem"). In v19, dat buiten de telling van
drie valt, weigert het volk juist naar Samuëls stem te horen (שְׁמֹעַ ...
[בְּ]קוֹל).

**Text-Fabric-query:**

    clause domain=Q
      word lex=CM<[
      word lex=QWL/

*In de zoekbrowser na te tellen: 3 treffers in deze passage.*

**Duiding:** De gezagsrichting staat omgekeerd ten opzichte van de
machtsverhouding. JHWH gebiedt de profeet driemaal de stem van het volk in te
willigen (שׁמע בקול als "toegeven aan"), terwijl het volk weigert de stem van
de profeet in te willigen. Grammaticaal hoort de meerdere naar de mindere en
weigert de mindere te horen naar wie boven hem gesteld is. Op de as
macht-asymmetrie in spraak is dit een ompoling: het bevel om te gehoorzamen
loopt naar boven, de weigering loopt naar onder.


**Staat dit al in de commentaren?:** gedeeltelijk. Woodhouse leest de ironie
scherp: het gevolg van de weigering om naar Samuël te horen is dat Samuël hún
stem zal horen, het einde van het richter-tijdperk. Chisholm telt het "luister"
in vv7, 9 en 22 tegen de weigering in v19 en glosseert שׁמע ב- als "accede to".
Chapman noemt het verrassend dat God Samuël gebiedt te gehoorzamen. Brueggemann
spreekt van een "permitted-but-disapproved" inwilliging en wijst erop dat de
rolomkering later in 1 Samuël terugkeert wanneer Saul de stem van het volk
volgt. Alter heeft de passage eveneens. De thematische gezagsinversie is dus
sterk gedekt; wat BHSA toevoegt is de meting van CM<+QWL als telbare
clausebundel tegen het corpus.

**Confidence:** Middel (≤ plafond Middel) · feature: dynamic_query
(heed_the_voice_axis) · robustness: robust, exploratief · versie 2023

## Vraag 2 — de opwaartse bevel-eis

**Vraag:** In welke werkwoordsvorm verpakt het volk zijn vraag om een koning, en
wat zegt die vorm over de gezagsverhouding met de profeet?

**Wat de data toont:** De imperatief staat tweemaal naast מֶלֶךְ (MLK, "koning")
in directe rede: 2 treffers tegen verwacht ongeveer 0,04 (G² = 11,6). In v5
שִׂימָה־[לָּנוּ] מֶלֶךְ ("stel óns een koning aan", qal imperatief van שׂים), in
v6 תְּנָה־[לָּנוּ] מֶלֶךְ ("geef óns een koning", qal imperatief van נתן). In
vv19-20 verhardt de eis tot "nee, een koning zal over ons zijn" met מַלְכֵּנוּ
("onze koning").

**Text-Fabric-query:**

    clause domain=Q
      word vt=impv
      word lex=MLK/

*In de zoekbrowser na te tellen: 2 treffers in deze passage.*

**Duiding:** Ondergeschikten (de oudsten, en achter hen het volk) richten een
gebiedende wijs aan de profeet, en daarmee aan God. De imperatief omhoog is
gemarkeerd; van een mindere die een meerdere benadert verwacht men eerder een
jussief ("moge..."). De gekozen vorm codeert dat de gezagsverhouding wankelt:
wie hier spreekt, beveelt waar hij zou kunnen verzoeken. Op de as
macht-asymmetrie in spraak is de vorm zelf het datapunt.


**Staat dit al in de commentaren?:** gedeeltelijk. Bergen levert de scherpste
taalkundige observatie, zij het bij een andere passage: een "bald-faced
imperative" is een ongebruikelijke en weinig respectvolle vorm voor een mindere,
waar normaal een jussief "moge de heer..." zou staan. Woodhouse traceert de
verschuiving van verzoek in v5 naar eis in v19. Arnold noemt de uiting
grammaticaal een verzoek en feitelijk een demand. Cartledge leest haar als "both
plea and demand" en zegt dat het volk Samuël "instrueert". De eis-toon is dus
thematisch gedekt; wat BHSA toevoegt is de gemeten configuratie van opwaartse
imperatief naast koning, getoetst tegen het corpus.

**Confidence:** Middel (≤ plafond Middel) · feature: dynamic_query
(upward_demand_for_king) · robustness: robust, exploratief · versie 2023

## Vraag 3 — het collectief dat als meervoud spreekt en wordt aangesproken

**Vraag:** Wie is in dit hoofdstuk de tegenspeler van de profeet, en hoe codeert
de grammatica diens identiteit?

**Wat de data toont:** Meervoudige pronominale suffixen zijn sterk
oververtegenwoordigd: 34 treffers tegen verwacht ongeveer 9,7 (G² = 38,5),
robuust (robust) in alle strata, met same_book G² = 61,5 en same_genre
G² = 48,6. Voorbeelden: לָּנוּ ("voor ons", vv5-6), שָׁפְטֵנוּ ("om ons te
richten", vv5-6), עֲלֵיהֶם ("over hen", v7), אֹתָם ("hen", v8), קוֹלָם ("hun
stem", v9), בָּהֶם ("onder hen", v9).

**Text-Fabric-query:**

    word prs_nu=pl

*In de zoekbrowser na te tellen: 34 treffers in deze passage.*

**Duiding:** De tegenspeler van de profeet is een collectief. "Het volk"
handelt en wordt aangesproken als meervoudig blok, en de macht-asymmetrie loopt
tussen dat blok en een profeet. In de climax van vv19-20 eigent het collectief
zich de situatie toe door over te schakelen van Samuëls derde persoon ("hij
neemt") naar de eerste persoon meervoud ("ónze koning", "ónze oorlogen"). De
meervoudsdichtheid is het formele spoor van die collectieve stem.


**Staat dit al in de commentaren?:** gedeeltelijk. Chisholm telt het
bezittelijke "jullie" twaalfmaal in vv11-17. Halbertal en Holmes wijzen op de
omslag naar de eerste persoon meervoud in vv19-20. Chapman behandelt de groep
als een "collective character". Het collectieve register is dus thematisch
gedekt; de gemeten oververtegenwoordiging van de meervoudsvorm tegen het corpus
is nieuw.

**Confidence:** Hoog (telling; de duiding blijft lezing) · feature: categorical
prs_nu=pl · robustness: robust · versie 2023

## Vraag 4 — de naam die naar het voornaamwoord wegvalt

**Vraag:** Hoe lang houdt de tekst de eigennamen van de hoofdrolspelers vast
voordat zij in voornaamwoorden overgaan?

**Wat de data toont:** Een expliciete naam die in een pronominale of
nul-verwijzingsketen wegvalt is sterk oververtegenwoordigd: 22 tegen verwacht
ongeveer 1 (G² = 46,9), robuust (robust) in alle strata. In v10 וַיֹּאמֶר
שְׁמוּאֵל אֵת כָּל דִּבְרֵי יְהוָה אֶל הָעָם ("en Samuël sprak al de woorden van
JHWH tot het volk") worden de namen Samuël en JHWH ingezet en daarna lang
pronominaal voortgezet.

**Text-Fabric-query:**

    nmpr subject followed by pronoun/suffix/zero-subject run

*Samengestelde meting; alleen in een volledige Text-Fabric-omgeving
reproduceerbaar.*

**Duiding:** Het hoofdstuk verloopt als een snelle bemiddelingsketen: volk naar
Samuël, Samuël naar JHWH, JHWH terug naar Samuël, Samuël terug naar het volk. In
zo'n keten houdt de tekst de eigennamen kort en laat voornaamwoorden de last
dragen. Samuël als doorgeefluik vervaagt referentieel; de actoren worden niet
telkens opnieuw vastgepind. De hoge verval-rate is daarvan het meetbare spoor.


**Staat dit al in de commentaren?:** gedeeltelijk. Tsumura beschrijft de
discourse-grammatica waarin eigennamen vooral bij de eerste introductie nodig
zijn en daarna pronominaal worden voortgezet ten dienste van de "narrative
flow". Frolov tekent de structurele "movements" gedetailleerd uit, met namen die
in de snelle wisselingen impliciet blijven. Woodhouse leest Samuël als mediator
naar wie de tekst vaak met "hij" of "de stem" verwijst. Alter merkt bij v7 op
dat de focus op de handeling van het horen ligt boven de identiteit. Het
verschijnsel is dus als verteltechniek gedekt; de meting van de verval-rate als
corpus-anomalie is nieuw.

**Confidence:** Middel (≤ plafond Middel) · feature: referential_decay_rate ·
robustness: robust · versie 2023

## Vraag 5 — wie handelt, wie ondergaat

**Vraag:** Hoe is de agency over de spelers verdeeld wanneer je subject- en
object-vermeldingen telt, en houdt die verdeling stand tegen de theologie van
het hoofdstuk?

**Wat de data toont:** Enkele actanten domineren de subject- en object-graad
sterk: 7 tegen verwacht ongeveer 1 (G² = 6,0), robuust (robust), met same_book
G² = 10,1 en same_period G² = 6,6. In de graaf-meting hebben meerdere actanten
een hoge uitgaande graad en een inkomende graad van nul, dus puur handelend: de
tweede-persoon-aangesprokene (uit 8, in 0), het volk als
derde-persoon-meervoud (uit 6, in 0), Samuël (uit 4, in 0). JHWH heeft
uitgaande graad 3 en inkomende graad 1.

**Text-Fabric-query:**

    count subject vs object mentions by lexical/person key

*Samengestelde meting; alleen in een volledige Text-Fabric-omgeving
reproduceerbaar.*

**Duiding:** Aan de oppervlakte is de agency eenzijdig verdeeld: de spelers
handelen vrijwel uitsluitend en ondergaan nauwelijks. Hier botst de meting op de
theologie van het hoofdstuk. v7 positioneert God en Samuël juist expliciet als
lijdend voorwerp van de verwerping ("Míj hebben zij verworpen, dat Ik geen
koning over hen zal zijn"). De graaf-meting registreert oppervlakte-syntaxis en
die theologische patiens-positie staat daarmee in spanning. De eenzijdige agency
is dus een meting van de grammaticale buitenkant, die de diepere positie van God
en Samuël als ondergane partij maskeert.


**Staat dit al in de commentaren?:** gedeeltelijk. Bergen laat zien dat de
agency grammaticaal gecodeerd is: het 3ms-suffix komt veertienmaal voor op 85
woorden en de toe-eigeningswerkwoorden לקח en עשׂה hebben de koning als agens.
Tsumura wijst erop dat in procedureel discours het object voorop staat en de
agens "defocused" raakt. Halbertal en Holmes stellen de derde-persoon
koning-agens tegenover de eerste-persoon volk-agency in vv19-20. Brueggemann
leest JHWH in v18 juist als een agens die níet handelt, die niet antwoordt. De
king-als-agens-lezing is dus standaard; de graaf-degree-meting van de bredere
actant-asymmetrie is nieuw, mits de v7-nuance erbij staat.

**Confidence:** Middel (≤ plafond Middel) · feature: actant_centrality ·
robustness: robust · versie 2023

### IJk: wat de commentaren al volledig dekken

De volgende drie metingen bevestigen wat de literatuur uitwerkt. Ze dienen als
ijkpunt; alle drie scoren novelty standard. Twee ervan komen uit exploratieve
dynamic_queries (provenance `llm_hypothesis`), wat ik hier expliciet vermeld.

1. **De "nemen"-spine** (finding_id 15, dynamic_query `royal_seizure_yiqtol`,
exploratief). Het qal-imperfectum יִקָּח ("hij zal nemen") komt viermaal voor,
in vv11, 13, 14 en 16: 4 treffers (G² = 20,5), robuust. Chisholm telt exact deze
vier. Long noemt het de hoogste dichtheid van לקח in het boek Samuël, Alter
wijst op de "anaforische kracht" en Brueggemann noemt "take" het "governing
verb" van de waarschuwing. TF:
`clause domain=Q / word lex=LQX[ vs=qal vt=impf`.
*In de zoekbrowser na te tellen: 4 treffers in deze passage.*

2. **De onteigening gericht op "jullie"** (finding_id 11, dynamic_query
`seizure_directed_at_you_2mp`, exploratief). LQX qal naast een
tweede-persoon-meervoud-suffix-substantief, 4 treffers (G² = 26,4), bijvoorbeeld
בְּנֵיכֶם...יִקָּח (v11) en עַבְדֵיכֶם...יִקָּח (v16). Chisholm noemt het
bezittelijke "jullie", twaalfmaal, "even more striking" dan het nemen zelf;
Alter wijst op de objecten die met nadruk aan het begin van elke zin staan. TF:
`clause domain=Q / word lex=LQX[ vs=qal / word sp=subs prs_ps=p2`.
*In de zoekbrowser na te tellen: 4 treffers in deze passage.*

3. **De mishpat-woordspeling** (finding_id 13, dynamic_query
`king_manner_mishpat_title`). מִשְׁפַּט naast מֶלֶךְ, 2 treffers, in vv9 en 11
(G² = 21,8). Alter spreekt van een "untranslatable pun", waarin mishpat
tegelijk "gerechtigheid" en "praktijk/gewoonte" betekent. Chisholm, Woodhouse
en Auld wijzen op de bittere ironie dat juist het woord voor "recht" hier de
koninklijke aanmatiging benoemt. McCarter, Bergen en Tsumura lezen het als een
formeel-juridische titel, vergelijkbaar met die in het tiende hoofdstuk. TF:
`clause domain=Q / word lex=MCPV/ / word lex=MLK/`.
*In de zoekbrowser na te tellen: 2 treffers in deze passage.*

In deze reeks daalt de novelty-opbrengst: de eerste dialoog gaf vier novel
findings, de tweede één, deze derde geen enkele. 1 Samuël 8 is een verzadigd
hoofdstuk waar BHSA vooral kwantificering toevoegt boven op een bestaande
lezing. Het bruikbare signaal zit in de minder-belichte vragen 1 tot en met 5,
en in de saturatie zelf als vergelijkend datapunt.

**Claim-ledger**
Koppeling van de rapportclaims aan velden in `evidence.json`, per
finding-id; de nieuwheidsoordelen staan samengevat in
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).

```json
{"claim_ledger": [
  {"finding_id": 23, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 23, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 23, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 25, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 25, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 25, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 6, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 6, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 6, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 7, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 7, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 7, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 16, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 16, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 16, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 15, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 15, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 11, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 11, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 13, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 13, "evidence_field": "examples", "claim_type": "commentary_novelty"}
]}
```
