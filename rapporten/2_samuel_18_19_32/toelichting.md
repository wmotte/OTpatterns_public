# Toelichting bij 2 Samuël 18:19-32: boden, snelheid en uitgesteld nieuws

*Lekenuitleg bij [rapport.md](rapport.md). Deze toelichting hoort bij het
bronrapport. De nieuwheidstoets tegen de commentaren is afgerond; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

De passage is gemeten met de BHSA: de Hebreeuwse tekst is woord voor woord
grammaticaal geannoteerd. De engine vergelijkt deze veertien verzen met het hele
Oude Testament en met nauwere vergelijkingsgroepen, zoals 2 Samuël en verhalend
proza. Omdat de scène veel directe rede en korte clauses heeft, zijn vooral
vormpatronen rond snelheid, waarneming en vraag-antwoord bruikbaar.

## Snelle keten, vertraagd bericht

De basis voor de snelheidslaag is:

```text
word vt=wayq
```

en:

```text
clause typ=WayX
```

De vertraging wordt gemeten met een engineproxy:

```text
% narratieve wayq-clause + 1-4 nominale/participiale clauses + narratieve wayq-clause
```

Samen tonen deze metingen dat de scène snel vertelt maar rond de poort en de
bodemond vertraagt.

## Nieuws in de mond

De dynamische query voor de idiomatische nieuwsformule is:

```text
clause domain=Q
  word lex=BFRH/
  word lex=PH/
```

Zij is exploratief. De bredere lexeemtellingen zijn:

```text
word lex=BFRH/
word lex=BFR[
```

Die tellen bericht en berichten in de hele passage.

## Ahimaäz en de Kusiet

Omdat de relevante woorden vaak over meerdere clauses in één vers staan, zijn
deze queries op `verse` geankerd:

```text
verse
  word lex=>XJM<Y/
  word lex=RWY[
  word lex=BFR[|BFRH/
```

```text
verse
  word lex=KCJ/
  word lex=MLK/
  word lex=BFR[|BFRH/
```

Zij zijn exploratief. Zij helpen de rolverdeling tussen de twee boden te
isoleren, maar bewijzen geen syntactische afhankelijkheid binnen één clause.

## Poortwaarneming

De wachterscène gebruikt deictische markering:

```text
HNH/PH/<TH/ZH after local finite-narrative context
```

en participiale predicaten:

```text
% Pred word vt=ptca/ptcp met omliggende narratieve wayq/WayX-clauses
```

Deze engineproxies laten zien waar de vertelling tijdelijk als waarneming in
het heden wordt gepresenteerd.

## Davids vraag

De dynamische query voor Davids vraag naar Absalom is:

```text
verse
  word lex=MLK/
  word lex=CLWM/
  word lex=N<R/
```

De bredere enkelvoudsdruk is reproduceerbaar met:

```text
word nu=pl
```

De passage heeft robuust weinig meervoudsvormen. Dat ondersteunt de observatie
dat het slagbericht naar één "jongeman" wordt vernauwd.

## Reproduceerbaarheid

De volledige run staat in [evidence.json](evidence.json). De dynamische queries
staan in [dynamic_queries.json](dynamic_queries.json). De statische zoekbrowser
heeft ook een passagebestand voor deze tekst:
`docs/data/2_samuel_18_19_32.json`.

Runconfiguratie: passage `2 Samuel 18:19-32`, top 120, met morfosyntaxis,
discours-pragmatiek, voorspellende families, tekstdynamiek, NER,
novelty-families en de querybibliotheek.
