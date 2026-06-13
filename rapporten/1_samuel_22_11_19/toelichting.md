# Toelichting bij 1 Samuël 22:11-19: verhoor, vonnis en uitvoering

*Lekenuitleg bij [rapport.md](rapport.md). De nieuwheidstoets tegen de
commentaren is afgerond; de samenvatting staat in
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

De passage is gemeten met de BHSA: de Hebreeuwse tekst is woord voor woord
grammaticaal geannoteerd. De engine vergelijkt deze negen verzen met het hele
Oude Testament en met nauwere vergelijkingsgroepen, zoals hetzelfde boek en
verhalend proza. Een bevinding is bruikbaar wanneer zij niet alleen globaal
opvalt, maar ook tegen die smallere vergelijkingen overeind blijft.

## De rollen in het verhoor

De eerste dragende meting is geen losse woordzoekopdracht, maar een
actantentelling: wie staat syntactisch als handelende of ondergane partij in de
clauses? In deze passage is die verdeling robuust scheef. De koning heeft veel
meer uitgaande handelingsrelaties; de priesterrol heeft vooral inkomende
relaties. Dat past bij de scène: Achimelech wordt niet als gelijke gesprekspartner
gepositioneerd, maar als degene op wie oproep, beschuldiging en bevel neerkomen.

De meting is alleen in de volledige engine reproduceerbaar:

```text
count subject vs object mentions by lexical/person key
```

## Priester plus geweldswerkwoord

De dynamische zoekslag testte of de kanteling naar geweld ook in directe rede
zichtbaar is. Twee queries bleken robuust. De eerste zoekt clauses in directe
rede waarin de priesterrol en het doodswerkwoord samen staan:

```text
clause domain=Q
  word lex=KHN/
  word lex=MWT[
```

De tweede zoekt de priesterrol met het werkwoord `PG<[`, "treffen" of "slaan":

```text
clause domain=Q
  word lex=KHN/
  word lex=PG<[
```

Deze patronen zijn exploratief, omdat ze als passagespecifieke queries zijn
geformuleerd. Ze zijn daarom ondersteunend en krijgen hoogstens confidence
Middel. Ze laten wel scherp zien waar Sauls taal verandert: de priester wordt
het object van doden en slaan.

## Diensttaal in Achimelechs verdediging

Achimelech verdedigt zich door David binnen Sauls eigen dienstorde te plaatsen.
Dat is gemeten met een dynamische query naar directe rede waarin knecht- en
koningstaal samen voorkomen:

```text
clause domain=Q
  word lex=<BD/
  word lex=MLK/
```

De treffer ligt in 1 Samuël 22:15. Het argument is niet dat Achimelech met deze
woorden vrijgesproken wordt, maar dat zijn verdediging grammaticaal binnen
Sauls hoforde blijft. Saul laat die orde niet als bescherming gelden.

## Het lage aantal vrouwelijke vormen

Een eenvoudige, reproduceerbare telling is:

```text
word gn=f
```

De passage heeft negen vrouwelijk gemarkeerde vormen, duidelijk minder dan
verwacht. Dat cijfer bewijst geen sociale analyse op zichzelf. Het helpt wel
om de compositie van de scène te zien: de hoofddialoog blijft bij mannelijke
ambten en sprekers, terwijl de slotlijst van het geweld de stad en de vrouw
grammaticaal zichtbaar maakt.

## Compacte geweldszinnen

De laatste observatie is klein en moet ondersteunend blijven. De engine telt
clauses met een hoge verhouding tussen inhoudswoorden en functiewoorden. Daarvan
zijn er maar twee, en de twee voorbeelden liggen bij bevel en uitvoering:
1 Samuël 22:17 en 22:18.

Deze proxy is niet als één simpele browserquery te draaien:

```text
count content sp vs function sp per clause
```

## Reproduceerbaarheid

De volledige run staat in [evidence.json](evidence.json). De dynamische queries
staan in [dynamic_queries.json](dynamic_queries.json). De statische zoekbrowser
heeft nu ook een passagebestand voor deze tekst:
`docs/data/1_samuel_22_11_19.json`.

Gebruikte run:

```bash
python3 .agents/bhsa-exegese/scripts/anomaly_engine.py '1 Samuel 22:11-19' --top 120 --morphosyntax --discourse-pragmatics --predictive-families --text-dynamics --ner --novelty-families --query-library
```
