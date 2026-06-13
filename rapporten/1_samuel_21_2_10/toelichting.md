# Toelichting bij 1 Samuël 21:2-10: David en Achimelech

*Lekenuitleg bij [rapport.md](rapport.md). De nieuwheidstoets tegen de
commentaren is afgerond; zie [nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

De passage is gemeten met de BHSA. De engine vergelijkt de negen verzen met het
Oude Testament en met nauwere groepen zoals 1 Samuël en narratief proza. De
belangrijkste dynamische treffers hebben één match en blijven daarom
exploratief.

## Geheime opdracht

Davids opdrachtformule:

```text
clause domain=Q
  word lex=MLK/
  word lex=YWH[
  word lex=DBR/
```

Davids geheimhoudingsformule:

```text
clause domain=Q
  word lex=>JC/
  word sp=nega
  word lex=JD<[
  word lex=DBR/
```

## Afwezige knechten

De lage meervoudsdichtheid:

```text
word nu=pl
```

De knechten als bekende maar afwezige groep:

```text
clause domain=Q
  word lex=N<R/
  word lex=JD<[
  word lex=MQWM/
```

## Brood en beschikbaarheid

De basisqueries:

```text
phrase function=Exst
phrase function=NCop
word lex=LXM/
```

De passagespecifieke query:

```text
clause domain=Q
  word lex=KJ
  word lex=LXM/
  word lex=QDC/
  word lex=JC/
```

## Reinheidsvoorwaarde

Davids antwoord op Achimelechs voorwaarde:

```text
clause domain=Q
  word lex=N<R/
  word lex=>CH/
  word lex=CMR[
```

Geneste rede:

```text
% clause met ≥2 'Q' in txt
```

## Ethische lamed

De betrokkenheidsproxy:

```text
% prep L met prs_ps/prs_nu/prs_gn overeenkomstig subject/predicaat
```

De imperatief-responsproxy:

```text
% clause txt~Q met word vt=impv; scan volgende clauses op finiet predicaat
```

## Reproduceerbaarheid

De volledige run staat in [evidence.json](evidence.json). De dynamische queries
staan in [dynamic_queries.json](dynamic_queries.json). De statische zoekbrowser
heeft ook een passagebestand voor deze tekst:
`docs/data/1_samuel_21_2_10.json`.

Gebruikte run:

```bash
python3 .agents/bhsa-exegese/scripts/anomaly_engine.py '1 Samuel 21:2-10' --top 120 --morphosyntax --discourse-pragmatics --predictive-families --text-dynamics --ner --novelty-families --query-library
```
