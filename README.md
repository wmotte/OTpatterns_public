![Infographic](infograph.png)

# OT-patronen

Publieke uitsnede van een project over Oudtestamentische exegese
met de ETCBC/BHSA-database via Text-Fabric.

## Het idee

Een bijbelpassage wijkt soms meetbaar af van de rest van het Oude Testament.
Een woord komt vaker terug dan je op grond van het corpus zou verwachten, een
persoonsvorm klapt halverwege om, de zinsbouw is opvallend diep ingebed, of er
staat ineens een Aramees woord tussen het Hebreeuws. Zulke afwijkingen zijn
vormsignalen in de tekst, die je als lezer makkelijk mist.

De achterliggende engine meet die signalen tegen een gestratificeerde
corpusreferentie (het hele OT, hetzelfde boek, hetzelfde genre, dezelfde taal)
en zet er een statistiek omheen: observed versus expected, een G²-toets,
FDR-correctie en een robuustheidslabel. De uitkomst wijst een passage aan en
levert het bewijs erbij; de conclusie trekt de lezer.

## Wat hier te vinden is

- **[De rapporten](rapporten/README.md)** (`rapporten/`): 23 dialogen uit
  1-2 Samuël, geanalyseerd op één as: machtsasymmetrie in spraak en de
  ontwijking of mislukte communicatie die daarbij hoort. Van Eli die Hanna's
  stille gebed voor dronkenschap aanziet (1 Sam. 1:12-18) tot de wijze vrouw
  van Abel die met Joab onderhandelt (2 Sam. 20:16-22). Per passage een rapport
  met metingen en query's, een toelichting in gewone taal, samengevatte
  nieuwheidsoordelen tegen de commentaarliteratuur en de volledige
  evidence-data. In 11 van de 23 dialogen staat minstens één observatie die de
  geraadpleegde commentaren niet bespreken; samen gaat het om 21 zulke
  observaties.
- **[De zoekbrowser](https://wmotte.github.io/OTpatterns_public/)** (`docs/`):
  een afgebakende, statische versie van de Text-Fabric-browser. Je kunt de
  zoekregels uit de toelichtingen zelf intypen en de treffers tellen, zonder
  iets te installeren. Alles draait client-side over een paar vooraf
  geëxporteerde passages uit 1-2 Samuël. Zie [`docs/README.md`](docs/README.md)
  voor de ondersteunde zoeksyntaxis.
- **[DETECTORS.md](DETECTORS.md)**: beschrijving van elke detector. Per detector
  staat welk BHSA/Text-Fabric-kenmerk hij afleest en welk vormsignaal hij
  afgeeft. Het gaat van de vlakke standaardlaag (taalwissel, leitwort, fronting,
  valentie, persoonswisseling) tot opt-in lagen voor compositie, morfosyntaxis,
  klankspel, discourse en zeldzame clause-architectuur.
- **[ACHTERGROND.md](ACHTERGROND.md)**: introductie voor lezers die ETCBC/BHSA
  en Text-Fabric niet kennen. Wat de database annoteert, wat Text-Fabric
  toevoegt, welke vragen daarmee toetsbaar worden en waar de grenzen liggen.

## De detectoren in het kort

De vlakke laag meet brede afwijkingen per kenmerk: over- of
ondervertegenwoordiging van woorden, woordsoorten en clausetypes, zeldzame
lexemen, taalwissel, negatiedichtheid, godsbenamingen en constructusketens. De
opt-in lagen kijken naar dingen die één losse telling mist: gespiegelde of
verhulde parallellie, woordspel op gedeelde wortels, infinitivus absolutus,
casus pendens, samengestelde patronen zoals inclusio en chiasme, en lokale
configuraties in de morfosyntaxis.

Geen van de detectoren gebruikt embeddings, fuzzy matching of externe ML. Alles
blijft terug te voeren op BHSA-features, Text-Fabric-traversal, vaste
lexiconlijsten of vooraf geregistreerde patronen. Daardoor is een treffer
controleerbaar: bij elk signaal hoort een Text-Fabric-query die je kunt reproduceren.

## Achtergrond: BHSA en Text-Fabric

[BHSA](https://github.com/ETCBC/bhsa) is de morfosyntactisch geannoteerde
Hebreeuwse Bijbel van de ETCBC, ontsloten via
[Text-Fabric](https://github.com/annotation/text-fabric). De getoonde gegevens
en verwachte aantallen komen uit BHSA-versie 2021. De volledige, interactieve
browser staat op de [Text-Fabric-site](https://annotation.github.io/text-fabric/tf/about/browser.html)
en op [SHEBANQ](https://shebanq.ancient-data.org/hebrew/queries).

Alleen het Hebreeuws-Aramese Oude Testament valt binnen bereik. Het Nieuwe
Testament zit niet in BHSA en wordt niet behandeld.

Een uitgebreidere introductie staat in [ACHTERGROND.md](ACHTERGROND.md).
