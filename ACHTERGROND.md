# Achtergrond: ETCBC/BHSA via Text-Fabric

Dit project staat op de schouders van een bijzonder soort bijbeltekst: een digitale editie van de Hebreeuwse Bijbel die tegelijk een zorgvuldig geannoteerde onderzoeksdatabase is. De naam die je daarbij steeds tegenkomt is **ETCBC/BHSA**. In de praktijk betekent dat: de Hebreeuws-Aramese tekst van het Oude Testament, verrijkt met taalkundige informatie op meerdere niveaus, toegankelijk gemaakt via **Text-Fabric**.

Wie gewend is aan een gewone bijbeltekst, ziet eerst woorden, verzen en hoofdstukken. Wie met BHSA werkt, ziet daarnaast een tweede laag: woordsoorten, lexemen, werkwoordsvormen, grammaticale status, syntactische functies, frasen, clauses, tekstsoorten, relaties tussen eenheden en soms ook informatie over discourse. Dat klinkt technisch, maar de intuïtie is eenvoudig: de tekst krijgt handvatten waardoor je patronen kunt controleren die anders verborgen blijven.

Deze achtergrondtekst legt uit wat ETCBC/BHSA is, wat Text-Fabric toevoegt, wat je ermee kunt doen en waarom deze combinatie tamelijk uniek is voor exegese, vertaling, taalkunde en homiletische verkenning.

## Eerst: wat is ETCBC/BHSA?

**ETCBC** staat voor het *Eep Talstra Centre for Bible and Computer* aan de Vrije Universiteit Amsterdam. Het centrum is voortgekomen uit de Amsterdamse WIVU-traditie, waarin de Hebreeuwse Bijbel systematisch werd gecodeerd voor computerondersteunde syntactische analyse. Het doel was haar grammaticale en syntactische structuur zo precies mogelijk toegankelijk te maken voor onderzoek; de uitleg zelf bleef mensenwerk.

**BHSA** staat voor *Biblia Hebraica Stuttgartensia Amstelodamensis*. De naam zegt eigenlijk al veel. De tekstbasis is de *Biblia Hebraica Stuttgartensia*; "Amstelodamensis" verwijst naar de Amsterdamse annotatietraditie. In Text-Fabric-vorm is BHSA de Hebrew Bible Database met ETCBC-annotaties: de Hebreeuwse en Aramese tekst van het Oude Testament, verrijkt met formele taalkundige informatie.

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

BHSA is daarmee vooral een zeer rijke grammaticale kaart van de tekst; commentaar en theologische duiding blijven het werk van de lezer. Die kaart kan fouten bevatten, en de annotaties zijn wetenschappelijke keuzes. Maar juist omdat die keuzes expliciet en herbruikbaar zijn, kun je ze controleren, tellen, vergelijken en bevragen.

## Wat doet Text-Fabric?

**Text-Fabric** is de laag waardoor de BHSA-data lokaal en programmeerbaar wordt. Je kunt SHEBANQ zien als de webinterface: handig om te lezen, queries te schrijven, resultaten te bekijken en patronen met anderen te delen. Text-Fabric is de onderzoekswerkbank: je haalt dezelfde data naar je eigen omgeving en verwerkt haar met Python.

Text-Fabric ziet een tekst als een netwerk van objecten. Sommige objecten zijn herkenbaar voor elke bijbellezer: boek, hoofdstuk, vers, woord. Andere zijn taalkundiger: phrase, clause, clause_atom. Aan die objecten hangen features. Een feature is een klein stukje informatie: `lex` voor lexeem, `sp` voor woordsoort, `vt` voor verbale vorm, `function` voor frasefunctie, `typ` voor clause- of frasetype, `language` voor taal, enzovoort.

Het mooie is dat Text-Fabric de vraagstelling openlaat. Je kunt klein beginnen:

```python
from tf.app import use
A = use("ETCBC/bhsa", version="2021")
```

Daarna kun je woorden, verzen, clauses of hele boeken opvragen, features lezen, door de niveaus heen bewegen, zoektemplates schrijven, tellingen maken en resultaten exporteren naar JSON, CSV, Pandas of R. Voor een exegetische workflow is vooral dit belangrijk: de analyse kan reproduceerbaar onderdeel worden van een script, pipeline of rapport.

