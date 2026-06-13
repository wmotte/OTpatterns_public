# Toelichting bij 1 Samuël 24:9-22: David en Saul bij de grot

*Lekenuitleg bij [rapport.md](rapport.md). De nieuwheidstoets tegen de
commentaren is afgerond; zie [nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

De passage is gemeten met de BHSA. De engine vergelijkt deze veertien verzen
met het Oude Testament en met nauwere groepen zoals 1 Samuël en narratief
proza. De dynamische queries zijn exploratief; zij ondersteunen alleen punten
die ook door robuuste basisbevindingen gedragen worden.

## Ik-jij-dichtheid

De persoonsmarkering:

```text
word prs_ps=p1
word prs_ps=p2
word prs_ps=p3
```

De algemene participantendichtheid:

```text
word prs_ps=p1|p2|p3  OR  word sp=prps|prde|prin
```

## Saul als getuige

De deictische basisproxy:

```text
HNH/PH/<TH/ZH after local finite-narrative context
```

De passagespecifieke query:

```text
verse
  word lex=<JN/
  word prs_ps=p2
  word lex=R>H[
  word lex=JHWH/
  word lex=NTN[
  word lex=JD/
```

## Hand en onthouden geweld

De handtaal:

```text
word lex=JD/
```

De dynamische query:

```text
clause domain=Q
  word sp=nega
  word lex=CLX[
  word lex=JD/
  word lex=>DWN/
```

De tail-modificationproxy:

```text
% clause met pronominaal objectsuffix op predicaat en later Objc/Cmpl met nomen
```

## JHWH als rechter

De godsnaam:

```text
word lex=JHWH/
```

De actantverdeling:

```text
count subject vs object mentions by lexical/person key
```

De tussen-formule:

```text
clause domain=Q
  word lex=JHWH/
  word lex=CPV[
  word lex=BJN/
  word prs_ps=p1
  word prs_ps=p2
```

## Rede-duur en inbedding

Ononderbroken rede:

```text
maximal txt~Q run length (words) before a narrative break / new introducer
```

Syntactische diepte:

```text
clause_atom tab=12
```

Lage subjectverhulling:

```text
passive stem or 3mp verb without Subj phrase
```

## Reproduceerbaarheid

De volledige run staat in [evidence.json](evidence.json). De dynamische queries
staan in [dynamic_queries.json](dynamic_queries.json). De statische zoekbrowser
heeft ook een passagebestand voor deze tekst:
`docs/data/1_samuel_24_9_22.json`.

Gebruikte run:

```bash
python3 .agents/bhsa-exegese/scripts/anomaly_engine.py '1 Samuel 24:9-22' --top 120 --morphosyntax --discourse-pragmatics --predictive-families --text-dynamics --ner --novelty-families --query-library
```
