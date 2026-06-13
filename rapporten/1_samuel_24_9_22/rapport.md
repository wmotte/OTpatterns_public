# Niet-conventionele vragen bij 1 Samuël 24:9-22 (BHSA 2023)

*Passage: 1 Samuël 24:9-22 (14 verzen, 305 woorden; genre narratief,
periode EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine
tegen het OT-corpus, gestratificeerd (global/boek/genre/taal/periode), run van 13 juni 2026, 120 bevindingen. De run gebruikt morfosyntaxis,
discours-pragmatiek, voorspellende families, tekstdynamiek, NER,
novelty-families, de querybibliotheek en tien passagespecifieke dynamische
queries. Dynamische queries zijn exploratief en krijgen hoogstens confidence
Middel. De commentaar- en nieuwheidstoets is afgerond; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

Elfde dialoog uit de Samuël-reeks: David komt uit de grot, buigt voor Saul en
houdt een lange rede waarin hij zijn onschuld bewijst zonder de koning aan te
vallen. Saul antwoordt met herkenning, tranen, erkenning van Davids toekomst en
een eedvraag. De meting laat een uitzonderlijk relationele scène zien: veel
eerste- en tweede-persoonsmarkering, weinig derde-persoonssuffixen, hoge
participantendichtheid, diepe inbedding en robuuste dynamische treffers rond
zien, hand en JHWH als rechter.

## Vraag 1 — Wie beheerst de persoonsas?

**Vraag:** Blijft Saul grammaticaal de koning op afstand, of trekt David hem in
een ik-jij-betoog?

**Wat de data toont:** Eerste-persoonssuffixen zijn robuust hoog: 28 waar
ongeveer 6,8 verwacht zijn (G² = 38,30; q ≈ 0,0000000030). Tweede-persoons-
suffixen zijn ook robuust hoog: twintig waar ongeveer acht verwacht zijn (G² =
13,28; q ≈ 0,00031). Derde-persoonssuffixen zijn robuust laag: vijf waar
ongeveer 17,5 verwacht zijn (G² = 13,03; q ≈ 0,00031). De algemene
participantendichtheid is robuust hoog: 66 waar ongeveer 38,5 verwacht zijn
(G² = 19,09; q ≈ 0,000012).

**Text-Fabric-query:**

```text
word prs_ps=p1
word prs_ps=p2
word prs_ps=p3
```

```text
word prs_ps=p1|p2|p3  OR  word sp=prps|prde|prin
```

**Duiding:** David maakt van de scène geen afstandelijke rechtszaak. Zijn rede
zet voortdurend "ik", "mijn", "jij" en "jouw" naast elkaar. Daardoor ontstaat
een tijdelijke rolomkering: de ondergeschikte spreekt de koning direct aan en
stuurt de interpretatie van diens handelen.


**Staat dit al in de commentaren?:** partially_covered. De rolomkering en
ik-jij-dynamiek zijn bekend; de hoge eerste- en tweede-persoonssuffixen, lage
derde-persoonssuffixen en participantendichtheid zijn BHSA-specifieke
formaliseringen.

**Confidence:** Middel (≤ plafond Middel) · feature: `participant_density` ·
robustness: robust · versie 2023

## Vraag 2 — Hoe maakt David Saul tot getuige?

**Vraag:** Beroept David zich alleen op zijn eigen verklaring, of gebruikt hij
Sauls waarneming als bewijs?

**Wat de data toont:** Deictische verschuivingen naar het hier-en-nu zijn
robuust hoog: zeven waar ongeveer twee verwacht zijn (G² = 7,69; q ≈ 0,0056).
Voorbeelden zijn "zie, David zoekt uw kwaad", "zie, deze dag zagen uw ogen" en
"nu, zie, ik weet". Een dynamische vers-query met ogen, tweede persoon, zien,
JHWH, geven en hand levert één robuuste treffer op in 24:11 (G² = 10,71; q ≈
0,0064). Die query is exploratief.

**Text-Fabric-query:**

```text
HNH/PH/<TH/ZH after local finite-narrative context
```

```text
verse
  word lex=<JN/
  word prs_ps=p2
  word lex=R>H[
  word lex=JHWH/
  word lex=NTN[
  word lex=JD/
```

**Duiding:** David laat Saul kijken. De deictische vormen halen het bewijs naar
het moment van spreken: deze dag, uw ogen, mijn hand. Saul wordt zo getuige van
Davids niet-gebruik van macht.


**Staat dit al in de commentaren?:** standard. David als iemand die Saul met
"vandaag", "zie", eigen ogen en zichtbaar bewijsmateriaal tot getuige maakt is
expliciet besproken; BHSA maakt de deictische en waarnemingscluster
reproduceerbaar.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=your_eyes_saw_jhwh_gave_you_in_my_hand` · robustness: robust ·
versie 2023

## Vraag 3 — Wat doet de hand in deze scène?

**Vraag:** Is "hand" alleen bezitstaal, of wordt handtaal het grammaticale punt
waar macht wordt vastgehouden en geweigerd?

**Wat de data toont:** Het lexeem `JD/` ("hand") komt negen keer voor en is
global-only maar q-significant. Een dynamische query naar directe rede met
negatie, `CLX[` ("uitstrekken"), hand en heer levert één robuuste treffer op
in 24:11 (G² = 12,18; q ≈ 0,0064). De query is exploratief. De engine vindt
ook robuust veel tail modification: acht clauses waarin een pronominaal object
later nog nominaal wordt uitgewerkt (G² = 12,88; q ≈ 0,00033), waaronder de
formulering waarin JHWH Saul in Davids hand gaf.

**Text-Fabric-query:**

```text
word lex=JD/
```

```text
clause domain=Q
  word sp=nega
  word lex=CLX[
  word lex=JD/
  word lex=>DWN/
```

```text
% clause met pronominaal objectsuffix op predicaat en later Objc/Cmpl met nomen
```

**Duiding:** David heeft Saul grammaticaal "in mijn hand", maar de beslissende
daad is het niet-uitstrekken van die hand. De rolomkering zit dus in beheerste
macht: David kan handelen en maakt juist zijn weigering zichtbaar.


**Staat dit al in de commentaren?:** standard. Handtaal als leitmotief voor
macht, controle en zelfbeheersing is uitvoerig besproken; BHSA kwantificeert
het lexeem en specificeert de niet-uitstrekken-clause en staartmodificatie.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=i_will_not_send_hand_against_my_lord` · robustness: robust ·
versie 2023

## Vraag 4 — Waar plaatst David het oordeel?

**Vraag:** Neemt David zelf de rechterrol, of verplaatst hij het oordeel naar
JHWH terwijl hij Saul aanspreekt?

**Wat de data toont:** De oude godsnaam-dichtheid is in de full-run geen
actuele top-120 drager meer. De nieuwe evidence draagt deze vraag via
formelere JHWH-configuraties. `JHWH/` staat tweemaal als subject in xQtX-clauses
en is daarin robuust gemarkeerd; de constructie `MCJX/ × JHWH/` ("gezalfde van
JHWH") is eveneens robuust. De actantcentraliteit is robuust hoog: zeven
dominante actanten waar ongeveer één verwacht is (G² = 6,42; q ≈ 0,011). Een
dynamische query naar JHWH, oordelen, "tussen", eerste-persoonssuffix en
tweede-persoonssuffix levert één robuuste treffer op in 24:13 (G² = 10,80;
q ≈ 0,0064). Die query is exploratief.

**Text-Fabric-query:**

```text
clause typ=xQtX
  phrase function=Subj
    word lex=JHWH/
```

```text
word st=c lex=MCJX/
< word lex=JHWH/
```

```text
count subject vs object mentions by lexical/person key
```

```text
clause domain=Q
  word lex=JHWH/
  word lex=CPV[
  word lex=BJN/
  word prs_ps=p1
  word prs_ps=p2
```

**Duiding:** David spreekt Saul rechtstreeks aan, maar hij eigent zich het
vonnis niet toe. JHWH staat tussen de twee partijen als rechter. Daardoor kan
David de koning corrigeren zonder zichzelf als koninglijke uitvoerder van het
vonnis neer te zetten.


**Staat dit al in de commentaren?:** standard. JHWH als rechter of arbiter
tussen David en Saul, waardoor David eigenrichting afwijst, is standaard in de
commentaren; BHSA formaliseert dit via JHWH als subject, de
"gezalfde-van-JHWH"-constructie, actantcentraliteit en de oordeel-tussen-query.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=jhwh_judge_between_me_and_you` · robustness: robust · versie 2023

## Vraag 5 — Waarom duurt Davids rede zo lang?

**Vraag:** Is de scène vooral Sauls bekentenis, of draagt Davids ononderbroken
rede de rolomkering?

**Wat de data toont:** De engine registreert één ongewoon lange
ononderbroken directe rede: 36 clauses en 151 woorden vanaf 24:10 (G² = 13,06;
q ≈ 0,00030), global-only maar q-significant. Clause-atoms met
inbeddingsdiepte 12 zijn robuust hoog: elf waar ongeveer 2,7 verwacht zijn
(G² = 15,13; q ≈ 0,00020). Agentloze passieve of subjectlichte vormen zijn
robuust laag: één waar ongeveer 7,8 verwacht zijn (G² = 10,21; q ≈ 0,0014).

**Text-Fabric-query:**

```text
maximal txt~Q run length (words) before a narrative break / new introducer
```

```text
clause_atom tab=12
```

```text
passive stem or 3mp verb without Subj phrase
```

**Duiding:** David krijgt ruimte om de zaak uit te leggen. De lange rede,
diepe inbedding en lage subjectverhulling maken zijn betoog expliciet: wie
handelt, wie spaart en wie oordeelt blijft zichtbaar. Sauls antwoord komt na
een grammaticaal zwaar opgebouwd dossier.


**Staat dit al in de commentaren?:** partially_covered. De uitzonderlijke
lengte en retorische kwaliteit van Davids rede zijn bekend; de
inbeddingsdiepte en lage actantverhulling blijven formele BHSA-toevoegingen.

**Confidence:** Middel (≤ plafond Middel) · feature:
`speech_survival_duration` · robustness: global_only · versie 2023

```json
{
  "claim_ledger": [
    {
      "finding_id": 23,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 59,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 64,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 43,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 48,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 38,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 72,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 46,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 2,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 20,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 39,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 85,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 63,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 52,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    }
  ]
}
```
