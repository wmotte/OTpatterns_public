# Toelichting bij 2 Samuël 11:6-13: Davids bevel en Uria's weigering

*Lekenuitleg bij [rapport.md](rapport.md). De nieuwheidstoets tegen de
commentaren is uitgevoerd op 13 juni 2026; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

De passage is gemeten met de BHSA: de Hebreeuwse tekst is woord voor woord
grammaticaal geannoteerd. De engine vergelijkt deze acht verzen met het hele
Oude Testament en met nauwere vergelijkingsgroepen, zoals 2 Samuël en verhalend
proza. Dynamische queries zijn speciaal voor deze passage opgesteld en blijven
exploratief.

## Afdalen naar huis

Davids bevel wordt getest met:

```text
clause domain=Q
  word lex=JRD[ vt=impv
  word lex=BJT/
```

De herhaalde weigering wordt getest met:

```text
clause
  word lex=L>
  word lex=JRD[
  word lex=BJT/
```

De tweede query vangt de negatieve herhaling in 2 Samuël 11:9, 11:10 en 11:13.
Zij is dynamisch en exploratief, maar robuust binnen de run.

## Keten en breuk

De snelle verhaalketen is meetbaar via:

```text
clause typ=WayX
```

De engine vergelijkt daarnaast lokale clause-overgangen met de directe context:

```text
clause typ sequence; compare transition with preceding local window
```

Die tweede meting is een engineproxy. Zij helpt te zien waar de keten hapert:
bij Uria's weigering, Davids vraag en het slot.

## Handelende rollen

De verdeling van syntactische actoren wordt gemeten met:

```text
count subject vs object mentions by lexical/person key
```

David en Uria krijgen allebei veel uitgaande rollen. Dat past bij de lezing dat
David formeel stuurt en Uria grammaticaal actief weigert.

## Uria's eed

De publieke oorlogssfeer in Uria's antwoord is getest met:

```text
verse
  word lex=>RWN/
  word lex=JFR>L/
  word lex=JHWDH/
  word lex=BJT/
  word lex=>CH/
```

Het scenario dat hij weigert:

```text
verse
  word lex=>KL[
  word lex=CTH[
  word lex=CKB[
  word lex=>CH/
```

Beide queries zijn exploratief en liggen in 2 Samuël 11:11.

## Davids tweede poging

De maaltijd en roes in vers 13 zijn getest met:

```text
verse
  word lex=DWD==/
  word lex=>KL[
  word lex=CTH[
  word lex=CKR[
  word lex=L>
  word lex=BJT/
```

De bredere referentieproxy is:

```text
nmpr subject followed by pronoun/suffix/zero-subject run
```

De conclusie blijft beperkt: de tweede poging eindigt opnieuw bij het huis dat
Uria niet binnengaat.

## Reproduceerbaarheid

De volledige run staat in [evidence.json](evidence.json). De dynamische queries
staan in [dynamic_queries.json](dynamic_queries.json). De statische zoekbrowser
heeft ook een passagebestand voor deze tekst:
`docs/data/2_samuel_11_6_13.json`.

Gebruikte run:

```bash
python3 .agents/bhsa-exegese/scripts/anomaly_engine.py '2 Samuël 11:6-13' --top 30 --morphosyntax --discourse-pragmatics --predictive-families --text-dynamics
```
