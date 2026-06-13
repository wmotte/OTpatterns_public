# Niet-conventionele vragen bij 1 Samuël 10:14-16 (BHSA 2023)

*Passage: 1 Samuël 10:14-16 (3 verzen, 59 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), baseline-schema
v9; run van 1 juni 2026, 30 bevindingen (`evidence.json` in deze map). Korte
passage: het monster is klein en de betrouwbaarheidsplafonds zijn daardoor
begrensd. Robuustheidslabels in dit rapport: robuust (robust), gedeeltelijk
robuust (partially_robust), alleen-globaal (global_only); betrouwbaarheid
Hoog, Middel of Laag. Zoekregels zijn na te lopen in de
[zoekbrowser](https://wmotte.github.io/OTpatterns_public/); achtergrond bij
BHSA en Text-Fabric staat in [ACHTERGROND.md](../../ACHTERGROND.md). BHSA legt
formele syntaxis vast, geen betekenis of theologie; duidingen blijven door het
bewijs gedragen hypothesen.*

> Vierde dialoog uit de Samuël-reeks, en de eerste op de as ontwijking. Saul
> komt na de zalving thuis en treft zijn oom. Die vraagt waar hij geweest is en
> wat Samuël zei. Saul vertelt over de gevonden ezelinnen, maar verzwijgt het
> koningschap: "maar de zaak van het koningschap, waarvan Samuël gesproken had,
> vertelde hij hem niet" (v16). De beroemde laag (het viervoudige "vertellen"
> NGD, de nadrukkelijke decoy-infinitief, het koningschap dat alleen in de
> ontkenning klinkt) is in de literatuur uitgewerkt en dient hier als ijk. Twee
> dragende vragen zijn nieuw (novel) tegen de commentaren: de gemeten
> inbeddingsdiepte van Sauls antwoord en de recitatieve כִּי die juist de
> afleidingsinhoud draagt.

## Vraag 1 — hoe diep ligt het antwoord begraven

**Vraag:** Is Sauls ontwijkende antwoord ook syntactisch dieper gelaagd dan
gewoon verhaalproza, of voelt het alleen "stroef"?

**Wat de data toont:** De clauses van dit fragment liggen ongewoon diep
ingebed. Inbeddingsdiepte 9 komt vijfmaal voor tegen verwacht ongeveer 1,1
(G² = 8,6). De afwijking is robuust (robust) en houdt stand in elk stratum:
same_genre G² = 8,6 (p ≈ 0,0034), same_book G² = 7,9, same_period G² = 8,8.
Hoge inbeddingsdiepte is het formele kenmerk van hypotaxis (clauses genest
onder clauses, zoals in wet en betoog), waar verhalend proza gewoonlijk in
paratactische wayyiqtol-ketens werkt. Het gesprek tussen Saul en zijn oom
kiest de gelaagde vorm.

**Text-Fabric-query:**

    clause_atom tab=9

*Alleen in een volledige Text-Fabric-omgeving reproduceerbaar; de
inbeddingsdiepte (`tab`) zit niet in de geëxporteerde featureset van de
zoekbrowser.*

**Duiding:** De ondervraging nestelt antwoorden onder vragen. De oom stelt
twee vragen; Saul antwoordt met ingebedde constructies: "wij zagen dat (zij er
niet waren)", "hij vertelde ons dat (de ezelinnen gevonden waren)". De
hypotactische diepte is de syntactische tegenhanger van de ontwijking: een
antwoord dat filtert en inkapselt, schuift zijn clauses in elkaar. Op de as
ontwijking is de gemeten inbeddingsdiepte het structurele spoor van een
antwoord dat omwegen neemt.


**Staat dit al in de commentaren?:** nieuw. De commentaren karakteriseren de
syntaxis wel, maar kwalitatief. Bodner noemt expliciet de "slightly awkward
syntax of Saul's reply" in v14 en koppelt die aan aarzeling of omzichtigheid
tegenover de oom, zonder gemeten dieptestructuur. Long signaleert vaker dat
"awkward syntax" in het Hebreeuws in vertaling wegvalt, maar past dat toe op
emotie of haast elders, zonder kwantificering voor deze passage. Auld geeft
onderschikking en spraak-binnen-spraak visueel weer met inspringing, zonder de
diepte van dit fragment als gemarkeerd verschijnsel te benoemen. De stap van
"stroef" naar een gemeten inbeddingsdiepte tegen het corpus is nieuw.

