# Niet-conventionele vragen bij 2 Samuël 11:6-13 (BHSA 2023)

*Passage: 2 Samuël 11:6-13 (8 verzen, 213 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), run van 13 juni 2026, 117 bevindingen. De run gebruikt morfosyntaxis en discours-pragmatiek,
plus voorspellende families en tekstdynamiek. Acht passagespecifieke dynamische
queries zijn meegedraaid. Dynamische queries zijn exploratief en krijgen hoogstens confidence
Middel. De commentaar- en nieuwheidstoets is uitgevoerd op 13 juni 2026; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

Zestiende dialoog uit de Samuël-reeks: David laat Uria van het front halen en
probeert hem naar huis te sturen. Uria weigert de private ruimte in te gaan
zolang ark, Israël, Juda, Joab en de knechten in het veld verblijven. De meting
laat vooral een botsing zien tussen koninklijke regie en grammaticale weigering:
de scène loopt in een dichte wayyiqtol-keten, maar de woorden `afdalen` en
`huis` keren telkens met negatie terug.

## Vraag 1 — Waar loopt Davids bevel vast?

**Vraag:** Is Uria's weigering alleen inhoudelijk zichtbaar, of draagt de vorm
zelf de blokkade?

**Wat de data toont:** Een dynamische query naar clauses met negatie, `JRD[`
("afdalen") en `BJT/` ("huis") vindt vier treffers waar vrijwel geen treffer
werd verwacht (G² = 54,43; q ≈ 0,0000000000013). De query is exploratief en
hypothese-gegenereerd, maar robuust tegen alle gebruikte strata. De
voorbeelden liggen in 2 Samuël 11:9, 11:10 en 11:13. Daartegenover staat de
gerichte query naar Davids bevel in 11:8: directe rede met imperatief `JRD[`
en `BJT/` (G² = 12,14; q ≈ 0,00056).

**Text-Fabric-query:**

```text
clause
  word lex=L>
  word lex=JRD[
  word lex=BJT/
```

```text
clause domain=Q
  word lex=JRD[ vt=impv
  word lex=BJT/
```

**Duiding:** David formuleert de gewenste beweging als bevel: ga naar beneden,
naar je huis. De verteller en David zelf herhalen daarna de mislukking met
dezelfde kernwoorden in negatieve vorm. Daardoor wordt Uria's weerstand niet
alleen verteld. Zij wordt als tegenzin in het lexicale skelet van de scène
ingeschreven.


**Staat dit al in de commentaren?:** standard. Uria's weigering en het
negatieve huisrefrein worden expliciet besproken; BHSA objectiveert de
negatieketen en Davids bevelclause.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=negative_down_to_house_refrain` · robustness: robust · versie
2023

## Vraag 2 — Waarom klinkt het gesprek zo georkestreerd?

**Vraag:** Draagt de clause-volgorde bij aan het gevoel dat David de scène
regisseert?

**Wat de data toont:** WayX-clauses zijn robuust hoog: dertien waargenomen
tegen ongeveer 2,54 verwacht (G² = 24,95; q ≈ 0,0000035). De afwijking houdt
stand tegenover 2 Samuël en narratief proza. Tegelijk vindt de engine zes
lokaal onverwachte clause-overgangen, waaronder de negatieve afdaling in
11:9, Davids vraag in 11:10, Uria's antwoord in 11:11 en het slot in 11:13
(G² = 6,43; q ≈ 0,011).

**Text-Fabric-query:**

```text
clause typ=WayX
```

```text
clause typ sequence; compare transition with preceding local window
```

**Duiding:** De passage beweegt snel van sturen naar komen en vragen; daarna
volgen bevelen, uitgaan, liggen, melden en opnieuw spreken. Die keten geeft
David veel handelingsruimte. De onverwachte overgangen liggen juist waar de
regie hapert: Uria daalt niet af, David moet vragen stellen en het slot keert
terug naar dezelfde mislukte beweging.


**Staat dit al in de commentaren?:** standard. Davids regie, het staccato tempo
en de breukpunten van zijn plan zijn bekend; BHSA kwantificeert WayX en lokale
clause-overgangen.

**Confidence:** Hoog (≤ plafond Hoog) · feature: `typ=WayX` · robustness:
robust · versie 2023

## Vraag 3 — Wie krijgt syntactische macht?

**Vraag:** Blijft David de enige actor, of verdeelt de grammatica het handelen
anders?

**Wat de data toont:** De actantverdeling is robuust ongelijk: vijf dominante
actanten waar de vergelijkingslaag er ongeveer één verwacht (G² = 6,07;
q ≈ 0,014). David en Uria hebben beide hoge uitgaande graden. Uria komt dus
niet alleen als object van Davids bevelen voor; hij wordt zelf drager van
handelingen: komen, liggen, spreken, blijven, uitgaan.

**Text-Fabric-query:**

```text
count subject vs object mentions by lexical/person key
```

**Duiding:** De machtsas is daardoor scherp. David bezit formele macht en
stuurt via Joab, vragen en bevelen; later ook via maaltijd en roes. Uria bezit geen
institutionele macht in de scène, maar de syntaxis geeft hem genoeg
handelingsstatus om Davids plan te blokkeren. De weerstand is dus niet passief
geformuleerd.


**Staat dit al in de commentaren?:** standard. Uria als actieve tegenactor is
bekend; BHSA onderbouwt zijn handelingsstatus tegenover Davids formele macht.

**Confidence:** Middel (≤ plafond Middel) · feature: `actant_in_out_degree` ·
robustness: robust · versie 2023

## Vraag 4 — Wat doet Uria's eed?

**Vraag:** Hoe maakt Uria zijn weigering groter dan een persoonlijke keuze?

**Wat de data toont:** Een dynamische, exploratieve query op versniveau vindt
in 2 Samuël 11:11 de combinatie van ark, Israël, Juda, huis en vrouw (G² =
14,08; q ≈ 0,00028). Een tweede dynamische query vindt in hetzelfde vers de
combinatie van eten, drinken, liggen en vrouw (G² = 14,08; q ≈ 0,00028). Beide
queries zijn hypothese-gegenereerd en robuust binnen deze run.

**Text-Fabric-query:**

```text
verse
  word lex=>RWN/
  word lex=JFR>L/
  word lex=JHWDH/
  word lex=BJT/
  word lex=>CH/
