# Toelichting bij 1 Samuël 13:11-14: tellen wat de tekst doet

*Lekenuitleg bij [rapport.md](rapport.md) over 1 Samuël 13:11-14 (Samuël
ondervraagt Saul in Gilgal en ontneemt hem de dynastie).*

Dit document laat zien waarop de analyse rust, in gewone taal, met de
zoekopdrachten erbij zodat u de tellingen zelf kunt nalopen.

Achter de waarnemingen zit de BHSA: een database waarin de hele Hebreeuwse
bijbel woord voor woord van grammaticale etiketten is voorzien (woordsoort,
werkwoordsvorm, getal) door taalkundigen van het ETCBC in Amsterdam. Met een
programma dat Text-Fabric heet doorzoekt u die geannoteerde tekst: u
beschrijft een patroon, en het programma geeft alle plaatsen waar dat patroon
voorkomt. Onderaan staat hoe u de zoekopdrachten zelf draait, en welke
commentaren ik bij naam noem.

Eén waarschuwing vooraf, die voor alle drie de vondsten geldt: dit is een
korte passage van vier verzen en zesennegentig woorden. Kleine aantallen
tellen snel als opvallend, en de betrouwbaarheid is daardoor begrensd. De
cijfers wijzen iets aan; ze dwingen niets af.

## De tijd die niet stil kan staan

