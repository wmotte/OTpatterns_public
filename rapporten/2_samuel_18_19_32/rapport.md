# Niet-conventionele vragen bij 2 Samuël 18:19-32 (BHSA 2023)

*Passage: 2 Samuël 18:19-32 (14 verzen, 365 woorden; genre narratief,
periode EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine
tegen het OT-corpus, gestratificeerd (global/boek/genre/taal/periode), run van
12 juni 2026, 119 bevindingen. De run gebruikt morfosyntaxis,
discours-pragmatiek, voorspellende families, tekstdynamiek, NER,
novelty-families, de querybibliotheek en tien passagespecifieke dynamische
queries. Dynamische queries zijn exploratief en krijgen hoogstens confidence
Middel. De commentaar- en nieuwheidstoets is afgerond; zie
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).*

Eenentwintigste dialoog uit de Samuël-reeks: Ahimaäz wil het nieuws over de
strijd naar David brengen, Joab houdt hem tegen, de Kusiet wordt gestuurd, en
daarna komen beide boden bij David aan. De scène draait niet alleen om de vraag
wie sneller rent. De vorm van de tekst stelt slecht nieuws uit: snelle
wayyiqtol-voortgang wordt onderbroken door deictische waarneming, participia en
vraag-antwoordblokken. Ahimaäz brengt de grammatica van nieuws en snelheid, maar
ontwijkt de kernvraag; de Kusiet draagt uiteindelijk het bericht dat David vreest.

## Vraag 1 — Waarom is deze scène zo snel en toch vertraagd?

**Vraag:** Vertelt de tekst de bodewedstrijd gewoon snel, of bouwt hij tegelijk
vertraging in rond het slechte nieuws?

**Wat de data toont:** De passage heeft robuust veel wayyiqtol-vormen: 35 waar
ongeveer 12,8 verwacht zijn (G² = 27,4; q ≈ 0,00000066). Ook WayX-clauses zijn
robuust hoog: 21 waar ongeveer 5,5 verwacht zijn (G² = 28,73; q ≈ 0,00000050).
Tegelijk vindt de engine elf robuuste onderbrekingen van de wayyiqtol-keten door
nominale of participiale circumstantial clauses (G² = 12,58; q ≈ 0,00039). De
voorbeelden liggen vooral in de wachterscène: David zit tussen de poorten, een
man rent alleen, er is bericht in zijn mond, en de wachter herkent de loop van
Ahimaäz.

**Text-Fabric-query:**

```text
word vt=wayq
```

```text
clause typ=WayX
```

```text
% narratieve wayq-clause + 1-4 nominale/participiale clauses + narratieve wayq-clause
```

**Duiding:** De vertelling jaagt vooruit, maar het nieuws zelf wordt vertraagd.
De snelle werkwoordsketen laat de boden bewegen; de onderbrekingen laten David
en de lezer wachten. Daardoor wordt de vraag niet: wie arriveert het eerst? maar:
wie durft te zeggen wat de aankomst betekent?


**Staat dit al in de commentaren?:** ja. De bodewedstrijd, Davids wachten en de
vertraging van het slechte nieuws zijn bekend; de metingen van wayyiqtol,
WayX en onderbreking dienen vooral als kwantitatieve bevestiging.

**Confidence:** Middel (≤ plafond Middel) · feature: `vt=wayq` / `typ=WayX` /
`circumstantial_slowdown` · robustness: robust · versie 2023

## Vraag 2 — Hoe wordt nieuws in een mond opgesloten?

**Vraag:** Presenteert de tekst het bericht als uitgesproken inhoud, of eerst
als nog-niet-geopende mogelijkheid?

**Wat de data toont:** Een dynamische query naar directe rede met `BFRH/`
("bericht") en `PH/` ("mond") levert één robuuste treffer op in 2 Samuël 18:25
(G² = 11,97; q ≈ 0,0024). De query is exploratief. De bredere lexeemmetingen
laten zien waarom de treffer relevant is: `BFRH/` komt vier keer voor en
`BFR[` vijf keer, beide als global-only leitwoorden met q-significantie. De
passage is dus opvallend sterk door "nieuws/berichten" gekleurd.

**Text-Fabric-query:**

```text
clause domain=Q
  word lex=BFRH/
  word lex=PH/
```

```text
word lex=BFRH/
word lex=BFR[
```

**Duiding:** David krijgt het nieuws eerst als potentie: "bericht in zijn mond".
Het bericht is aanwezig, maar nog niet gezegd. Dat past precies bij de scène:
Ahimaäz kan rennen, aankomen en spreken, maar hij opent niet de volledige
inhoud. De grammatica lokaliseert het nieuws bij de bode voordat het David
bereikt.