## Hoe "ziet" BHSA de tekst?

BHSA bewaart meerdere lagen van de tekst tegelijk.

Op woordniveau vind je bijvoorbeeld informatie over het lexeem, de woordsoort, grammaticale kenmerken, taal, naamtype, verbale vorm, stam, status en pronominale suffixen. Dat helpt bij vragen naar herhaling, zeldzame woorden, werkwoordsvormen, constructusketens, ontkenning of godsbenoemingen.

Op fraseniveau gaat het om syntactische bouw: is een frase subject, object, complement, predicaat, tijdsbepaling, plaatsbepaling, vooropplaatsing? Dat is belangrijk omdat veel exegetische vragen niet bij losse woorden beginnen, maar bij de rol die een woordgroep in de zin speelt.

Op clauseniveau komt de zins- en discourse-structuur in beeld. Je kunt kijken naar verbale of nominale clauses, narratieve ketens, directe rede, ondergeschiktheid, inbedding, clause-relaties en domeinen. Dat maakt vragen mogelijk over tempo, stijl, betoog, narratieve ruggengraat, gebedstaal, poëtische ordening of juridische formulering.

Op relationeel niveau kun je eenheden met elkaar verbinden. Bijvoorbeeld: welke clause hangt onder welke moederstructuur? Welke clause-atoms staan naast elkaar? Waar is er sprake van syntactische herhaling? Zulke relaties maken het mogelijk om naast "woorden met eigenschap X" ook te zoeken naar patronen in de bouw van een passage.

Dat is de reden waarom deze database zo waardevol is. Zij maakt de tekst telbaar en bewaart tegelijk haar opbouw.

## Wat kun je ermee doen?

Je kunt BHSA/Text-Fabric gebruiken voor heel eenvoudige én heel complexe vragen.

Een eenvoudige vraag is: hoe vaak komt een bepaald lexeem voor in een passage, en hoe vaak in de rest van het Oude Testament? Dat is al nuttig. Veel "sleutelwoorden" worden in commentaren aangewezen op grond van close reading. Met BHSA kun je controleren of zo'n sleutelwoord ook corpusstatistisch opvallend is.

Een tweede type vraag gaat over grammatica. Heeft een passage relatief veel nominale clauses? Veel ontkenningen? Veel constructusvormen? Veel vrouwelijke suffixen? Veel imperatieven? Veel Aramees binnen een Hebreeuwse context? Zulke vragen kunnen exegetisch scherp worden wanneer ze tegen de rest van het corpus worden gehouden.

Een derde type vraag gaat over syntaxis. Waar staan objecten? Welke werkwoorden worden zonder expliciet object gebruikt? Hoe zwaar zijn verbale clauses gevuld met complementen? Is er veel fronting? Zijn er naast elkaar staande clauses met hetzelfde functiepatroon? Is de passage vooral paratactisch of juist sterk ingebed?

Een vierde type vraag gaat over discourse. Waar begint directe rede? Welke werkwoorden introduceren spraak? Verschuift de grammaticale persoon? Is een passage opvallend dicht in pronominale verwijzing? Wordt een tekst gedragen door "hij/zij", door "jij", door "wij", of door suffixen die relaties markeren?

Een vijfde type vraag is methodisch misschien het meest interessant: je kunt ook negatieve claims toetsen, zoals: "dit patroon dat je zou verwachten, komt hier opvallend weinig voor". Dat is belangrijk voor exegese. Afwezigheid is vaak interpretatief riskant, maar corpusdata kan laten zien wanneer een afwezigheid niet zomaar toevallig is.

De engine achter dit project maakt dat praktisch door eerst een corpusbrede baseline te bouwen. Daarna wordt een passage gelezen tegen een referentieprofiel: wat is normaal voor het corpus, voor het boek, voor het genre of voor de taal? Een bevinding is dan een gecontroleerde afwijking: observed versus expected, met voorbeelden en provenance.

## Wat is er uniek aan?