```

```text
verse
  word lex=>KL[
  word lex=CTH[
  word lex=CKB[
  word lex=>CH/
```

**Duiding:** Uria zet de private route naar huis naast de publieke oorlogssfeer.
Zijn antwoord noemt ark, volk, legerleiding en veld, en benoemt daarna eten,
drinken en liggen met zijn vrouw als juist dat wat hij weigert. De eed maakt
Davids manipulatie hoorbaar door het beoogde scenario in Uria's eigen woorden
te ontmaskeren.


**Staat dit al in de commentaren?:** standard. Uria's eed, het contrast tussen
leger/ark/veld en huis/vrouw, en de afwijzing van eten, drinken en liggen
worden besproken; BHSA formaliseert de lexicale constellaties.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=uriah_oath_field_against_house` · robustness: robust · versie
2023

## Vraag 5 — Hoe mislukt de tweede poging?

**Vraag:** Verandert Davids maaltijdstrategie de grammaticale uitkomst?

**Wat de data toont:** Een dynamische query vindt in 2 Samuël 11:13 de
combinatie van David, eten, drinken, dronken maken, negatie en huis (G² =
14,08; q ≈ 0,00028). De query is exploratief. De deterministische detector voor
referentieverval vindt daarnaast een robuuste run waarin Davids naam in 11:13
overgaat in pronominale of nulverwijzing (G² = 5,49; q ≈ 0,019).

**Text-Fabric-query:**

```text
verse
  word lex=DWD==/
  word lex=>KL[
  word lex=CTH[
  word lex=CKR[
  word lex=L>
  word lex=BJT/
```

```text
nmpr subject followed by pronoun/suffix/zero-subject run
```

**Duiding:** David probeert de weigering via gastmaal en roes te breken. De
vorm eindigt opnieuw bij het huis dat niet bereikt wordt. De naam van David kan
in de reeks handelingen even wegvallen, maar het
resultaat blijft hetzelfde: Uria ligt bij de knechten van zijn heer en daalt
niet af naar zijn huis.


**Staat dit al in de commentaren?:** standard/partially_covered. Davids
maaltijd- en roespoging is bekend; de blijvende negatieve huisformule is
standaard, terwijl Davids referentieafbouw gedeeltelijk gedekt is.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=david_feeds_intoxicates_no_home` · robustness: robust · versie
2023

```json
{
  "claim_ledger": [
    {
      "finding_id": 14,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 14,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 54,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 54,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 22,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 22,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 33,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 33,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 35,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 35,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 42,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 42,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 41,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 41,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 44,
      "evidence_field": "observed",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 44,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 52,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 52,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    }
  ]
}
```
