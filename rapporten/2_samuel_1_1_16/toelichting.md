# Toelichting bij 2 Samuël 1:1-16: bericht, claim en vonnis

*Lekenuitleg bij [rapport.md](rapport.md). De nieuwheidstoets tegen de
commentaren is uitgevoerd op 13 juni 2026; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

De passage is gemeten met de BHSA. De vaste engine vindt vooral een sterke
narratieve keten, relatief weinig directe rede en korte clauses. De dynamische
queries testen specifieke punten in de claim van de Amalekiet.

## Zelfpresentatie als Amalekiet

De sterkste dynamische query zoekt directe rede waarin Amalekitische identiteit
en eerste persoon samen voorkomen:

```text
clause domain=Q
  word lex=<MLQJ/
  word ps=p1
```

De twee treffers liggen in 1:8 en 1:13.

## Narratief tegenover citaat

De vaste tellingen laten zien dat de passage narratief zwaar is:

```text
clause domain=N
clause domain=Q
word vt=wayq
```

`domain=N` en wayyiqtol zijn hoog; `domain=Q` is laag. Daardoor staat de
boodschap in een snelle verhaalketen.

## Doodstaal

Het doodswerkwoord loopt door de hele scène:

```text
word lex=MWT[
```

De specifieke query naar "dood mij" is bruikbaar als lokale observatie, maar na
FDR niet q-significant:

```text
clause domain=Q
  word lex=MWT[
  word prs_ps=p1
```

## Kroon en armband

De overdracht van kroon en armband valt samen met nominale vertraging in de
wayyiqtol-keten:

```text
% narratieve wayq-clause + 1-4 nominale/participiale clauses + narratieve wayq-clause
```

De dynamische objectquery:

```text
verse
  word lex=NZR/
  word lex=>Y<DH/
  word lex=R>C/
  word lex=ZRW</
```

## Mond en bloed

Davids slotvonnis wordt getest met:

```text
verse
  word lex=PH/
  word lex=<NH[
  word lex=DM/
```

Deze query is robuust maar semantisch zwak. Daarom staat zij in het rapport
naast de vaste ellips- en asyndesemetingen.

## Reproduceerbaarheid

De volledige run staat in [evidence.json](evidence.json). De dynamische queries
staan in [dynamic_queries.json](dynamic_queries.json).

Gebruikte run:

```bash
python3 .agents/bhsa-exegese/scripts/anomaly_engine.py '2 Samuel 1:1-16' --top 120 --morphosyntax --discourse-pragmatics --predictive-families --text-dynamics --ner --novelty-families --query-library
```
