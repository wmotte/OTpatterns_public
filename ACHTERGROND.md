# Achtergrond: ETCBC/BHSA via Text-Fabric

Dit project gebruikt **ETCBC/BHSA**, een digitale editie van de Hebreeuwse en Aramese tekst van het Oude Testament met taalkundige annotaties. **Text-Fabric** maakt die gegevens doorzoekbaar.

Wie gewend is aan een gewone bijbeltekst, ziet eerst woorden, verzen en hoofdstukken. Wie met BHSA werkt, ziet daarnaast een tweede laag: woordsoorten, lexemen, werkwoordsvormen, grammaticale status, syntactische functies, frasen, clauses, tekstsoorten, relaties tussen eenheden en soms ook informatie over discourse. Met die annotaties kun je patronen in de tekst opzoeken en controleren.

## ETCBC en BHSA

**ETCBC** staat voor het *Eep Talstra Centre for Bible and Computer* aan de Vrije Universiteit Amsterdam. Het centrum is voortgekomen uit de Amsterdamse WIVU-traditie, waarin de Hebreeuwse Bijbel systematisch werd gecodeerd voor computerondersteunde syntactische analyse. Het doel was haar grammaticale en syntactische structuur zo precies mogelijk toegankelijk te maken voor onderzoek. De uitleg zelf bleef mensenwerk.

**BHSA** staat voor *Biblia Hebraica Stuttgartensia Amstelodamensis*. De tekstbasis is de *Biblia Hebraica Stuttgartensia*. "Amstelodamensis" verwijst naar de Amsterdamse annotatietraditie. In Text-Fabric-vorm is BHSA de Hebrew Bible Database met ETCBC-annotaties: de Hebreeuwse en Aramese tekst van het Oude Testament, verrijkt met formele taalkundige informatie.

Een gewone digitale bijbel kan je vertellen: hier staat dit woord in dit vers. BHSA kan daarnaast vragen beantwoorden als:

- welk lexeem ligt onder deze woordvorm?
- is dit woord een zelfstandig naamwoord, werkwoord, partikel of naam?
- staat het woord in status constructus?
- welke verbale stam en vorm zijn geannoteerd?
- hoort deze frase syntactisch bij subject, object, complement, predicaat of fronting?
- wat voor type clause is dit?
- staat deze clause in narratief, discours of directe rede?
- hoe diep is een clause-atom ingebed?
- welke eenheden zijn hiërarchisch of relationeel met elkaar verbonden?

BHSA beschrijft daarmee de grammaticale opbouw van de tekst. Commentaar en theologische duiding blijven het werk van de lezer. De annotaties zijn wetenschappelijke keuzes en kunnen fouten bevatten. Doordat die keuzes expliciet zijn, kun je ze controleren en hergebruiken in tellingen en vergelijkingen.

## Text-Fabric

**Text-Fabric** is de laag waardoor de BHSA-data lokaal en programmeerbaar wordt. Je kunt SHEBANQ zien als de webinterface: handig om te lezen, queries te schrijven, resultaten te bekijken en patronen met anderen te delen. Met Text-Fabric haal je dezelfde data naar je eigen omgeving en verwerk je haar met Python.

Text-Fabric ziet een tekst als een netwerk van objecten. Sommige objecten zijn herkenbaar voor elke bijbellezer: boek, hoofdstuk, vers, woord. Andere zijn taalkundiger: phrase, clause, clause_atom. Aan die objecten hangen features. Een feature is een klein stukje informatie: `lex` voor lexeem, `sp` voor woordsoort, `vt` voor verbale vorm, `function` voor frasefunctie, `typ` voor clause- of frasetype, `language` voor taal, enzovoort.

Text-Fabric schrijft geen vraagstelling voor. Je begint door de database te laden:

```python
from tf.app import use
A = use("ETCBC/bhsa", version="2021")
```

