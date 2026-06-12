# Toelichting bij 1 Samuël 10:14-16: tellen wat de tekst doet

*Lekenuitleg bij [rapport.md](rapport.md) over 1 Samuël 10:14-16 (Saul komt
thuis na de zalving en wordt door zijn oom ondervraagd).*

Dit document laat zien waarop de analyse rust, in gewone taal, met de
zoekopdrachten erbij zodat u de tellingen zelf kunt nalopen.

Achter de waarnemingen zit de BHSA: een database waarin de hele Hebreeuwse
bijbel woord voor woord van grammaticale etiketten is voorzien (woordsoort,
werkwoordsvorm, zinsbouw) door taalkundigen van het ETCBC in Amsterdam. Met
een programma dat Text-Fabric heet kun je in die geannoteerde tekst zoeken: u
beschrijft een patroon, en het geeft alle plaatsen waar dat patroon voorkomt.
Onderaan staat hoe u de zoekopdrachten zelf draait.

## Het antwoord dat diep ingebed ligt

De ruggengraat van de analyse is de vorm van Sauls antwoord: het ligt
ongewoon diep verstopt in de zinsbouw. Verhalend proza rijgt zijn
gebeurtenissen meestal naast elkaar: eerst dit, toen dat, daarna dat. Sauls
antwoord doet het anders. De zinnen liggen in elkaar geschoven, de ene
bewering genest onder de andere, tot op de diepste laag waar een bijzin onder
een bijzin onder een hoofdzin hangt. Die gelaagdheid is de grammaticale
tegenhanger van een antwoord dat omwegen neemt. Wie filtert en inkapselt,
schuift zijn zinnen in elkaar.

**Wat je vindt als je telt.** Vijf keer een zin op de diepste
inbeddingslaag, waar een stuk verhaal van deze lengte er bijna nooit één
draagt.

**De zoekopdracht.**

```
clause_atom tab=9
```

In een volledige Text-Fabric-omgeving levert dit in 1 Samuël 10:14-16 vijf
treffers op. (`tab` is het etiket voor de inbeddingsdiepte; `tab=9` zoekt de
zinsdelen op de negende, diepste laag.) Deze meting kunt u in de zoekbrowser
niet draaien: het kenmerk `tab` zit niet in de geëxporteerde gegevens. De
twee zoekopdrachten hieronder kunt u wel zelf controleren.

**Staat dit al in de commentaren?** Nieuw (`novel`: niet aangetroffen in de
geraadpleegde bronnen). Het stroeve van deze verzen is gevoeld en kwalitatief
beschreven. Bodner (*1 Samuel: A Narrative Commentary*) noemt de "slightly
awkward syntax" van Sauls antwoord en leest er omzichtigheid in, een neef die
voorzichtig formuleert tegenover zijn oom. Long (*1 and 2 Samuel*) signaleert
vaker dat "awkward syntax" in de Hebreeuwse tekst in vertaling wegvalt, maar
past dat elders toe, op emotie of haast. Auld (*I & II Samuel*) geeft
onderschikking visueel weer met inspringing, zonder de diepte van dit
fragment als opvallend te benoemen. De stap van "het leest stroef" naar een
telbare inbeddingsdiepte tegenover de rest van de bijbel staat er niet; dat
is wat hier bijkomt. Het patroon houdt stand hoe je ook vergelijkt (met de
hele bijbel, met hetzelfde boek, met hetzelfde genre).

## De inhoud die als verslag wordt verpakt

Naast de diepte draagt ook de verpakking van de inhoud de ontwijking. De
woorden komen telkens ingepakt onder een werkwoord van vertellen, als een
"dat"-zin die onder dat werkwoord hangt: hij vertelde óns dat de ezelinnen
gevonden waren. Die verpakking is precies wat doseren mogelijk maakt: wie
iets navertelt, kiest wat hij eronder hangt en wat hij weglaat. De "dat"-zin
is de plek waar Saul de ezelinnen onderbrengt en waar het koningschap
ontbreekt.

**Wat je vindt als je telt.** Drie van die ingebedde object-zinnen, waar een
stuk van deze lengte er gemiddeld vrijwel geen draagt.

**De zoekopdracht.**

```
clause rela=Objc
```

In 1 Samuël 10:14-16 levert dit drie treffers op. (`rela=Objc` zoekt zinnen
die grammaticaal de rol van lijdend voorwerp vervullen: de "dat"-zin onder
een werkwoord van zeggen of vertellen.)

