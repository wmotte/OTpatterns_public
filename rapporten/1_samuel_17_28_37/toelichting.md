# Toelichting bij 1 Samuël 17:28-37: de naam die mag wegzakken

*Lekenuitleg bij [rapport.md](rapport.md) over 1 Samuël 17:28-37 (David in het
legerkamp; Eliab en Saul zetten hem op zijn rang, David biedt aan tegen
Goliath te strijden).*

Dit document laat zien waarop de analyse rust, in gewone taal, met de
zoekopdrachten erbij zodat u de tellingen zelf kunt nalopen.

Achter de waarnemingen zit de BHSA: een database waarin de hele Hebreeuwse
bijbel woord voor woord van grammaticale etiketten is voorzien (woordsoort,
werkwoordsvorm, persoon, zinsdeel, verwijzing) door taalkundigen van het ETCBC
in Amsterdam. Met een programma dat Text-Fabric heet doorzoekt u die
geannoteerde tekst: u beschrijft een patroon, en het programma geeft alle
plaatsen waar dat patroon voorkomt. Onderaan staat hoe u de zoekopdrachten
zelf draait, en welke commentaren ik bij naam noem.

Deze scène is bijzonder zwaar becommentarieerd; bijna alles wat opvalt (Davids
"uw dienaar", zijn welsprekendheid, het leeuw-en-beer-verhaal) is door de
uitleggers al uitgewerkt. Eén waarneming staat nergens in de commentaren, en
die draagt het rapport.

## De naam die mag wegzakken

De dragende vondst gaat over verwijzing: hoe de tekst naar de personen wijst.
Een verhaal noemt een figuur bij naam en laat hem daarna een poos "hij" zijn,
opgenomen in een voornaamwoord of in het werkwoordssuffix, tot het hem opnieuw
bij naam moet vastzetten. Zo'n reeks, van een genoemde naam naar een rij kale
"hij"-vormen, heet hier een wegzak-reeks. Hoe vaker een figuur op die manier
mag wegzakken zonder dat u de draad kwijtraakt, hoe vanzelfsprekender hij het
middelpunt is: u weet toch wel over wie het gaat.