Het unieke zit in de combinatie van eigenschappen.

Ten eerste is BHSA **diep geannoteerd**. Veel bijbeldatabases hebben morfologie: woordsoort, lexeem, soms parsing. BHSA gaat verder door frase- en clauseniveaus, syntactische functies, relaties en tekststructuur mee te nemen. Daardoor kun je vragen stellen die tussen grammatica en exegese in zitten: "wat doet deze woordgroep in deze clause?" en "hoe is deze passage opgebouwd?".

Ten tweede is BHSA **corpusbreed**. Je kunt een passage vergelijken met de hele Hebreeuws-Aramese OT-canon. Dat verandert de aard van exegetische intuïtie. Een lezer kan denken: "dit voelt opvallend." De database kan helpen vragen: opvallend ten opzichte van wat? Ten opzichte van dit boek? Van narratief proza? Van poëzie? Van Hebreeuwse passages in het algemeen? Sommige intuïties sneuvelen in die vergelijking; de intuïties die overblijven worden interessanter.

Ten derde is de data **versieerbaar en reproduceerbaar**. BHSA bestaat in meerdere versies, en Text-Fabric maakt het mogelijk om expliciet te zeggen met welke versie je hebt gewerkt. Dat is belangrijk voor wetenschappelijke eerlijkheid. Een rapport dat zegt "BHSA 2021, deze query, deze telling, deze voorbeelden" is controleerbaarder dan een algemene opmerking als "dit komt bijna nergens voor".

Ten vierde vormt de combinatie van SHEBANQ en Text-Fabric een brug tussen **close reading** en **distant reading**. SHEBANQ houdt de tekst leesbaar en maakt queryresultaten deelbaar. Text-Fabric maakt dezelfde data geschikt voor scripts, statistiek, exports en herhaalbare workflows.

Ten vijfde past de database bij een gezonde exegetische volgorde: eerst waarnemen, dan duiden. Dat is de geest van de Amsterdamse traditie achter de data. Syntax first betekent dat interpretatie sterker wordt wanneer ze eerst door formele waarneming heen is gegaan, ook al verklaart syntaxis lang niet alles.

## Wat maakt dit anders dan een LLM die de Bijbel uitlegt?

Een LLM kan snel verbanden formuleren, maar zij kan ook soepel klinkende beweringen maken zonder controleerbare basis. BHSA/Text-Fabric werkt anders: de database telt, labelt, verbindt en geeft voorbeelden. Juist daarom is zij waardevol naast een LLM.

In dit project heeft de Python-laag daarom de harde rol. Zij resolveert de passage, laadt BHSA, bouwt of gebruikt een baseline, draait detectoren en schrijft evidence. De LLM-laag mag daarna selecteren, ordenen en uitleggen, maar zij mag geen patronen verzinnen. Een goede rapportage zegt steeds:

```text
Dit is de claim.
Dit is de telling.
Dit is de featurebasis.
Dit zijn voorbeelden.
Dit bewijst het niet.
Dit is de confidence.
```

Die scheiding is wezenlijk; de kracht van de aanpak zit in deze rolverdeling.

## Voorbeelden van vragen die BHSA mogelijk maakt

Een commentaar kan zeggen dat een tekst "poëtisch" klinkt. BHSA kan helpen kijken of er inderdaad veel syntactisch parallellisme, nominale dichtheid, zeldzame lexemen of constructusketens zijn.

Een vertaler kan zich afvragen of een woord werkelijk een sleutelwoord is. BHSA kan laten zien of het lexeem in de passage veel dichter voorkomt dan corpusbreed verwacht, en of die herhaling over meerdere verzen verspreid is of alleen in één cluster zit.

Een prediker kan merken dat een passage veel aanspreking bevat. BHSA kan suffixen, zelfstandige pronomina en persoonsvormen tellen, en zichtbaar maken waar de tekst van derde persoon naar tweede persoon verschuift.

Een exegeet kan vermoeden dat een verhaal traag of zwaar vertelt. BHSA kan complementaantallen, clause-inbedding, fronting en discourse-domeinen onderzoeken.

