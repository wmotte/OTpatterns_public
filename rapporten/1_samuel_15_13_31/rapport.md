# Niet-conventionele vragen bij 1 Samuël 15:13-31 (BHSA 2023)

*Passage: 1 Samuël 15:13-31 (19 verzen, 371 woorden; genre narratief, periode
EBH). Bron: ETCBC/BHSA versie 2023 via Text-Fabric. Anomalie-engine tegen het
OT-corpus, gestratificeerd (global/boek/genre/taal/periode), baseline-schema
v11; run van 10 juni 2026, 91 bevindingen (`evidence.json` in deze map).
Robuustheidslabels in dit rapport: robuust (robust), gedeeltelijk robuust
(partially_robust), alleen-globaal (global_only); betrouwbaarheid Hoog, Middel
of Laag. Zoekregels zijn na te lopen in de
[zoekbrowser](https://wmotte.github.io/OTpatterns_public/); achtergrond bij
BHSA en Text-Fabric staat in [ACHTERGROND.md](../../ACHTERGROND.md). BHSA legt
formele syntaxis vast, geen betekenis of theologie; duidingen blijven door het
bewijs gedragen hypothesen.*

> Zevende dialoog uit de Samuël-reeks, en de tweede
> profeet-tegen-koning-inversie: Samuël onttroont Saul met woorden. As:
> macht-asymmetrie en ontwijking/mislukte communicatie. Saul claimt volledige
> gehoorzaamheid, "ik heb het woord van JHWH volbracht" (v13); Samuël weerlegt
> hem met het geluid dat de leugen blootlegt: "wat is dan dit geblaat van
> schapen in mijn oren?" (v14). Saul schuift de schuld op het volk (v15, v21)
> en verpakt de overtreding als eredienst ("om te offeren aan JHWH uw God");
> Samuël velt het vonnis dat gehoorzamen boven offer stelt (v22) en spreekt de
> wederzijdse verwerping uit: "omdat u het woord van JHWH hebt verworpen,
> heeft Hij u verworpen als koning" (v23, v26). Saul eindigt driemaal gebogen
> en smekend om eer (v25, v30, v31). Deze scène dient in de reeks als ijk- en
> testcase: de beroemde laag (de woordspeling op קוֹל, "stem" én "geluid"; de
> drievoudige buiging; de מָאַס-spiegeling; het gescheurde koningschap) is in
> de literatuur volledig uitgewerkt, en de engine bevestigt dat. Vijf dragende
> vragen liggen een laag dieper dan de commentaren tellen: de kale
> werkwoordsstructuur, het collectief dat naar het enkelvoud krimpt, de
> vertelafstand die wegvalt, de zinseenheden die breken waar het gesprek
> vastloopt, en de "beter dan"-constructie die het vonnis van v28 in de mal
> van de kernspreuk van v22 giet.

## Vraag 1: de confrontatie in kale werkwoorden

**Vraag:** Voelt deze tekst alleen "kortaf", of is de soberheid ook meetbaar
in de werkwoorden zelf, die hier minder zwaar geladen zijn dan directe rede
elders?

**Wat de data toont:** Clauses met twee complementen (zwaar geladen,
transactionele predicaten) zijn ondervertegenwoordigd: vijf waar het corpus
er ongeveer 13 verwacht (G² = 7,1). De afwijking is robuust en houdt stand in
elk stratum, ook tegen de directe-rede-baseline: same_genre G² = 6,8
(p ≈ 0,009), same_book G² = 5,1, same_period G² = 6,7. De noemer omvat alle
73 verbale clauses van de passage; de meting drijft dus op de volle tekst.
De werkwoorden die het toneel dragen, zijn juist de kale: de claim
הֲקִימֹתִי ("ik heb volbracht", v13), de verdediging שָׁמַעְתִּי ("ik heb
geluisterd", v20), de bekentenis חָטָאתִי ("ik heb gezondigd", v24, v30),
het vonnis מָאַסְתָּ ("u hebt verworpen", v23). Bewering, verweer en oordeel
staan in predicaten die het bij één of geen complement laten.

**Text-Fabric-query:**

    clause kind=VC
      (per clause de complementen tellen: Objc/Cmpl/Loca/Time/Adju)

*Samengestelde meting; alleen in een volledige Text-Fabric-omgeving
reproduceerbaar. De basisregel `clause kind=VC` draait wel in de zoekbrowser,
maar de complementtelling per clause vergt de frasefuncties.*

**Duiding:** De vorm volgt de aard van het gesprek. Dit is een scène van
beweren en beoordelen: Saul claimt, Samuël klaagt aan, beiden vellen oordelen
over een daad die al achter de rug ligt. Zulke spraak draait om assertie, en
assertieve predicaten dragen weinig complementen: men zegt "ik heb
gezondigd", zonder object, plaats of ontvanger erbij. De
ondervertegenwoordiging van het zwaar geladen werkwoord is op de as
ontwijking/mislukte communicatie de grammaticale signatuur van een dispuut
waarin alleen nog beweerd en geoordeeld wordt. De deflectie heeft de
handeling uit de zinnen geperst.

**Wat het niet bewijst:** Valentie is een harde formele telling
(`formal_proxy`), maar de stap van "weinig twee-complement-clauses" naar
"assertie boven transactie" is mijn lezing boven het cijfer. De
ondervertegenwoordiging kan deels ook nominale clauses en
één-complement-werkwoorden om andere redenen weerspiegelen; de meting zegt
dat de dichtheid corpus-afwijkend is, niet dat een afzonderlijk predicaat
bijzonder is.

**Staat dit al in de commentaren?:** nieuw. Geen bron telt of bespreekt
werkwoordsvalentie. Campbell typeert dit type Samuël-proza algemeen als
"terse and allusive", maar past dat niet toe op een meting van
predicaatstructuur en spreekt feitelijk over het Michmas-hoofdstuk. Een vage
stijl-intuïtie raakt dus aan de soberheid; de telbare ondervertegenwoordiging
van het zwaar geladen werkwoord tegen de directe-rede-baseline staat nergens.

**Confidence:** Hoog (≤ plafond Hoog) · feature(s): valence (complements=2,
onder) · robustness: robust · versie 2023

## Vraag 2: het collectief dat naar het enkelvoud krimpt

**Vraag:** Saul beroept zich telkens op "het volk", een collectief. Spreekt
de grammatica dat collectief ook als groep aan, of kantelt ze naar het
enkelvoud, naar een individueel jij-tegen-jij?

**Wat de data toont:** Het meervoud is sterk ondervertegenwoordigd: veertien
meervoudsvormen waar het corpus er ongeveer 48 verwacht (G² = 36,6). De
afwijking is robuust en zwaar significant in elk stratum, ook tegen de
directe-rede-baseline: same_genre G² = 32,7 (p ≈ 0,00000001), same_book
G² = 23,2, same_period G² = 33,2. De noemer omvat alle 371 woorden van de
passage. De weinige meervouden clusteren bovendien precies in Sauls deflectie
en Samuëls vonnis-poëzie: הֱבִיאוּם en הֶחֱרַמְנוּ ("ze hebben gebracht / wij
hebben gebannen", v15), שִׁבְטֵי ("stammen", v17), עֹלוֹת en זְבָחִים
("brandoffers en slachtoffers", v22).

**Text-Fabric-query:**

    word nu=pl

*In de zoekbrowser na te tellen: 14 treffers in deze passage.*

**Duiding:** Het collectief wordt grammaticaal uit elkaar gehaald. Saul maakt
"het volk" tot het meervoudige schild waarachter hij wegduikt (zíj spaarden,
zíj brachten), maar de scène zelf verdicht zich tot twee mannen die tegenover
elkaar staan, en het Hebreeuws volgt die verdichting: het meervoud valt tegen
het corpus weg. De confrontatie is op de as macht-asymmetrie een duel tussen
twee mannen; de grammatica maakt het toneel leeg op Samuël en Saul na. De
weinige meervouden keren terug waar Saul de daad van zich af schuift (de
gebrachte dieren) en waar Samuël de cultische verpakking afbreekt (de offers
die het luisteren niet vervangen). Het meervoud is het register van de
uitvlucht.

**Wat het niet bewijst:** Numerus is een harde formele telling
(`formal_proxy`), maar de stap van "weinig meervoud" naar "individualisering
van het collectief" blijft interpretatief. Het collectief-enkelvoud van
הָעָם is bovendien een standaardtrek van het Hebreeuws; de meting zegt dat de
dichtheid ervan hier corpus-afwijkend is, niet dat de constructie zelf
bijzonder is.

**Staat dit al in de commentaren?:** gedeeltelijk. Het thema is geraakt, de
meting ontbreekt. Alter merkt op dat Saul in v15 een "vage derde persoon
meervoud" (הֱבִיאוּם, "ze hebben gebracht") inzet om de verantwoordelijkheid
naar onbenoemde anderen te schuiven. Greear en Tsumura wijzen op het
enkelvoudige חָמַל (v9, verteller) dat Saul als hoofddader ontmaskert ondanks
het genoemde "volk". Cartledge leest Samuël als degene die Saul vastpint als
enig moreel subject. De thematische beweging van collectief naar individu is
dus bekend; dat de grammatica die beweging meetbaar ondersteunt (het meervoud
dat tegen het corpus wegvalt), voegt BHSA toe. De meting keert bovendien
terug uit de zesde dialoog (1 Samuël 14), waar hetzelfde meervoud-tekort de
scène op Saul en Jonatan toespitste: een signatuur die over de
Saul-confrontaties heen terugkeert.

**Confidence:** Hoog (≤ plafond Hoog) · feature(s): categorical (nu=pl,
onder) · robustness: robust · versie 2023

## Vraag 3: de vertelafstand die wegvalt

**Vraag:** Verhalend proza leunt op de afstandelijke derde persoon. Houdt
deze scène die afstand, of wordt ze grotendeels in de rechtstreekse aanspraak
van eerste en tweede persoon gevoerd?

**Wat de data toont:** De derde persoon, de afstandelijke vertelvorm, is
ondervertegenwoordigd: 43 p3-vormen waar het corpus er ongeveer 60 verwacht
(G² = 12,1), robuust in elk stratum en het scherpst tegen de
directe-rede-baseline: same_genre G² = 26,5 (p ≈ 0,0000003), same_book
G² = 18,3, same_period G² = 12,4. In de plaats daarvan domineert de directe
aanspraak: Sauls eerste-persoons-claims (ik heb volbracht, ik heb geluisterd,
ik heb gezondigd), Samuëls tweede-persoons-aanklacht (waarom hebt u niet
geluisterd, u hebt verworpen) en het tweede-persoons-vonnis (Hij heeft u
verworpen). Deze meting covarieert met Vraag 2: twee onafhankelijke
tellingen, numerus en persoon, wijzen één kant op, weg van groep en verhaal,
naar het rechtstreekse jij-tegen-jij.

**Text-Fabric-query:**

    word ps=p3

*In de zoekbrowser na te tellen: 33 treffers in deze passage; de tien
suffixen die naar een derde persoon verwijzen via `word prs_ps=p3`
(10 treffers). Samen 43, het cijfer van de meting.*

**Duiding:** De vertelafstand wordt uit de scène geperst. Een hoofdstuk dat
als verhaal begint, kantelt in een aanhoudende face-to-face-aanvaring waarin
verteller en derde persoon terugtreden voor de directe confrontatie. Saul en
Samuël staan recht tegenover elkaar, zonder verteller ertussen, en de
grammatica registreert dat als een tekort aan de afstandelijke vorm. Op de as
macht-asymmetrie is de lage derde persoon de syntactische maat van een
onttroning die zich in de aanspraak zelf voltrekt: de profeet spreekt het
vonnis rechtstreeks tegen de koning uit.

**Wat het niet bewijst:** Persoon is een formele telling; "directheid" en
"confrontatie" blijven mijn lezing boven het cijfer (`discourse_uncertain`).
De covariantie met de numerus-meting is reëel; ze is geen bewijs van opzet,
want beide tellingen kunnen deels dezelfde verschuiving naar de twee sprekers
meten. Het effect is matig (G² = 12,1) en de teleenheid hangt af van de
ETCBC-persoonscodering.

**Staat dit al in de commentaren?:** gedeeltelijk. De directheid is gezien,
de telling ontbreekt. Davis merkt op dat "het grootste deel van het verhaal
via toespraken en gesprekken wordt verteld", wat de scène haar dramatische
directheid geeft. Alter typeert Samuël als iemand die de aanklacht er in de
tweede persoon "in hamert" ("waarom hebt ú niet geluisterd"). Woodhouse
benadrukt dat hoofdstuk 15 een "fresh narrative" is, gebouwd op directe
interactie. De directheid is dus thematisch goed in beeld; dat ze als
ondervertegenwoordiging van de derde persoon tegen het corpus meetbaar is, en
samenloopt met het wegvallende meervoud, benoemt geen van de commentaren. Net
als de numerus-meting keert de persoon-meting terug uit de zesde dialoog:
dezelfde verdichting naar het jij-tegen-jij.

**Confidence:** Middel (≤ plafond Middel) · feature(s): person_shift (p3,
onder) · robustness: robust · versie 2023

## Vraag 4: de gebroken zinnen van het verhoor

**Vraag:** Het gesprek tussen Samuël en Saul klinkt gejaagd en afgebroken.
Blijft dat een leesindruk, of markeert de ETCBC-codering hier meetbaar vaker
dan elders zinseenheden die nooit voltooid raken?

**Wat de data toont:** Clause-atomen die de ETCBC-codering als defectief
markeert (code=999: afgebroken of nooit voltooide syntaxis, anakoloet) zijn
oververtegenwoordigd: dertien waar het corpus er ongeveer 4,8 verwacht
(G² = 10,4, p ≈ 0,0013), op een noemer van 87 clause-atomen. De afwijking is
robuust en houdt ook stand tegen genre (G² = 5,3, p ≈ 0,022) en periode
(G² = 10,0, p ≈ 0,0016). Het boek-stratum haalt geen significantie
(p ≈ 0,13): 1 Samuël is als boek zelf al rijk aan gebroken syntaxis, en de
passage steekt vooral tegen corpus, genre en periode af. De breuken liggen
vrijwel allemaal in de directe rede, op de formule- en bevelsmomenten: Sauls
begroetingsformule בָּרוּךְ אַתָּה לַיהוָה (v13), Samuëls werkwoordloze vraag
וּמֶה קוֹל הַצֹּאן הַזֶּה בְּאָזְנָי (v14), Sauls excuus מֵעֲמָלֵקִי
הֱבִיאוּם met de herkomst vooraan en een vaag "ze" (v15), Samuëls twee kale
één-woord-bevelen הֶרֶף en דַּבֵּר (v16), de afgebroken retorische opener
הֲלוֹא (v17), het kale לֵךְ in het geciteerde zendingswoord (v18) en Sauls
verweer dat met een betrekkelijk voornaamwoord opent en nooit een hoofdzin
krijgt: אֲשֶׁר שָׁמַעְתִּי בְּקוֹל יְהוָה (v20).

**Text-Fabric-query:**

    clause_atom code=999

*Alleen in een volledige Text-Fabric-omgeving reproduceerbaar; `clause_atom`
zit niet in de geëxporteerde featureset van de zoekbrowser.*

**Duiding:** Het gesprek hapert grammaticaal precies waar het inhoudelijk
vastloopt. De defectieve atomen vallen op Sauls formules en excuses (de
begroeting van v13, het gefronte verweer van v15 en v20) én op Samuëls
verhoor (de vraag van v14, de bevelen van v16, de opener van v17). De breuk
hoort dus bij het gesprek als geheel: beide sprekers laten zinnen onvoltooid,
de een in de uitvlucht, de ander in het kale bevel. Op de as
ontwijking/mislukte communicatie sluit dat aan bij de eerdere metingen: een
dispuut van assertie en oordeel, gevoerd in syntaxis die afbreekt op de
momenten van claim, verhoor en vonnis.

**Wat het niet bewijst:** code=999 is een harde annotatie (`hard_formal`);
"geëmotioneerd" of "verstoord" blijft lezing boven de tag. De codering
registreert dat een zinseenheid afbreekt, over de reden zwijgt ze. Het
boek-stratum is niet significant: tegen de rest van 1 Samuël gemeten is deze
dichtheid hoog maar gewoon. En een deel van de defectieve atomen zijn korte
imperatieven die de ETCBC-segmentering als onvoltooid markeert; daar is de
"breuk" eerder een coderingskeuze dan een anakoloet in enge zin.

**Staat dit al in de commentaren?:** gedeeltelijk. De ruwheid is stilistisch
gezien, geteld is ze nergens. Bodner noemt de "awkward syntax" van Sauls
excuus in v15 en zet Samuëls vraag van twee woorden tegenover Sauls antwoord
van zevenentwintig; Campbell typeert het Samuël-proza als "terse and
allusive" en ziet de vorm van de profetische oordeelsrede in dit verhaal
"dissolved", met de kale bevelen van v16 als summons-to-hear; Tsumura leest
de onpersoonlijke passief van v15 als bewuste "defocussing" van
verantwoordelijkheid; van Wijk-Bos en Alter beschrijven de levendige,
hamerende dialoogvoering. Wat BHSA toevoegt: de harde ETCBC-tag maakt de
breuk telbaar. Dertien defectieve atomen waar er ongeveer 4,8 verwacht
worden, significant tegen corpus, genre en periode.

**Confidence:** Hoog (≤ plafond Hoog) · feature(s):
defective_clause_atom_density (code=999, over) · robustness: robust ·
versie 2023

## Vraag 5: de spreukvorm die het vonnis voltrekt

**Vraag:** De kernspreuk "gehoorzamen is beter dan offer" (v22) en het vonnis
"uw naaste, die beter is dan u" (v28) delen het woord טוֹב. Delen ze ook de
grammaticale mal, en is die mal meetbaar de vaste sleuf van precies dit
lexeem?

**Wat de data toont:** De drieweg-collostructie (relationele laag: lexeem ×
frasefunctie × clausetype) meet dat טוֹב als predicaatscomplement (PreC) in
een adjectivische werkwoordloze clause (AjCl) corpusbreed extreem aan die
sleuf gebonden is: 210 van de 337 טוֹב-frasen in het corpus staan in precies
deze cel, waar onafhankelijkheid van de marges er ongeveer 4,6 verwacht
(2×2 G² = 1392, p ≈ 1e-304). De binding is robuust in elk stratum: same_book
G² = 201 (binnen 1 Samuël staan 24 van de 25 טוֹב-frasen in deze sleuf),
same_genre G² = 720, same_period G² = 946. In de passage valt die gebonden
constructie precies tweemaal, op de twee scharnierzinnen: הִנֵּה שְׁמֹעַ
מִזֶּבַח טוֹב ("zie, gehoorzamen is beter dan offer", v22) en לְרֵעֲךָ
הַטּוֹב מִמֶּךָּ ("aan uw naaste, die beter is dan u", v28; de ETCBC-codering
leest het gelede הַטּוֹב מִמֶּךָּ als eigen adjectief-clause).

**Text-Fabric-query:**

    clause typ=AjCl
      phrase function=PreC
        word lex=VWB/

*De drielaagse zoekregel draait alleen in een volledige
Text-Fabric-omgeving; de zoekbrowser ondersteunt geen frase-niveau. De twee
passage-treffers zijn wel na te tellen via `clause typ=AjCl` met daaronder
`word lex=VWB/` (2 treffers).*

**Duiding:** Spreuk en vonnis lopen door dezelfde mal. טוֹב heeft in het
Hebreeuws één grammaticaal thuis: het predicaat van de werkwoordloze
oordeelszin, "X is goed/beter". Samuël formuleert in v22 de norm in die mal
(gehoorzamen is beter dan offer) en voltrekt in v28 het vonnis in dezelfde
mal (de naaste is beter dan u). De maatstaf die Saul te horen kreeg, wordt
het meetlint waarlangs hij wordt afgemeten. Het lexeemveld goed/beter omspant
bovendien de hele scène als waardeschaal: Saul greep zelf naar מֵיטַב, "het
beste" van het vee (v9, v15), en juist de offer-overtreffende "beter"-zin
spreekt hem uit het koningschap. Op de as ontwijking/mislukte communicatie
krijgt Sauls eigen waardetaal zo het laatste woord tegen hem.

**Wat het niet bewijst:** De G² meet de corpusbinding van de cel en zegt
daarmee alleen iets over het gedrag van טוֹב in het corpus als geheel: het
lexeem is overal de prototypische predikaatsvuller van de adjectief-clause.
Binnen de passage is de telling klein (twee voorkomens; min_n-waarschuwing,
plafond Middel), en dat juist spreuk en vonnis die twee plekken zijn, is mijn
lezing van de verdeling boven het cijfer (`formal_proxy`). מֵיטַב in v9/v15
is een verwante vorm uit hetzelfde lexeemveld en valt buiten de geturfde cel.

**Staat dit al in de commentaren?:** gedeeltelijk. De vorm is per vers
gezien. Keil analyseert טוֹב in v22 expliciet als predicaat, met מִזֶּבַח
voorop geplaatst "for the sake of emphasis"; Tsumura typeert v22-23 als
poëtisch proza met parallellisme; Bergen noemt v22 een kort doch diepzinnig
maxime van drie Hebreeuwse woorden; Auld merkt מֵיטַב (v9, v15) als prominent
en belangrijk op. De verbinding tussen v22 en v28 leggen de bronnen
thematisch: Tsumura leest v28 als vervulling van de eerdere aankondiging van
de man naar Gods hart, van Wijk-Bos als het definitieve oordeel. Dat beide
uitspraken in dezelfde, corpusbreed sterk gebonden constructie staan, en dat
die gedeelde mal het vonnis formeel aan de kernspreuk bindt, telt geen van de
bronnen.

**Confidence:** Middel (≤ plafond Middel) · feature(s):
function_collexeme_anomaly (VWB/ als PreC in AjCl, bound) · robustness:
robust · versie 2023

## IJkmetingen: wat de commentaren al volledig dekken

De volgende metingen bevestigen wat de literatuur uitwerkt; ze dienen als ijk
en scoren alle novelty standard ("bekend"). Twee komen uit exploratieve
dynamic queries (provenance `llm_hypothesis`), wat per geval vermeld is. Dit
hoofdstuk is bewust als hoog-verzadigde testcase gekozen, en de ijklaag
bevestigt die keuze: de beroemde verschijnselen zijn alle al grondig
becommentarieerd.

1.  **De woordspeling op קוֹל, stem én geluid** (finding-id 43,
    `voice_pun_obey_versus_sound`, exploratief, obs 5; en finding-id 41,
    leitwort `QWL/`, deterministisch, obs 6). Vijf directe-rede-clauses
    waarin קוֹל draait tussen "stem" en "geluid": Saul beweert de stem van
    JHWH te gehoorzamen (v20), Samuël hoort het geluid van het kleinvee (v14)
    en stelt het luisteren boven het geluid van rammen (v22). Dit is het
    ironische hart van de scène en breed becommentarieerd. Alter noemt קוֹל
    expliciet "het thematische sleutelwoord van de episode"; Woodhouse ziet
    de lucht gevuld met het "geluid" van Sauls falen om naar de "stem" te
    luisteren; Brueggemann bespreekt het woordspel שָׁמַע/קוֹל; Bodner noemt
    "horen" en "geluid/stem" de centrale termen en leest Samuëls vraag in
    v14 als sarcasme dat teruggrijpt op v1. Text-Fabric: `clause domain=Q`
    met daaronder `word lex=QWL/` (in de zoekbrowser na te tellen:
    5 treffers); de losse woordtelling `word lex=QWL/` geeft 6 treffers.

2.  **De drievoudige buiging van de afgezette koning** (finding-id 57,
    categorical vs=hsht, deterministisch, obs 3). Drie hishtaphel-vormen aan
    het slot: אֶשְׁתַּחֲוֶה ("ik wil mij neerbuigen", v25),
    הִשְׁתַּחֲוֵיתִי (v30) en וַיִּשְׁתַּחוּ ("hij boog zich neer", v31). Dat
    de koning zich juist hier driemaal fysiek buigt terwijl zijn mondelinge
    gehoorzaamheid vals bleek, is volledig in beeld. Woodhouse: v31 is de
    eerste en enige keer dat we Saul voor een mens zien buigen, "de koning is
    op zijn knieën gebracht". Davis structureert v24-31 als drie smeekbeden
    met de buiging als inzet. Alter wijst op de bittere ironie: Saul smeekt
    om eer zodat hij kan buigen. Long ziet de tweede confessie volledig om
    Sauls eer-verlangen draaien. Text-Fabric: `word vs=hsht` (in de
    zoekbrowser na te tellen: 3 treffers).

3.  **De wederkerige verwerping, מָאַס tegen מָאַס** (finding-id 75,
    `reciprocal_rejection_maas`, exploratief, obs 2; en finding-id 33,
    leitwort `M>S[`, deterministisch, obs 4). Dezelfde wortel keert de
    verhouding om: Saul verwerpt het woord van JHWH (v23), JHWH verwerpt Saul
    als koning (v23, v26). Dit is een standaardlezing van het vonnis. Bergen
    leest de herhaling als "poëtische rechtvaardigheid"; Campbell vat het
    samen als "rejection begets rejection", door de hele vertelling geweven;
    Long ziet v23 culmineren in "omdat u hebt verworpen... heeft Hij u
    verworpen"; Cartledge en Chapman lezen het als de kern van Sauls "legacy"
    en van de Deuteronomistische leiderschapsvisie. Text-Fabric:
    `clause domain=Q` met daaronder `word lex=M>S[` (in de zoekbrowser na te
    tellen: 2 treffers); de losse woordtelling `word lex=M>S[` geeft
    4 treffers.

De beroemde laag van deze scène (het קוֹל-woordspel, de drievoudige buiging,
de מָאַס-spiegeling, het gescheurde koningschap) is in de literatuur grondig
uitgewerkt, en de engine bevestigt elk ervan als robuuste maar standaard
meting. Precies dat maakt 1 Samuël 15 tot een geslaagde testcase: waar de
commentaren dicht zitten, vindt de methode geen valse novelty. Wat de
BHSA-meting wél toevoegt, zit eronder, in de gemeten vorm die de commentaren
(gericht op woordspel en theologie) ongeteld laten: de kale
werkwoordsstructuur van een dispuut waarin alleen nog beweerd wordt, het
meervoud dat tegen het corpus wegvalt, de derde persoon die terugtreedt voor
het jij-tegen-jij, en de zinseenheden die breken op de momenten van verhoor
en bevel. In de reeks blijft de opbrengst grillig: de eerste dialoog gaf vier
novel findings, de tweede één, de derde geen, de vierde twee, de vijfde één,
de zesde geen volledig novel met drie partially_covered, en deze zevende (een
bewust hoog-verzadigd ijkpunt) één novel meting (de valentie) plus vier
partially_covered. Twee daarvan, numerus en persoon, keren uit de zesde
dialoog terug en verdichten samen naar het enkelvoudige jij-tegen-jij. De
derde, de gebroken clause-atomen, keert robuust terug in de andere
Saul-confrontaties van de reeks (1 Samuël 13, 14 en 17), terwijl het signaal
in de kalmere gesprekken (1 Samuël 1, 3 en 8) onder de significantiegrens
blijft: een signatuur van de confrontatie-dialogen die over passages heen
terugkeert. De vierde, de טוֹב-collostructie, komt uit de relationele
kruisingslaag van de engine; zij verbindt de kernspreuk van v22 met het
vonnis van v28 via hun gedeelde, corpusbreed gebonden constructie.

## Claim-ledger

Koppeling van de rapportclaims aan velden in `evidence.json`, per
finding-id; de nieuwheidsoordelen staan samengevat in
[nieuwheidsoordelen.md](nieuwheidsoordelen.md).

```json
{"claim_ledger": [
  {"finding_id": 85, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 85, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 85, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 26, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 26, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 26, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 58, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 58, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 58, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 35, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 35, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 35, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 2, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 2, "evidence_field": "examples", "claim_type": "interpretive_hypothesis"},
  {"finding_id": 2, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 43, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 43, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 41, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 41, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 57, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 57, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 75, "evidence_field": "observed", "claim_type": "dynamic_hypothesis"},
  {"finding_id": 75, "evidence_field": "examples", "claim_type": "commentary_novelty"},
  {"finding_id": 33, "evidence_field": "observed", "claim_type": "statistical_finding"},
  {"finding_id": 33, "evidence_field": "examples", "claim_type": "commentary_novelty"}
]}
```
