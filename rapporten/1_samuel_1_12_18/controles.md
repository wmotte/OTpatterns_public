# Aanvullende controles bij 1 Samuël 1:12-18

De controles hieronder herzien de bewijskracht van enkele bevindingen in het
[rapport](rapport.md). Zij gebruiken dezelfde BHSA- en detectordefinities als
de casusanalyse. De oorspronkelijke [evidence.json](evidence.json) is behouden.
De gecontroleerde uitkomsten staan apart in
[aanvullende_controles.json](aanvullende_controles.json).

De uitkomsten zijn overgenomen uit de opgeslagen controles bij de herziene
casusanalyse. Voor deze publicatie is geen nieuwe corpusrun uitgevoerd.
Het JSON-bestand vermeldt de bronbestanden en hun SHA-256-controlesommen.
Het bevat de geselecteerde uitkomsten, met verduidelijkte veldnamen voor
inbeddingsdiepte en referentieel verval.

## Uitgangspunten

De casus telt 124 woorden, waaronder 27 vrouwelijke vormen en één lidwoord.
Van de 85 scoorbare woorden zijn er twee vorm-hapax. Er zijn elf clause-atomen
met diepte 13 of meer, veertien TAM-vensters en één pronominale keten van zes
clauses. Deze waarden sluiten aan op de oorspronkelijke metingen.

Een analytische p-waarde behandelt de getelde vormen als onafhankelijke
waarnemingen. In tekst hangen ze samen door onder meer congruentie,
formules en zinsbouw. De empirische vergelijking gebruikt daarom echte,
aaneengesloten tekstvensters. Zij vervullen de rol van een placebo: ze laten
zien wat de meting in tekst oplevert die niet vanwege een bevinding is gekozen.

## Empirische nulverdeling

Dezelfde metingen zijn uitgevoerd op alle 8.517 vensters van zeven
opvolgende verzen binnen de boeken die als narratief proza zijn ingedeeld.
Dat zijn Genesis, Jozua, Rechters, 1-2 Samuël, 1-2 Koningen, Jona, Ruth,
Ester, Ezra, Nehemia en 1-2 Kronieken. Binnen een boek schuift het venster
steeds één vers op. De vensters overlappen en zijn geen onafhankelijke
steekproeven.

Als registercontrole is de berekening ook gedaan op 2.162 vensters waarin
minstens de helft van de woorden directe rede is. De casus zelf heeft een
Q-aandeel van 0,44, zodat de grens van 0,50 iets strenger is dan haar eigen
verhouding.

De tabel geeft het aandeel vensters dat minstens zo hoog scoort als de casus.
Bij vrouwelijke vormen en lidwoorden wordt G² in dezelfde richting
vergeleken, bij de overige metingen de vermelde telling.

| Meting | Casuswaarde | Alle vensters | Spraakrijke vensters |
|---|---:|---:|---:|
| Vrouwelijke vormen, G² voor oververtegenwoordiging | 27 | 0,0182 | 0,02174 |
| Lidwoorden, G² voor ondervertegenwoordiging | 1 | 0,02971 | 0,0407 |
| Vorm-hapaxen, minstens 2 | 2 | 0,03757 | 0,06337 |
| Clause-atomen met diepte minstens 13, minstens 11 | 11 | 0,07773 | 0,1415 |
| TAM-vensters, minstens 14 | 14 | 0,01914 | 0,02868 |
| Referentieel verval, ketenlengtesom minstens 6 | 6 | 0,1071 | 0,1272 |

Het lidwoordtekort blijft ongewoon, maar de empirische kans ligt aanzienlijk
hoger dan de analytische p-waarde van 5,8·10⁻⁴. De diepe inbedding en het
referentieel verval komen geregeld in vergelijkbare tekst voor. De geneste
referentiecorpora en een FDR-correctie per meetfamilie nemen deze afhankelijkheid
niet weg. Over meetfamilies heen is de FDR niet gecontroleerd.

## Lidwoordgebruik en gespreksregister

In narratief proza is het lidwoordaandeel 0,0715 in directe rede en 0,0823 in
vertellerstekst. De casus heeft 55 woorden in directe rede en 69 overige.
Onder die mengverhouding is de verwachting 9,6 lidwoorden. Er staat er één
(G² = 13,3, analytische p ongeveer 2,6·10⁻⁴). Het tekort is dus niet te
verklaren uit de dialoogvorm.

De BHSA codeert ook de lidwoorden die na ב/כ/ל alleen in de vocalisatie
zichtbaar zijn als afzonderlijke woordobjecten. De casus bevat geen van die
geëlideerde lidwoorden. De lage telling ontstaat niet doordat de zoekregel
ze zou overslaan.

## Inbeddingsdiepte

