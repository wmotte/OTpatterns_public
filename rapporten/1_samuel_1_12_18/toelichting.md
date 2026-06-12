# Toelichting bij 1 Samuël 1:12-18: tellen wat de tekst doet

*Lekenuitleg bij [rapport.md](rapport.md) over 1 Samuël 1:12-18 (Eli en Hanna
bij de deurpost).*

Dit document laat zien waarop de analyse rust, in gewone taal, met de
zoekopdrachten erbij zodat u de tellingen zelf kunt nalopen.

Achter de waarnemingen zit de BHSA: een database waarin de hele Hebreeuwse
bijbel woord voor woord van grammaticale etiketten is voorzien (woordsoort,
geslacht, werkwoordsvorm) door taalkundigen van het ETCBC in Amsterdam. Met een
programma dat Text-Fabric heet kun je in die geannoteerde tekst zoeken: u
beschrijft een patroon, en het geeft alle plaatsen waar dat patroon voorkomt.
Een "vondst" is zo'n patroon dat in deze zeven verzen opvallend vaker of minder
vaak voorkomt dan in een vergelijkbaar stuk bijbel. Onderaan staat hoe u de
zoekopdrachten zelf draait.

## Eli viermaal bij naam, Hanna die haar naam verliest

De ruggengraat van de analyse is een verschil in hoe de tekst de twee
gesprekspartners vasthoudt. Eli wordt in deze verzen vier keer met zijn eigen
naam genoemd. Hanna draagt haar naam nog in vers 13 en 15, maar verdwijnt
daarna uit de naamgeving: in het slotvers heet zij "de vrouw". De tekst doet
bovendien iets meetbaars met die verschuiving. Op zes plaatsen valt een
expliciet genoemde persoon terug op een voornaamwoord of een onderwerploos
werkwoord vóórdat de naam wordt herhaald, waar je er in een stuk van deze
lengte ongeveer één zou verwachten. Hanna's naam zakt weg, die van Eli blijft
staan.

**Wat je vindt als je telt.** Eli's naam komt vier keer voor; de
naam-naar-voornaamwoord-keten telt zes plaatsen tegen ongeveer één verwacht.

**De zoekopdracht.** Eli's naam is een eenvoudige zoekregel:

```
word lex=<LJ==/
```

In 1 Samuël 1:12-18 levert dit vier treffers op. De terugval-meting zelf is
geen enkele zoekregel: een hulpprogramma loopt de tekst door en telt de ketens
waarin een genoemde persoon wegzakt naar een voornaamwoord. Die meting is
alleen in een volledige Text-Fabric-omgeving reproduceerbaar; de naamtelling
hierboven en het lidwoord hieronder kunt u wel zelf controleren.

**Staat dit al in de commentaren?** Nieuw (`novel`: niet aangetroffen in de
geraadpleegde bronnen). Frolov en McCarter merken referentie-verschuivingen op,
maar tekstkritisch, niet als bewuste machtscodering; van Wijk-Bos en Bergen
bespreken de status-asymmetrie thematisch, niet grammaticaal. Eli's herhaalde
naamgeving is op zichzelf vooral opvallend tegen de hele bijbel (alleen-globaal,
`global_only`); daarom breng ik haar als een telling die u gewoon kunt
natellen, zonder hard statistisch gewicht.

## Het enige lidwoord

In het Hebreeuws is het bepaald lidwoord een voorvoegsel (de letter *he*, הָ).
In een passage van deze lengte zou je er ongeveer negen verwachten. Hier staat
er precies één, en die ene valt op *hā'iššā*, "de vrouw", in vers 18. Op het
moment dat Hanna haar eigennaam verliest, krijgt de taal voor het eerst dat
afstandelijke randje: zij wordt een soort in plaats van een persoon.

**Wat je vindt als je telt.** Eén lidwoord, waar er ongeveer negen passen: een
opvallende schaarste.

**De zoekopdracht.**

```
word sp=art
```

In 1 Samuël 1:12-18 levert dit één treffer op, op "de vrouw" in vers 18.

**Staat dit al in de commentaren?** Nieuw (`novel`). Auld let elders op
lidwoord-varianten, maar past dit niet toe op deze passage; geen bron bespreekt
de schaarste of dat ene lidwoord op "de vrouw". De betrouwbaarheid van deze
meting is middelhoog: het lidwoord is een hard grammaticaal kenmerk, maar de
duiding ervan blijft een lezing.