Daarna kun je woorden, verzen, clauses of hele boeken opvragen, features lezen, door de niveaus heen bewegen, zoektemplates schrijven, tellingen maken en resultaten exporteren naar JSON, CSV, Pandas of R. Je kunt de analyse opnemen in een script, pipeline of rapport, zodat anderen haar kunnen herhalen.

## Annotatielagen

BHSA bewaart meerdere lagen van de tekst tegelijk.

Op woordniveau vind je bijvoorbeeld informatie over het lexeem, de woordsoort, grammaticale kenmerken, taal, naamtype, verbale vorm, stam, status en pronominale suffixen. Dat helpt bij vragen naar herhaling, zeldzame woorden, werkwoordsvormen, constructusketens, ontkenning of godsbenoemingen.

Op fraseniveau gaat het om syntactische bouw: is een frase subject, object, complement, predicaat, tijdsbepaling, plaatsbepaling, vooropplaatsing? Dat is belangrijk omdat veel exegetische vragen niet bij losse woorden beginnen, maar bij de rol die een woordgroep in de zin speelt.

Op clauseniveau komt de zins- en discourse-structuur in beeld. Je kunt kijken naar verbale of nominale clauses, narratieve ketens, directe rede, ondergeschiktheid, inbedding, clause-relaties en domeinen. Dat maakt vragen mogelijk over tempo, stijl, betoog, narratieve ruggengraat, gebedstaal, poëtische ordening of juridische formulering.

Op relationeel niveau kun je eenheden met elkaar verbinden. Bijvoorbeeld: welke clause hangt onder welke moederstructuur? Welke clause-atoms staan naast elkaar? Waar is er sprake van syntactische herhaling? Zulke relaties maken het mogelijk om naast "woorden met eigenschap X" ook te zoeken naar patronen in de bouw van een passage.

Deze lagen maken tellingen mogelijk waarin ook de opbouw van de tekst wordt meegenomen.

## Vragen aan het corpus

Een eenvoudige vraag is: hoe vaak komt een bepaald lexeem voor in een passage, en hoe vaak in de rest van het Oude Testament? Commentaren wijzen veel "sleutelwoorden" aan op grond van close reading. Met BHSA kun je controleren of zo'n sleutelwoord ook corpusstatistisch opvallend is.

Een tweede type vraag gaat over grammatica. Heeft een passage relatief veel nominale clauses? Veel ontkenningen? Veel constructusvormen? Veel vrouwelijke suffixen? Veel imperatieven? Veel Aramees binnen een Hebreeuwse context? Zulke vragen kunnen exegetisch scherp worden wanneer ze tegen de rest van het corpus worden gehouden.

Een derde type vraag gaat over syntaxis. Waar staan objecten? Welke werkwoorden worden zonder expliciet object gebruikt? Hoe zwaar zijn verbale clauses gevuld met complementen? Is er veel fronting? Zijn er naast elkaar staande clauses met hetzelfde functiepatroon? Is de passage vooral paratactisch of juist sterk ingebed?

Een vierde type vraag gaat over discourse. Waar begint directe rede? Welke werkwoorden introduceren spraak? Verschuift de grammaticale persoon? Is een passage opvallend dicht in pronominale verwijzing? Wordt een tekst gedragen door "hij/zij", door "jij", door "wij", of door suffixen die relaties markeren?

Je kunt ook negatieve claims toetsen, zoals: "dit patroon dat je zou verwachten, komt hier opvallend weinig voor". Afwezigheid is interpretatief riskant. Corpusdata helpt bepalen hoe uitzonderlijk het ontbreken van een patroon is.

De engine achter dit project maakt dat praktisch door eerst een corpusbrede baseline te bouwen. Daarna wordt een passage gelezen tegen een referentieprofiel: wat is normaal voor het corpus, voor het boek, voor het genre of voor de taal? Een bevinding is dan een gecontroleerde afwijking: observed versus expected, met voorbeelden en provenance.

## Annotatie, vergelijking en reproduceerbaarheid