De feature `tab` telt elke laag rede-in-vertelling mee. In narratief proza is
de mediaan 8 in directe rede, tegenover 5 in vertellerstekst. Van de elf diepe
atomen in de casus staan er drie in Eli's zegen (1:17) en één in
vertellerstekst (1:15). De concentratie behoort dus niet uitsluitend bij
Hanna's verweer. De eerdere lezing van bijzondere hypotaxis is teruggenomen.

## Vorm-hapaxen en genus

Binnen narratief proza zijn 63 van de 7.223 scoorbare vrouwelijke woorden
vorm-hapax, tegenover 247 van de 124.413 overige woorden. De dichtheden zijn
0,0087 en 0,0020. Vrouwelijk gemarkeerde vormen zijn daarmee ruim vier keer
zo vaak vorm-hapax.

De casus heeft 15 vrouwelijk gemarkeerde woorden onder de 85 scoorbare
woorden. Zonder genusweging is de verwachte hapaxwaarde 0,20 en de
Poissonkans op minstens twee 0,0176. Met genusweging wordt dat 0,27 en 0,0305.
De vrouwelijke markering van beide hapaxen is dus deels hetzelfde signaal
als de oververtegenwoordiging van vrouwelijke vormen.

Van de 23 dialogen bevatten er twee een paar vorm-hapaxen: deze casus en
1 Samuël 21:2-10. Bij een empirische kans van ongeveer 0,038 per venster
verwacht men over 23 passages ongeveer één zo'n paar. Twee paren zijn binnen
die verzameling niet onverwacht.

## Vergelijking met scènes met een vrouwelijke hoofdpersoon

De zeven controlescènes waren in het analyseplan vastgelegd. Er is geen
formeel, tijdgestempeld preregistratiedocument. De lezer moet de keuze daarom
op haar inhoudelijke plausibiliteit beoordelen.

| Passage | Woorden | Vrouwelijke vormen | Lidwoorden waargenomen | Lidwoorden verwacht | Ketenlengtesom |
|---|---:|---:|---:|---:|---:|
| 1 Samuël 1:12-18 | 124 | 27 | 1 | 8,8 | 6 |
| Genesis 24:15-27 | 221 | 40 | 10 | 15,7 | 0 |
| Genesis 27:5-17 | 214 | 26 | 9 | 15,2 | 4 |
| Rechters 4:4-22 | 479 | 64 | 26 | 34,1 | 7 |
| Ruth 2 | 541 | 115 | 43 | 38,5 | 4 |
| Ruth 3 | 352 | 80 | 27 | 25,1 | 6 |
| 1 Samuël 25:23-35 | 332 | 46 | 17 | 23,7 | 8 |
| 2 Samuël 14:4-20 | 465 | 58 | 60 | 33,1 | 0 |

Alle controlescènes hebben relatief veel vrouwelijke vormen. Hanna's factor
2,5 is niet uitzonderlijk. Bij Genesis 27 is de richting gelijk, maar het
contrast niet afzonderlijk significant (G² = 3,1, p ongeveer 0,08).

Geen controlescène heeft een afzonderlijk significant lidwoordtekort. De
vrouw van Tekoa heeft juist een significant overschot. Het referentieel
verval wordt door Rechters 4, Ruth 3 en 1 Samuël 25 geëvenaard of overtroffen.

## Venstergevoeligheid

| Meting | 1:12-18 | 1:9-20 |
|---|---:|---:|
| Woorden | 124 | 244 |
| Lidwoorden waargenomen / verwacht | 1 / 8,8 | 6 / 17,4 |
| Vrouwelijke vormen waargenomen / verwacht | 27 / 10,7 | 48 / 21,0 |
| Vorm-hapaxen | 2 | 2 |
| Naam Hanna / naam Eli | 2 / 4 | 5 / 5 |
| Ketenlengtesom | 6 | 7 |

Het lidwoordtekort blijft in het bredere venster bestaan. De naamtelling
wordt gelijk. De naamloosheid beschrijft daarom het slot van de kleinere
scène en geen blijvend verdwijnen van Hanna's naam.

## Nieuwheid en bewijskracht

De [nieuwheidsoordelen](nieuwheidsoordelen.md) gaan over de 32 geraadpleegde
titels. De collectie mist close readings van Fokkelman en Polzin,
genderkritische studies over Hanna en tijdschriftartikelen over 1 Samuël 1.
Een opzoeklaag kan bovendien een relevante bronpassage missen. Het oordeel
`novel` betekent daarom alleen: niet aangetroffen in de geraadpleegde collectie.

Een dergelijk oordeel zegt niets over de uitkomst van de controles. De
vrouwelijke vormen en de inbeddingsdiepte behouden hun oorspronkelijke
nieuwheidsoordeel, maar dienen als ijkpunt. Referentieel verval dient als
context. De aanvullende controles zijn alleen voor deze casus uitgevoerd.
Voor de overige dialogen staat dezelfde toetsing nog open.
