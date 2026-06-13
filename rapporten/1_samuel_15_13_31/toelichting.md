# Toelichting bij 1 Samuël 15:13-31: tellen wat het verhoor doet

*Lekenuitleg bij [rapport.md](rapport.md) over 1 Samuël 15:13-31 (Samuël zet
Saul af; de afgewezen koning en de gescheurde mantel).*

Dit document laat zien waarop de analyse rust, in gewone taal, met de
zoekopdrachten erbij zodat u de tellingen zelf kunt nalopen.

Achter de waarnemingen zit de BHSA: een database waarin de hele Hebreeuwse
bijbel woord voor woord van grammaticale etiketten is voorzien (woordsoort,
werkwoordsvorm, getal, persoon, zinsdeel) door taalkundigen van het ETCBC in
Amsterdam. Met een programma dat Text-Fabric heet kun je in die geannoteerde
tekst zoeken: u beschrijft een patroon, en het geeft alle plaatsen waar dat
patroon voorkomt. Een "vondst" is zo'n patroon dat in deze negentien verzen
opvallend vaker of minder vaak voorkomt dan in een vergelijkbaar stuk bijbel.
Onderaan staat hoe u de zoekopdrachten zelf draait, en welke commentaren bij
naam worden genoemd.

## De werkwoorden die niets meebrengen

