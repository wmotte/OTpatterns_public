# Niet-conventionele vragen bij 1 Samuël 21:2-10 (BHSA 2023)

*Passage: 1 Samuël 21:2-10 (9 verzen, 265 woorden; genre narratief,
periode EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine
tegen het OT-corpus, gestratificeerd (global/boek/genre/taal/periode), run van
12 juni 2026, 99 bevindingen. De run gebruikt morfosyntaxis,
discours-pragmatiek, voorspellende families, tekstdynamiek, NER,
novelty-families, de querybibliotheek en negen passagespecifieke dynamische
queries. Dynamische queries zijn exploratief en krijgen hoogstens confidence
Middel. De commentaar- en nieuwheidstoets is afgerond; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

Negende dialoog uit de Samuël-reeks: David komt bij Achimelech in Nob, verklaart
zijn aanwezigheid met een geheime koninklijke opdracht, vraagt brood en daarna
een wapen. Achimelech reageert voorzichtig: hij stelt vragen rond aanwezigheid,
beschikbaarheid en reinheid. De meting laat een scène zien waarin David zijn
verhaal met een onzichtbare groep knechten ondersteunt, terwijl de priester de
noodvraag in formele existentie- en reinheidsclauses omzet.

## Vraag 1 — Hoe wordt Davids leugen als opdracht gecodeerd?

**Vraag:** Presenteert David zijn komst als persoonlijke vlucht, of als geheime
koninklijke zending?

**Wat de data toont:** Een dynamische query naar directe rede met `MLK/`
("koning"), `YWH[` ("bevelen") en `DBR/` ("zaak/woord") levert één robuuste
treffer op in 21:3 (G² = 12,78; q ≈ 0,0012). Een tweede dynamische query naar
"niemand", negatie, "weten" en "zaak" levert één robuuste treffer op in 21:3
(G² = 11,39; q ≈ 0,0021). Beide queries zijn exploratief.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=MLK/
  word lex=YWH[
  word lex=DBR/
```

```text
clause domain=Q
  word lex=>JC/
  word sp=nega
  word lex=JD<[
  word lex=DBR/
```

**Duiding:** David geeft zijn vlucht een ambtelijke vorm. De zaak is door de
koning bevolen en mag door niemand gekend worden. De leugen werkt dus niet via
lange uitleg, maar via een compacte opdracht- en geheimhoudingsformule.


**Staat dit al in de commentaren?:** standard. De geheime koninklijke opdracht
en de formule dat niemand van de zaak mag weten worden al expliciet besproken;
BHSA kwantificeert de opdracht-plus-geheimhouding als formele cluster.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=king_command_secret_mission` · robustness: robust · versie 2023

## Vraag 2 — Waarom zijn Davids knechten grammaticaal vreemd?

**Vraag:** Dragen de knechten Davids verhaal als echte groep, of blijven zij
een smalle constructie binnen zijn rede?

**Wat de data toont:** Meervoudsvormen zijn robuust laag: veertien waar
ongeveer 34,1 verwacht zijn (G² = 17,01; q ≈ 0,00011). Tegelijk zijn de
lexemen David, Achimelech/priester, brood en knecht global-only maar
q-significant. Een dynamische query naar knechten, weten en plaats levert één
robuuste treffer op in 21:3 (G² = 12,78; q ≈ 0,0012). Die query is exploratief.

**Text-Fabric-query:**

```text
word nu=pl
```

```text
clause domain=Q
  word lex=N<R/
  word lex=JD<[
  word lex=MQWM/
```

**Duiding:** De knechten zijn grammaticaal dun. David heeft ze nodig om zijn
opdracht geloofwaardig te maken, maar de passage blijft sterk enkelvoudig:
David vraagt, Achimelech toetst, David antwoordt. De groep bestaat vooral in
Davids uitleg.


**Staat dit al in de commentaren?:** partially_covered. Commentaren herkennen
de knechten als vage, afwezige of mogelijk fictieve groep; de lage
meervoudsdichtheid en de geïsoleerde plaats-clause blijven meettoevoegingen.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=young_men_appointed_place` · robustness: robust · versie 2023

## Vraag 3 — Hoe houdt Achimelech de broodvraag onder voorwaarden?

**Vraag:** Geeft Achimelech simpelweg voedsel, of zet hij Davids verzoek eerst
om in beschikbaarheid en heiligheid?

**Wat de data toont:** Existentiephrases zijn robuust hoog: drie waar ongeveer
0,10 verwacht zijn (G² = 14,76; q ≈ 0,00018). NCop-phrases zijn ook robuust
hoog: vier waar ongeveer 0,41 verwacht zijn (G² = 11,11; q ≈ 0,00086). Het
lexeem `LXM/` ("brood") komt zes keer voor en is global-only maar
q-significant. Een dynamische query naar directe rede met `KJ`, brood, heilig
en beschikbaarheid levert één robuuste treffer op in 21:5 (G² = 12,78; q ≈
0,0012). Die query is exploratief.

**Text-Fabric-query:**

```text
phrase function=Exst
phrase function=NCop
word lex=LXM/
```

```text
clause domain=Q
  word lex=KJ
  word lex=LXM/
  word lex=QDC/
  word lex=JC/
```

**Duiding:** Achimelech beantwoordt de noodvraag niet met directe toestemming.
Hij formuleert eerst wat er is en onder welke cultische voorwaarde het gegeven
kan worden. Zo krijgt zijn voorzichtigheid grammaticale vorm.


**Staat dit al in de commentaren?:** standard. Het heilige brood, de
beschikbaarheid en de rituele voorwaarde zijn standaardcommentaar; BHSA
formaliseert dit met Exst-, NCop- en broodmetingen.

**Confidence:** Middel (≤ plafond Middel) · feature: `function=Exst` ·
robustness: robust · versie 2023

## Vraag 4 — Hoe antwoordt David op de reinheidsvoorwaarde?

**Vraag:** Laat David de cultische voorwaarde staan, of schuift hij zijn
onzichtbare knechten opnieuw naar voren?

**Wat de data toont:** Een dynamische query naar directe rede met knechten,
vrouwen en bewaren/onthouden levert één robuuste treffer op in 21:5 (G² =
12,78; q ≈ 0,0012). De query is exploratief. De bredere passage heeft ook drie
geneste rede-voorbeelden in 21:3, waar David zijn eigen opdrachtwoorden binnen
zijn gesprek reconstrueert.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=N<R/
  word lex=>CH/
  word lex=CMR[
```

```text
% clause met ≥2 'Q' in txt
```

**Duiding:** David accepteert Achimelechs criterium en vult het met zijn
verhaal over de knechten. De reinheidsclaim rust dus op dezelfde afwezige groep
die ook de geheime opdracht geloofwaardig moet maken.


**Staat dit al in de commentaren?:** standard. De reinheidsvoorwaarde en
Davids toepassing daarvan op zijn jonge mannen zijn bekend; BHSA specificeert
de clause met knechten, vrouwen en bewaren/onthouden en de rede-in-rede.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=young_men_kept_from_women` · robustness: robust · versie 2023

## Vraag 5 — Waarom voelt de scène subjectief betrokken?

**Vraag:** Is dit alleen een uitwisseling van goederen, of trekt de grammatica
het verzoek naar de sprekers zelf?

**Wat de data toont:** De engine vindt robuust veel reflexieve/ethische lamed:
drie voorbeelden waar ongeveer 0,40 verwacht zijn (G² = 7,15; q ≈ 0,0075).
De voorbeelden liggen bij Achimelech die David tegemoet komt, bij het brood dat
voor hem genomen wordt en bij de zwaardvraag. Daarnaast registreert de engine
een imperatief-responsprofiel waarin verzoeken worden overgedragen of
onafgesloten blijven.

**Text-Fabric-query:**

```text
% prep L met prs_ps/prs_nu/prs_gn overeenkomstig subject/predicaat
```

```text
% clause txt~Q met word vt=impv; scan volgende clauses op finiet predicaat
```

**Duiding:** De goederen zijn niet neutraal. Brood en zwaard komen in een
scène waarin de hand, de geadresseerde en het "voor mij/voor jou" dicht op de
handeling liggen. De grammatica maakt de nood persoonlijk.


**Staat dit al in de commentaren?:** partially_covered. Commentaren herkennen
de bondige, geladen transactie rond brood en zwaard; de ethische-lamedmeting
en het imperatief-responsprofiel blijven formele BHSA-toevoegingen.

**Confidence:** Middel (≤ plafond Middel) · feature:
`ethical_dative_density` · robustness: robust · versie 2023

```json
{"claim_ledger":[
  {"finding_id":32,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":53,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":16,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":34,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":23,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":55,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":8,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":30,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":33,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":52,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":71,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":28,"evidence_field":"observed","claim_type":"statistical_finding"}
]}
```
