# Toelichting bij 1 Samuël 8:4-22: tellen wat de tekst doet

*Lekenuitleg bij [rapport.md](rapport.md) over 1 Samuël 8:4-22 (de oudsten
eisen een koning; Samuël en JHWH).*

Dit document laat zien waarop de analyse rust, in gewone taal, met de
zoekopdrachten erbij zodat u de tellingen zelf kunt nalopen.

Achter de waarnemingen zit de BHSA: een database waarin de hele Hebreeuwse
bijbel woord voor woord van grammaticale etiketten is voorzien (woordsoort,
werkwoordsvorm, getal) door taalkundigen van het ETCBC in Amsterdam. Met een
programma dat Text-Fabric heet kun je in die geannoteerde tekst zoeken: u
beschrijft een patroon, en het geeft alle plaatsen waar dat patroon voorkomt.
Een "vondst" is zo'n patroon dat in deze negentien verzen opvallend vaker of
minder vaak voorkomt dan in een vergelijkbaar stuk bijbel. Onderaan staat hoe u
de zoekopdrachten zelf draait, en welke commentaren ik bij naam noem.

## De stem waarnaar de hoogste moet luisteren

De ruggengraat van de analyse is een omkering in de richting van het
gehoorzamen. Het Hebreeuwse "horen naar de stem van" betekent meer dan geluid
opvangen; het betekent toegeven, je voegen. Drie keer in dit gesprek staan het
werkwoord "horen" en het woord "stem" samen binnen de directe rede, en alle
drie keren is het God die Samuël gelast zich te voegen naar het volk (vers 7, 9
en 22). Op de plaats waar diezelfde uitdrukking tegen de draad in keert, is het
juist het volk dat weigert te horen naar de stem van Samuël (vers 19). Het
bevel om te gehoorzamen loopt omhoog; de weigering loopt omlaag.

**Wat je vindt als je telt.** Drie keer dat koppel van "horen" en "stem" in de
directe rede, waar een stuk verhaal van deze lengte er bijna nooit één draagt.

**De zoekopdracht.**

```
clause domain=Q
  word lex=CM<[
  word lex=QWL/
```

*In de zoekbrowser na te tellen: 3 treffers in deze passage.* (De vreemde
tekens in `lex=...` zijn de standaard-schrijfwijze waarmee de database
Hebreeuwse woorden noteert: `CM<[` is *sjama*, "horen/gehoorzamen", `QWL/` is
*qol*, "stem". U hoeft ze niet te begrijpen, alleen letterlijk over te typen.
`domain=Q` beperkt de zoektocht tot de directe rede.)

**Staat dit al in de commentaren?** Deels bekend (`partially_covered`). De
ironie van de omkering is breed gezien: Woodhouse (*Looking for a Leader*)
leest dat de weigering om naar Samuël te horen er juist toe leidt dat Samuël
naar hún stem zal horen; Chisholm (*1 & 2 Samuel*) telt het driemaal "luister"
tegen de ene weigering en glosseert "horen naar de stem van" als "toegeven
aan"; Chapman (*1 Samuel as Christian Scripture*) noemt het verrassend dat God
zijn profeet gebiedt te gehoorzamen; Brueggemann (*First and Second Samuel*)
spreekt van een toestemming die wordt verleend en afgekeurd tegelijk. Wat hier
bijkomt is dat dat ene koppel als telbaar bundeltje tegen de rest van de bijbel
opvalt. De waarneming komt uit een gerichte, vooraf opgestelde zoekslag naar
een vermoeden: exploratief, met een middelhoge betrouwbaarheid. Zij ondersteunt
de lezing als aanwijzing.

## De gebiedende wijs die omhoog gaat

Naast de richting van het horen draagt ook de vorm van de eis de scheefstand.
Een mindere die een meerdere benadert, kiest doorgaans een voorzichtige wens
("moge er een koning zijn"). De oudsten zetten hier twee keer een kale
gebiedende wijs neer, vlak naast het woord "koning": *stel* ons een koning aan
(vers 5) en *geef* ons een koning (vers 6). Het bevel gaat omhoog, naar de
profeet en daarmee naar God.