**Confidence:** Middel · feature: clause_embedding (tab=diepte 9) ·
robustness: robust · versie 2023

## Vraag 2 — de rede die als verslag is verpakt

**Vraag:** Wordt de directe rede in deze scène grammaticaal aangeboden als
open uitwisseling, of als gerapporteerde inhoud onder een spreekwerkwoord?

**Wat de data toont:** Objectszinnen (rela=Objc, ingebedde "dat"-complementen)
zijn oververtegenwoordigd: 3 waargenomen tegen verwacht ongeveer 0,23
(G² = 10,5), robuust in alle strata, met same_genre G² = 9,7 (p ≈ 0,0019),
same_book G² = 8,3, same_period G² = 10,9. De gerapporteerde inhoud (wat de
oom vroeg, en in v16 כִּי נִמְצְאוּ הָאֲתֹנוֹת, "dat de ezelinnen gevonden
zijn") zit telkens als object-clause onder een werkwoord van zeggen of
vertellen.

**Text-Fabric-query:**

    clause rela=Objc

*In de zoekbrowser na te tellen: 3 treffers in deze passage.*

**Duiding:** De uitwisseling is grammaticaal ingepakt. De lezer krijgt de
inhoud als complement onder een vertel-werkwoord: "hij vertelde dat de
ezelinnen gevonden zijn". Die verpakking is precies wat selectieve onthulling
toelaat: wie onder een vertel-werkwoord rapporteert, kiest wat hij eronder
hangt en wat hij weglaat. De object-clause is de syntactische plek waar Saul
de ezelinnen onderbrengt en waar het koningschap ontbreekt. Op de as
ontwijking is de objectszin-dichtheid het formele spoor van een rede die als
gefilterd verslag wordt aangeboden.


**Staat dit al in de commentaren?:** gedeeltelijk. De commentaren dekken het
thema; de meting komt erbij. Bodner leest Sauls antwoord als "selectief": hij
vertelt dat de ezelinnen gevonden zijn en zwijgt over het koningschap, taal
als schuilplaats, "just as Saul uses the baggage to hide". Van Wijk-Bos
spreekt van "beknopte antwoorden" die de belangrijkste informatie weglaten.
McCarter noteert de gerapporteerde structuur ("he told us that...") en blijft
bij het filteren van informatie. Niemand analyseert de objectclause-dichtheid
als statistisch afwijkende verpakking; dat is de toevoeging.

**Confidence:** Middel · feature: categorical (rela=Objc) · robustness:
robust · versie 2023

## Vraag 3 — aan wie wel, aan wie niet

**Vraag:** Is het vertellen in deze scène een neutrale handeling, of is het
grammaticaal telkens op een ontvanger gericht, zodat de ontwijking om die
richting draait?

**Wat de data toont:** Het onthullingswerkwoord NGD (hifil, "higgid") staat
driemaal in één clause samen met een lamed-prepositie die een pronominaal
suffix draagt: 3 waargenomen tegen verwacht ongeveer 0,02 (G² = 23,7), robuust
in alle strata, met same_genre G² = 20,2 (p ≈ 0,000007), same_book G² = 15,9.
De drie treffers zijn de ontvangers van het vertellen: v15 הַגִּידָה־נָּא לִי
("vertel mij toch"), v16 הִגִּיד לָנוּ ("hij vertelde ons"), v16 לֹא הִגִּיד
לוֹ ("hij vertelde hem niet").

**Text-Fabric-query:**

    clause
      word lex=NGD[ vs=hif
      word lex=L prs#absent

*De vorm met `prs#absent` is alleen in een volledige Text-Fabric-omgeving
reproduceerbaar; in de zoekbrowser werkt de variant met als derde regel
`word lex=L prs_ps=p1|p2|p3` (3 treffers in deze passage).*

**Duiding:** Vertellen is hier een gerichte transactie. Elke instantie van
NGD draagt een ontvanger: aan mij, aan ons, aan hem niet. De ontwijking is
dan precies het onthouden-aan-hem: de oom vraagt "vertel mij" (לִי), Saul
vertelt "ons" de ezelinnen (לָנוּ), maar het koningschap vertelt hij "hem
niet" (לוֹ). De lamed-ontvanger is grammaticaal de scharnier waarop wie-wel
en wie-niet draait. Op de as ontwijking is de binding NGD+ontvanger de
configuratie die het selectieve karakter zichtbaar maakt.


**Staat dit al in de commentaren?:** gedeeltelijk. De afzonderlijke
ontvangers worden gezien; de binding als signatuur blijft ongemeten. McCarter
analyseert "haggidah-na li" (v15) en de scherpe ironie dat de werkelijke
onthulling juist vóór Saul bestemd was, een thematische lezing van de
informatiebalans. Long noteert in technische noten de suffix-verschuivingen
("vertelde ons", "vertelde hem niet") en duidt ze als Sauls onwil zijn
goddelijke opdracht te aanvaarden. De grammaticale koppeling
NGD+lamed-ontvanger als telbare marker van selectieve onthulling staat er
niet; dat voegt BHSA toe.

**Confidence:** Middel · feature: dynamic_query
(disclosure_bound_to_recipient_lamed) · robustness: robust, exploratief ·
versie 2023

## Vraag 4 — het partikel dat de afleiding draagt

**Vraag:** Welke inhoud krijgt in v16 de grammaticale markering van "dit is
wat ik vertel": de waarheid of de afleiding?

**Wat de data toont:** De כִּי (KJ) functioneert in deze passage tweemaal
recitatief, als object-markeerder ("dat"), waar het partikel elders vaak
causaal ("want") werkt. De treffers zijn v14 כִּי אַיִן (in Sauls antwoord:
"dat zij er niet waren") en v16 כִּי נִמְצְאוּ הָאֲתֹנוֹת ("dat de ezelinnen
gevonden zijn"). Dit is een aanwezig/afwezig-waarneming van de functie van
het partikel, zonder G²; het lexeem zelf is enkelvoudig, de toegevoegde laag
is de syntactische functie.

**Text-Fabric-query:**

    clause rela=Objc
      word lex=KJ

*In de zoekbrowser na te tellen: 2 treffers in deze passage.*

**Duiding:** Het recitatieve partikel markeert in v16 precies de decoy. De
כִּי introduceert "dat de ezelinnen gevonden zijn": de inhoud die Saul
prijsgeeft, de ware maar onbelangrijke helft van wat Samuël zei. Het
koningschap krijgt geen recitatieve כִּי, want het wordt niet verteld; het
verschijnt alleen onder de ontkenning. Zo legt het partikel de grens tussen
het meegedeelde en het verzwegene syntactisch vast: wat een כִּי-complement
krijgt, is wat de oom te horen krijgt. Op de as ontwijking draagt het
recitatieve partikel de afleidingsinhoud.


**Staat dit al in de commentaren?:** nieuw. De functies van כִּי zijn
taalkundig geanalyseerd; deze toepassing ontbreekt. Tsumura biedt een
uitvoerige analyse van het partikel (causaal versus "speaker-oriented", en
als "noun clause indicator") zonder die toe te passen op 10:16 om de
ironische nadruk op de ezelinnen te verklaren. Woodhouse concentreert zich op
het herhaalde "higgid" en de nadrukkelijke infinitivus absolutus en bespreekt
כִּי niet als drager van de misleiding. De recitatieve כִּי als markeerder
van precies de decoy-inhoud is een nieuwe lezing, zij het, gezien de lichte
statistiek, een voorzichtige.

**Confidence:** Middel (statistisch licht: global_only, niet q-significant) ·
feature: ki_profile (recitatief) · robustness: global_only · versie 2023

### IJk: wat de commentaren al volledig dekken

De volgende drie metingen bevestigen wat de literatuur uitwerkt. Ze dienen
als ijk; alle drie scoren nieuwheidsoordeel "bekend" (standard). Twee komen
uit exploratieve dynamic_queries (provenance `llm_hypothesis`), wat ik hier
expliciet vermeld; beide hebben bovendien een klein monster (1 treffer).

**1. De "vertel"-spine** (finding-id 2, leitwort `NGD[`). Het werkwoord NGD
("higgid", vertellen/onthullen) komt viermaal voor in dit korte fragment:
4 waargenomen tegen verwacht ongeveer 0,05 (G² = 27,2), alleen-globaal
(global_only), plafond Laag. Long telt exact deze vier in de ondervraging
(10:15-16). Woodhouse noemt "datzelfde werkwoord opnieuw" en leest er de
spanning onthuld/verzwegen in. McCarter wijst op de bredere woordspeling
higgid (informeren) / nagid (prins) door 9:6-10:16 heen: Saul vraagt
geïnformeerd te worden over de ezelinnen, maar wordt zelf als gezalfde leider
onthuld.

    word lex=NGD[

*In de zoekbrowser na te tellen: 4 treffers in deze passage.*

**2. Het koningschap alleen in de ontkenning** (finding-id 6, dynamic_query
`withheld_kingship_object`, exploratief). NGD samen met מְלוּכָה
("koningschap") in één clause, 1 treffer (G² = 15,4), namelijk v16, de clause
die zegt dat Saul het juist níet vertelde. Bodner merkt op dat dit de eerste
keer is dat de wortel MLK in Sauls karakter-zone valt, en dat het "zeker
betekenisvol" is dat dit gebeurt in de context van zijn zwijgen. Woodhouse:
de verteller deelt hier een geheim met de lezer; Samuëls woorden heten nu pas
"het woord van het koningschap", enkel om vast te stellen dat Saul ze niet
doorgaf; het verzwegen object verschijnt als narratieve negatie.

    clause
      word lex=NGD[ vs=hif
      word lex=MLWKH/

*In de zoekbrowser na te tellen: 1 treffer in deze passage.*

**3. De nadrukkelijke decoy-onthulling** (finding-id 9, dynamic_query
`emphatic_decoy_disclosure_infabs`, exploratief). De paronomastische
infinitief הַגֵּד הִגִּיד ("hij vertelde nadrukkelijk", infinitivus absolutus
naast finiet perfectum van dezelfde wortel), 1 treffer (G² = 13,2), in v16.
Woodhouse bespreekt "hagged higgid" als scharniermoment: Saul komt "op een
haar na" bij de waarheid, maar zet de grammaticale nadruk ironisch volledig
in op de gevonden ezelinnen om de oom af te leiden. Bodner leest het als
"selectief antwoord", taal als schuilplaats.

    clause
      word lex=NGD[ vt=infa
      word lex=NGD[ vt=perf

*In de zoekbrowser na te tellen: 1 treffer in deze passage.*

In deze reeks loopt de novelty-opbrengst grillig. De eerste dialoog gaf vijf
nieuwe bevindingen, de tweede één, de derde geen enkele; deze vierde, het
minst becommentarieerde fragment van de vier, levert er weer twee. Dat
bevestigt de werkhypothese achter de selectie: de novelty zit in de
onderbelichte verzen. De literatuur richt zich op het "higgid"-woordspel en
laat de gemeten inbeddingsdiepte en de recitatieve כִּי liggen.

**Claim-ledger**
Koppeling van de rapportclaims aan velden in `evidence.json`, per
finding-id; de nieuwheidsoordelen staan samengevat in
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).

```json
{"claim_ledger": [
  {"finding_id": 13, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 13, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 13, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 11, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 11, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 11, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 4, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 4, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 4, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 24, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 24, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 24, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 2, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 2, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 6, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 6, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 9, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 9, "evidence_field": "examples", "claim_type": "commentary_novelty"}
]}
```
