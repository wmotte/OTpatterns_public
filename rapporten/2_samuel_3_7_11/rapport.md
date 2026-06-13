# Niet-conventionele vragen bij 2 Samuël 3:7-11 (BHSA 2023)

*Passage: 2 Samuël 3:7-11 (5 verzen, 118 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), run van 13 juni 2026, 76 bevindingen. De run gebruikt morfosyntaxis, discours-pragmatiek,
voorspellende families, tekstdynamiek, NER, novelty-families, de
querybibliotheek en zes passagespecifieke dynamische queries. Dynamische
queries zijn exploratief en krijgen hoogstens confidence Middel. De
commentaar- en nieuwheidstoets is afgerond; de oordelen staan samengevat in
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

Vijftiende dialoog uit de Samuël-reeks: Isboset beschuldigt Abner vanwege
Rizpa, Sauls bijvrouw. Abner antwoordt vanuit de positie van de generaal en
trekt het gesprek onmiddellijk naar dynastie, trouw aan Saul en eed tegenover
God. De korte scène draait dus om een machtsomkering. De zwakke koning opent met
een vraag; de generaal verlegt het kader naar het huis van Saul, bindt zichzelf
met een vloekformule en formuleert de overdracht naar David als doelketen. De
gegevens laten vooral zien hoe smal de syntaxis wordt: weinig meervoud, veel
inbedding, een concentratie van infinitieven en enkele robuuste dynamische
treffers in Abners rede.

## Vraag 1 — Wie bepaalt het kader?

**Vraag:** Blijft de scène bij Isbosets beschuldiging over Rizpa, of neemt
Abner het frame grammaticaal over?

**Wat de data toont:** De dynamische query naar directe rede waarin `BJT/`
("huis") en `C>WL=/` ("Saul") samen voorkomen, levert twee robuuste treffers
op, in 2 Samuël 3:8 en 3:10 (G² = 24,02; q ≈ 0,000013). De query is
exploratief. Zij vangt precies de verschuiving in Abners antwoord: de
beschuldiging over een bijvrouw wordt een betoog over het huis van Saul.
Daarnaast is het aantal meervoudsvormen in de passage robuust laag: drie
waargenomen tegen ongeveer vijftien verwacht (G² = 16,05; q ≈ 0,000062). De
weinige meervouden horen bij "woorden", "zijn broers" en "God", dus bij
Abners repliek en de eedformule.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=BJT/
  word lex=C>WL=/
```

```text
word nu=pl
```

**Duiding:** Abner vergroot Isbosets vraag en versmalt tegelijk het aantal
actieve partijen. Het gesprek wordt geen raadsscène en geen onderhandeling
tussen groepen. Abner maakt van de beschuldiging een conflict tussen één
generaal en een dynastiek huis. Dat past bij de machtsas van deze dialoog: de
man zonder kroon bepaalt de termen waarin de koning nog kan spreken.


**Staat dit al in de commentaren?:** gemengd. De huis/Saul-koppeling in Abners
antwoord is gangbare commentaarstof: commentaren lezen zijn beroep op het huis
van Saul als politieke herframing van de Rizpa-beschuldiging. De lage
meervoudsdichtheid is gedeeltelijk gedekt. De versmalling naar Abner en
Isboset is literair herkend; de formele telling van `nu=pl` voegt de
kwantitatieve laag toe.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=saul_house_in_abner_speech` · robustness: robust · versie 2023

## Vraag 2 — Waar wordt dreiging doeltaal?

**Vraag:** Is Abners dreiging alleen inhoudelijk fors, of verandert de syntaxis
in een reeks doelconstructies?

**Wat de data toont:** De oude brede `typ=InfC`-oververtegenwoordiging is in
de full-run geen actuele top-120 drager meer. De nieuwe run bewaart de
doeltaal via twee smallere bevindingen. Een gerichte dynamische query naar
infinitiefclauses in directe rede met `<BR[` ("overbrengen") of `QWM[`
("oprichten") levert twee robuuste treffers op in 3:10 (G² = 16,12; q ≈
0,00042). Daarnaast beschrijft de purpose-chain-detector een global-only
infc-keten van vier vormen in 3:10-11, waarvan drie met l+infc: "overbrengen",
"oprichten", "terugantwoorden" en "vrees". Die tweede bevinding is
ondersteunend en niet q-significant.

**Text-Fabric-query:**

```text
% dichte cluster van infinitivus constructus (vt=infc), vooral l+infc
```

```text
clause domain=Q typ=InfC
  word lex=<BR[|QWM[
```

**Duiding:** Abner spreekt niet alleen in boosheid. Zijn rede krijgt een
teleologische vorm: om het koningschap over te brengen, om Davids troon op te
richten. De syntaxis maakt zijn dreiging programmatisch. Daarmee keert de
machtsverhouding: Isboset vraagt naar een daad in het verleden; Abner formuleert
een toekomstig politiek programma.


**Staat dit al in de commentaren?:** gemengd. De gerichte doelketen
`<BR[`/`QWM[` is bekend: commentaren bespreken "overbrengen" en "oprichten" als
inhoudelijke kern van Abners politieke eed. De bredere concentratie van
infinitiefconstructies is gedeeltelijk gedekt. Commentaren zien de
procedurele machtstaal; de full-run maakt dat formeel meetbaar via de gerichte
doelquery en een ondersteunende infc-keten, niet meer via een brede
`typ=InfC`-claim.

**Confidence:** Middel (≤ plafond Middel) · features:
`dynamic_query=purpose_infinitive_transfer_and_establish`,
`infc_purpose_chains` · robustness: robust / global_only · versie 2023

## Vraag 3 — Hoe zwaar is Abners eed?