In 1 Samuël 17:28-37 gebeurt dat opvallend vaak, en steeds rond Davids naam.
Hij wordt genoemd aan het begin van een wending ("tegen David", v28; "David
zei", v29; "David zei tot Saul", v32) en zakt daarna telkens weg in
voornaamwoord en suffix. De figuur die door Eliab en Saul tot "die paar
schapen" en "maar een knaap" wordt teruggebracht, is grammaticaal juist het
zwaartepunt waar alle verwijzing naar terugbuigt.

**Wat je vindt als je telt.** Twaalf van zulke wegzak-reeksen, waar een stuk
van deze lengte er ongeveer drie draagt: ruim vier keer zoveel.

**De zoekopdracht.** Deze meting is geen kant-en-klare zoekregel maar een
telling over de tekst: voor elke verwijzing kijkt het programma of een
genoemde eigennaam wordt gevolgd door een reeks voornaamwoord-, suffix- of
nul-verwijzingen voordat de naam terugkeert. Die reeksen telt het. In deze
passage zijn het er twaalf, vrijwel alle aan Davids naam gehangen. De meting
zelf is alleen in een volledige Text-Fabric-omgeving reproduceerbaar; de
bouwsteen ervan kunt u wel zichtbaar maken met de eigennamen:

```
word sp=nmpr
```

In 1 Samuël 17:28-37 levert dit zeventien treffers op (`sp=nmpr` is *nomen
proprium*, eigennaam). Loop daarna de tekst na: na elke David-vermelding volgt
een rij werkwoorden en voornaamwoorden die naar hem terugwijzen zonder hem te
benoemen. Het zijn die rijen die het hoge getal opleveren.

**Staat dit al in de commentaren?** Nieuw (`novel`: niet aangetroffen in de
geraadpleegde bronnen). De uitleggers zien Davids dominantie scherp, maar
zoeken haar in zijn welsprekendheid. Alter (*The David Story*) noemt David een
"poised master of rhetoric" en wijst erop dat dit zijn eerste sprekende scène
is: een opmerking over retoriek. Bodner (*1 Samuel: A Narrative Commentary*)
merkt op dat David "het eerste woord" krijgt. Het scherpst is de spanning met
Tsumura (*The First Book of Samuel*): die kijkt wel naar de
discourse-grammatica en spreekt van "agent focusing", maar betoogt juist het
tegenovergestelde, dat de verteller David markeert door zijn naam te herhalen.
De meting wijst de andere kant op: het wegzakken van de naam draagt David
hier, en dat kan alleen omdat hij overal al verondersteld wordt. Campbell
(*1 Samuel*) erkent dat de verdeling van naam tegenover titel statistisch
niet toevallig is, maar past dat toe op 2 Samuël 6-24, en laat deze perikoop
buiten beschouwing. Dit is een discourse-meting met een middelhoge
betrouwbaarheid: zij meet de vorm van de verwijzing, de bedoeling erachter
blijft buiten bereik. Dat het wegzakken de kleinering "omkeert", is een lezing
boven de telling.

## De twee tellingen die het rapport alleen aanraakt

Twee andere waarnemingen gebruikt het rapport alleen als scène-materiaal,
omdat de commentaren ze al volledig dekken. Ik geef de zoekopdrachten erbij
zodat u ze kunt nalopen.

**Driemaal "uw dienaar".** David noemt zichzelf tegenover de koning driemaal
"uw dienaar" (vv32, 34, 36): het zelfstandig naamwoord *èved* ("dienaar") met
een suffix in de tweede persoon. Hij codeert zijn lage rang juist op het
moment dat hij het gewaagdste aanbod doet.

```
clause domain=Q
  word lex=<BD/ prs_ps=p2
```

In deze passage levert dit drie treffers op. (`<BD/` is *èved*, "dienaar";
`prs_ps=p2` eist een suffix in de tweede persoon, "uw"; `domain=Q` beperkt tot
de directe rede.) Dit register is door Woodhouse, Alter, McCarter, Weiss,
Cartledge en Bergen uitvoerig besproken; het rapport raakt het alleen aan.

**De leeuw en de beer in vijf werkwoorden.** David bewijst zich met een
verhaal, en giet dat in een reeks werkwoordsvormen die een gewoonte uitdrukken
("ik plàcht … te"). Vijf van die vormen staan achter elkaar (vv34-35: *er
kwam een leeuw … en ik ging erachteraan … en ik sloeg hem … en ik redde* …).

```
clause
  word vt=perf
```

In 1 Samuël 17:28-37 levert dit twintig treffers op: alle clauses met een
perfectum-vorm (`vt=perf`). De keten die David gebruikt is het type met
voorgevoegde *waw* (de zogenoemde weqatal), dat in vv34-35 vijf keer op rij
staat; die vijf vindt u onder de twintig treffers terug. Dat deze vorm een
herhaalde, gewoontematige handeling uitdrukt, is door Tsumura, McCarter,
Chisholm en Cartledge expliciet benoemd. Ook dit is dus geen nieuwe
waarneming; het rapport gebruikt het als illustratie van Davids
zelfverdediging.

## Hoe draai je deze zoekopdrachten zelf

De zoekregels hierboven kunt u zonder installatie draaien in de
[zoekbrowser](https://wmotte.github.io/OTpatterns_public/): kies de passage
1 Samuël 17:28-37, plak een zoekregel in het zoekvak en tel de treffers. Komt
het aantal overeen met het getal hierboven, dan heeft u de waarneming
gereproduceerd.

Wie de hele Hebreeuwse bijbel wil doorzoeken, gebruikt de volledige
Text-Fabric-omgeving (de zoekregels zijn geschreven voor Text-Fabric; de
website shebanq werkt met een andere zoektaal):

1. Installeer Text-Fabric: `pip install text-fabric` (eenmalig; vereist
   Python).
2. Start de zoekbrowser: `text-fabric ETCBC/bhsa`. De eerste keer haalt het
   programma de BHSA-gegevens op; daarna opent een zoekvenster in uw browser.
3. Plak een zoekregel in het zoekvak, voer hem uit en blader naar de treffers
   in 1 Samuël 17:28-37. (De wegzak-reeksen van de eerste vondst vragen één
   stap meer: na elke eigennaam telt u zelf de rij voornaamwoord- en
   suffix-verwijzingen die volgt voordat de naam terugkeert.)

## Wat de cijfers niet bewijzen

Een grammaticaal patroon is geen bewezen bedoeling van de schrijver. Dat
Davids naam hier vaak mag wegzakken in voornaamwoorden, is meetbaar; dat de
verteller daarmee de kleinering van David "omkeert", is een lezing die het
rapport aanbiedt. De wegzak-meting is bovendien een discourse-proxy: een scène
met één dominant handelend personage levert vanzelf veel
naam-naar-voornaamwoord-reeksen op, en dat maakt het getal hoog zonder dat er
opzet achter hoeft te zitten. De betrouwbaarheid is middelhoog: de waarneming
wijst iets aan, en wijst tegen één bestaande uitleg in, maar een
verteller-bedoeling bewijst zij niet. De twee andere tellingen (het
dienaar-register en de leeuw-en-beer-keten) zijn harder als telling; zij
staan al volledig in de commentaren en dienen hier als scène-materiaal.

## Genoemde commentaren

- Alter, *The David Story*
- Bodner, *1 Samuel: A Narrative Commentary*
- Campbell, *1 Samuel* (FOTL)
- Cartledge, *1 & 2 Samuel*
- Chisholm, *1 & 2 Samuel*
- McCarter, *I Samuel* (Anchor Bible)
- Tsumura, *The First Book of Samuel* (NICOT)
- Woodhouse, *1 Samuel: Looking for a Leader*