## De grammatica buigt vrouwelijk

Onder de naamgeving gebeurt nog iets. De grammaticaal vrouwelijke vormen
(werkwoorden, achtervoegsels en voornaamwoorden die zich naar een vrouw
richten) komen in deze verzen opvallend dicht opeen. Eli heeft het ambt en
opent met een bevel, maar de morfologie trekt voortdurend naar Hanna toe. Zij
raakt haar naam kwijt en bezet tegelijk grammaticaal de hele scène.

**Wat je vindt als je telt.** Zevenentwintig vrouwelijke vormen, waar een stuk
van deze lengte er gemiddeld bijna elf draagt: ruim het dubbele.

**De zoekopdracht.**

```
word gn=f
```

In 1 Samuël 1:12-18 levert dit zevenentwintig treffers op.

**Staat dit al in de commentaren?** Nieuw als bewijsvorm (`novel`). Van
Wijk-Bos, Evans en Frolov bespreken Hanna's verhalende overwicht (zij blijft
het middelpunt, Elkana verdwijnt onder haar), maar voeren de
grammaticaal-vrouwelijke oververtegenwoordiging niet als bewijs aan. Dit is de
hardste van de vondsten: het geslacht is een ondubbelzinnig kenmerk en het
patroon houdt stand hoe je ook vergelijkt (met de hele bijbel, met hetzelfde
boek, met hetzelfde genre). Het label is "robuust" (robust), met een hoog
betrouwbaarheidsplafond.

## Een fel verweer in onderdanige vorm

Hanna verdedigt zich in de zachtste aanspreekvorm die het Hebreeuws kent. Zij
noemt Eli "mijn heer" en zichzelf zijn dienstmaagd, en die zelfaanduidingen
dragen het achtervoegsel dat naar hém wijst. Over haar korte weerwoord heen
codeert zij zo het rangverschil grammaticaal, verspreid over meerdere zinnen.

**Wat je vindt als je telt.** Drie zinnen in de directe rede dragen een
rang-aanduidend woord (heer / dienstmaagd / slavin); twee keer staat zo'n
onderdanige zelf-aanduiding met het achtervoegsel dat naar de aangesprokene
wijst.

**De zoekopdracht.** Voor de rang-woorden in de directe rede:

```
clause domain=Q
  word lex=>DWN/|>MH/|CPXH/
```

En voor de zelf-aanduiding met het tweede-persoons-achtervoegsel:

```
word lex=>MH/|CPXH/|<BD/ prs_ps=p2
```

In 1 Samuël 1:12-18 leveren deze respectievelijk drie en twee treffers op.

**Staat dit al in de commentaren?** Deels bekend (`partially_covered`). De
nederigheid is breed besproken (Bergen, van Wijk-Bos, Cartledge, Weiss); Bergen
wijst expliciet op *amatekha* als term voor een huisslavin. Wat hier wordt
toegevoegd, is de meting: dat het rangverschil over drie zinnen heen terugkeert.
Let op: deze twee vondsten komen uit een gerichte, vooraf opgestelde zoekslag
naar een vermoeden. Ze zijn exploratief, met een laag betrouwbaarheidsplafond,
en ondersteunen de lezing als aanwijzing.

## Hoe draai je deze zoekopdrachten zelf

De zoekregels hierboven kunt u zonder installatie draaien in de
[zoekbrowser](https://wmotte.github.io/OTpatterns_public/): kies de passage
1 Samuël 1:12-18, plak een zoekregel in het zoekvak en tel de treffers. Komt
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
   in 1 Samuël 1:12-18.

## Wat de cijfers niet bewijzen

Een grammaticaal patroon is geen bewezen bedoeling van de schrijver. Dat de
vrouwelijke vormen zich opstapelen of dat Hanna haar naam verliest, is
meetbaar; dat de verteller dit zó heeft gewild, blijft een lezing die het
rapport aanbiedt. De vondsten over Hanna's onderdanige register komen uit een
exploratieve zoekslag: ze ondersteunen de lezing als aanwijzing. En Eli's
viervoudige naamgeving valt vooral op tegen de hele bijbel, niet tegen elk
vergelijkingsstuk. De stevigste grond onder de analyse is de vrouwelijke
grammatica en het enige lidwoord; de rest leest mee als aanwijzing.