De ruggengraat van de analyse is een telling die de commentaren niet maken:
hoe zwaar geladen de werkwoorden van deze scène zijn. Een werkwoord kan kaal
staan ("ik heb gezondigd") of van alles met zich meeslepen: een lijdend
voorwerp, een plaats, een tijd, een tweede object ("hij bracht het beste van
het kleinvee uit Amalek mee"). Die aanhangsels heten in de taalkunde de
complementen van het werkwoord. Hoe meer een zin echt iets laat gebeuren, hoe
meer complementen hij gewoonlijk draagt.

In 1 Samuël 15:13-31 zijn de zwaar geladen werkwoorden, die met twee
complementen, juist schaars. De dragende zinnen draaien om de kale soort: *ik
heb volbracht*, *ik heb geluisterd*, *ik heb gezondigd*, *gij hebt
verworpen*. Het is de grammatica van een dispuut na de feiten, waarin alleen
nog beweerd en geoordeeld wordt; het handelen ligt achter de rug.

**Wat je vindt als je telt.** Vijf clauses met twee complementen, waar een
stuk directe rede van deze lengte er ongeveer dertien draagt: ruim de helft
te weinig.

**De zoekopdracht.**

```
clause kind=VC
```

Deze regel haalt alle clauses met een werkwoord op (`kind=VC` is een
werkwoordelijke clause) en draait ook in de zoekbrowser. Per clause telt u
vervolgens hoeveel complementen er hangen: de zinsdelen die de database
labelt als `Objc` (lijdend voorwerp), `Cmpl` (complement), `Loca` (plaats),
`Time` (tijd) of `Adju` (bijwoordelijke bepaling). De clauses met er twee of
meer zijn de "zware". In deze passage zijn dat er vijf van de drieënzeventig
werkwoordelijke clauses; het corpus laat er ongeveer dertien verwachten. De
complementtelling zelf vergt de frasefuncties en is alleen in een volledige
Text-Fabric-omgeving reproduceerbaar.

**Staat dit al in de commentaren?** Nieuw (`novel`: niet aangetroffen in de
geraadpleegde bronnen). Geen geraadpleegd commentaar telt of bespreekt
werkwoordsvalentie. Campbell (*1 Samuel*) typeert dit type Samuël-proza in
het algemeen als "terse and allusive" (kortaf en toespelend), maar hij past
dat niet toe op een meting van de zinsbouw, en zijn opmerking geldt feitelijk
een ander hoofdstuk. De vage stijlintuïtie raakt dus aan de soberheid; de
telbare ondervertegenwoordiging van het zware werkwoord staat nergens. Dit is
de stevigste grondsoort: een harde, deterministische telling die standhoudt
hoe je ook vergelijkt (met de hele bijbel, met hetzelfde boek, met dezelfde
directe rede). Dat die kaalheid "assertie boven handelen" betekent, blijft
een lezing boven het cijfer.

## Het meervoud dat wegvalt

De tweede vondst betreft het getal. Saul verdedigt zich door telkens "het
volk" in te schuiven: een collectief, een meervoud, een groep om achter te
verdwijnen. Je zou verwachten dat een hoofdstuk over een heel volk, een heel
leger en een hele buit zwaar van meervouden aan elkaar hangt. Het tegendeel
is waar.

**Wat je vindt als je telt.** Veertien meervoudsvormen, waar een stuk van
deze lengte er ongeveer achtenveertig draagt: nog geen derde van het
verwachte.

**De zoekopdracht.**

```
word nu=pl
```

In 1 Samuël 15:13-31 levert dit veertien treffers op. (`nu=pl` is de
grammaticale code voor het meervoud, *numerus plural*.) De weinige meervouden
clusteren bovendien in Sauls uitvluchten: *zij hebben gebracht* en *wij
hebben gebannen* (vers 15), en in de offertermen waarmee hij de overtreding
als eredienst verpakt.

**Staat dit al in de commentaren?** Deels bekend (`partially_covered`). Dat
Saul met een vaag "zij hebben gebracht" de schuld wegduwt, is breed gezien:
Alter (*The David Story*) noemt het een "vague third-person plural"; Greear
en Tsumura (*The First Book of Samuel*) wijzen op het enkelvoudige "hij
spaarde" van de verteller, dat Saul als hoofddader ontmaskert; Cartledge
(*1 & 2 Samuel*) leest Samuël als degene die Saul vastpint als enig moreel
subject. De thematische beweging van collectief naar individu is dus gezien.
Wat bijkomt is dat de grammatica die beweging meetbaar ondersteunt: het
meervoud valt sterk weg tegen de rest van de bijbel. De betrouwbaarheid is
hoog; dat het wegvallende meervoud "individualisering van het collectief"
markeert, blijft een lezing.

## De derde persoon die terugtreedt

De derde vondst loopt parallel aan de tweede, met een andere maat. Verhalend
proza leunt op de afstandelijke derde persoon: hij ging, zij zeiden, het
gebeurde. Deze scène doet dat veel minder; zij wordt grotendeels gevoerd in
het rechtstreekse *ik* en *jij* van de twee sprekers.

**Wat je vindt als je telt.** Drieënveertig vormen in de derde persoon, waar
een stuk van deze lengte er ongeveer zestig draagt: de afstandelijke
vertelvorm is duidelijk in de minderheid.

**De zoekopdracht.**

```
word ps=p3
```

In 1 Samuël 15:13-31 levert dit drieëndertig treffers op. (`ps=p3` is de
grammaticale code voor de derde persoon, *persoon 3*.) De telling van het
rapport komt op drieënveertig, omdat zij ook de tien achtervoegsels meetelt
die naar een derde persoon verwijzen ("zijn", "hem", "hun"). Die
achtervoegsels vindt u met een tweede zoekregel:

```
word prs_ps=p3
```

Drieëndertig woorden plus tien achtervoegsels maakt drieënveertig. Tegen de
directe-rede-baseline is het tekort het scherpst: ook vergeleken met ander
spraakproza valt de derde persoon hier weg.

**Staat dit al in de commentaren?** Deels bekend (`partially_covered`). De
dramatische directheid is gezien: Davis (*1 Samuel*) merkt op dat "het
grootste deel van het verhaal via toespraken en gesprekken wordt verteld";
Alter wijst op de tweede persoon waarin Samuël de aanklacht erin hamert
("waarom hebt *gij* niet geluisterd"); Woodhouse (*1 Samuel*) noemt hoofdstuk
15 een "fresh narrative" die op directe interactie is gebouwd. Wat bijkomt is
dat die directheid meetbaar is, als ondervertegenwoordiging van de derde
persoon tegen het corpus, en dat zij samenloopt met het wegvallende meervoud.
Twee onafhankelijke tellingen, getal en persoon, wijzen dezelfde kant op: weg
van de groep en het verhaal, naar het *jij-tegen-jij*. Dezelfde verdichting
kwam al boven in de vorige confrontatie (1 Samuël 14, Saul tegenover
Jonatan): een patroon dat over de Saul-scènes terugkeert.

## De zinnen die afbreken

Wie de woordenwisseling hardop leest, hoort haar haperen: een groet zonder
werkwoord, een vraag van twee woorden, bevelen van één woord, een verweer dat
met "dat..." begint en nooit een hoofdzin krijgt. De ETCBC-taalkundigen
hebben voor zulke zinseenheden een apart etiket: defectief, een zin die
afbreekt of nooit voltooid raakt (het verschijnsel heet in de taalkunde
anakoloet).

**Wat je vindt als je telt.** Dertien defectieve zinseenheden, waar een stuk
van deze lengte er bijna vijf draagt: bijna driemaal het verwachte aantal, op
een totaal van zevenentachtig zinseenheden.

**De zoekopdracht.**

```
clause_atom code=999
```

(`clause_atom` is de kleinste zinseenheid van de database; `code=999` is het
etiket voor defectieve, afgebroken syntaxis. Deze zoekregel vraagt naar een
eenheid die de zoekbrowser niet kent en draait daarom alleen in een volledige
Text-Fabric-omgeving.)

De breuken liggen vrijwel allemaal in de gesproken tekst, op de geladen
momenten: Sauls groet "gezegend zijt gij voor JHWH" (vers 13), Samuëls
werkwoordloze vraag naar het geblaat (vers 14), Sauls excuus dat met de
herkomst opent ("uit Amalek hebben ze ze gebracht", vers 15), Samuëls twee
kale bevelen "houd op" en "spreek" (vers 16), en Sauls verweer dat met een
bijzin begint en er nooit uitkomt: "dat ik geluisterd heb naar de stem van
JHWH..." (vers 20).

**Staat dit al in de commentaren?** Deels bekend (`partially_covered`). De
ruwheid is stilistisch opgemerkt; geteld is zij nergens. Bodner (*1 Samuel*)
noemt de "awkward syntax" van Sauls excuus in vers 15 en zet Samuëls vraag
van twee woorden tegenover Sauls antwoord van zevenentwintig; Campbell ziet
de vorm van de profetische oordeelsrede in dit verhaal "opgelost", met de
kale bevelen van vers 16; Tsumura leest de onpersoonlijke vorm van vers 15
als bewust wegschuiven van verantwoordelijkheid; van Wijk-Bos (*The Road to
Kingship*) en Alter beschrijven de levendige, hamerende dialoogvoering. Wat
bijkomt is dat het harde etiket de breuk telbaar maakt. Twee kanttekeningen
horen erbij. Vergeleken met de rest van 1 Samuël (een boek dat zelf al rijk
is aan gebroken zinnen) is deze dichtheid hoog maar gewoon; de afwijking
staat tegenover de hele bijbel, het genre en de periode. En een deel van de
"breuken" zijn korte bevelen die de database als onvoltooid etiketteert; daar
is de breuk eerder een coderingskeuze dan een echte afgebroken zin. Hetzelfde
signaal keert overigens terug in de andere confrontatie-scènes van deze reeks
(1 Samuël 13, 14 en 17), terwijl het in de kalmere gesprekken (1 Samuël 1, 3
en 8) onder de meetdrempel blijft.

## Hoe draai je deze zoekopdrachten zelf

De zoekregels hierboven kunt u zonder installatie draaien in de
[zoekbrowser](https://wmotte.github.io/OTpatterns_public/): kies de passage
1 Samuël 15:13-31, plak een zoekregel in het zoekvak en tel de treffers. Komt
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
   in 1 Samuël 15:13-31. (De valentietelling vraagt één stap meer: per
   gevonden clause telt u de complementen zoals hierboven beschreven. De
   zoekregel naar defectieve zinseenheden, `clause_atom code=999`, werkt
   alleen in deze volledige omgeving.)


## Genoemde commentaren

- Alter, *The David Story*
- Bodner, *1 Samuel: A Narrative Commentary*
- Campbell, *1 Samuel* (FOTL)
- Cartledge, *1 & 2 Samuel*
- Davis, *1 Samuel: Looking on the Heart*
- Greear & Tsumura, *The First Book of Samuel*
- van Wijk-Bos, *The Road to Kingship*
- Woodhouse, *1 Samuel: Looking for a Leader*