Een onderzoeker kan een oude claim willen controleren: "deze constructie komt nergens anders voor." Met een expliciete Text-Fabric- of SHEBANQ-query wordt zo'n claim veel beter toetsbaar.

## De kracht van "niet meteen interpreteren"

De vruchtbaarste vraag aan BHSA is vaak: laat zien wat ik nog niet zie.

Dat is ook de reden waarom dit project zoekt naar anomalieën. Een anomalie betekent hier alleen dat een passage meetbaar afwijkt van een referentieprofiel. Soms is dat exegetisch belangrijk. Soms is het genre. Soms is het een effect van kleine aantallen. Soms blijkt het een gewone eigenschap van het boek. De database verbetert dus vooral de eerste vraag.

Een goede bevinding is daarom een beginpunt:

```text
Waarom gebruikt deze passage juist deze grammaticale vorm zo vaak?
Waarom ontbreekt hier wat elders normaal is?
Waarom is deze spraakintroductie afwijkend?
Waarom is de participantverwijzing zo dicht?
Waarom is dit lexeem juist hier gebald?
```

Dat soort vragen is vaak vruchtbaarder dan het zoveelste overzicht van bekende thema's.

## Grenzen en voorzichtigheid

BHSA is rijk en heeft tegelijk duidelijke grenzen.

De annotaties zijn formeel en taalkundig. Zij zeggen veel over grammatica, syntaxis en structuur; betekenis, theologie, historische reconstructie en literaire intentie liggen buiten hun bereik. Een feature als `function=Frnt` kan fronting aanwijzen, maar niet automatisch zeggen of de functie focus, contrast, topicalisatie of retorische spanning is.

Sommige features zijn harder dan andere. Taal, woordsoort, status, werkwoordsvorm of ontkenningspartikel zijn doorgaans directer te gebruiken dan discourse-labels of semantische categorieën. Een verantwoord rapport moet daarom confidence expliciet maken en interpretatieve claims aan controleerbare gegevens koppelen.

Korte passages vragen extra voorzichtigheid. Drie treffers kunnen procentueel enorm lijken. Daarom moeten observed, expected en voorbeelden steeds samen zichtbaar blijven; pas in die combinatie wordt een telling controleerbaar.

BHSA is bovendien een database van de Hebreeuwse en Aramese tekst van het Oude Testament. Nieuwtestamentische passages vallen buiten de reikwijdte. Wie met de data publiceert of software bouwt, moet ook rekening houden met licentie en attributie. De BHSA-data zelf valt onder CC BY-NC 4.0; code en afgeleide tools kunnen een andere licentie hebben.

## Waarom dit voor dit project belangrijk is

Dit project wil vragen vinden die uit de vorm van de tekst zelf opkomen. Daarvoor is BHSA bijzonder geschikt.

De workflow is eenvoudig in bedoeling, ook als de techniek onder de motorkap complex is:

1. kies een Oudtestamentische passage;
2. resolveer haar naar BHSA-nodes;
3. vergelijk haar patronen met corpusbrede en gestratificeerde baselines;
4. selecteer alleen bevindingen die controleerbare evidence hebben;
5. formuleer exegetische of homiletische vragen in gewoon Nederlands;
6. houd bij elke claim zichtbaar wat data is en wat duiding is.

Zo ontstaat een vorm van exegese die menselijk blijft, omdat de vragen en duiding nog steeds door lezers worden gevormd, en controleerbaar, omdat de claims teruggaan naar features, tellingen, queries en voorbeelden.

## Kort gezegd

ETCBC/BHSA via Text-Fabric is een manier om de Hebreeuwse Bijbel naast het lezen ook systematisch te bevragen. Zij maakt grammaticale en syntactische patronen zichtbaar op schaal van woord, frase, clause, vers, passage, boek en corpus. Zij is uniek omdat zij diepe annotatie, reproduceerbare data, programmeerbare toegang en deelbare querycultuur combineert.

Voor exegese betekent dat vooral beter kijken. De interpretatie blijft bij de lezer; de database helpt om langzamer, preciezer en eerlijker te vragen: wat staat hier eigenlijk, hoe is het gebouwd, en waarom valt juist dit patroon op?

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
