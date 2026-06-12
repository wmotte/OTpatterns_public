# Rapporten: acht dialogen uit 1 Samuël

Acht gespreksscènes uit 1 Samuël, geanalyseerd op één as: machtsasymmetrie in
spraak (en de ontwijking of mislukte communicatie die daarbij hoort). Per
passage staat hier het volledige rapport, een toelichting voor lezers zonder
Hebreeuws of statistiek, de samenvattende nieuwheidsoordelen tegen de
commentaarliteratuur, en de onderliggende data (`evidence.json`,
`dynamic_queries.json`). De zoekregels uit de rapporten zijn na te lopen in de
[zoekbrowser](https://wmotte.github.io/OTpatterns_public/); achtergrond bij
ETCBC/BHSA en Text-Fabric staat in [ACHTERGROND.md](../ACHTERGROND.md).

| # | Passage | Scène | In één regel | Rapport | Toelichting |
|---|---------|-------|--------------|---------|-------------|
| 1 | 1 Sam. 1:12-18 | Eli en Hanna bij de deurpost | Eli blijft bij naam, Hanna wordt "de vrouw": naamgeving, het enige lidwoord en vrouwelijke morfologie coderen het rangverschil | [rapport](1_samuel_1_12_18/rapport.md) | [toelichting](1_samuel_1_12_18/toelichting.md) |
| 2 | 1 Sam. 3:15-18 | Samuël moet Eli het visioen melden | De jongen die niet durft te zeggen en de priester die dwingt tot volledig spreken: meld-werkwoorden en verzwijg-syntaxis | [rapport](1_samuel_3_15_18/rapport.md) | [toelichting](1_samuel_3_15_18/toelichting.md) |
| 3 | 1 Sam. 8:4-22 | De oudsten eisen een koning | Een collectief tegenover één profeet: meervoudsvormen, "luister naar hun stem" en het koningsrecht als waarschuwing | [rapport](1_samuel_8_4_22/rapport.md) | [toelichting](1_samuel_8_4_22/toelichting.md) |
| 4 | 1 Sam. 10:14-16 | Saul en zijn oom | Drie verzen ontwijking: de vraag naar het koningschap krijgt antwoord over de ezelinnen | [rapport](1_samuel_10_14_16/rapport.md) | [toelichting](1_samuel_10_14_16/toelichting.md) |
| 5 | 1 Sam. 13:11-14 | Samuël ondervraagt Saul in Gilgal | Het excuus met de onrustige werkwoordstijd en het "nu" dat van rechtvaardiging naar vonnis kantelt | [rapport](1_samuel_13_11_14/rapport.md) | [toelichting](1_samuel_13_11_14/toelichting.md) |
| 6 | 1 Sam. 14:24-45 | Sauls eed en Jonatans loting | De vloek over het leger en de zoon die het vonnis krijgt: persoonsvormen en een keten van zinstypen die strakker loopt dan ze klinkt | [rapport](1_samuel_14_24_45/rapport.md) | [toelichting](1_samuel_14_24_45/toelichting.md) |
| 7 | 1 Sam. 15:13-31 | Samuël confronteert Saul over Amalek | Het langste verhoor: Saul claimt gehoorzaamheid, het geblaat van de schapen weerlegt hem, en het vonnis stelt gehoorzamen boven offer | [rapport](1_samuel_15_13_31/rapport.md) | [toelichting](1_samuel_15_13_31/toelichting.md) |
| 8 | 1 Sam. 17:28-37 | Eliab en Saul kleineren David | "Maar een knaap": de kleinering in woorden tegenover de tekst die David tot referentieel zwaartepunt maakt | [rapport](1_samuel_17_28_37/rapport.md) | [toelichting](1_samuel_17_28_37/toelichting.md) |

## Wat er per map staat

- `rapport.md`: de uitgewerkte vragen met metingen, Text-Fabric-query's,
  duiding, expliciete grenzen ("wat het niet bewijst") en een claim-ledger die
  elke claim aan een veld in `evidence.json` koppelt.
- `toelichting.md`: dezelfde kernvondsten in gewone taal, met zoekopdrachten
  om de tellingen zelf na te lopen.
- `nieuwheidsoordelen.md`: per bevinding het oordeel of de
  commentaarliteratuur haar al kent (novel / partially_covered / standard),
  samengevat zonder citaten.
- `evidence.json`: de volledige uitvoer van de anomalie-engine voor de
  passage (observed, expected, G², stratificatie, robuustheid, plafonds).
- `dynamic_queries.json`: de vooraf geregistreerde exploratieve zoekvragen.

## Attributie en licentie

De onderliggende tekstdata en annotaties komen uit de
[BHSA](https://github.com/ETCBC/bhsa) (ETCBC, Vrije Universiteit Amsterdam),
versie 2023, ontsloten via
[Text-Fabric](https://github.com/annotation/text-fabric). De BHSA-data valt
onder [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/); de in
`evidence.json` en de zoekbrowser opgenomen afgeleide gegevens (tellingen,
features, tekstfragmenten) erven die voorwaarden en zijn alleen voor
niet-commercieel gebruik. De Apache 2.0-licentie van deze repository geldt
voor de code en de eigen rapportteksten.
