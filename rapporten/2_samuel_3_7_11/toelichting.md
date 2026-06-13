# Toelichting bij 2 Samuël 3:7-11: Abner neemt het kader over

*Lekenuitleg bij [rapport.md](rapport.md). De nieuwheidstoets tegen de
commentaren is afgerond; de samenvatting staat in
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

De passage is gemeten met de BHSA: de Hebreeuwse tekst is woord voor woord
grammaticaal geannoteerd. De engine vergelijkt deze vijf verzen met het hele
Oude Testament en met nauwere vergelijkingsgroepen, zoals hetzelfde boek en
verhalend proza. Een bevinding is bruikbaar wanneer zij niet alleen globaal
opvalt, maar ook tegen die smallere vergelijkingen overeind blijft.

## Van Rizpa naar het huis van Saul

Isboset begint met een vraag over Rizpa, de bijvrouw van Saul. Abner antwoordt
door het gesprek naar Sauls huis te verplaatsen. De dynamische query zoekt
directe rede waarin "huis" en "Saul" samen staan:

```text
clause domain=Q
  word lex=BJT/
  word lex=C>WL=/
```

Die query is exploratief, omdat zij voor deze passage is geformuleerd. Zij is
wel robuust binnen de run. Zij laat zien dat Abner de persoonlijke beschuldiging
in dynastieke taal omzet.

De commentaren kennen deze herframing al goed. Zij beschrijven Abners beroep op
het huis van Saul als politieke tegenzet. De lage dichtheid van meervoudsvormen
is minder technisch beschreven: het thema van versmalling is bekend, de telling
maakt het scherper.

## De doelketen in Abners dreiging

In 2 Samuël 3:10-11 vallen de doelinfinitieven op. De full-run gebruikt niet
meer de brede `typ=InfC`-telling als hoofdclaim; de ondersteunende
purpose-chain is:

```text
% dichte cluster van infinitivus constructus (vt=infc), vooral l+infc
```

De gerichte dynamische query zoekt de twee politieke doelwoorden in Abners rede:
"overbrengen" en "oprichten".

```text
clause domain=Q typ=InfC
  word lex=<BR[|QWM[
```

De betekenis is niet dat een infinitief altijd dreiging is. Hier staat de vorm
in Abners eigen rede, bij de overdracht van het koningschap en de oprichting van
Davids troon. Daardoor wordt zijn woede als programma geformuleerd.

Ook dit is geen volledig nieuw terrein. De doelwoorden "overbrengen" en
"oprichten" worden in de commentaren als kern van Abners politieke eed gelezen.
Nieuw is vooral dat de BHSA-run de opeenhoping van doelinfinitieven als
patroon beschrijft, terwijl de gerichte query de twee politieke doelwoorden
robuust markeert.

## De eedformule

De eed in vers 9 is gemeten met een dynamische query naar directe rede waarin
God en Abner samen voorkomen:

```text
clause domain=Q
  word lex=>LHJM/
  word lex=>BNR/
```

De engine vindt daarnaast twee derde-persoons yiqtol-vormen in dezelfde formule:

```text
% clause met txt~Q en predicaat word vt=impf ps=p3
```

Die tweede regel is een proxy, omdat BHSA de jussief niet apart tagt. De
waarneming blijft daarom ondersteunend: de vorm helpt om de eed te beschrijven,
maar draagt geen zelfstandige grote claim.

De eedformule zelf is gangbare commentaarstof. De meting helpt hier vooral als
ijkpunt: zij laat zien dat de engine een bekend formeel scharnier ook werkelijk
aanwijst.

## Zware rede voor het zwijgen

Het slot meldt dat Isboset Abner niets meer kon antwoorden, omdat hij hem
vreesde. De meting bewijst die reden niet; de tekst geeft haar zelf. De engine
laat wel zien dat Abners antwoord als spreekarchitectuur zwaar is:

```text
clause txt~Q OR speech-verb Pred OR interrogative word/ls=ques
```

en dat twee clause-overgangen lokaal onverwacht zijn:

```text
clause typ sequence; compare transition with preceding local window
```

Deze twee metingen zijn engineproxies. Ze zijn niet als eenvoudige statische
zoekregel in de browser na te doen.

De commentaren beschrijven de retorische zwaarte en abrupte wending van Abners
antwoord, maar niet met deze technische metingen. De cijfers kwantificeren dus
een bekende literaire indruk zonder de oude inbeddingsdiepte-claim nog als
bewijsdrager te gebruiken.

## Rizpa's korte grammaticale aanwezigheid

In vers 7 staan de vrouwelijke vormen dicht bij elkaar: bijvrouw, haar naam,
Rizpa, dochter en opnieuw bijvrouw. De engine beschrijft dat als een lokale
cluster:

```text
% dichte cluster van woorden met gn=f of prs_gn=f
```

Deze bevinding is niet robuust en niet q-significant. Zij mag dus alleen als
ondersteunende observatie worden gebruikt. De sobere formulering is: Rizpa is
de aanleiding van de beschuldiging, maar Abner verplaatst het gesprek vrijwel
meteen naar dynastie, eed en koningschap.

Ook de commentaren zien Rizpa als politiek scharnier of katalysator van de
breuk. De grammaticale cluster zelf wordt niet als meting besproken, maar omdat
de vondst zwak is, mag zij de analyse niet dragen.

## Reproduceerbaarheid

De volledige run staat in [evidence.json](evidence.json). De dynamische queries
staan in [dynamic_queries.json](dynamic_queries.json). De statische zoekbrowser
heeft ook een passagebestand voor deze tekst:
`docs/data/2_samuel_3_7_11.json`.

Runconfiguratie: passage `2 Samuel 3:7-11`, top 120, met morfosyntaxis,
discours-pragmatiek, voorspellende families, tekstdynamiek, NER,
novelty-families en de querybibliotheek.
