# Toelichting bij 2 Samuël 20:16-22: de vrouw van Abel en Joab

*Lekenuitleg bij [rapport.md](rapport.md). De nieuwheidstoets tegen de
commentaren is afgerond; zie [nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

De passage is gemeten met de BHSA: de Hebreeuwse tekst is woord voor woord
grammaticaal geannoteerd. De engine vergelijkt deze zeven verzen met het hele
Oude Testament en met nauwere vergelijkingsgroepen, zoals 2 Samuël en narratief
proza. De passage is kort, dus enkele robuuste dynamische treffers hebben één
match. Daarom blijven die bevindingen exploratief.

## Vrouw, stad, Joab en horen

De basislexemen zijn:

```text
word lex=>CH/
word lex=<JR/
word lex=JW>B/
word lex=CM<[
```

De passagespecifieke query die de stadsstem vangt:

```text
verse
  word lex=>CH/
  word lex=<JR/
  word lex=JW>B/
  word lex=CM<[
```

De bredere spreek-hoorquery:

```text
verse
  word lex=JW>B/
  word lex=>CH/
  word lex=CM<[
  word lex=DBR[|>MR[
```

## Staccato onderhandeling

De engineproxy voor verbale stapeling zonder expliciet voegwoord is:

```text
verbal clause run where first word is not sp=conj
```

Dit ondersteunt de observatie dat de onderhandeling met korte verbale stappen
wordt opgebouwd.

## Vernauwing tot Seba

De algemene rolverdeling wordt gemeten met:

```text
count subject vs object mentions by lexical/person key
```

De dynamische query voor Joabs vernauwing:

```text
clause domain=Q
  word lex=>JC/
  word lex=HR/|>PRJM/
  word lex=NF>[
  word lex=JD/
```

## Inbedding en nadrukformules

De syntactische diepte:

```text
clause_atom tab=12
clause_atom tab=18
```

De nadrukkelijke infinitivus-absolutusconstructies:

```text
infa and finite verb share root; inspect local finite density
```

## Hoofd over de muur

De query voor de concrete overdracht:

```text
clause domain=Q
  word lex=R>C/
  word lex=CLK[
  word lex=XWMH/
  word prs_ps=p2
```

Deze query is exploratief, maar zij vangt precies de vorm waarin de
onderhandeling wordt gesloten.

## Reproduceerbaarheid

De volledige run staat in [evidence.json](evidence.json). De dynamische queries
staan in [dynamic_queries.json](dynamic_queries.json). De statische zoekbrowser
heeft ook een passagebestand voor deze tekst:
`docs/data/2_samuel_20_16_22.json`.

Runconfiguratie: passage `2 Samuel 20:16-22`, top 120, met morfosyntaxis,
discours-pragmatiek, voorspellende families, tekstdynamiek, NER,
novelty-families en de querybibliotheek.
