# Toelichting bij 1 Samuël 25:23-35: Abigaïls rem op Davids hand

*Lekenuitleg bij [rapport.md](rapport.md). De nieuwheidstoets tegen de
1-2 Samuël-commentaren is afgerond; de publieke samenvatting staat in
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

De passage is gemeten met de BHSA: de Hebreeuwse tekst is woord voor woord
grammaticaal geannoteerd. De engine vergelijkt deze dertien verzen met het hele
Oude Testament en met nauwere vergelijkingsgroepen, zoals 1 Samuël en verhalend
proza.

## Dienstvrouw en heer

Abigaïls rede is uitzonderlijk dicht in ik/u-taal. De vaste tellingen naar
eerste- en tweede-persoonssuffixen zijn robuust hoog. De passagespecifieke query
laat zien waar dat register het scherpst wordt: dienstvrouw en heer komen samen
voor in directe rede.

```text
clause domain=Q
  word lex=>MH/|CPXH/
  word lex=>DWN/
```

## Bloed en hand

De dragende dynamische query zoekt verzen waarin bloed, hand en `JC<[` samen
staan. De twee treffers liggen in 25:26 en 25:33. Daarmee verbindt de meting
Abigaïls waarschuwing met Davids latere erkenning.

```text
verse
  word lex=DM/
  word lex=JD/
  word lex=JC<[
```

De ondersteunende vaste meting kijkt naar hetzelfde werkwoord zonder expliciet
BHSA-object:

```text
clause kind=VC /where/ verb lex=JC<[ /without/ phrase function=Objc
```

## Agencyverdeling

De actantmeting telt wie syntactisch als handelende of ondergane partij optreedt.
In deze passage verdelen JHWH, Abigaïl en David de grammaticale agency. Dat is
geen gewone woordzoekopdracht:

```text
count subject vs object mentions by lexical/person key
```

## Zegen aan het slot

Davids antwoord gebruikt `BRK[` drie keer zonder expliciet BHSA-object. Dat is
een kleine maar robuuste waarneming, vooral bruikbaar als slotobservatie bij de
geslaagde de-escalatie.

```text
clause kind=VC /where/ verb lex=BRK[ /without/ phrase function=Objc
```

## Reproduceerbaarheid

De volledige run staat in [evidence.json](evidence.json). De dynamische queries
staan in [dynamic_queries.json](dynamic_queries.json).

Gebruikte run:

```bash
python3 .agents/bhsa-exegese/scripts/anomaly_engine.py '1 Samuel 25:23-35' --top 120 --morphosyntax --discourse-pragmatics --predictive-families --text-dynamics --ner --novelty-families --query-library
```