BHSA heeft annotaties op meerdere niveaus. Veel bijbeldatabases hebben morfologie: woordsoort, lexeem, soms parsing. BHSA gaat verder door frase- en clauseniveaus, syntactische functies, relaties en tekststructuur mee te nemen. Daardoor kun je vragen stellen die tussen grammatica en exegese in zitten: "wat doet deze woordgroep in deze clause?" en "hoe is deze passage opgebouwd?".

De annotaties bestrijken het hele corpus. Je kunt een passage vergelijken met de hele Hebreeuws-Aramese OT-canon. Daarmee krijgt een exegetische leesindruk een expliciete vergelijkingsbasis. Een lezer kan denken: "dit voelt opvallend." De database kan helpen vragen: opvallend ten opzichte van wat? Ten opzichte van dit boek? Van narratief proza? Van poëzie? Van Hebreeuwse passages in het algemeen? Sommige leesindrukken houden in die vergelijking geen stand. Andere vragen om verdere uitleg.

Je kunt bovendien vastleggen welke versie van de data je gebruikt. BHSA bestaat in meerdere versies, en Text-Fabric maakt het mogelijk om expliciet te zeggen met welke versie je hebt gewerkt. Een rapport dat zegt "BHSA 2021, deze query, deze telling, deze voorbeelden" is controleerbaarder dan een algemene opmerking als "dit komt bijna nergens voor".

SHEBANQ en Text-Fabric verbinden zo close reading met corpusonderzoek. SHEBANQ houdt de tekst leesbaar en maakt queryresultaten deelbaar. Text-Fabric maakt dezelfde data geschikt voor scripts, statistiek, exports en herhaalbare workflows.

In de Amsterdamse traditie achter de data gaat formele waarneming vooraf aan duiding. Syntax first betekent dat interpretatie sterker wordt wanneer ze eerst door formele waarneming heen is gegaan, ook al verklaart syntaxis lang niet alles.

## De rol van het taalmodel

Een taalmodel kan snel verbanden formuleren, maar ook aannemelijk klinkende beweringen doen zonder controleerbare basis. Met BHSA/Text-Fabric kun je de gegevens waarop zulke beweringen berusten opzoeken en tellen.

In dit project voert de Python-laag de metingen uit. Zij zoekt de passage op, laadt BHSA, bouwt of gebruikt een referentieprofiel, voert detectoren uit en slaat de meetgegevens op. De LLM-laag mag daarna selecteren, ordenen en uitleggen, maar zij mag geen patronen verzinnen. Een goede rapportage zegt steeds:

```text
Dit is de claim.
Dit is de telling.
Dit is de featurebasis.
Dit zijn voorbeelden.
Dit bewijst het niet.
Dit is de confidence.
```

Door deze rolverdeling blijft elke kwantitatieve claim herleidbaar tot een meting.

## Voorbeelden van vragen die BHSA mogelijk maakt

Een commentaar kan zeggen dat een tekst "poëtisch" klinkt. BHSA kan helpen kijken of er inderdaad veel syntactisch parallellisme, nominale dichtheid, zeldzame lexemen of constructusketens zijn.

Een vertaler kan zich afvragen of een woord werkelijk een sleutelwoord is. BHSA kan laten zien of het lexeem in de passage veel dichter voorkomt dan corpusbreed verwacht, en of die herhaling over meerdere verzen verspreid is of alleen in één cluster zit.

Een prediker kan merken dat een passage veel aanspreking bevat. BHSA kan suffixen, zelfstandige pronomina en persoonsvormen tellen, en zichtbaar maken waar de tekst van derde persoon naar tweede persoon verschuift.

Een exegeet kan vermoeden dat een verhaal traag of zwaar vertelt. BHSA kan complementaantallen, clause-inbedding, fronting en discourse-domeinen onderzoeken.

Een onderzoeker kan een oude claim willen controleren: "deze constructie komt nergens anders voor." Met een expliciete Text-Fabric- of SHEBANQ-query wordt zo'n claim veel beter toetsbaar.

## Van meting naar duiding