De ruggengraat van de analyse is een onrust in de werkwoordstijd van Sauls
verweer. Verhalend Hebreeuws loopt doorgaans op één tijdsvorm: de verteller
rijgt zijn gebeurtenissen aaneen met steeds dezelfde vorm (de zogeheten
wayyiqtol, de gewone vertel-verleden-tijd). Sauls antwoord springt van een
afgesloten verleden ("het volk liep weg") naar een lopende toestand ("de
Filistijnen verzamelden zich") naar een toekomst ("nu zullen ze afdalen") en
weer terug, allemaal binnen één verweer.

**Wat je vindt als je telt.** Schuif een venster van vijf zinsdelen over de
passage; tel hoe vaak daarin drie of meer verschillende werkwoordstijden naast
elkaar staan. Je vindt tien zulke zones, waar een verhaal van deze lengte er
gemiddeld ongeveer tweeënhalf draagt: ruim vier keer zoveel. Het patroon houdt
bovendien stand hoe je ook vergelijkt: met de hele bijbel, met het boek
Samuël, en ook met het verhalende proza, het genre waar je een rustige
tijdslijn zou verwachten.

**De zoekopdracht.** Deze venstertelling laat zich met één zoekregel niet
vangen: het programma kijkt naar de werkwoordsvorm (`vt`) van het
hoofdwerkwoord in elk zinsdeel en schuift er een venster van vijf overheen.
Die meting is alleen in een volledige Text-Fabric-omgeving reproduceerbaar. De
onderliggende selectie van de werkwoorden is wel met één regel na te lopen:

```
clause
  word sp=verb
```

*In de zoekbrowser na te tellen: 22 treffers in deze passage.* Hiermee licht u
alle werkwoorden op; in 1 Samuël 13:11-14 ziet u dan de reeks waar het om
gaat: in Sauls antwoord (vers 11-12) staan voltooid, lopend en toekomstig vlak
na elkaar. (`sp=verb` betekent "woordsoort is werkwoord"; het etiket `vt`, de
werkwoordstijd, verschilt per woord en is wat de telling vergelijkt.)

**Staat dit al in de commentaren?** Nieuw (`novel`: niet aangetroffen in de
geraadpleegde bronnen). Dit is de nieuwe vondst van het rapport; de toon is
breed opgemerkt. Bodner (*1 Samuel*) hoort het antwoord "desperate" klinken en
wijst op de wanverhouding (zevenentwintig woorden tegenover Samuëls twee) als
teken van overcompensatie. Tsumura (*The First Book of Samuel*) zet precies
deze werkwoordsvormen op een rij, maar leest ze als de gewone opbouw van een
verhaal (eerst de situatie, dan de gebeurtenis) en koppelt de snelle
afwisseling niet aan Sauls verweer. De stap van "het klinkt wanhopig" naar een
gemeten onrust in de werkwoordstijd, die ook tegen het verhaalgenre overeind
blijft, staat nergens. De waarneming is een formele aanwijzing voor een
onrustige tijdslijn: een meetbaar spoor. Wat er in Saul omging bewijst zij
niet.

## Het nu dat van kant wisselt

Naast de werkwoordstijd draagt één woord opvallend veel: עַתָּה, "nu". Saul
zet het in om zijn noodoffer dringend te maken ("nu zullen de Filistijnen op
mij afkomen"). Samuël neemt hetzelfde woord over en keert het om: "nu zou JHWH
je koningschap bevestigd hebben", en "nu zal het niet standhouden". Het
dringende heden van de koning wordt het ogenblik waarop de profeet het vonnis
ophangt.

**Wat je vindt als je telt.** Twee keer staat "nu" vlak bij een toekomende
werkwoordsvorm in de directe rede, een combinatie die in een stuk van deze
lengte vrijwel nooit voorkomt. Een tweede, los daarvan werkende telling
bevestigt het: een proximale "nu/hier/zie"-markering dringt driemaal de
verleden-tijdsstroom binnen.

**De zoekopdracht.**

```
clause domain=Q
  word lex=<TH
  word vt=impf
```

*In de zoekbrowser na te tellen: 2 treffers in deze passage.* (`<TH` is de
databaseschrijfwijze voor *attah*, "nu"; `vt=impf` is het imperfectum, de vorm
die hier de toekomst draagt; `domain=Q` beperkt de zoektocht tot de directe
rede. De vreemde tekens in `lex=...` hoeft u niet te begrijpen, alleen
letterlijk over te typen.)

**Staat dit al in de commentaren?** Deels bekend (`partially_covered`); nieuw
is de uitbreiding en de dubbele bevestiging. Auld (*I & II Samuel*) behandelt
het dubbele "nu" van vers 13-14 uitdrukkelijk als een sleutelprobleem voor de
logica van het argument: het "nu" van wat God had kunnen doen tegenover het
"nu" van het oordeel. Bodner noteert eveneens dat Samuël met "nu" de
onvermijdelijkheid van het vonnis markeert. Wat bijkomt is het eerste lid van
de reeks (Sauls eigen rechtvaardigende "nu komen de Filistijnen", vers 12) dat
Samuël vervolgens overneemt, en het feit dat twee onafhankelijke tellingen (de
ene gericht op "nu + toekomst", de andere op de proximale markering) dezelfde
figuur aanwijzen. Deze waarneming komt uit een gerichte, vooraf opgestelde
zoekslag naar een vermoeden: exploratief, met een middelhoge betrouwbaarheid
en kleine aantallen.

## Een twist die met 'want' wordt gevoerd

De derde vondst betreft het voegwoord כִּי, "want, omdat". Saul verdedigt zich
met een keten van gronden (omdat ik zag, omdat jij niet kwam, omdat de
Filistijnen zich verzamelden) en Samuël zet er één eigen grond tegenover:
omdat je het gebod niet hebt bewaard. Het hele dispuut is opgebouwd uit
redenen.

**Wat je vindt als je telt.** Vier keer staat het grond-voegwoord
"want/omdat" in de directe rede van deze korte scène, waar je er ongeveer één
zou verwachten. De treffers verdelen zich over beide sprekers: Saul stapelt er
drie, Samuël grondt zijn vonnis op de zijne.

**De zoekopdracht.**

```
clause domain=Q
  word lex=KJ
```

*In de zoekbrowser na te tellen: 4 treffers in deze passage.* (`KJ` is de
databaseschrijfwijze voor *ki*, het voegwoord "want/omdat".)

**Staat dit al in de commentaren?** Deels bekend (`partially_covered`); het
thema is geraakt, de grammaticale figuur blijft buiten beeld. Bodner
(*1 Samuel*) wijst op de "abundant specificity" in Sauls rechtvaardiging (de
soldaten, Samuëls afwezigheid, de Filistijnen) tegenover de algemene termen
van Samuël; dat is precies het contrast tussen omstandig en absoluut, gelezen
als communicatiestijl. Auld noemt het idioom "want nu" in een lijst van
vindplaatsen. Dat het grond-voegwoord zich symmetrisch over beide sprekers
opstapelt en zo de telbare drager van een twist-door-redengeving wordt,
benoemt niemand. Ook deze waarneming komt uit een gerichte zoekslag:
exploratief, middelhoge betrouwbaarheid, een bescheiden effect. De indeling
van "want" als grond-voegwoord is bovendien deels uitleg: een enkele treffer
is in vertaling ook als "dat" of als tijdsbepaling te lezen.

## Hoe draai je deze zoekopdrachten zelf

De zoekregels hierboven kunt u zonder installatie draaien in de
[zoekbrowser](https://wmotte.github.io/OTpatterns_public/): kies de passage
1 Samuël 13:11-14, plak een zoekregel in het zoekvak en tel de treffers. Komt
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
   in 1 Samuël 13:11-14.

De eerste vondst (de onrustige tijdslijn) laat zich met een kale zoekregel
niet in één getal vangen, omdat het om een venster gaat dat over de
werkwoorden schuift. Wel kunt u met de zoekregel `clause` plus `word sp=verb`
de werkwoorden oplichten en de afwisseling van de vormen met eigen ogen
volgen.


## Genoemde commentaren

- Alter, *The David Story*
- Auld, *I & II Samuel*
- Bergen, *1, 2 Samuel*
- Bodner, *1 Samuel: A Narrative Commentary*
- Chapman, *1 Samuel as Christian Scripture*
- Long, *The Reign and Rejection of King Saul*
- Tsumura, *The First Book of Samuel*
- Woodhouse, *Looking for a Leader*
