# Niet-conventionele vragen bij 2 Samuël 13:10-16 (BHSA 2023)

*Passage: 2 Samuël 13:10-16 (7 verzen, 151 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), run van 12 juni
2026, 30 bevindingen. De run gebruikt morfosyntaxis, discours-pragmatiek,
voorspellende families, tekstdynamiek en negen passagespecifieke dynamische
queries. Dynamische queries zijn exploratief en krijgen hoogstens confidence
Middel. De commentaar- en nieuwheidstoets is uitgevoerd op 13 juni 2026; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

Achttiende dialoog uit de Samuël-reeks: Amnon lokt Tamar de kamer in, beveelt
haar bij hem te liggen, negeert haar smeekrede en stuurt haar daarna weg. De
analyse moet zakelijk blijven. De gegevens laten vooral zien hoe Tamars stem
grammaticaal aanwezig is: vrouwelijke suffixen en vormen zijn robuust dicht,
ontkenningen zijn uitzonderlijk hoog, de rede is ingebed en Tamar zoekt nog een
formeel alternatief via de koning.

## Vraag 1 — Hoe sluit de kamer de scène?

**Vraag:** Wordt de verplaatsing naar de kamer vormelijk gemarkeerd?

**Wat de data toont:** Een dynamische, exploratieve query op versniveau vindt
in 2 Samuël 13:10 de combinatie Amnon, Tamar, komen/brengen en kamer (G² =
14,36; q ≈ 0,00068). De query is robuust tegen boek, genre, taal en periode.
De bredere bewegingsdetector beschrijft in de passage zes bewegingswortels met
richting naar of naar binnen. Die bredere bevinding is global-only en geen
kernclaim.

**Text-Fabric-query:**

```text
verse
  word lex=>MNWN/
  word lex=TMR===/
  word lex=BW>[
  word lex=XDR/
```

**Duiding:** De scène begint met een verplaatsing naar een besloten ruimte.
Amnon laat Tamar het eten naar de kamer brengen en zij brengt het naar hem
binnen. De vormmeting markeert het tekstuele moment waarop de dialoog ruimtelijk
wordt vernauwd.


