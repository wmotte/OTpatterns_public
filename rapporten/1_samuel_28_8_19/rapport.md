# Niet-conventionele vragen bij 1 Samuël 28:8-19 (BHSA 2023)

*Passage: 1 Samuël 28:8-19 (12 verzen, 305 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), run van 12 juni
2026, 99 bevindingen. De run gebruikt morfosyntaxis, discours-pragmatiek,
voorspellende families, tekstdynamiek, NER, novelty-families, de
querybibliotheek en zeven passagespecifieke dynamische queries. Dynamische
queries zijn exploratief en krijgen hoogstens confidence Middel. De
commentaar- en nieuwheidstoets is uitgevoerd op 13 juni 2026; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

Dertiende dialoog uit de Samuël-reeks: Saul gaat vermomd naar de vrouw van
Endor, vraagt haar Samuël te laten opkomen en hoort opnieuw het oordeel dat hij
al kent. De data laat vooral onrust in tijd, referentie en rolverdeling zien.
De tekst beweegt snel met wayyiqtol, wisselt lokaal sterk van werkwoordsvorm en
laat namen in pronominale reeksen wegzakken voordat zij opnieuw verschijnen.

## Vraag 1 — Hoe begint de vermomming grammaticaal?

**Vraag:** Is Sauls vermomming alleen een inhoudelijk detail, of krijgt zij een
meetbare openingsconfiguratie?

**Wat de data toont:** De dynamische query naar een vers met Saul, vermommen,
aantrekken en kleding levert één robuuste treffer op in 1 Samuël 28:8
(G² = 13,22; q ≈ 0,0014). De query is exploratief. In dezelfde passage is
wayyiqtol oververtegenwoordigd: zevenentwintig vormen waar ongeveer elf verwacht
zijn (G² = 18,28; q ≈ 0,000038), en het clausetype WayX eveneens: vijftien waar
ongeveer vijf verwacht zijn (G² = 16,01; q ≈ 0,00010).

**Text-Fabric-query:**

```text
verse
  word lex=C>WL=/
  word lex=XPF[
  word lex=LBC[
  word lex=BGD/
```

```text
word vt=wayq
clause typ=WayX
```

**Duiding:** De scène opent niet met reflectie maar met handelingen: vermommen,
aantrekken, gaan, komen, spreken. De WayX-overmaat geeft tegelijk plaats voor
gemarkeerde narratieve clauses. Sauls poging om zijn identiteit te verbergen
staat dus aan het begin van een versneld handelingspatroon.


**Staat dit al in de commentaren?:** partially_covered. Sauls vermomming en
andere kleding zijn standaardcommentaar; de wayyiqtol- en WayX-overmaat zijn
gedeeltelijk gedekte BHSA-formaliseringen van tempo en expliciete actoren.

**Confidence:** Middel (≤ plafond Middel) · features:
`dynamic_query=saul_disguise_other_clothes`, `vt=wayq`, `typ=WayX` ·
robustness: robust · versie 2023

## Vraag 2 — Waar breekt de vermomming?

**Vraag:** Hoe registreert de tekst het moment waarop de vrouw Saul herkent en
bang wordt?

**Wat de data toont:** De dynamische query naar vrouw, vrezen en Saul in één
vers levert één robuuste treffer op in 28:13 (G² = 13,22; q ≈ 0,0014). De
query is exploratief. De bredere actantmeting laat een scheve rolverdeling zien:
negen dominante actanten waar ongeveer twee verwacht zijn (G² = 11,73;
q ≈ 0,00061). In de voorbeelden staan onder meer Saul, JHWH, de vrouw en
tweede-persoonsactanten als handelende bronnen.

**Text-Fabric-query:**

```text
verse
  word lex=>CH/
  word lex=JR>[
  word lex=C>WL=/
```

```text
count subject vs object mentions by lexical/person key
```

**Duiding:** De vrouw is geen passief decor. Wanneer zij Saul herkent, wordt
haar angst grammaticaal aan zijn naam gekoppeld. De actantmeting past daarbij:
meerdere partijen trekken aan de scène, terwijl Saul zijn controle verliest.


**Staat dit al in de commentaren?:** standard. De angst van de vrouw en Sauls
geruststelling worden besproken; BHSA markeert het syntactische kruispunt van
vrouw, vrezen en Saul.

**Confidence:** Middel (≤ plafond Middel) · features:
`dynamic_query=woman_fear_and_do_not_fear`, `actant_in_out_degree` · robustness:
robust · versie 2023

## Vraag 3 — Waarom voelt de tijd onrustig?

**Vraag:** Klinkt de scène als rustige ondervraging, of schakelt de grammatica
voortdurend van tijd/aspect/modus?