**Staat dit al in de commentaren?** Deels bekend (`partially_covered`). De
commentaren dekken het thema; de meting komt erbij. Dat Saul een selectief
antwoord geeft, is breed gezien: Bodner (*1 Samuel: A Narrative Commentary*)
leest het als taal die dienstdoet als schuilplaats; van Wijk-Bos (*The Road
to Kingship*) spreekt van beknopte antwoorden die de hoofdzaak weglaten;
McCarter (*I Samuel*) noteert de gerapporteerde structuur ("he told us
that…"). Niemand telt de object-zin-dichtheid als grammaticaal afwijkende
verpakking; dat is de toevoeging. Het patroon houdt ook hier stand tegen elke
vergelijking.

## Aan wie wel, aan wie niet

Het scherpste spoor: elke keer dat er verteld wordt, draagt het werkwoord een
ontvanger met zich mee. Vertel het mij, vraagt de oom. Hij vertelde óns de
ezelinnen. Hem vertelde hij het koningschap niet. Hetzelfde werkwoord, drie
keer een ander adres (aan mij, aan ons, aan hem niet), en de ontwijking zit
in dat laatste. Het vertellen is hier een gerichte transactie, en de
zoekopdracht bindt het onthullingswerkwoord aan precies die ontvanger.

**Wat je vindt als je telt.** Drie keer het werkwoord "vertellen" (in de
nadrukkelijke, onthullende vorm) samen met een ontvanger-voorzetsel dat een
persoon aanwijst.

**De zoekopdracht.**

```
clause
  word lex=NGD[ vs=hif
  word lex=L prs_ps=p1|p2|p3
```

In 1 Samuël 10:14-16 levert dit drie treffers op. (De vreemde tekens in
`lex=…` zijn de standaard-schrijfwijze waarmee de database Hebreeuwse woorden
noteert: u hoeft ze niet te begrijpen, alleen letterlijk over te typen.
`NGD[` is *higgid*, "vertellen/onthullen"; `vs=hif` beperkt het tot de
onthullende werkwoordsvorm; `L` is het voorzetsel *le*, "aan", en
`prs_ps=p1|p2|p3` eist dat daar een persoonlijk achtervoegsel aan vastzit:
"aan mij", "aan ons", "aan hem". Het rapport noteert dezelfde voorwaarde in
de vorm `prs#absent`, die alleen in een volledige Text-Fabric-omgeving
werkt; binnen deze passage geven beide vormen dezelfde drie treffers.) Dit is
een gerichte zoekslag naar een vermoeden, exploratief: zij wijst het
adresspoor aan, en of de verteller het zo bedoelde blijft een open vraag.

**Staat dit al in de commentaren?** Deels bekend (`partially_covered`). De
afzonderlijke ontvangers zijn gezien: McCarter (*I Samuel*) bespreekt het
"vertel mij toch" en de ironie dat de werkelijke onthulling juist vóór Saul
bestemd was; Long (*1 and 2 Samuel*) noteert in technische noten de
verschuiving van "ons" naar "hem niet". De grammaticale binding van het
onthullingswerkwoord aan zijn ontvanger, als telbaar spoor van wie-wel en
wie-niet, staat er niet als zodanig.

## Hoe draai je deze zoekopdrachten zelf

De zoekregels hierboven kunt u zonder installatie draaien in de
[zoekbrowser](https://wmotte.github.io/OTpatterns_public/): kies de passage
1 Samuël 10:14-16, plak een zoekregel in het zoekvak en tel de treffers.
Komt het aantal overeen met het getal hierboven, dan heeft u de waarneming
gereproduceerd. De diepte-meting (`clause_atom tab=9`) vormt de
uitzondering: die vereist de volledige omgeving hieronder.

Wie de hele Hebreeuwse bijbel wil doorzoeken, gebruikt de volledige
Text-Fabric-omgeving (de zoekregels zijn geschreven voor Text-Fabric; de
website shebanq werkt met een andere zoektaal):

1. Installeer Text-Fabric: `pip install text-fabric` (eenmalig; vereist
   Python).
2. Start de zoekbrowser: `text-fabric ETCBC/bhsa`. De eerste keer haalt het
   programma de BHSA-gegevens op; daarna opent een zoekvenster in uw browser.
3. Plak een zoekregel in het zoekvak, voer hem uit en blader naar de treffers
   in 1 Samuël 10:14-16.

## Wat de cijfers niet bewijzen

Een grammaticaal patroon is geen bewezen bedoeling van de schrijver. Dat het
antwoord diep is ingebed, dat de inhoud als object-zin verpakt zit, of dat
het vertellen telkens een ontvanger draagt, is meetbaar; dat Saul dit zó
heeft gewild, is de lezing die het rapport aanbiedt. Het monster is bovendien
klein (drie verzen, vijf treffers bij de stevigste vondst, drie bij de andere
twee), dus de tellingen rusten op weinig gevallen en zijn gevoelig voor een
enkele lange zin. Het adresspoor komt daarbij uit een exploratieve zoekslag
en draagt de lezing als aanwijzing. De stevigste grond onder de analyse is de
gemeten inbeddingsdiepte; de object-zinnen en het ontvanger-spoor lezen mee.

## Genoemde commentaren

- Auld, *I & II Samuel*
- Bodner, *1 Samuel: A Narrative Commentary*
- Long, *1 and 2 Samuel*
- McCarter, *I Samuel*
- van Wijk-Bos, *The Road to Kingship*
