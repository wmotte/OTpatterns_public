# Niet-conventionele vragen bij 1 Samuël 25:23-35 (BHSA 2023)

*Passage: 1 Samuël 25:23-35 (13 verzen, 332 woorden; genre narratief,
periode EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine
tegen het OT-corpus, gestratificeerd (global/boek/genre/taal/periode), run van 13 juni 2026, 120 bevindingen. De run gebruikt morfosyntaxis,
discours-pragmatiek, voorspellende families, tekstdynamiek, NER,
novelty-families, de querybibliotheek en zeven passagespecifieke dynamische
queries. Dynamische queries zijn exploratief en krijgen hoogstens confidence
Middel. De commentaar- en nieuwheidstoets is uitgevoerd via NotebookLM tegen
de 1-2 Samuël-commentaren.*

Twaalfde dialoog uit de Samuël-reeks: Abigaïl valt voor David neer en spreekt
hem van wraak weg. De passage is grammaticaal dicht bevolkt met ik/u-suffixen,
met een hoge druk op aanspreking en bezit. De sterkste eigen query vangt de
kern van de scène: bloed, hand en tegenhouden/redden staan samen in twee
verzen. Abigaïls rede werkt dus via relationele druk en via een nauw geformuleerde
rem op Davids hand.

## Vraag 1 — Hoe spreekt Abigaïl zichzelf klein?

**Vraag:** Is Abigaïls nederigheid vooral narratief gebaar, of zit zij ook in
de grammatica van haar rede?

**Wat de data toont:** Een dynamische query naar directe rede waarin
`>MH/|CPXH/` ("dienstvrouw") en `>DWN/` ("heer") samen voorkomen levert twee
robuuste treffers op, in 1 Samuël 25:25 en 25:27 (G² = 22,55; q ≈ 0,000010).
De query is exploratief. De vaste meting ondersteunt hetzelfde register:
tweede-persoonssuffixen zijn sterk oververtegenwoordigd, zevenentwintig waar
ongeveer negen verwacht zijn (G² = 25,78; q < 0,000001), en eerste-
persoonssuffixen eveneens, eenentwintig waar ongeveer zeven verwacht zijn
(G² = 17,12; q ≈ 0,000035).

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=>MH/|CPXH/
  word lex=>DWN/
```

```text
word prs_ps=p2
word prs_ps=p1
```

**Duiding:** Abigaïl zet zichzelf in de taal van afhankelijkheid en David in de
taal van aangesproken heer. Dat is geen lege beleefdheid. De hoge suffixdruk
maakt haar rede relationeel compact: mijn schuld, uw oren, uw leven, uw hand.
Zo krijgt David geen abstract advies, maar een reeks directe aanspraken op zijn
eigen handelen.


**Staat dit al in de commentaren?:** deels. De dienstvrouw/heer-taal en
Abigaïls nederige diplomatie zijn `standard` in de commentaren. De
suffixdichtheden zijn `partially_covered`: de directe aanspreekdruk is bekend,
maar BHSA kwantificeert hoe sterk ik/u-taal deze rede draagt.

**Confidence:** Middel (≤ plafond Middel) · features:
`dynamic_query=maidservant_lord_address`, `prs_ps=p2`, `prs_ps=p1` ·
robustness: robust · versie 2023

## Vraag 2 — Waar zit de rem op Davids geweld?

**Vraag:** Wordt de-escalatie vooral als emotionele overtuiging verteld, of als
een concrete grammatica van bloed en hand?

**Wat de data toont:** De dynamische query naar verzen met `DM/` ("bloed"),
`JD/` ("hand") en `JC<[` ("redden/helpen/weerhouden") levert twee robuuste
treffers op, in 25:26 en 25:33 (G² = 26,28; q ≈ 0,0000044). Zij is
exploratief, maar de scoring houdt stand in alle strata. Daarnaast verschijnt
`JC<[` in drie clauses zonder expliciet BHSA-object, waar ongeveer één verwacht
is (G² = 6,49; q ≈ 0,011). Het werkwoord wordt dus niet breed uitgewerkt met
een objectveld; het functioneert dicht bij de handeling die wordt voorkomen.

**Text-Fabric-query:**

```text
verse
  word lex=DM/
  word lex=JD/
  word lex=JC<[
```

```text
clause kind=VC /where/ verb lex=JC<[ /without/ phrase function=Objc
```

**Duiding:** Abigaïl maakt Davids keuze lichamelijk en juridisch concreet:
bloed mag niet aan zijn hand komen. Davids latere zegen neemt precies die lijn
over. De query verbindt haar waarschuwing en zijn erkenning in één patroon.


**Staat dit al in de commentaren?:** grotendeels. De koppeling van bloed,
hand en weerhouding is `standard`: commentaren lezen Abigaïls interventie al
als Gods middel om David van bloedschuld en eigenrichting af te houden. De
objectloze `JC<[`-meting is `partially_covered` en blijft een technische
formalisering van die bekende lijn.

**Confidence:** Middel (≤ plafond Middel) · features:
`dynamic_query=blood_hand_restraint`, `valence_object_drop=JC<[` · robustness:
robust · versie 2023

## Vraag 3 — Wie krijgt grammaticale agency?

**Vraag:** Laat de tekst David als enige handelende partij staan, of verdeelt
de syntaxis de agency breder?

**Wat de data toont:** De actantcentraliteit is robuust hoog: zeven dominante
actanten waar ongeveer twee tot drie verwacht zijn (G² = 6,58; q ≈ 0,010). De
voorbeelden zijn veelzeggend: JHWH heeft zeven uitgaande en één inkomende
relatie; Abigaïl als derde-persoons vrouwelijke actant heeft acht uitgaande
relaties; David als tweede-persoons mannelijke actant heeft vier uitgaande
relaties. De tweede-persoons vrouwelijke actant krijgt in Davids antwoord ook
vijf uitgaande relaties.

**Text-Fabric-query:**

```text
count subject vs object mentions by lexical/person key
```

Deze meting is een engineproxy en geen enkele statische zoekregel.

**Duiding:** De scène draait rond David, maar de grammatica laat hem niet als
enige handelaar staan. Abigaïl handelt, JHWH handelt, en David wordt juist door
aanspraak in een verantwoordingspositie gezet. Dat past bij de machtsas van de
reeks: iemand zonder formele militaire macht zet de gewapende leider
grammaticaal vast.


**Staat dit al in de commentaren?:** ja. De agencyverdeling over David,
Abigaïl, Nabal en JHWH is `standard`; commentaren bespreken de scène al als
een driehoek waarin JHWH's voorzienige hand achter Abigaïls optreden staat.
BHSA kwantificeert die bekende verdeling als actantcentraliteit.

**Confidence:** Middel (≤ plafond Middel) · feature:
`actant_in_out_degree` · robustness: robust · versie 2023

## Vraag 4 — Hoe dicht is de aanspreking?

**Vraag:** Is Abigaïls rede vooral argumentatie, of werkt zij door een hoge
dichtheid van persoonsverwijzing?

**Wat de data toont:** De participantendichtheid is robuust hoog: suffixen en
pronomina komen achtenzestig keer voor, waar ongeveer tweeënveertig verwacht
zijn (G² = 16,06; q ≈ 0,000061). Tegelijk is derde-persoonsmarkering juist
ondervertegenwoordigd: drieënveertig waar ongeveer vijfenzestig verwacht zijn
(G² = 18,57; q ≈ 0,000033). De passage verschuift dus naar ik/u-taal.

**Text-Fabric-query:**

```text
word prs_ps=p1|p2|p3  OR  word sp=prps|prde|prin
```

```text
word ps=p3
```

**Duiding:** Abigaïl houdt David in de rede aanwezig. Haar betoog heeft weinig
afstandelijke derde-persoonstaal en veel relationele markering. Dat maakt de
de-escalatie minder juridisch-deductief en meer aanspreekbaar: David hoort zijn
eigen hand, ziel, vijanden en toekomst terug.


**Staat dit al in de commentaren?:** deels. Commentaren typeren Abigaïls rede
als lang, rijk en diplomatiek intens, maar niet als corpusmeting van
participantendichtheid of lage derde-persoonsmarkering. De BHSA-bijdrage is
daarom `partially_covered`.

**Confidence:** Middel (≤ plafond Middel) · features:
`participant_density`, `ps/prs_ps=p3` · robustness: robust · versie 2023

## Vraag 5 — Waarom eindigt het met zegen zonder object?

**Vraag:** Is Davids zegen aan het slot gewoon afsluitende beleefdheid, of
verdicht de grammatica het antwoord?

**Wat de data toont:** Het werkwoord `BRK[` ("zegenen") komt drie keer voor
zonder expliciet BHSA-object, waar ongeveer één verwacht is (G² = 6,77;
q ≈ 0,011). De voorbeelden liggen in 25:32 en 25:33, precies in Davids antwoord
na Abigaïls rede. Ook de agency-obfuscation-proxy is laag: slechts twee
actorlichte gebeurtenissen waar er ongeveer acht verwacht zijn (G² = 6,48;
q ≈ 0,011). De scène laat haar beslissende handelingen dus vrij expliciet
toewijzen.

**Text-Fabric-query:**

```text
clause kind=VC /where/ verb lex=BRK[ /without/ phrase function=Objc
```

```text
passive stem or 3mp verb without Subj phrase
```

**Duiding:** Davids zegen formuleert het antwoord in korte reeksen: JHWH
gezegend, uw inzicht gezegend, u gezegend. Het object hoeft grammaticaal niet
telkens als BHSA-Objc te verschijnen, omdat de zegen zelf de respons draagt.
De lage actorverhulling past daarbij: David noemt wie ingrijpt en wie gezegend
wordt.


**Staat dit al in de commentaren?:** deels. Davids drievoudige zegen in
25:32-33 als teken van ommekeer is bekend. De meting van `BRK[` zonder
expliciete BHSA-Objc en de lage actorverhulling zijn `partially_covered` en
blijven secundaire vormobservaties.

**Confidence:** Middel (≤ plafond Middel) · features:
`valence_object_drop=BRK[`, `agentless_passive_or_3mp` · robustness: robust ·
versie 2023

```json
{
  "claim_ledger": [
    {
      "finding_id": 35,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 30,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 44,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 29,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 120,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 40,
      "evidence_field": "examples",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 47,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 42,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 119,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    }
  ]
}
```
