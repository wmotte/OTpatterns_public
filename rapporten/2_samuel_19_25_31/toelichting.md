# Toelichting bij 2 Samuël 19:25-31: Mefibosets verdediging

*Lekenuitleg bij [rapport.md](rapport.md). De nieuwheidstoets tegen de
commentaren is afgerond; zie [nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

De passage is gemeten met de BHSA: de Hebreeuwse tekst is woord voor woord
grammaticaal geannoteerd. De engine vergelijkt deze zeven verzen met het hele
Oude Testament en met nauwere vergelijkingsgroepen, zoals 2 Samuël en verhalend
proza. De passage is kort, dus enkele dynamische bevindingen hebben maar één
treffer. Die worden daarom alleen als exploratieve steun gebruikt.

## Vernauwing naar enkelvoudige rollen

De robuuste basisquery voor meervoudsvormen is:

```text
word nu=pl
```

Voor vrouwelijke vormen:

```text
word gn=f
```

Beide zijn laag in deze passage. Dat ondersteunt de observatie dat het conflict
niet als groepsscène wordt uitgewerkt.

## Heer, koning en knecht

De dynamische query voor Mefibosets deferentiële aanspreektaal is:

```text
clause domain=Q
  word lex=>DWN/
  word lex=MLK/
```

De losse lexeemtellingen zijn:

```text
word lex=MLK/
word lex=>DWN/
word lex=<BD/
```

De dynamische query is exploratief, maar zij haalt de robuuste vloer.

## Bedrog en geneste rede

Mefibosets bedrogclaim is geïsoleerd met:

```text
clause domain=Q
  word lex=<BD/
  word lex=RMH=[
```

De geneste rede wordt gemeten met een engineproxy:

```text
% clause met ≥2 'Q' in txt
```

Die proxy vangt stem-binnen-stem: Mefiboset citeert wat hij wilde doen voordat
Ziba hem volgens zijn verdediging bedroog.

## Inbedding en actantverdeling

De syntactische zwaarte wordt gemeten met:

```text
clause_atom tab=11
clause_atom tab=14
```

De rolverdeling wordt gemeten met:

```text
count subject vs object mentions by lexical/person key
```

Die tweede meting is een engineproxy en moet voorzichtig worden geduid. Zij
helpt zichtbaar maken welke personen grammaticaal handelen of aangesproken
worden.

## Slot: verdeling van het veld

Davids compromis is geïsoleerd met:

```text
clause domain=Q
  word lex=>TH
  word lex=YJB>/
  word lex=XLQ[
  word lex=FDH/
```

Omdat de query passagespecifiek is, blijft de bevinding exploratief. Zij is
bruikbaar omdat zij precies de slotvorm vangt: Mefiboset en Ziba worden in één
verdelingsclause naast elkaar gezet.

## Reproduceerbaarheid

De volledige run staat in [evidence.json](evidence.json). De dynamische queries
staan in [dynamic_queries.json](dynamic_queries.json). De statische zoekbrowser
heeft ook een passagebestand voor deze tekst:
`docs/data/2_samuel_19_25_31.json`.

Gebruikte run:

```bash
python3 .agents/bhsa-exegese/scripts/anomaly_engine.py '2 Samuel 19:25-31' --top 120 --morphosyntax --discourse-pragmatics --predictive-families --text-dynamics --ner --novelty-families --query-library
```