**Vraag:** Is de eedformule slechts conventioneel, of krijgt zij in deze korte
dialoog een meetbare scharnierfunctie?

**Wat de data toont:** De dynamische query naar directe rede waarin `>LHJM/`
("God") en `>BNR/` ("Abner") samen voorkomen, levert één robuuste treffer op
in 2 Samuël 3:9 (G² = 14,73; q ≈ 0,00058). De deterministische detector
`volitive_in_speech` vindt daar ook twee derde-persoons yiqtol-vormen in
directe rede: "zo doe God aan Abner" en "zo voege Hij hem toe". Deze tweede
bevinding is global-only en zonder q-significantie. Zij beschrijft vooral de
lokale vorm van de vloekformule.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=>LHJM/
  word lex=>BNR/
```

```text
% clause met txt~Q en predicaat word vt=impf ps=p3
```

**Duiding:** Abner gebruikt de eed niet als versiering. Hij maakt zichzelf het
object van een goddelijke sanctie en bindt die sanctie aan zijn politieke
dreiging. Daardoor verschuift de scène van Isbosets aanklacht naar Abners
zelfbinding: de generaal zet een vloek op zijn eigen toekomstige handelen en
ontneemt de koning daarmee de normerende positie.


**Staat dit al in de commentaren?:** bekend. De eedformule, de zelfimprecatie
en het performatieve karakter van Abners verklaring worden expliciet besproken.
De BHSA-query geeft een formele corpusmarkering voor een bekend eedregister en
dient hier als ijkpunt.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=abner_divine_oath_formula` · robustness: robust · versie 2023

## Vraag 4 — Waarom antwoordt Isboset niet?

**Vraag:** Wordt Isbosets zwijgen voorbereid door de vorm van Abners rede?

**Wat de data toont:** De oude inbeddingsdiepte-10-claim is in de full-run
geen actuele top-120 drager meer. De nieuwe evidence draagt deze vraag via de
spreekarchitectuur en de lokale overgangen. De quote-topology-detector telt
dertien quote- of vraaggerelateerde clauses, twee vragen en drie
diepteverschuivingen (global-only, q-significant). Daarnaast vindt de engine
twee lokaal onverwachte clause-overgangen (G² = 6,65; q ≈ 0,0099): de overgang
naar Abners dienstclaim in 3:8 en de overgang naar de eedformule in 3:9. De
vorm van de rede wordt dus niet vlakker na de vraag; zij wordt vraag- en
spraakgestuurd en sprongsgewijs.

**Text-Fabric-query:**

```text
clause txt~Q OR speech-verb Pred OR interrogative word/ls=ques
```

```text
clause typ sequence; compare transition with preceding local window
```

Deze twee metingen zijn engineproxies en niet als eenvoudige statische
zoekregels in de browser te reproduceren.

**Duiding:** Isbosets stilte in 3:11 komt na een syntactisch zware repliek. De
tekst motiveert het zwijgen expliciet met vrees voor Abner, maar de vorm van
Abners rede bereidt dat mee voor: vraag, beledigde tegenvraag en dienstclaim
gaan direct over in negatie, eed en dynastiek programma. De koning stelt één
vraag; daarna neemt Abners syntaxis de scène over.


**Staat dit al in de commentaren?:** gedeeltelijk gedekt. Commentaren
beschrijven de retorische zwaarte, abrupte wending en woordmassa van Abners
rede; zij gebruiken niet de technische termen quote-topology of lokale
clause-overgang. De metingen kwantificeren dus een bekende literaire indruk.

**Confidence:** Middel (≤ plafond Middel) · features: `quote_topology`,
`syntactic_surprise` · robustness: global_only / robust · versie 2023

## Vraag 5 — Wat doet Rizpa in de grammatica?

**Vraag:** Is Rizpa alleen de aanleiding van de scène, of maakt de vormlaag
zichtbaar hoe snel zij uit het gesprek verdwijnt?

**Wat de data toont:** De engine vindt in 2 Samuël 3:7 een lokale cluster van
vrouwelijk gemarkeerde vormen en suffixen: "bijvrouw", "haar naam", "Rizpa",
"dochter" en opnieuw "bijvrouw". Deze bevinding is global-only en niet
q-significant. Zij draagt geen statistische kernclaim. Wel beschrijft zij de
opening: de vrouwelijke referent is grammaticaal geconcentreerd in de aanklacht.
In de rest van Abners antwoord verschuift de taal naar huis, verwantschap,
David, God en koningschap.

**Text-Fabric-query:**

```text
% dichte cluster van woorden met gn=f of prs_gn=f
```

**Duiding:** Rizpa is de aanleiding, niet het gespreksonderwerp dat Abner laat
staan. De grammatica volgt die verdwijning: de vrouwelijke cluster zit bij de
beschuldiging; Abners repliek verplaatst het conflict naar mannelijke dynastie-
en machtstaal. Dat moet sober worden gezegd, omdat de tekst Rizpa zelf geen
stem geeft.


**Staat dit al in de commentaren?:** gedeeltelijk gedekt. Commentaren
bespreken Rizpa breed als politiek scharnier, symbool van koninklijke macht of
katalysator van de breuk tussen Abner en Isboset. De grammaticale cluster zelf
wordt niet als meting besproken. Omdat de bevinding laag en niet robuust is,
blijft zij ondersteunend en vraagt zij om sobere formulering.

**Confidence:** Laag · feature: `cluster gn=f / prs_gn=f in slotruimte` ·
robustness: global_only · versie 2023

```json
{
  "claim_ledger": [
    {
      "finding_id": 20,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 20,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 23,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 23,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 22,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 22,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 39,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 26,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 26,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 59,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 21,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 47,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 47,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 46,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    }
  ]
}
```
