# Niet-conventionele vragen bij 2 Samuël 12:1-13 (BHSA 2023)

*Passage: 2 Samuël 12:1-13 (13 verzen, 333 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), run van 13 juni 2026, 120 bevindingen. De run gebruikt morfosyntaxis, discours-pragmatiek,
voorspellende families, tekstdynamiek en negen passagespecifieke dynamische
queries. Dynamische queries zijn exploratief en krijgen hoogstens confidence
Middel. De commentaar- en nieuwheidstoets is uitgevoerd op 13 juni 2026; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

Zeventiende dialoog uit de Samuël-reeks: Natan brengt Davids verborgen daad via
een parabel aan het licht. De scène is hoog verzadigd in commentaren en dient
hier ook als ijkpunt. De gegevens voegen vooral vormcontrole toe: de parabel schakelt
snel tussen werkwoordsvormen, concentreert rollen ongelijk, maakt Davids eigen
oordeel syntactisch inzetbaar en zet daarna een korte identificatie naast een
lange goddelijke aanklacht.

## Vraag 1 — Waarom werkt de parabel als beweging?

**Vraag:** Is de parabel alleen een inhoudelijke omweg, of krijgt zij een
meetbare tijd- en vormonrust?

**Wat de data toont:** De detector `tam_chaos` vindt twintig vensters met drie
of meer TAM-waarden in een vijf-clause-zone, waar ongeveer 7,93 verwacht zijn
(G² = 15,90; q ≈ 0,000067). De afwijking is robuust tegen boek, genre, taal en
periode. De voorbeelden liggen al in 12:1-4: zenden, komen, spreken, waren,
kopen, laten opgroeien, eten, drinken, liggen en nemen wisselen snel van vorm.

**Text-Fabric-query:**

```text
sliding window over Pred verb vt values
```

**Duiding:** Natan vertelt geen vlak verhaal. De parabel beweegt snel van
situatieschets naar huishoudelijke routine en dan naar diefstal. Die
vormwisseling draagt bij aan de val: David hoort een casus die narratief levend
wordt voordat hij zichzelf erin herkent.


**Staat dit al in de commentaren?:** novel. De retorische kracht van de
parabel is standaardmateriaal, maar de snelle TAM-wisseling wordt niet als
kwantitatieve vormmaat besproken.

**Confidence:** Hoog (≤ plafond Hoog) · feature: `rapid_tam_switching` ·
robustness: robust · versie 2023

## Vraag 2 — Wie draagt de rollen?

**Vraag:** Hoe worden de fictieve en echte machtsrollen grammaticaal verdeeld?

**Wat de data toont:** De actantverdeling is robuust ongelijk: acht dominante
actanten waar ongeveer twee verwacht zijn (G² = 10,43; q ≈ 0,0012). De
voorbeelden omvatten p3-mannelijke rollen in de parabel, p1-enkelvoud in
JHWH's ik-rede, p2-mannelijk in de aanklacht en `>CH/` als objectpool in 12:8-10.
Meervoudsvormen zijn tegelijk robuust laag: dertien tegen ongeveer 42,89
verwacht (G² = 31,7; q significant).

**Text-Fabric-query:**

```text
count subject vs object mentions by lexical/person key
```

```text
word nu=pl
```

**Duiding:** De parabel begint met twee mannen, maar de scène vernauwt naar
enkele dragende rollen: rijke, arme, lam, David, JHWH, Uria en de vrouw. De
lage meervoudsdichtheid ondersteunt die vernauwing. De aanklacht wordt geen
algemeen politiek betoog; zij komt terecht bij een enkelvoudig "jij".


**Staat dit al in de commentaren?:** standard/partially_covered. De
rolverdeling is standaardcommentaar; de lage meervoudsdichtheid is een
gedeeltelijk gedekte BHSA-formalisering van de vernauwing.

**Confidence:** Middel (≤ plafond Middel) · feature: `actant_in_out_degree` ·
robustness: robust · versie 2023

## Vraag 3 — Hoe maakt David zichzelf rechter?

**Vraag:** Waar wordt Davids oordeel grammaticaal bruikbaar tegen hemzelf?

