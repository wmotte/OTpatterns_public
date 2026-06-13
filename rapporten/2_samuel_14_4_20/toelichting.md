# Toelichting bij 2 Samuël 14:4-20: fictie als correctie van de koning

*Lekenuitleg bij [rapport.md](rapport.md). De nieuwheidstoets tegen de
commentaren is afgerond; zie [nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

De passage is gemeten met de BHSA: de Hebreeuwse tekst is woord voor woord
grammaticaal geannoteerd. De engine vergelijkt deze zeventien verzen met het
hele Oude Testament en met nauwere vergelijkingsgroepen, zoals 2 Samuël en
verhalend proza. Een bevinding telt pas zwaar mee wanneer zij ook tegen die
nauwere vergelijkingen overeind blijft.

## Naamloosheid

De eerste eenvoudige telling is het aantal eigennamen:

```text
word sp=nmpr
```

De passage heeft er zes, veel minder dan verwacht. Dat helpt om de vorm van de
fictie te zien. De weduwe, haar man, haar zonen, de broer en de erfgenaam blijven
naamloos. Joab krijgt pas aan het einde naamruimte, wanneer David de verborgen
regisseur herkent. Commentaren bespreken deze naamloze parabelstrategie; de
telling van de lage eigennaamdichtheid is de meetbare toevoeging.

## Meervoud dat krimpt

De vrouw vertelt over een familie en een groep verwanten, maar de meervoudsvormen
zijn laag:

```text
word nu=pl
```

Voor meervoudige suffixen:

```text
word prs_nu=pl
```

De meervouden liggen vooral in de fictieve casus. Daarna trekt de rede naar de
ene overblijvende zoon en de ene koning die moet oordelen. Dat laatste-zoon-
motief is bekend uit de commentaren; de lage meervoudsdichtheid kwantificeert
het.

## Dienstvrouw tegenover koning

De verhouding tussen de vrouw en David is deels met een engineproxy gemeten:

```text
count subject vs object mentions by lexical/person key
```

Daarnaast testte een dynamische query of diensttaal en koningstaal in directe
rede samen voorkomen:

```text
clause domain=Q
  word lex=CPXH/|>MH/
  word lex=MLK/
```

Die query is exploratief, omdat zij speciaal voor deze passage is opgesteld.
Zij is wel robuust binnen de run. De uitkomst past bij de retoriek van de vrouw:
zij houdt de lage positie van "dienstvrouw" vast terwijl zij de koning stuurt.
De commentaren bespreken deze diplomatieke berisping en de herhaalde
"mijn heer de koning"-taal uitvoerig; de actant- en aanspreekmetingen zijn
vooral formele steun.

## Zoon, uitroeiing en terugkeer

Twee dynamische queries markeren de inhoudelijke draai van de fictieve casus
naar Davids eigen huis:

```text
clause domain=Q
  word lex=BN/
  word lex=CMD[
```

```text
clause domain=Q
  word lex=CWB[
  word lex=NDX[
```

De eerste zoekt de zoon die tegen uitroeiing beschermd moet worden. De tweede
zoekt de taal van terugbrengen en verdrevene. Beide zijn exploratief en krijgen
daarom hoogstens confidence Middel. De inhoudelijke draai naar Absalom is
standaardmateriaal in commentaren; de queries maken het vormsignaal
reproduceerbaar.

## Joabs hand

De verborgen regie van Joab is getest met:

```text
clause domain=Q
  word lex=JD/
  word lex=JW>B/
```

De treffer ligt in 2 Samuël 14:19. De bredere vormlaag is de valentie van
verbale clauses:

```text
clause kind=VC  (#Objc/Cmpl/Loca/Time/Adju)
```

De engine telt per verbale clause hoeveel complementen aanwezig zijn. In deze
passage zijn nul-complement-clauses robuust hoog. Die meting is alleen in de
volledige Text-Fabric-omgeving reproduceerbaar. Joabs verborgen regie is
bekend; de nul-complement-valentie blijft een voorzichtige extra vormlaag.

## Reproduceerbaarheid

De volledige run staat in [evidence.json](evidence.json). De dynamische queries
staan in [dynamic_queries.json](dynamic_queries.json). De statische zoekbrowser
heeft ook een passagebestand voor deze tekst:
`docs/data/2_samuel_14_4_20.json`.

Runconfiguratie: passage `2 Samuel 14:4-20`, top 120, met morfosyntaxis,
discours-pragmatiek, voorspellende families, tekstdynamiek, NER,
novelty-families en de querybibliotheek.