**Wat je vindt als je telt.** Twee gebiedende wijzen naast "koning" in de
directe rede, een combinatie die in een stuk van deze lengte vrijwel nooit
voorkomt.

**De zoekopdracht.**

```
clause domain=Q
  word vt=impv
  word lex=MLK/
```

*In de zoekbrowser na te tellen: 2 treffers in deze passage.* (`vt=impv` is de
gebiedende wijs; `MLK/` is *melech*, "koning".)

**Staat dit al in de commentaren?** Deels bekend (`partially_covered`). Het
eis-register is gezien: Bergen (*1, 2 Samuel*) geeft de scherpste taalkundige
opmerking, zij het bij een andere passage: een kale gebiedende wijs is een
ongebruikelijke, weinig respectvolle vorm voor een mindere, waar je een wens
zou verwachten. Woodhouse (*Looking for a Leader*) traceert hoe het verzoek van
vers 5 verhardt tot de eis van vers 19; Arnold (*1 and 2 Samuel*) noemt de
uiting grammaticaal een verzoek en feitelijk een eis; Cartledge (*1 & 2
Samuel*) leest haar als "plea en demand" tegelijk en zegt dat het volk Samuël
"instrueert". Wat bijkomt is de gemeten opwaartse gebiedende wijs naast
"koning", getoetst tegen de rest van de bijbel. Ook deze waarneming komt uit
een gerichte zoekslag: exploratief, middelhoge betrouwbaarheid.

## Een collectief dat zwaar op de grammatica drukt

Tegenover de profeet staat "het volk" als meervoudig blok. Dat blok laat een
spoor na in de grammatica: de meervoudige achtervoegsels en voornaamwoorden
("voor ons", "om ons te richten", "hun stem") komen opvallend dicht opeen. In
de climax schakelt het blok van Samuëls "hij zal nemen" naar de eerste persoon
meervoud, "ónze koning", "ónze oorlogen", en eigent zich zo de situatie toe.

**Wat je vindt als je telt.** Vierendertig meervoudsvormen, waar een stuk van
deze lengte er gemiddeld ongeveer tien draagt: ruim drie keer zoveel.

**De zoekopdracht.**

```
word prs_nu=pl
```

*In de zoekbrowser na te tellen: 34 treffers in deze passage.*

**Staat dit al in de commentaren?** Deels bekend (`partially_covered`). Het
collectieve register is gezien: Chisholm (*1 & 2 Samuel*) telt het bezittelijke
"jullie" twaalf keer; Halbertal en Holmes (*The Beginning of Politics*) wijzen
op de omslag naar de eerste persoon meervoud in vers 19-20; Chapman (*1 Samuel
as Christian Scripture*) behandelt de groep als één "collective character". Wat
bijkomt is dat de meervoudsvorm zo sterk oververtegenwoordigd is tegenover de
rest van de bijbel. Dit is de stevigste van de drie vondsten: het getal is een
ondubbelzinnig grammaticaal kenmerk, en het patroon houdt stand hoe je ook
vergelijkt (met de hele bijbel, met hetzelfde boek, met hetzelfde genre). Het
label is "robuust" (robust), met een hoog betrouwbaarheidsplafond; dat de
meervoudsdichtheid "collectieve agency" markeert, blijft een lezing boven het
cijfer.

## Hoe draai je deze zoekopdrachten zelf

De zoekregels hierboven kunt u zonder installatie draaien in de
[zoekbrowser](https://wmotte.github.io/OTpatterns_public/): kies de passage
1 Samuël 8:4-22, plak een zoekregel in het zoekvak en tel de treffers. Komt
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
   in 1 Samuël 8:4-22.


## Genoemde commentaren

- Arnold, *1 and 2 Samuel*
- Bergen, *1, 2 Samuel*
- Brueggemann, *First and Second Samuel*
- Cartledge, *1 & 2 Samuel*
- Chapman, *1 Samuel as Christian Scripture*
- Chisholm, *1 & 2 Samuel*
- Halbertal & Holmes, *The Beginning of Politics*
- Woodhouse, *Looking for a Leader*