**Wat de data toont:** Een dynamische query naar directe rede met JHWH, zoon,
dood en man vindt Davids doodsvonnis in 2 Samuël 12:5, maar deze specifieke
query haalde de topselectie niet als kernbevinding. De robuuste vloer wijst wel
op syntactische overgangsdruk: veertien lokaal onverwachte clause-overgangen,
waaronder Davids eedformule in 12:5 en het betalingsvonnis in 12:6 (G² = 4,78;
q ≈ 0,029).

**Text-Fabric-query:**

```text
clause typ sequence; compare transition with preceding local window
```

**Duiding:** Davids reactie is kort en juridisch geladen: leven bij JHWH,
schuldige man, dood, viervoudige restitutie. De overgangsmeting maakt zichtbaar
dat zijn oordeel niet vloeiend in de parabel oplost. Het wordt een eigen
spraakmoment dat Natan vervolgens kan keren.


**Staat dit al in de commentaren?:** novel. De structuurbreuken zijn thematisch
herkend, maar de lokale clause-type-overgangen worden niet als kwantitatieve
vormlaag besproken.

**Confidence:** Hoog (≤ plafond Hoog) · feature:
`local_clause_type_transition` · robustness: robust · versie 2023

## Vraag 4 — Wat gebeurt bij "jij bent de man"?

**Vraag:** Is de beroemde zin meetbaar als korte identificatie na de omweg?

**Wat de data toont:** Een dynamische, exploratieve query naar directe rede met
`>TH` ("jij") en `>JC/` ("man") vindt één robuuste treffer in 2 Samuël 12:7
(G² = 6,95; q ≈ 0,011). Dezelfde passage heeft ook robuust hoge zelfstandige
subjectspronomina naast finiete werkwoorden: vier tegen ongeveer 1,06 verwacht
(G² = 5,07; q ≈ 0,024). De voorbeelden zijn `אָנֹכִי` in 12:7, `אַתָּה` en
`אֲנִי` in 12:12.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=>TH
  word lex=>JC/
```

```text
% clause met phrase function=Subj word sp=prps en Pred word vt=perf|impf
```

**Duiding:** De parabel loopt uit op een minimale identificatie: jij, de man.
Daarna neemt JHWH's ik-rede de ruimte over. De zelfstandige pronomina versterken
de contrastas: ik heb gegeven, jij hebt gedaan, ik zal doen. De grammatica zet
persoonlijke toewijzing voorop.


**Staat dit al in de commentaren?:** standard/partially_covered. "Jij bent de
man" is standaardcommentaar; de zelfstandige pronomina in JHWH's ik/jij-rede
zijn gedeeltelijk gedekte vormmeting.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=you_are_the_man` · robustness: robust · versie 2023

## Vraag 5 — Hoe wordt de parabel concreet?

**Vraag:** Waar verlaat Natan de fictie en noemt hij Davids concrete geweld?

**Wat de data toont:** Een dynamische, exploratieve query op versniveau vindt
in 2 Samuël 12:9 de combinatie Uria, zwaard, vrouw, nemen en doden (G² = 13,06;
q ≈ 0,00054). De query is robuust binnen alle strata. Zij staat naast de
deterministische actantmeting waarin `>CH/` als objectpool voorkomt in 12:8-10.

**Text-Fabric-query:**

```text
verse
  word lex=>WRJH/
  word lex=XRB/
  word lex=>CH/
  word lex=LQX[
  word lex=HRG[
```

**Duiding:** De abstracte parabel wordt hier een opsomming van Davids daden:
Uria geslagen, zijn vrouw genomen, hem gedood met het zwaard van Ammon. De vorm
maakt de omweg hard concreet. De fictieve arme man verdwijnt; Uria en de vrouw
komen in de aanklacht zelf te staan.


**Staat dit al in de commentaren?:** standard. De concrete aanklacht met Uria,
zwaard, vrouw, nemen en doden is bekend; BHSA markeert het lexicale cluster in
12:9.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=uriah_sword_wife_taken_killed` · robustness: robust · versie
2023

```json
{
  "claim_ledger": [
    {
      "finding_id": 21,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 21,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 39,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 39,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 25,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 25,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 24,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 24,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 109,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 109,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 87,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 87,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 57,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 57,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    }
  ]
}
```
