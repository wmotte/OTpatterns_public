# Toelichting bij 1 Samuël 28:8-19: vermomming, angst en opkomen

*Lekenuitleg bij [rapport.md](rapport.md). De nieuwheidstoets tegen de
commentaren is uitgevoerd op 13 juni 2026; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

De engine vergelijkt deze twaalf verzen met het hele Oude Testament en met
nauwere vergelijkingsgroepen. De passage heeft genoeg robuuste vaste findings;
de dynamische queries dienen vooral om passagespecifieke knooppunten te testen.

## Vermomming

De eerste query zoekt Saul, vermommen, aantrekken en kleding in hetzelfde vers.
Die treffer ligt in 28:8.

```text
verse
  word lex=C>WL=/
  word lex=XPF[
  word lex=LBC[
  word lex=BGD/
```

De vaste context is een hoge dichtheid aan wayyiqtol en WayX-clauses:

```text
word vt=wayq
clause typ=WayX
```

## Angst en herkenning

Een tweede query zoekt vrouw, vrezen en Saul in één vers. Die treffer ligt in
28:13, bij het moment waarop de vrouw reageert.

```text
verse
  word lex=>CH/
  word lex=JR>[
  word lex=C>WL=/
```

De actantmeting is ondersteunend:

```text
count subject vs object mentions by lexical/person key
```

## Onrust in de werkwoordsvormen

De TAM-meting telt vensters waarin meerdere werkwoordsvormen snel wisselen.
Deze passage scoort daar robuust hoog.

```text
sliding window over Pred verb vt values
```

De participiummeting registreert lopende toestanden of waarnemingen binnen
narratieve omgeving:

```text
% Pred word vt=ptca/ptcp met omliggende narratieve wayq/WayX-clauses
```

## Namen en pronomina

Saul wordt genoemd, zakt weg in pronominale of nulreferentie en wordt weer
opgehaald. Dat meet de engine met:

```text
nmpr subject followed by pronoun/suffix/zero-subject run
```

## Samuël laten opkomen

De Samuël-query is zwakker, omdat zij semantisch is. Zij helpt wel bij het
ordenen van 28:14-15.

```text
verse
  word lex=CMW>L/
  word lex=<LH[
  word lex=C>WL=/
```

## Reproduceerbaarheid

De volledige run staat in [evidence.json](evidence.json). De dynamische queries
staan in [dynamic_queries.json](dynamic_queries.json).

Gebruikte run:

```bash
python3 .agents/bhsa-exegese/scripts/anomaly_engine.py '1 Samuel 28:8-19' --top 120 --morphosyntax --discourse-pragmatics --predictive-families --text-dynamics --ner --novelty-families --query-library
```