**Wat de data toont:** De TAM-chaosmeting is robuust hoog: eenentwintig lokale
vensters hebben drie of meer TAM-waarden, waar ongeveer negen verwacht zijn
(G² = 15,18; q ≈ 0,000098). De voorbeelden liggen bij 28:8, 28:9 en vooral
28:12-13. Daarnaast functioneren vijf actieve participia als hoofdpredicaat in
narratieve omgeving, waar ongeveer twee verwacht zijn (G² = 4,28; q ≈ 0,039):
onder meer `מִתְנַקֵּ֥שׁ`, `עֹלִ֥ים`, `עֹלֶ֔ה`, `עֹטֶ֖ה` en `נִלְחָמִ֣ים`.

**Text-Fabric-query:**

```text
sliding window over Pred verb vt values
```

```text
% Pred word vt=ptca/ptcp met omliggende narratieve wayq/WayX-clauses
```

**Duiding:** De scène schakelt tussen handeling, toestand en lopende waarneming.
Dat past bij een nachtelijke raadpleging waarin Saul dwingt, de vrouw reageert
en Samuëls verschijning als iets gaands/opkomends wordt beschreven.


**Staat dit al in de commentaren?:** novel/partially_covered. De onrust van de
scène is bekend, maar de TAM-wisseling is niet als technische vormmaat
aangetroffen; de participia zijn inhoudelijk deels besproken.

**Confidence:** Hoog (≤ plafond Hoog) · features: `rapid_tam_switching`,
`historical_present_participles` · robustness: robust · versie 2023

## Vraag 4 — Hoe blijven namen verdwijnen en terugkomen?

**Vraag:** Houdt de tekst de deelnemers voortdurend expliciet, of laat hij namen
wegzakken in pronominale reeksen?

**Wat de data toont:** De referential-decay-meting is robuust hoog:
achttien gevallen van expliciete naam gevolgd door pronominale of nulreferentie,
waar ongeveer vier verwacht zijn (G² = 31,27; q < 0,000001). Voorbeelden zijn
Saul in 28:8, Saul in 28:9 en Saul opnieuw in 28:15. De cataforische proxy is
ook hoog: twintig pronominale slots vóór latere nominale explicitering, waar
ongeveer tien verwacht zijn (G² = 8,49; q ≈ 0,0036).

**Text-Fabric-query:**

```text
nmpr subject followed by pronoun/suffix/zero-subject run
```

```text
clause with pronoun/suffix before later nmpr/subs in short window
```

**Duiding:** De passage werkt met herkenning en verhulling op referentieniveau.
Saul wordt genoemd, verdwijnt in vormen en komt weer terug. Dat sluit aan bij
de inhoudelijke vermomming zonder die inhoud uit de grammatica af te leiden.


**Staat dit al in de commentaren?:** partially_covered/novel. Commentaren volgen
focusverschuivingen, maar de naam-naar-pronomen/nulreferentie en vooral de
pronominale verwijzing vóór latere naamgeving zijn BHSA-specifieke meetlagen.

**Confidence:** Middel (≤ plafond Middel) · features:
`name_to_pronominal_run`, `pronoun_before_nominal` · robustness: robust · versie
2023

## Vraag 5 — Wat doet Samuëls opkomen met Saul?

**Vraag:** Wordt Samuël vooral als losse verschijning geteld, of blijft zijn
opkomen aan Saul gekoppeld?

**Wat de data toont:** Een dynamische query naar Samuël, opkomen en Saul in
één vers levert twee robuuste treffers op, in 28:14 en 28:15 (G² = 21,62;
q ≈ 0,000050). Door de semantische feature-tier heeft deze query confidence
Laag. Zij valt wel samen met de lexeemlaag: Samuël komt vijf keer voor en Saul
negen keer, beide global-only maar q-significant.

**Text-Fabric-query:**

```text
verse
  word lex=CMW>L/
  word lex=<LH[
  word lex=C>WL=/
```

**Duiding:** Samuël verschijnt niet als neutrale informatiebron. Zijn opkomen is
tekstueel aan Saul gebonden: Saul zoekt, herkent, spreekt en krijgt antwoord.
De meting helpt vooral om de verschijning niet los te trekken van Sauls mislukte
zoektocht.


**Staat dit al in de commentaren?:** standard. Samuëls opkomen voor Saul wordt
als hoogtepunt van de scène besproken; BHSA formaliseert het lexicale cluster
in 28:14-15.

**Confidence:** Laag (≤ plafond Laag) · feature:
`dynamic_query=samuel_raised_for_saul` · robustness: robust · versie 2023

```json
{"claim_ledger":[
  {"finding_id":39,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":27,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":32,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":38,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":20,"evidence_field":"examples","claim_type":"statistical_finding"},
  {"finding_id":10,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":52,"evidence_field":"examples","claim_type":"statistical_finding"},
  {"finding_id":16,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":11,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":23,"evidence_field":"observed","claim_type":"dynamic_hypothesis"}
]}
```
