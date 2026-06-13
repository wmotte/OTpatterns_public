# Toelichting bij 2 Samuël 16:1-4: Ziba, goederen en snelle overdracht

*Lekenuitleg bij [rapport.md](rapport.md). De nieuwheidstoets tegen de
commentaren is afgerond; zie [nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

De passage is gemeten met de BHSA: de Hebreeuwse tekst is woord voor woord
grammaticaal geannoteerd. De engine vergelijkt deze vier verzen met het hele
Oude Testament en met nauwere vergelijkingsgroepen, zoals 2 Samuël en verhalend
proza. De passage is kort, dus kleine aantallen moeten voorzichtig worden
geduid.

## Nominale vertraging

De eenvoudigste reproduceerbare telling is:

```text
clause typ=NmCl
```

De passage heeft tien nominale clauses, duidelijk meer dan verwacht. De engine
vindt daarnaast onderbrekingen van de narratieve wayyiqtol-keten:

```text
% narratieve wayq-clause + 1-4 nominale/participiale clauses + narratieve wayq-clause
```

Die tweede meting is een engineproxy. Zij laat zien dat de tekst vertraagt rond
goederen, vragen en Davids overdracht. Commentaren herkennen die strategische
vertraging; de clause-metingen maken haar reproduceerbaar.

## Ziba en Mefiboset

Een dynamische query zoekt clauses waarin Ziba en Mefiboset samen voorkomen:

```text
clause
  word lex=YJB>/
  word lex=MPJBCT/
```

Een tweede zoekt Davids vraag naar "de zoon van uw heer":

```text
clause domain=Q
  word lex=>JH
  word lex=BN/
  word lex=>DWN/
```

Beide queries zijn exploratief. Zij zijn bruikbaar omdat zij laten zien hoe de
afwezige Mefiboset grammaticaal toch het gesprek stuurt. Deze
afhankelijkheidsrelatie is bekend in de commentaren.

## De gift als voorraad

Ziba verklaart de goederen in directe rede. Deze dynamische query zoekt de
combinatie van ezels, huis en koning:

```text
clause domain=Q
  word lex=XMWR/
  word lex=BJT/
  word lex=MLK/
```

De inventaris in vers 1 heeft ook een regelmatige herhaling van `M>H/`,
"honderd":

```text
positions of repeated content lexemes; compare adjacent gaps
```

Die tweede meting is alleen met de engine reproduceerbaar.
De strategische functie van de voorraad is bekend; de regelmatige
"honderd"-echo is een extra vormlaag.

## Vormspiegeling

De korte scène bevat formele spiegeling in de clause-types:

```text
clause typ window equals its reverse
```

Dit is geen literaire chiasmeclaim. Het is een beperkte vormproxy: de engine
ziet korte vensters waarvan de clause-typevolgorde gespiegeld is.
Commentaren bespreken de compacte dialoog, maar niet deze technische
spiegelingsmeting.

## Slotformule

Ziba sluit af met de formule "genade vinden in uw ogen". De dynamische query is:

```text
clause domain=Q
  word lex=MY>[
  word lex=XN/
  word lex=<JN/
```

Omdat de query passagespecifiek is, blijft de bevinding exploratief. Zij past
wel precies bij het slot: Ziba heeft net Mefibosets bezit gekregen en formuleert
zijn verhouding tot David als gunstrelatie. Dat slotmotief is bekend uit de
commentaren; de query markeert het formeel.

## Reproduceerbaarheid

De volledige run staat in [evidence.json](evidence.json). De dynamische queries
staan in [dynamic_queries.json](dynamic_queries.json). De statische zoekbrowser
heeft ook een passagebestand voor deze tekst:
`docs/data/2_samuel_16_1_4.json`.

Runconfiguratie: passage `2 Samuel 16:1-4`, top 120, met morfosyntaxis,
discours-pragmatiek, voorspellende families, tekstdynamiek, NER,
novelty-families en de querybibliotheek.
