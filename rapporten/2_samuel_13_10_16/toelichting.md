# Toelichting bij 2 Samuël 13:10-16: Tamars stem en Amnons weigering

*Lekenuitleg bij [rapport.md](rapport.md). De nieuwheidstoets tegen de
commentaren is uitgevoerd op 13 juni 2026; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

De passage is gemeten met de BHSA. De engine vergelijkt deze zeven verzen met
het hele Oude Testament en met nauwere vergelijkingsgroepen. Omdat dit een
geweldspassage is, blijft de toelichting technisch en sober.

## Kamer

De verplaatsing naar de kamer is getest met:

```text
verse
  word lex=>MNWN/
  word lex=TMR===/
  word lex=BW>[
  word lex=XDR/
```

Deze dynamische query is exploratief en markeert 2 Samuël 13:10.

## Vrouwelijke markering

De suffixen:

```text
word prs_gn=f
```

Het bredere vrouwelijke genus:

```text
word gn=f
```

Beide tellingen zijn robuust hoog. Ze laten zien dat Tamar grammaticaal sterk
aanwezig blijft in de passage.

## Ontkenning

De negaties zijn eenvoudig te tellen:

```text
word sp=nega
```

De passage heeft ongewoon veel ontkenningen. Tamars rede begint met verbodstaal
en de verteller zegt daarna dat Amnon niet wilde luisteren.

## Koning als formele uitweg

De dynamische query:

```text
clause domain=Q
  word lex=DBR[ vt=impv
  word lex=N>
  word lex=MLK/
```

Deze treffer ligt in 2 Samuël 13:13. Tamar zoekt nog een route via de koning.
De aanvullende volitiefproxy is:

```text
% aangrenzende txt~Q clauses met volitief direct↔softened transition
```

Die tweede meting is slechts partially robust.

## Inbedding

De inbeddingsmetingen:

```text
clause_atom tab=9
```

```text
clause_atom tab=17
```

De morfologische zwaarte:

```text
prs_*/uvf/vbe proxy per word
```

Deze metingen ondersteunen de vormobservatie dat Tamars rede gelaagder is dan
Amnons korte bevelen.

## Reproduceerbaarheid

De volledige run staat in [evidence.json](evidence.json). De dynamische queries
staan in [dynamic_queries.json](dynamic_queries.json). De statische zoekbrowser
heeft ook een passagebestand voor deze tekst:
`docs/data/2_samuel_13_10_16.json`.

Gebruikte run:

```bash
python3 .agents/bhsa-exegese/scripts/anomaly_engine.py '2 Samuël 13:10-16' --top 30 --morphosyntax --discourse-pragmatics --predictive-families --text-dynamics
```
