# Toelichting bij 2 Samuël 12:1-13: parabel en directe aanklacht

*Lekenuitleg bij [rapport.md](rapport.md). De nieuwheidstoets tegen de
commentaren is uitgevoerd op 13 juni 2026; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

De passage is gemeten met de BHSA. De engine vergelijkt deze dertien verzen met
het hele Oude Testament en met nauwere vergelijkingsgroepen. Omdat deze passage
sterk becommentarieerd is, werkt de meting hier vooral als ijkpunt: zij moet
bekende observaties niet als grote nieuwheid verkopen.

## TAM-onrust in de parabel

De engine meet snelle wisseling van werkwoordsvormen met:

```text
sliding window over Pred verb vt values
```

In de parabel wisselen wayyiqtol, qatal, participium en yiqtol snel. Dat past
bij de beweging van fictieve casus naar misdaadverhaal.

## Rolconcentratie

De verdeling van subject- en objectrollen:

```text
count subject vs object mentions by lexical/person key
```

De lage meervoudsdichtheid:

```text
word nu=pl
```

Samen helpen deze metingen om de vernauwing te zien: de parabel begint breed,
maar de aanklacht komt bij een enkelvoudig "jij" uit.

## Davids oordeel

De lokale overgangsdruk wordt gemeten met:

```text
clause typ sequence; compare transition with preceding local window
```

Deze engineproxy markeert onder meer Davids eed en restitutievonnis als
vormsprongen binnen de scène.

## Jij bent de man

De dynamische query voor Natans identificatie:

```text
clause domain=Q
  word lex=>TH
  word lex=>JC/
```

De bredere pronomenmeting:

```text
% clause met phrase function=Subj word sp=prps en Pred word vt=perf|impf
```

De dynamische query is exploratief. De pronomenmeting laat zien dat de scène
veel nadruk legt op ik/jij-verhoudingen.

## Uria, zwaard en vrouw

De concrete aanklacht in 2 Samuël 12:9 is getest met:

```text
verse
  word lex=>WRJH/
  word lex=XRB/
  word lex=>CH/
  word lex=LQX[
  word lex=HRG[
```

Deze query is exploratief en blijft hoogstens confidence Middel. Zij markeert
de overgang van parabel naar concrete schuldtaal.

## Reproduceerbaarheid

De volledige run staat in [evidence.json](evidence.json). De dynamische queries
staan in [dynamic_queries.json](dynamic_queries.json). De statische zoekbrowser
heeft ook een passagebestand voor deze tekst:
`docs/data/2_samuel_12_1_13.json`.

Gebruikte run:

```bash
python3 .agents/bhsa-exegese/scripts/anomaly_engine.py '2 Samuël 12:1-13' --top 30 --morphosyntax --discourse-pragmatics --predictive-families --text-dynamics
```