Dit project zoekt naar anomalieën die bij het lezen onopgemerkt kunnen blijven. Een anomalie betekent hier alleen dat een passage meetbaar afwijkt van een referentieprofiel. Zo’n afwijking kan exegetisch van belang zijn, maar ook samenhangen met genre, kleine aantallen of een eigenschap van het boek. De vergelijking helpt bepalen welke vraag verdere uitleg verdient.

Een goede bevinding is daarom een beginpunt:

```text
Waarom gebruikt deze passage juist deze grammaticale vorm zo vaak?
Waarom ontbreekt hier wat elders normaal is?
Waarom is deze spraakintroductie afwijkend?
Waarom is de participantverwijzing zo dicht?
Waarom is dit lexeem juist hier gebald?
```

De telling geeft aanleiding tot zulke exegetische vragen en beantwoordt ze nog niet.

## Grenzen en voorzichtigheid

De annotaties zijn formeel en taalkundig. Zij beschrijven grammatica, syntaxis en structuur. Betekenis, theologie, historische reconstructie en literaire intentie liggen buiten hun bereik. Een feature als `function=Frnt` kan fronting aanwijzen, maar niet automatisch zeggen of de functie focus, contrast, topicalisatie of retorische spanning is.

Sommige features zijn harder dan andere. Taal, woordsoort, status, werkwoordsvorm of ontkenningspartikel zijn doorgaans directer te gebruiken dan discourse-labels of semantische categorieën. Een verantwoord rapport moet daarom confidence expliciet maken en interpretatieve claims aan controleerbare gegevens koppelen.

Korte passages vragen extra voorzichtigheid. Drie treffers kunnen procentueel enorm lijken. Daarom moeten waargenomen en verwachte aantallen samen met voorbeelden zichtbaar blijven. Pas dan kan de lezer de telling beoordelen.

BHSA is bovendien een database van de Hebreeuwse en Aramese tekst van het Oude Testament. Nieuwtestamentische passages vallen buiten de reikwijdte. Wie met de data publiceert of software bouwt, moet ook rekening houden met licentie en attributie. De BHSA-data zelf valt onder CC BY-NC 4.0. Code en afgeleide tools kunnen een andere licentie hebben.

## Werkwijze

Dit project zoekt exegetische vragen op basis van formele tekstkenmerken. De werkwijze bestaat uit de volgende stappen:

1. kies een Oudtestamentische passage;
2. resolveer haar naar BHSA-nodes;
3. vergelijk haar patronen met corpusbrede en gestratificeerde baselines;
4. selecteer alleen bevindingen die controleerbare evidence hebben;
5. formuleer exegetische of homiletische vragen in gewoon Nederlands;
6. houd bij elke claim zichtbaar wat data is en wat duiding is.

De lezer formuleert de vragen en beoordeelt de duiding. De meetgegevens, queries en voorbeelden maken de kwantitatieve claims controleerbaar.

## Bronnen en verder lezen

- ETCBC/BHSA documentatie: https://etcbc.github.io/bhsa/
- BHSA GitHub-repository: https://github.com/ETCBC/bhsa
- BHSA feature-documentatie: https://etcbc.github.io/bhsa/features/0_home/
- Text-Fabric documentatie: https://annotation.github.io/text-fabric/tf/
- ETCBC data-overzicht: https://etcbc.nl/data/
- SHEBANQ: https://shebanq.ancient-data.org/
- Dirk Roorda, "Coding the Hebrew Bible", *Research Data Journal for the Humanities and Social Sciences* 3/1 (2018), 27-41. DOI: https://doi.org/10.1163/24523666-01000011
- Cody Kingham & Wido van Peursen, "The ETCBC Database of the Hebrew Bible", *Journal for Semitics* 27/1 (2018). DOI: https://doi.org/10.25159/1013-8471/2974
- Eep Talstra, "Approaching the Mountain of Exodus 19: Thou Shalt Explore Syntax First", *HIPHIL Novum* 3/1 (2016), 2-24. DOI: https://doi.org/10.7146/hn.v3i1.142160