**Staat dit al in de commentaren?:** standard. De binnenkamer als structureel
punt van Amnons valstrik wordt besproken; BHSA markeert actoren, beweging en
locatie in 13:10.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=amnon_tamar_private_room` · robustness: robust · versie 2023

## Vraag 2 — Hoe hoorbaar blijft Tamar?

**Vraag:** Laat de grammatica Tamar alleen als object zien, of blijft haar
aanwezigheid vormelijk sterk?

**Wat de data toont:** Vrouwelijke pronominale suffixen zijn robuust hoog:
dertien waargenomen tegen ongeveer 1,74 verwacht (G² = 30,63; q ≈
0,00000025). Vrouwelijk genus is eveneens robuust hoog: 29 tegen ongeveer
13,0 verwacht (G² = 16,47; q ≈ 0,000066). De voorbeelden omvatten `יָּדֵךְ`,
`אָחִיהָ`, `בָּהּ`, `לָהּ`, `קֹולָהּ`, `מִמֶּנָּה`, `יְעַנֶּהָ` en `אֹתָהּ`.

**Text-Fabric-query:**

```text
word prs_gn=f
```

```text
word gn=f
```

**Duiding:** De passage blijft grammaticaal rond Tamar getrokken. Dat verzacht
de scène niet. Het betekent dat haar lichaam, haar stem, haar verwantschap en
haar aanspreekpositie formeel herhaald worden. De tekst laat haar niet
verdwijnen op het moment dat Amnon haar niet hoort.


**Staat dit al in de commentaren?:** partially_covered. Commentaren herkennen
Tamars stem en aanwezigheid; de vrouwelijke suffix- en genusdichtheid zijn
BHSA-formaliseringen. De formulering blijft zakelijk om het geweld niet te
verfraaien.

**Confidence:** Hoog (≤ plafond Hoog) · feature: `prs_gn=f` · robustness:
robust · versie 2023

## Vraag 3 — Wat doet Tamars negatieve rede?

**Vraag:** Is Tamars antwoord vooral een verzoek, of bestaat het uit formele
verbodstaal?

**Wat de data toont:** Ontkenningen zijn robuust hoog: acht waargenomen tegen
ongeveer 2,14 verwacht (G² = 9,60; q ≈ 0,00195). De voorbeelden liggen in
13:12, 13:13, 13:14 en 13:16: `אַל`, `לֹא`, opnieuw `אַל`, `לֹא`, `לֹא`,
`אַל`, `לֹא`. De dichtheid staat overeind tegen dezelfde nauwere strata.

**Text-Fabric-query:**

```text
word sp=nega
```

**Duiding:** Tamar spreekt niet vaag. Haar rede begint met verbod en
ontkenning: doe dit niet, zo doet men niet in Israël, doe deze schanddaad niet.
De verteller herneemt daarna de ontkenning bij Amnon: hij wilde niet luisteren.
De passage wordt dus sterk bepaald door wat Tamar afwijst en door wat Amnon
weigert te horen.


**Staat dit al in de commentaren?:** standard. Tamars herhaalde ontkenningen
worden expliciet besproken; BHSA bevestigt de negatieconcentratie.

**Confidence:** Hoog (≤ plafond Hoog) · feature: `sp=nega` · robustness:
robust · versie 2023

## Vraag 4 — Waarom noemt Tamar de koning?

**Vraag:** Probeert Tamar nog een formele route te openen binnen de
machtsstructuur?

**Wat de data toont:** Een dynamische, exploratieve query naar directe rede met
imperatief `DBR[`, beleefdheidspartikel `N>` en `MLK/` vindt één robuuste
treffer in 2 Samuël 13:13 (G² = 13,23; q ≈ 0,00083). De detector
`volitive_clash` vindt daarnaast twee overgangen tussen directe en verzachte
volitieve rede. Die bevinding is slechts partially robust; zij past inhoudelijk
bij 13:13, maar draagt geen hoge claim.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=DBR[ vt=impv
  word lex=N>
  word lex=MLK/
```

```text
% aangrenzende txt~Q clauses met volitief direct↔softened transition
```

**Duiding:** Tamar roept niet alleen "nee". Zij formuleert ook een procedurele
uitweg: spreek toch met de koning. De combinatie van imperatief en `na` maakt
de uitweg dringend en verzacht tegelijk. In de machtsas van de reeks is dit
belangrijk: iemand zonder macht zoekt nog een erkende gezagsroute.


**Staat dit al in de commentaren?:** standard/partially_covered. Tamars beroep
op de koning is standaardcommentaar; de volitiefbotsing tussen bevel en
verzachte smeekrede is gedeeltelijk gedekt.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=speak_please_to_the_king` · robustness: robust · versie 2023

## Vraag 5 — Hoe zwaar is de inbedding?

**Vraag:** Heeft Tamars argumentatie een andere syntactische dichtheid dan
Amnons bevelen?

**Wat de data toont:** Inbeddingsdiepte 9 is robuust hoog: tien waargenomen
tegen ongeveer 3,27 verwacht (G² = 10,06; q ≈ 0,0030). Inbeddingsdiepte 17 is
ook robuust aanwezig: drie tegen ongeveer 0,30 verwacht (G² = 8,6; q
significant). De passage heeft bovendien hoge morfologische zwaarte: achttien
waargenomen tegen ongeveer tien verwacht (G² = 7,23; q ≈ 0,0072).

**Text-Fabric-query:**

```text
clause_atom tab=9
```

```text
clause_atom tab=17
```

```text
prs_*/uvf/vbe proxy per word
```

**Duiding:** Amnons bevelen zijn kort: kom, lig, sta op, ga. Tamars rede bouwt
argumenten: zo wordt niet gedaan in Israël, doe deze schanddaad niet, waarheen
zou ik mijn smaad dragen, jij zou als een dwaas zijn, spreek met de koning. De
inbeddings- en zwaartemetingen ondersteunen die asymmetrie tussen bevel en
argument.


**Staat dit al in de commentaren?:** novel/standard. De inbeddingsdiepten 9 en
17 worden niet als technische vormlaag besproken; de morfologische zwaarte rond
Amnons handelingen is inhoudelijk bekend en door BHSA gekwantificeerd.

**Confidence:** Hoog (≤ plafond Hoog) · feature: `tab (inbeddingsdiepte)` ·
robustness: robust · versie 2023

```json
{"claim_ledger":[
  {"finding_id":15,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":15,"evidence_field":"examples","claim_type":"interpretive_hypothesis"},
  {"finding_id":5,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":5,"evidence_field":"examples","claim_type":"interpretive_hypothesis"},
  {"finding_id":12,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":12,"evidence_field":"examples","claim_type":"interpretive_hypothesis"},
  {"finding_id":25,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":25,"evidence_field":"examples","claim_type":"interpretive_hypothesis"},
  {"finding_id":19,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":19,"evidence_field":"examples","claim_type":"interpretive_hypothesis"},
  {"finding_id":27,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":27,"evidence_field":"examples","claim_type":"interpretive_hypothesis"},
  {"finding_id":24,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":24,"evidence_field":"examples","claim_type":"interpretive_hypothesis"},
  {"finding_id":26,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":26,"evidence_field":"examples","claim_type":"interpretive_hypothesis"},
  {"finding_id":4,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":4,"evidence_field":"examples","claim_type":"interpretive_hypothesis"}
]}
```