**Staat dit al in de commentaren?:** ja. De idiomatische waarde van "bericht in
zijn mond" en de nieuwslogica van de scène worden expliciet besproken; de query
markeert een bekende vertelstap.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=mouth_news_formula` · robustness: robust · versie 2023

## Vraag 3 — Wie krijgt de nieuwsrol: Ahimaäz of de Kusiet?

**Vraag:** Zet de grammatica Ahimaäz en de Kusiet als gelijkwaardige boden neer,
of verdeelt zij de nieuwsfunctie?

**Wat de data toont:** Een dynamische vers-query vindt twee robuuste verzen
waarin Ahimaäz, rennen en nieuws-taal samen voorkomen: 18:19 en 18:22
(G² = 25,96; q ≈ 0,0000031). Een tweede vers-query vindt één robuuste treffer
waarin de Kusiet, de koning en nieuws-taal samen staan: 18:31 (G² = 12,9;
q ≈ 0,0020). Daarnaast zijn persoonsnamen robuust hoog: 21 waar ongeveer 12,7
verwacht zijn (G² = 21,04; q ≈ 0,000013), met Ahimaäz, Joab, de Kusiet, David
en de koning prominent in de voorbeelden.

**Text-Fabric-query:**

```text
verse
  word lex=>XJM<Y/
  word lex=RWY[
  word lex=BFR[|BFRH/
```

```text
verse
  word lex=KCJ/
  word lex=MLK/
  word lex=BFR[|BFRH/
```

```text
word nametype=pers
```

**Duiding:** Ahimaäz wordt sterk gekoppeld aan rennen en nieuwsverlangen; de
Kusiet wordt gekoppeld aan het nieuws bij de koning. De verdeling is subtiel:
Ahimaäz is de snelle bode die de eerste aankomst opeist, maar de Kusiet is de
bode bij wie het bericht zijn beslissende inhoud krijgt.


**Staat dit al in de commentaren?:** ja. De rolverdeling tussen Ahimaäz als
snelle, aandringende bode en de Kusiet als drager van het beslissende bericht is
standaardmateriaal; de queries formaliseren die verdeling.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=ahimaaz_news_running_verse` /
`dynamic_query=cushite_news_to_king_verse` · robustness: robust · versie 2023

## Vraag 4 — Waarom staat David als waarnemer stil?

**Vraag:** Is de wachterscène decor, of maakt de grammatica David en de wachter
deel van het uitstelmechanisme?

**Wat de data toont:** De engine vindt acht robuuste proximate-deictic shifts,
waar ongeveer 2,3 verwacht zijn (G² = 9,16; q ≈ 0,0025). Voorbeelden zijn
"vandaag deze", "waarom dit", "zie, een man rent alleen" en "ook deze brengt
bericht". Actieve participia als hoofdpredicaat zijn eveneens robuust hoog:
negen waar ongeveer twee verwacht zijn (G² = 14,02; q ≈ 0,00018). De voorbeelden
omvatten zitten, rennen, berichten, zien en zegenen.

**Text-Fabric-query:**

```text
HNH/PH/<TH/ZH after local finite-narrative context
```

```text
% Pred word vt=ptca/ptcp met omliggende narratieve wayq/WayX-clauses
```

**Duiding:** De tekst schakelt herhaaldelijk naar het hier-en-nu van de poort:
David zit, de wachter ziet, mannen rennen, een bericht lijkt onderweg. Dat
maakt de aankomst zichtbaar voordat het nieuws hoorbaar wordt. De stilte rond
Absaloms lot ontstaat uit waarneming die het spreken voor blijft.


**Staat dit al in de commentaren?:** gedeeltelijk. De poort- en wachterscène als
zichtbare vertraging is bekend; de actieve participia als afzonderlijke
meetlaag blijven een beperkte toevoeging.

**Confidence:** Hoog (≤ plafond Hoog) · feature:
`deictic_shift_here_now` / `historical_present_participles` · robustness:
robust · versie 2023

## Vraag 5 — Waarom vraagt David twee keer naar "de jongeman"?

**Vraag:** Blijft David in de logica van slagbericht en overwinning, of stuurt
zijn vraag de scène naar Absalom?

**Wat de data toont:** Een dynamische vers-query vindt twee robuuste verzen
waarin koning, vrede en jongeman samen staan: 18:29 en 18:32 (G² = 25,96;
q ≈ 0,0000031). De lexeemmeting voor `N<R/` ("jongeman") is global-only maar
q-significant: drie voorkomens waar ongeveer 0,2 verwacht zijn (G² = 10,5).
Meervoudsvormen zijn daarentegen robuust laag: tien waar ongeveer 47 verwacht
zijn (G² = 47,21; q ≈ 0,000000000076).

**Text-Fabric-query:**

```text
verse
  word lex=MLK/
  word lex=CLWM/
  word lex=N<R/
```

```text
word nu=pl
```

**Duiding:** David personaliseert het nieuws. De tekst heeft weinig meervoud:
de overwinning op "vijanden" of "opstandelingen" verdwijnt achter één
"jongeman". Daardoor botst de publieke nieuwslogica van de bode met Davids
private vraag. Ahimaäz ontwijkt die vraag; de Kusiet beantwoordt haar indirect
door Absalom onder Davids vijanden te rangschikken.


**Staat dit al in de commentaren?:** gedeeltelijk. Davids dubbele vraag naar de
jongeman en de spanning tussen overwinning en vaderlijk verlies zijn bekend; de
lage meervoudsdichtheid is vooral een aanvullende vormmeting.

**Confidence:** Middel (≤ plafond Middel) · feature:
`dynamic_query=king_young_man_question_verse` / `nu=pl` · robustness: robust ·
versie 2023

```json
{"claim_ledger":[
  {"finding_id":21,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":20,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":18,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":50,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":10,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":11,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":24,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":45,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":29,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":32,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":34,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":25,"evidence_field":"observed","claim_type":"dynamic_hypothesis"},
  {"finding_id":67,"evidence_field":"observed","claim_type":"statistical_finding"},
  {"finding_id":9,"evidence_field":"observed","claim_type":"statistical_finding"}
]}
```
