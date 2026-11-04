# Vragen bij 1 Samuël 1:12-18 (BHSA 2023)

*Passage: 1 Samuël 1:12-18, zeven verzen en 124 woorden. Bron: ETCBC/BHSA
versie 2023 via Text-Fabric. De oorspronkelijke run van 13 juni 2026 bevat
83 bevindingen, vergeleken met het hele OT, boek, genre, taal en periode
(baseline-schema v19). De meetgegevens staan in [evidence.json](evidence.json).
De [zoekbrowser](https://wmotte.github.io/OTpatterns_public/) ondersteunt de
hieronder aangegeven eenvoudige tellingen.*

Eli ziet Hanna's stille gebed voor dronkenschap aan. Hanna verdedigt zich,
waarna Eli haar zegent. Dit rapport onderzoekt hoe het Hebreeuws hun
verhouding vormgeeft. De tellingen beschrijven formele kenmerken. Een lezing
in termen van macht blijft een hermeneutische stap.

De [aanvullende controles](controles.md) veranderen het gewicht van enkele
bevindingen. Het lidwoordtekort houdt stand. De vrouwelijke vormen en de
inbeddingsdiepte dienen als ijkpunten, het referentieel verval als context.
De vorm-hapaxen blijven vermeldenswaard, maar zijn minder uitzonderlijk dan
de eerste analyse suggereerde. De oorspronkelijke meetbestanden zijn
behouden, zodat meting en latere beoordeling afzonderlijk te controleren zijn.

## Vraag 1: naamgeving en het enige lidwoord

**Vraag:** Hoe verwijst de tekst naar Eli en Hanna, en welke afwijking blijft
bij vergelijking met andere scènes overeind?

**Wat de data toont:** Eli wordt vier keer bij naam genoemd: עֵלִי in 1:12,
1:13, 1:14 en 1:17. Hanna draagt haar naam חַנָּה in 1:13 en 1:15. In het
slotvers heet zij הָאִשָּׁה, "de vrouw" (1:18). Het lidwoord van die aanduiding
is het enige in de passage, tegen een globale verwachting van 8,8
(q = 5,8·10⁻⁴, robuust over alle strata).

De naamtelling van Eli is alleen globaal opvallend (`global_only`) en draagt
daarom geen zelfstandige statistische bewijslast. De detector voor
referentieel verval vindt één keten van zes clauses in 1:17-18, tegen een
globale verwachting van 1,7. Hij telt de som van de ketenlengtes, niet het
aantal ketens. De verwachting staat in
`findings[id=31].baselines.global.expected`. Het afgeronde veld `expected`
in hetzelfde oorspronkelijke record bevat 1,0.

```
naamgeving over de scène (× = expliciete naam):
Eli     12 ×   13 ×   14 ×          17 ×
Hanna          13 ×          15 ×                → "de vrouw" 18
                                              (enige lidwoord van de passage)
```

**Text-Fabric-query's:**

```
word lex=<LJ==/
```

```
word sp=art
```

De zoekbrowser geeft respectievelijk vier en één treffer. De samengestelde
vervalmeting vereist een volledige Text-Fabric-omgeving:

    nmpr subject followed by pronoun/suffix/zero-subject run

**Aanvullende controle:** Het lidwoordtekort blijft bestaan na correctie voor
de verhouding tussen directe rede en vertellerstekst. De verwachting wordt
dan 9,6. Van alle zevenversvensters in narratief proza vertoont 3,0 procent
een minstens even sterk tekort, van de spraakrijke vensters 4,1 procent.
Geen van de zeven controlescènes met een vrouwelijke hoofdpersoon heeft een
vergelijkbaar significant tekort. In het bredere venster 1:9-20 staan zes
lidwoorden waar er ruim zeventien verwacht worden.

Het referentieel verval is minder onderscheidend. Rechters 4, Ruth 3 en
1 Samuël 25 hebben gelijke of langere ketens. Van alle nulvensters evenaart
10,7 procent de casus, van de spraakrijke 12,7 procent. De naamloosheid is
bovendien gebonden aan het scène-einde: in 1:19-20 heet Hanna weer Hanna.

**Duiding:** Het enige lidwoord markeert het slot waarin Hanna als "de vrouw"
vertrekt. Dat kan in een machtslezing worden verbonden met Eli's optreden.
Een andere lezing ziet hierin de herneming van Hanna's zelfaanduiding als
vrouw in 1:15. De telling beslist niet tussen die lezingen. Zij berust op de
Masoretische tekst, terwijl de Septuaginta in 1:18 afwijkt.

**Vergelijking met de commentaren:** Het lidwoordpatroon is niet aangetroffen
in de geraadpleegde collectie. Frolov en McCarter bespreken
referentieverschuivingen tekstkritisch. Tsumura en Van Wijk-Bos bespreken de
formulering van 1:18 vanuit andere gezichtspunten. De collectie mist onder
meer Fokkelman, Polzin en genderkritische studies over Hanna. Het oordeel
"nieuw" blijft daarom beperkt tot de geraadpleegde bronnen.

**Beoordeling:** Lidwoordtekort: dragende bevinding, plafond Middel.
Referentieel verval: context. Naamtelling: kwalitatieve context zonder
zelfstandige statistische bewijslast. Bevindingen 33, 31 en 11.

## Vraag 2: vrouwelijke vormen als ijkpunt

**Vraag:** Is de oververtegenwoordiging van vrouwelijke vormen kenmerkend
voor Hanna's gebed?

**Wat de data toont:** De passage bevat 27 grammaticaal vrouwelijke vormen,
tegen 10,7 globaal verwacht. Het contrast is robuust over alle strata
(G² = 19,9, q = 1,2·10⁻⁵). Tot de voorbeelden behoren הִרְבְּתָה (1:12),
חַנָּה, הִיא, מְדַבֶּרֶת en שְׂפָתֶיהָ (1:13), en תִּשְׁתַּכָּרִין (1:14).

**Text-Fabric-query:**

    word gn=f

In de zoekbrowser zijn 27 treffers na te tellen.

**Aanvullende controle:** Alle zeven controlescènes met een vrouwelijke
hoofdpersoon hebben eveneens een oververtegenwoordiging. Hanna's factor 2,5
valt binnen hun bereik van 1,4 tot 2,6. Ruth op de dorsvloer ligt hoger.

**Duiding:** Geslacht is in het Hebreeuws een congruentiekenmerk. Een
vrouwelijke hoofdpersoon die veel spreekt, brengt vanzelf vrouwelijke
werkwoorden, suffixen en voornaamwoorden met zich mee. De telling wijst
Hanna's aanwezigheid aan en levert geen zelfstandig bewijs voor een
retorische of theologische eigenschap van dit gebed.

**Vergelijking met de commentaren:** De grammaticale telling ontbrak in de
geraadpleegde collectie. Van Wijk-Bos, Evans en Frolov bespreken Hanna's
centrale plaats in het verhaal. Dat een telling niet in een commentaar staat,
maakt haar nog niet tot een onderscheidende exegetische vondst.

**Beoordeling:** IJkpunt. Het plafond Hoog betreft de formele annotatie,
niet de exegetische zeggingskracht. Bevinding 21.

## Vraag 3: snelle wisseling van werkwoordsvormen

**Vraag:** Hoe sterk wisselen tijd, aspect en modus in deze scène?

**Wat de data toont:** De passage telt 14 vensters van vijf clauses met drie
of meer TAM-categorieën, tegen ongeveer 3,6 verwacht (G² = 22,9, robuust over
alle strata). De vormwisselingen liggen onder meer in 1:13 en in Hanna's
verweer in 1:15.

**Text-Fabric-query:**

    sliding window over Pred verb vt values

Deze samengestelde telling vereist een volledige Text-Fabric-omgeving.

**Aanvullende controle:** Van alle nulvensters evenaart 1,9 procent dit
aantal, van de spraakrijke 2,9 procent.

**Duiding:** De variatie past bij de afwisseling tussen waarneming, bevel en
verweer. Zij kwantificeert een stilistisch kenmerk en bewijst geen
psychologische toestand van de sprekers.

**Vergelijking met de commentaren:** Gedeeltelijk gedekt. Frolov bespreekt de
werkwoordsmix, Keil de opeenhoping van woorden en Tsumura de samenhang tussen
vorm en tempo. De meting voegt de corpusvergelijking toe.

**Beoordeling:** Kwantificering van een bekend patroon, plafond Hoog.
Bevinding 16.

## Vraag 4: wat meet de inbeddingsdiepte?

**Vraag:** Beschrijft de hoge inbeddingsdiepte Hanna's verweer, of de wijze
waarop de BHSA directe rede codeert?

**Wat de data toont:** Vier clause-atomen hebben diepte 13 en drie diepte 15.
Voor diepte 15 is de globale verwachting ongeveer 0,4 en de boekverwachting
0,15 (G² = 12,5). Beide contrasten zijn robuust over de strata. In totaal
hebben elf atomen een diepte van 13 of meer.

**Text-Fabric-query:**

    clause_atom tab=15

Het kenmerk `tab` zit niet in de geëxporteerde zoekbrowsergegevens. De
meting vereist daarom een volledige Text-Fabric-omgeving.

**Aanvullende controle:** `tab` loopt op met elke laag rede-in-vertelling.
In narratief proza is de mediaan 8 in directe rede, tegenover 5 in
vertellerstekst. Drie diepe atomen staan in Eli's zegen (1:17), één in
vertellerstekst (1:15). Van de spraakrijke nulvensters haalt 14,2 procent
dezelfde concentratie.

**Duiding:** De eerdere koppeling tussen diepte en Hanna's noodzaak zich te
rechtvaardigen houdt niet stand. De meting volgt grotendeels de codering van
ingebedde rede en lokaliseert geen bijzondere hypotaxis van haar verweer.

**Vergelijking met de commentaren:** De formele dieptemeting ontbreekt in de
geraadpleegde collectie. McCarter, Frolov en Alter bespreken de dialoog vanuit
andere vragen. Dat nieuwheidsoordeel verandert de uitkomst van de
registercontrole niet.

**Beoordeling:** IJkpunt voor de codering van directe rede. Bevindingen 56-57.

## Vraag 5: wens en onderdanige zelfaanduiding

**Vraag:** Hoe combineert Hanna haar verzoeken met de aanduiding
"uw dienstmaagd"?

**Wat de data toont:** Twee clauses in directe rede combineren een
imperfectum als volitiefproxy met een onderdanige zelfaanduiding met
2e-persoonssuffix (2 treffers tegen ongeveer 0 verwacht, G² = 19,6,
q = 1,1·10⁻⁴). In 1:16 staat אַל־תִּתֵּן אֶת־אֲמָתְךָ, "geef uw dienstmaagd
niet…". In 1:18 staat תִּמְצָא שִׁפְחָתְךָ חֵן, "moge uw dienstmaagd genade vinden".

**Text-Fabric-query:**

    clause domain=Q
      word vt=impf
      word lex=>MH/|CPXH/ prs_ps=p2

De zoekbrowser geeft twee treffers. De query controleert het samen voorkomen
van de vormen, niet hun subjectfunctie. In 1:16 is de aangesproken Eli het
onderwerp van het werkwoord en is "uw dienstmaagd" object. In 1:18 is
"uw dienstmaagd" onderwerp. De eerdere bewering dat zij in beide clauses
subject is, wordt daarom teruggenomen.

**Duiding:** Hanna formuleert haar verzoeken met een onderdanige
zelfaanduiding in de derde persoon. De meting verbindt wens en zelfvernedering,
maar stelt geen gelijke syntactische rol in beide clauses vast.

**Vergelijking met de commentaren:** Gedeeltelijk gedekt. Bodner, Tsumura en
Keil bespreken de beleefdheidsformule en het zoeken naar gunst. De meting
kwantificeert de combinatie van vormen.

**Beoordeling:** Exploratieve bevinding, plafond Middel. De zoekvraag is door
het taalmodel voorgesteld. Bevinding 22.

## Vraag 6: rangregister als bekende context

**Vraag:** Hoe keert de rangverhouding in Hanna's antwoord terug?

**Wat de data toont:** Drie spraak-clauses bevatten een rangwoord, tegen
ongeveer 0,1 verwacht (G² = 13,7). Hanna noemt Eli אֲדֹנִי, "mijn heer" (1:15),
en zichzelf אֲמָתְךָ (1:16) en שִׁפְחָתְךָ (1:18). De twee zelfaanduidingen
hebben een suffix dat naar de aangesprokene verwijst.

**Text-Fabric-query:**

    clause domain=Q
      word lex=>DWN/|>MH/|CPXH/

De zoekbrowser geeft drie treffers. De zelfaanduidingen zijn afzonderlijk te
tellen met `word lex=>MH/|CPXH/|<BD/ prs_ps=p2` (twee treffers).

**Duiding:** Hanna erkent de verhouding tot Eli in haar aanspreking en
zelfbenoeming. Haar verweer kan tegelijk krachtig van inhoud en onderdanig
van vorm zijn.

**Vergelijking met de commentaren:** Gedeeltelijk gedekt. Bergen,
Van Wijk-Bos, Cartledge en Weiss bespreken de nederigheid en etiquette.
McCarter en Tsumura benoemen de aanspreekformule als conventie.

**Beoordeling:** Bekende context, exploratief, plafond Laag. Bevindingen 28 en
48 tellen niet mee als zelfstandige kandidaten van de rapportagevloer. De
vaste aanspreekformule (bevinding 5) dient als ijkpunt.

## Vraag 7: twee vorm-hapaxen met voorbehoud

**Vraag:** Hoe uitzonderlijk zijn de twee unieke werkwoordsvormen?

**Wat de data toont:** Twee exacte vormen komen in het OT alleen hier voor,
terwijl hun lexeem frequent is: הִרְבְּתָה in 1:12 (wortel רבה, 224 voorkomens)
en הָסִירִי in 1:14 (wortel סור, 297 voorkomens). De globale verwachting is
ongeveer 0,3 (G² = 4,5, q = 0,035), de verwachting binnen narratief proza 0,2
op 85 scoorbare woorden. Beide vormen zijn vrouwelijk gemarkeerd.

```
vorm-hapaxen van de scène:
1:12  הִרְבְּתָה   perf 3vr.ev.  : Hanna's aanhoudende gebed (de aanleiding)
1:14  הָסִירִי     impv vr.ev.   : Eli's misplaatste bevel (de misser)
```

**Text-Fabric-query:**

    word met freq_occ<=1 en freq_lex>=100, geen nmpr, geen pronominaal
    suffix, geen qere; aandeel vs corpus

Deze samengestelde meting vereist een volledige Text-Fabric-omgeving.

**Aanvullende controle:** De ongecorrigeerde Poissonkans op minstens twee
vorm-hapaxen is ongeveer 0,02. Na weging naar het genusprofiel wordt dat
ongeveer 0,03. Vrouwelijk gemarkeerde vormen zijn corpusbreed ruim vier keer
zo vaak vorm-hapax. De twee vrouwelijke hapaxen bieden dus geen onafhankelijk
tweede bewijs naast de oververtegenwoordiging van vrouwelijke vormen.

Van alle nulvensters heeft 3,8 procent minstens twee vorm-hapaxen, van de
spraakrijke 6,3 procent. In de bredere proef hebben twee van de 23 dialogen
zo'n paar. Dat is bij deze dichtheden niet uitzonderlijk.

**Duiding:** De twee vormen staan bij het bidden dat Eli verkeerd begrijpt en
het bevel waarin hij zijn misvatting uitspreekt. Dat verband kan in een
lezing worden betrokken. De morfologische uniciteit is ook met de masora
parva en een concordantie te vinden. De corpusmeting voegt de ijking toe.

**Vergelijking met de commentaren:** Gedeeltelijk gedekt. Auld, Alter en
Frolov bespreken de handelingen. De morfologische uniciteit is niet
geconstateerd in de geraadpleegde collectie.

**Beoordeling:** Observatie met voorbehoud, confidence Middel bij een formeel
plafond Hoog. Bevinding 55.

**Claim-ledger**

De onderstaande ledger koppelt de oorspronkelijke bevindingen aan velden in
`evidence.json`. De latere beoordeling staat in
[aanvullende_controles.json](aanvullende_controles.json). De ledger wijzigt de
bewaarde meetrun niet.

```json
{
  "claim_ledger": [
    {
      "finding_id": 31,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 31,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 31,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
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
      "finding_id": 11,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 11,
      "evidence_field": "examples",
      "claim_type": "annotation_fact"
    },
    {
      "finding_id": 18,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 18,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    },
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
      "finding_id": 21,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 16,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 16,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 16,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 56,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 56,
      "evidence_field": "tf_query",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 56,
      "evidence_field": "tf_query",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 22,
      "evidence_field": "tf_query",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 22,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 22,
      "evidence_field": "tf_query",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 28,
      "evidence_field": "tf_query",
      "claim_type": "dynamic_hypothesis"
    },
    {
      "finding_id": 28,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 28,
      "evidence_field": "tf_query",
      "claim_type": "commentary_novelty"
    },
    {
      "finding_id": 48,
      "evidence_field": "examples",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 5,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 55,
      "evidence_field": "observed",
      "claim_type": "statistical_finding"
    },
    {
      "finding_id": 55,
      "evidence_field": "examples",
      "claim_type": "interpretive_hypothesis"
    },
    {
      "finding_id": 55,
      "evidence_field": "examples",
      "claim_type": "commentary_novelty"
    }
  ]
}
```
