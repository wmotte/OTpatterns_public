# Detectoren

Beschrijving van elke detector in de anomaly-engine (`scripts/anomaly_engine.py`
plus de opt-in modules). Elke detector zoekt of meet iets in BHSA/Text-
Fabric-features en levert een *vorm*-signaal. De exegetische duiding blijft
lezerswerk.

---

## Inhoud

- [Vlakke detectoren (standaard pipeline)](#vlakke-detectoren-standaard-pipeline)
  - [language_switch](#language_switch)
  - [qere_ketiv](#qere_ketiv)
  - [fronting](#fronting)
  - [negation](#negation)
  - [construct_chain](#construct_chain)
  - [categorical](#categorical)
  - [rare_lexeme](#rare_lexeme)
  - [valence](#valence)
  - [valence_object_drop](#valence_object_drop)
  - [clause_embedding](#clause_embedding)
  - [parallelism](#parallelism)
  - [fronting_contrast_pair](#fronting_contrast_pair)
  - [chiastic_colon_pair](#chiastic_colon_pair)
  - [quotation_introducers](#quotation_introducers)
  - [participant_density](#participant_density)
  - [person_shift](#person_shift)
  - [discourse_particle](#discourse_particle)
  - [question_profile](#question_profile)
  - [leitwort](#leitwort)
  - [divine_names](#divine_names)
- [Expansie / opt-in detectoren (anomaly_engine.py)](#expansie--opt-in-detectoren-anomaly_enginepy)
  - [synoptic_divergence](#synoptic_divergence)
  - [topological_hapax](#topological_hapax)
  - [deep_parallelism](#deep_parallelism)
  - [phonological_cluster](#phonological_cluster)
  - [root_play](#root_play)
  - [infinitive_absolute](#infinitive_absolute)
  - [casus_pendens](#casus_pendens)
  - [dynamic_query](#dynamic_query)
- [Meta / compositorische laag (meta_detectors.py, --composite)](#meta--compositorische-laag-meta_detectorspy---composite)
  - [narrative_arc](#narrative_arc)
  - [divine_agency](#divine_agency)
  - [rhetorical_pivot](#rhetorical_pivot)
  - [pivot_plus](#pivot_plus)
  - [composite_structure](#composite_structure)
- [Morfosyntactische laag (morphosyntax_detectors.py, --morphosyntax)](#morfosyntactische-laag-morphosyntax_detectorspy---morphosyntax)
  - [ethical_dative_density](#ethical_dative_density)
  - [redundant_pronoun_emphasis](#redundant_pronoun_emphasis)
  - [cleft_pronoun_focus](#cleft_pronoun_focus)
  - [adjunct_fronting_pressure](#adjunct_fronting_pressure)
  - [tail_modification_pressure](#tail_modification_pressure)
  - [circumstantial_slowdown](#circumstantial_slowdown)
  - [historical_present_participles](#historical_present_participles)
  - [poetic_aspect_shift](#poetic_aspect_shift)
  - [spatiotemporal_dislocation](#spatiotemporal_dislocation)
  - [weqatal_procedural_chain](#weqatal_procedural_chain)
  - [epistemic_doubt_zone](#epistemic_doubt_zone)
  - [volitive_clash](#volitive_clash)
  - [agentless_niphal](#agentless_niphal)
  - [stem_contrast](#stem_contrast)
  - [hitpael_speech](#hitpael_speech)
  - [paragogic_nun](#paragogic_nun)
  - [volitive_chain](#volitive_chain)
  - [volitive_in_speech](#volitive_in_speech)
  - [nominal_clause_order](#nominal_clause_order)
  - [extraposition_referent](#extraposition_referent)
  - [asyndeton_cluster](#asyndeton_cluster)
  - [ki_profile](#ki_profile)
  - [nested_speech](#nested_speech)
  - [ithou_register](#ithou_register)
  - [suffix_referent_shift](#suffix_referent_shift)
  - [agreement_discord](#agreement_discord)
  - [disputation_QA](#disputation_qa)
  - [female_suffix_cluster](#female_suffix_cluster)
  - [localized_participant_pressure](#localized_participant_pressure)
  - [left_dislocation_resumption_plus](#left_dislocation_resumption_plus)
  - [imperative_promise_pair](#imperative_promise_pair)
  - [kinship_register_chain](#kinship_register_chain)
  - [appositional_title_ladder](#appositional_title_ladder)
  - [speech_safety_zone](#speech_safety_zone)
  - [modal_infabs](#modal_infabs)
  - [name_rootplay_focus](#name_rootplay_focus)
  - [speech_action_misalignment](#speech_action_misalignment)
  - [spatial_kinetic_axis](#spatial_kinetic_axis)
  - [vocative_imperative_bundle](#vocative_imperative_bundle)
  - [disjunctive_waw_x_onset](#disjunctive_waw_x_onset)
  - [negative_existential_bundle](#negative_existential_bundle)
- [Corpus-relationele laag (relational_detectors.py, --relational)](#corpus-relationele-laag-relational_detectorspy---relational)
  - [collexeme_anomaly](#collexeme_anomaly)
  - [transition_anomaly](#transition_anomaly)
  - [distribution_shape](#distribution_shape)
  - [function_collexeme_anomaly](#function_collexeme_anomaly)
  - [entity_syntactic_role_anomaly](#entity_syntactic_role_anomaly)
- [NER-laag (ner_detectors.py, --ner, BHSA 2023)](#ner-laag-ner_detectorspy---ner-bhsa-2023)
  - [entity_role_pressure](#entity_role_pressure)
  - [entity_role_transition](#entity_role_transition)
  - [entity_copresence](#entity_copresence)
  - [entity_speech_action_link](#entity_speech_action_link)
- [Novelty-familie (novelty_families.py, --novelty-families)](#novelty-familie-novelty_familiespy---novelty-families)
  - [deictic_participant_chain](#deictic_participant_chain)
  - [verb_frame_slot_pressure](#verb_frame_slot_pressure)
  - [quote_topology](#quote_topology)
  - [clause_chain_rhythm](#clause_chain_rhythm)
  - [lexical_register_zone](#lexical_register_zone)
- [Predictieve / informatietheoretische laag (predictive_families.py, --predictive-families)](#predictieve--informatietheoretische-laag-predictive_familiespy---predictive-families)
  - [syntactic_surprise](#syntactic_surprise)
  - [forward_predictive_scaffolding](#forward_predictive_scaffolding)
  - [referential_decay_rate](#referential_decay_rate)
  - [semantic_compression_ratio](#semantic_compression_ratio)
  - [inanimate_subject_fronting](#inanimate_subject_fronting)
  - [binyan_escalation_ladder](#binyan_escalation_ladder)
  - [actant_centrality](#actant_centrality)
  - [lexical_resonance_distance](#lexical_resonance_distance)
  - [verbal_entanglement](#verbal_entanglement)
  - [hapax_gravity](#hapax_gravity)
  - [syntactic_chiasm](#syntactic_chiasm)
  - [asyndetic_staccato_pressure](#asyndetic_staccato_pressure)
  - [polysyndetic_slowdown](#polysyndetic_slowdown)
  - [morphological_weight](#morphological_weight)
  - [clausal_gasp](#clausal_gasp)
  - [actant_obfuscation](#actant_obfuscation)
  - [spatial_euphemism_distance](#spatial_euphemism_distance)
  - [enallage_gender_mismatch](#enallage_gender_mismatch)
  - [numeric_discord](#numeric_discord)
  - [tam_chaos](#tam_chaos)
  - [infabs_climax_overkill](#infabs_climax_overkill)
  - [paused_interrogation](#paused_interrogation)
  - [deictic_shift_here_now](#deictic_shift_here_now)
  - [stative_state_locking](#stative_state_locking)
  - [pronominal_ambiguity_chain](#pronominal_ambiguity_chain)
- [Discourse/pragmatiek-laag (discourse_pragmatics_detectors.py, --discourse-pragmatics)](#discoursepragmatiek-laag-discourse_pragmatics_detectorspy---discourse-pragmatics)
  - [asymmetric_qa_frames](#asymmetric_qa_frames)
  - [unframed_speech_onset](#unframed_speech_onset)
  - [heavy_quotation_formula](#heavy_quotation_formula)
  - [causative_coercion_spike](#causative_coercion_spike)
  - [depersonalisation_pual_hofal](#depersonalisation_pual_hofal)
  - [middle_voice_mimicry](#middle_voice_mimicry)
  - [subject_over_encoding](#subject_over_encoding)
  - [vocative_isolation](#vocative_isolation)
  - [relational_preposition_density](#relational_preposition_density)
  - [locative_he_pressure](#locative_he_pressure)
  - [instrumental_b_focus](#instrumental_b_focus)
  - [infc_purpose_chains](#infc_purpose_chains)
  - [clause_ellipsis_pressure](#clause_ellipsis_pressure)
- [Text-dynamics laag (text_dynamics_detectors.py, --text-dynamics)](#text-dynamics-laag-text_dynamics_detectorspy---text-dynamics)
  - [bayesian_participant_shift](#bayesian_participant_shift)
  - [latent_collexeme_surprise](#latent_collexeme_surprise)
  - [cataphoric_ted_drift](#cataphoric_ted_drift)
  - [information_bottleneck_pressure](#information_bottleneck_pressure)
  - [syntactic_comorbidity_index](#syntactic_comorbidity_index)
  - [speech_survival_duration](#speech_survival_duration)
  - [fronting_diagnostic_ratio](#fronting_diagnostic_ratio)
  - [lexeme_percolation_rate](#lexeme_percolation_rate)
  - [longitudinal_tense_drift](#longitudinal_tense_drift)
  - [deep_construct_branching](#deep_construct_branching)
  - [nominal_asphyxiation](#nominal_asphyxiation)
  - [infc_subject_rarity](#infc_subject_rarity)
  - [spatiotemporal_axis_tilt](#spatiotemporal_axis_tilt)
  - [dialogue_turn_volatility](#dialogue_turn_volatility)
  - [arthrous_anarthrous_contrast](#arthrous_anarthrous_contrast)
  - [phrase_level_waw_density](#phrase_level_waw_density)
  - [prepositional_overloading](#prepositional_overloading)
  - [transmission_noise_density](#transmission_noise_density)
  - [aramaic_intrusion_index](#aramaic_intrusion_index)
  - [entropy_collapse](#entropy_collapse)
  - [nested_quote_boundary_blur](#nested_quote_boundary_blur)
- [Connectiviteitslaag (connectivity_detectors.py, --connectivity)](#connectiviteitslaag-connectivity_detectorspy---connectivity)
  - [defective_clause_atom_density](#defective_clause_atom_density)
  - [discourse_restart_density](#discourse_restart_density)
  - [remote_continuation](#remote_continuation)
  - [connection_band_anomaly](#connection_band_anomaly)
- [Prosodie/poetica-laag (prosody_poetics_detectors.py, --prosody-poetics)](#prosodiepoetica-laag-prosody_poetics_detectorspy---prosody-poetics)
  - [colometric_parallelism](#colometric_parallelism)
  - [acrostic_sequence](#acrostic_sequence)
  - [petucha_setuma_pivot](#petucha_setuma_pivot)
  - [maqef_compression_zone](#maqef_compression_zone)
  - [paseq_density](#paseq_density)
  - [sof_pasuq_rhythm](#sof_pasuq_rhythm)
- [Ellips/gapping-laag (ellipsis_detectors.py, --ellipsis)](#ellipsgapping-laag-ellipsis_detectorspy---ellipsis)
  - [ellipsis_density](#ellipsis_density)
  - [gapped_constituent_profile](#gapped_constituent_profile)
  - [gapping_distance](#gapping_distance)
  - [prose_ellipsis_marked](#prose_ellipsis_marked)
- [Accent-syntaxis-laag (accent_syntax_detectors.py, --accent-syntax)](#accent-syntaxis-laag-accent_syntax_detectorspy---accent-syntax)
  - [atnach_asymmetry](#atnach_asymmetry)
  - [accent_syntax_mismatch](#accent_syntax_mismatch)
  - [atnach_absence](#atnach_absence)
- [Referentiële-markering-laag (referential_marking_detectors.py, --referential-marking)](#referentiële-markering-laag-referential_marking_detectorspy---referential-marking)
  - [dom_unmarked_definite](#dom_unmarked_definite)
  - [dom_marked_indefinite](#dom_marked_indefinite)
  - [referent_chain_anomaly](#referent_chain_anomaly)
- [Vorm-rariteit-laag (form_rarity_detectors.py, --form-rarity)](#vorm-rariteit-laag-form_rarity_detectorspy---form-rarity)
  - [morphological_hapax](#morphological_hapax)
  - [rare_form_cluster](#rare_form_cluster)
- [Orthografie-laag (orthography_detectors.py, --orthography)](#orthografie-laag-orthography_detectorspy---orthography)
  - [plene_defective_skew](#plene_defective_skew)
  - [spelling_switch](#spelling_switch)
- [Convergentie-meta-pass (convergence_detectors.py, --convergence)](#convergentie-meta-pass-convergence_detectorspy---convergence)
  - [anomaly_convergence](#anomaly_convergence)
- [Pauzale-vormen-laag (pausal_detectors.py, --pausal-forms)](#pauzale-vormen-laag-pausal_detectorspy---pausal-forms)
  - [pausal_out_of_place](#pausal_out_of_place)
  - [pausal_absent_at_pause](#pausal_absent_at_pause)
- [Individuatie-laag (individuation_detectors.py, --individuation)](#individuatie-laag-individuation_detectorspy---individuation)
  - [participant_individuation](#participant_individuation)
- [Prosodie-alignment-laag (alignment_detectors.py, --prosody-alignment)](#prosodie-alignment-laag-alignment_detectorspy---prosody-alignment)
  - [prosody_syntax_alignment](#prosody_syntax_alignment)
- [Gapping-parallelisme-laag (gapping_parallelism_detectors.py, --ellipsis-parallelism)](#gapping-parallelisme-laag-gapping_parallelism_detectorspy---ellipsis-parallelism)
  - [ellipsis_parallelism_coupling](#ellipsis_parallelism_coupling)
  - [prose_parallel_gapping](#prose_parallel_gapping)
- [Subphrase-laag (subphrase_detectors.py, --subphrase)](#subphrase-laag-subphrase_detectorspy---subphrase)
  - [np_coordination_depth](#np_coordination_depth)
  - [attributive_stacking](#attributive_stacking)

---

## Vlakke detectoren (standaard pipeline)

### language_switch
language_switch telt per woord de BHSA-feature `language` binnen één bijbelboek en signaleert een minderheidstaal die minstens 2 keer voorkomt (één los token wordt als leenwoord weggefilterd). Dat kan wijzen op een bewuste code-switch (Aramees binnen Hebreeuws zoals Gen 31:47, Jer 10:11, Daniël/Ezra), een citaat uit een vreemde traditie of een redactionele naad.

### qere_ketiv
qere_ketiv zoekt woorden waar de BHSA-feature `qere`/`qere_utf8` aanwezig is, dus waar de leestraditie (qere) afwijkt van het geschreven woord (ketiv). Dat kan wijzen op tekstkritisch relevante varianten, masoretische correcties of theologisch gevoelige lezingen.

### fronting
fronting telt frasen met BHSA-feature `function=Frnt` (vooropgeplaatste constituenten) tegen de corpusfrequentie van Frnt, en splitst de treffers via `_frnt_subtype` in frame-setting (prep-kop, `sp=prep`), pronominale topic (`sp` in PRON_SP) en nominale topic (`sp` in HEAD_SP). Dat kan wijzen op nadruk, topicalisatie of contrastfocus.

### negation
negation telt woorden met BHSA-feature `sp=nega` tegen het corpus-aandeel van negatie en rapporteert dispersie en clusters. Dat kan wijzen op een tekst die zich bepaalt door wat níét geldt: verbod, ontkenning, polemiek of apofatische theologie.

### construct_chain
construct_chain telt via `common.construct_runs` opeenvolgende woorden met BHSA-feature `st=c` (status constructus) binnen één frase en toetst de lengteverdeling (`chain_hist`) tegen het corpus, met focus op ketens van lengte ≥2 die oververtegenwoordigd zijn. Dat kan wijzen op nominale verdichting of een verheven, liturgische stijl (X-van-Y-van-Z).

### categorical
categorical is de generieke detector. Voor elk geannoteerd `(object_type, feature)`-paar in OBJECT_FEATURES (bv. `phrase function`, `word sp`, `clause typ`) toetst hij elke voldoende frequente waarde met een G²-test tegen de corpusverdeling, met aparte over- en under-drempels. Dat kan wijzen op een opvallend grammaticaal profiel van de passage (veel van een bepaald frasetype, woordsoort of clausetype).

### rare_lexeme
rare_lexeme zoekt inhoudswoorden (`sp` in subs/verb/adjv/nmpr) met een lage corpusfrequentie (`freq_lex` ≤ max_freq) en scoort ze op zeldzaamheid via log(corpus/freq) plus een rangbonus uit `rank_lex`. Dat kan wijzen op een hapax, een gemarkeerd of poëtisch woord, een bewuste lexicale keuze of een leenwoord.

### valence
valence telt per verbale clause (`kind=VC`) het aantal complementen uit COMPLEMENT_FUNCS (`Objc`, `Cmpl`, `Loca`, `Time`, `Adju`) en toetst die complement-histogram tegen het corpus (`complement_hist`). Dat kan wijzen op intransitief of absoluut gebruik (0 complementen), of juist op zwaar geladen, descriptief dichte clauses (veel complementen).

### valence_object_drop
valence_object_drop zoekt werkwoorden die corpusbreed vaak een object hebben (`verb_obj_rate` ≥ 0,5), maar in deze passage zonder expliciet BHSA-`Objc` staan. Dat kan wijzen op focus, ellips of absoluut gebruik.

### clause_embedding
clause_embedding meet inbeddingsdiepte via de BHSA-feature `tab` op clause_atoms (histogram getoetst tegen `tab_hist`) en daarnaast het aandeel ondergeschikte clauses (`rela` ≠ Main/NA) tegen de corpus-`dependent_ratio`. Dat kan wijzen op een hypotactische, betogende of juridische stijl (diep ingebed) tegenover paratactische verhaalketens (ondiep).

### parallelism
parallelism zoekt aangrenzende clause_atoms met gelijk functie-skelet (multiset van BHSA-`function`-waarden), toetst het aandeel parallelle paren tegen de corpus- of poëzie-genre-rate, en labelt elk paar als `ordered_match`, `reversed_match` (chiastisch) of set-only, plus lexicale overlap. Dat kan wijzen op poëtisch parallellisme, opzettelijke structuur of een liturgisch ritme.

### fronting_contrast_pair
fronting_contrast_pair zoekt twee aangrenzende clauses die elk openen met een `function=Frnt`-frase met verschillend kop-lexeem maar gelijke functie-multiset: het klassieke X-qatal // Y-qatal contrastpaar ('JHWH gaf, JHWH nam'). Dat kan wijzen op contrastfocus, antithese of een bewust opgebouwde tegenstelling.

### chiastic_colon_pair
chiastic_colon_pair zoekt aangrenzende clause_atoms waarvan het functie-skelet gespiegeld is (A-B // B-A, `reversed_match`) en vereist er minstens 2 binnen het vers; het rapporteert ook de lexicale overlap per paar. Dat kan wijzen op chiastische cola, poëtische omkering of een opzettelijk gespiegelde structuur.

### quotation_introducers
quotation_introducers zoekt clauses met directe rede (BHSA-`txt` bevat 'Q') en traceert via de `mother`-relatie het inleidende werkwoord; werkwoorden buiten de SPEECH_LEX-set (>MR, DBR, QR>, NGD, <NH, C>L, YWH, BRK) gelden als opvallend, en het aandeel spreekwerkwoorden wordt tegen het corpus getoetst. Dat kan wijzen op een ongebruikelijke speech-introductie, een gemarkeerde discourse-overgang of een stilistische keuze.

### participant_density
participant_density telt persoonsverwijzing (woorden met suffix `prs_ps` p1/p2/p3 plus zelfstandige pronomina `sp` in PRON_SP) tegen de corpus-`suffix_rate` + `pronoun_rate`, met aparte subclaims voor suffixen en pronomina. Dat kan wijzen op een relationeel of aansprekend register (gebed, dialoog) bij hoge dichtheid, of op descriptieve tekst bij lage.

### person_shift
person_shift bouwt een grammaticaal-persoonsprofiel uit `ps` en `prs_ps` (p1/p2/p3), toetst het tegen de corpus-`person_share`, en detecteert op clauseniveau 'naden' waar de dominante persoon omklapt (alleen bij ≥2 lokale markeringen per kant). Dat kan wijzen op directe aanspraak (p1/p2 overheersend: gebed, rede), afstandelijk verhaal (p3 overheersend) of een retorische wisseling van perspectief.

### discourse_particle
discourse_particle telt partikels uit de PARTICLE_LEX-set (o.a. HNH 'zie!', N> 'toch', GM 'ook', RQ 'slechts', <TH 'nu', PN 'opdat niet') per lexeem tegen hun corpusfrequentie (`freq_lex`), met dispersie en clusters. Dat kan wijzen op een retorisch stuurmiddel: presentatie, nadruk, beperking of deixis.

### question_profile
question_profile meet vraagdichtheid via frasen met `function=Ques`, interrogatieve woorden (`ls=ques`) en interrogatieve pronomina (`sp` prin/inrg), en toetst het aandeel Ques-frasen tegen het corpus; exclamatief מַה (מַה־טּוֹב 'hoe goed!') wordt expliciet uitgesloten via een adjacente-`adjv`-check. Dat kan wijzen op een polemisch of didactisch register, of een verhoorscène.

### leitwort
leitwort zoekt inhoudswoorden (`sp` in CONTENT_SP, godsnamen uitgesloten) waarvan een lexeem (`lex`) in de passage vaker voorkomt (≥ min_count) dan zijn corpusfrequentie (`freq_lex`) voorspelt, met G²-toets, dispersie en clusters. Dat kan wijzen op een Leitwort: een sleutelwoord dat de passage thematisch dooradert of structureert.

### divine_names
divine_names telt godsbenoemingen uit de DIVINE_LEX-set (JHWH, >LHJM, >L, >DNJ, CDJ, >LWH, >LH) tegen de corpus-dichtheid en toetst daarnaast welke naam binnen de godsnamen domineert; per occurrence krijgt het contextlabels mee (`function`, `det`, `domain`). Dat kan wijzen op een theologisch accent, een bronnenkritisch profiel (JHWH tegenover Elohim) of een liturgische lading.

---

## Expansie / opt-in detectoren (`anomaly_engine.py`)

### synoptic_divergence
synoptic_divergence vergelijkt deze passage alleen met haar OT-parallel(en), gevonden via de ETCBC/parallels `crossref`-edge op clauseniveau (bv. 2 Sam 24 tegenover 1 Kron 21), en rapporteert lexemen die enkel hier of daar staan plus verschillen in godsnamen. Het toetst dus niet tegen het corpus. Dat kan wijzen op redactiesporen, een bewuste herschrijving of theologische bijstelling tussen parallelteksten.

### topological_hapax
topological_hapax zoekt clauses met een corpus-zeldzame structurele signatuur (clausetype plus geordende frasefuncties, via `clause_signature`), door de in de baseline gebakken `sig_freq`-tabel te lezen en signaturen met frequentie ≤ max_freq te selecteren. Dat kan wijzen op syntactische innovatie: een grammaticale bouw die het OT bijna nooit gebruikt, kandidaat voor poëtische of theologische markering.

### deep_parallelism
deep_parallelism zoekt paren niet-aangrenzende clauses waarvan de lexeem-vrije structuurboom (clausetype, dan frasefuncties, dan woord-pdp/sp) bijna identiek is (Tree Edit Distance ≤ max_ted via `apted`) terwijl hun inhoudswoordenschat nauwelijks overlapt (≤ 0,34). Dat kan wijzen op een verhuld of chiastisch parallel dat de oppervlakkige `parallelism`-detector (aangrenzend, functie-skelet) mist.

### phonological_cluster
phonological_cluster zoekt dichte runs van inhoudswoorden waarvan de lexeem-root (`root_skeleton`, niet de oppervlaktevorm) met dezelfde beginconsonant begint, gevonden via dezelfde 1D-dichtheidsclustering als lexicale dispersie. Dat kan wijzen op alliteratie, klankwerking of poëtische klankbinding.

### root_play
root_play zoekt twee of meer verschillende lexemen die dezelfde triliterale root (`root_skeleton`) delen en dicht bij elkaar staan (1D-cluster, eps=15). Dit is paronomasie of woordspel, onderscheiden van leitwort dat hetzelfde lexeem telt. Dat kan wijzen op een bewust woordspel, een etymologische toespeling of een klankrijm tussen verwante woorden.

### infinitive_absolute
infinitive_absolute zoekt binnen één clause een infinitivus absolutus (`vt=infa`) naast een finiet werkwoord (`vt` in FINITE_VT) van dezelfde root (`root_skeleton`): de klassieke paronomastische, tautologische nadrukconstructie ('sterven zult gij sterven', Gen 2:17). Dat kan wijzen op emfase, zekerheid of intensivering.

### casus_pendens
casus_pendens zoekt extrapositie via BHSA-frasefuncties: een element apart gezet (`function=Frnt`) en/of later hervat door een resumptief element (`rela=Resu`), waarbij de resumptie de harde aanwijzing is; het levert één geaggregeerde finding met de resumpties. Dat kan wijzen op een gemarkeerde, nadrukkelijke of opsommende constructie waarbij de tekst een element vooropplaatst en hervat.

### dynamic_query
dynamic_query voert door een LLM voorgestelde, geneste Text-Fabric-zoektemplates uit en scoort ze met exact dezelfde gestratificeerde statistiek en FDR als de vaste detectoren; elke poging (hit, no-hit, fout, timeout, gecapt) wordt geaudit en het meet-plafond volgt de gedeclareerde `feature_tier` (anders backstop Middel). Dat kan wijzen op een passage-specifiek patroon dat de vaste ondiepe detectoren niet vooraf dekken. De uitvoering en statistiek zijn exact, maar de keuze wát te zoeken is exploratief (`provenance=llm_hypothesis`, nooit meegeteld in de deterministische minimumvloer).

Hetzelfde finding-type draagt ook de gepreregistreerde querybibliotheek (`--query-library`, `references/query_library.json`). Daar is `feature_tier` verplicht, kan een query een genre/boek-`scope` dragen, en levert elke mislukte of lege scope-gematchte query een stub-finding (p=1,0; surprise 0) zodat de FDR-noemer volledig blijft. Bibliotheek-findings krijgen `provenance=preregistered_library`, blijven exploratief en vereisen dezelfde disclosure in het rapport.

---

## Meta / compositorische laag (`meta_detectors.py`, `--composite`)

Tweede-orde detectoren die lagere-orde signalen consumeren.

### narrative_arc
narrative_arc meet de dichtheidstrajectorie van drie fasemarkeerders over de begin-, midden- en eind-derden van de perikoop: nominale en adjectivale zinnen (clause `typ` NmCl/AjCl als expositie), wayyiqtol-werkvormen (`vt=wayq` als handeling) en imperatief- of 2e-persoonsvormen (`vt=impv` of `ps=p2` als appel). Per actieve marker toetst het de niet-uniforme spreiding over de drie segmenten met een 3-cel goodness-of-fit G²-toets, sommeert die tot een chi-kwadraat en vuurt alleen bij p<0,005 met ≥6 tellingen per derde. Dat kan wijzen op een expositie-handeling-appel-opbouw, een homiletische boog of een bewuste compositorische gradiënt.

### divine_agency
divine_agency meet of een Godsnaam (lexeem in DIVINE_LEX) vaker grammaticaal Subject is in de eerste tegenover de tweede helft van de perikoop, door per voorkomen te checken of de omvattende phrase `function=Subj` draagt (agens) tegenover Objc/Cmpl/Adju (complement); de verschuiving in dat agens-aandeel wordt getoetst met g2_one_sample tegen het perikoopbrede aandeel als referentie. Dat kan wijzen op een homiletische beweging van een handelende naar een aangesproken of ondergane God (of omgekeerd), een focusverschuiving of een structurele tweedeling.

### rhetorical_pivot
rhetorical_pivot zoekt clause-naden waar ≥2 van vijf formele signalen samenvallen op dezelfde naad: een persoonswissel (verschil in `ps` tussen opeenvolgende clause-atoms), een clausetypewissel (verschil in `typ`), vooropplaatsing (`function=Frnt`), een discourse-partikel (lexeem in PARTICLE_LEX) en een citaat-onset (lexeem in SPEECH_LEX). De samenval wordt getoetst tegen een exact onafhankelijkheidsmodel binnen de perikoop met g2_one_sample, gegate door obs>exp en een gekalibreerde min_g2-drempel. Dat kan wijzen op een retorisch scharnierpunt, een structurele naad of een tekstgrens.

### pivot_plus
pivot_plus zoekt hetzelfde als rhetorical_pivot maar met een zesde signaal: een vraag- of disputatie-onset, waarbij de clause-atom na de naad opent met een interrogatief (`ls=ques` of een lexeem uit QUESTION_LEX). Het vuurt waar ≥2 van die zes signalen op één clause-naad samenvallen, getoetst tegen hetzelfde exacte binnen-perikoop-onafhankelijkheidsmodel met g2_one_sample en obs>exp. Dat kan wijzen op een Maleachi-achtige argumentnaad (een geciteerde tegenwerping bij een wending), een disputatie-scharnier of een retorische omslag.

### composite_structure
composite_structure is een PDL-gedreven familie (geladen uit references/patterns.json) die zeven compositorische patronen onder één finding-type emitteert via het `pattern`-veld. **inclusio** (`boundary_lex_repeat`) zoekt een inhoudslexeem (`sp` in CONTENT_SP) dat zowel het eerste als het laatste vers opent en sluit. **chiasme** (`mirror_function_skeleton`) zoekt clausefunctie-skeletten (clause_signature over `function`) die rond het midden gespiegeld zijn (A B B' A'), lexeemvrij. **climax** (`monotone_intensity`) meet of de versdichtheid (woorden per vers) monotoon stijgt over begin, midden en eind met ratio ≥1,3. **hendiadys** (`coordinate_synonym_pair`) zoekt twee inhoudswoorden van gelijke woordsoort verbonden door een nevenschikkend voegwoord (X-`sp=conj`-Y). **trapherhaling** (`chained_tail_head_repeat`) zoekt clauses waarvan het laatste inhoudslexeem het eerste inhoudslexeem van de volgende clause is (anadiplosis); het is volgordegevoelig en moet onder shuffle instorten. **refrein** (`recurring_refrain`) zoekt een inhoudslexeem-bigram dat in drie of meer verzen terugkeert, met een bonus voor regelmatige tussenafstand. **panelparallellie** (`parallel_panel`) zoekt een clauseskeletreeks van de eerste helft die in dezelfde volgorde terugkeert in de tweede helft (A B C // A' B' C'), de niet-gespiegelde tegenhanger van het chiasme, met een gardering tegen uniforme wayyiqtol-ketens. Een patroon kan een optioneel `genre`-veld dragen (gevalideerd tegen common.GENRES): het draait dan alleen op passages uit boeken van dat genre. Dat kan wijzen op bewuste omlijsting, concentrische compositie, climaxopbouw, kettingcompositie, refreinwerking, tweeluikcompositie of een woordpaar.

---

## Morfosyntactische laag (`morphosyntax_detectors.py`, `--morphosyntax`)

### ethical_dative_density
ethical_dative_density zoekt clauses waar een lamed-prepositie (`sp=prep`, lex L) een pronominaal suffix draagt waarvan `prs_ps`/`prs_nu`/`prs_gn` overeenkomt met het subject of de persoonsvorm van de clause: de reflexieve of ethische datief, 'voor zichzelf'. Dat kan wijzen op subjectieve betrokkenheid, zelfgerichtheid of een markeerder van persoonlijk belang.

### redundant_pronoun_emphasis
redundant_pronoun_emphasis zoekt clauses met een zelfstandig subjectspronomen (`sp=prps` in een `function=Subj`-frase) naast een finiet qatal/yiqtol-predicaat (`vt=perf|impf`) dat dezelfde persoon (`ps`/`nu`/`gn`) al encodeert. Dat kan wijzen op contrast, emfase of topicmarkering.

### cleft_pronoun_focus
cleft_pronoun_focus zoekt nominale of copulaire clauses (`typ` NmCl/AjCl/xQtX/WxQX) met minstens twee nominale frasen waarin een 3e-persoons pronomen (`sp=prps ps=p3` of lex HW>/HJ>) als copula of focusscharnier optreedt. Dat kan wijzen op cleft-achtige focus of een identificerende nadruk op één van de nominale delen.

### adjunct_fronting_pressure
adjunct_fronting_pressure zoekt frasen met `function` Adju/Cmpl/Time/Loca/Modi die vóór de predicaatsfrase staan (positie-index lager dan de Pred-index in de frasevolgorde). Dat kan wijzen op vooropplaatsing van setting, middel of plaats, en daarmee op pragmatische focus.

### tail_modification_pressure
tail_modification_pressure zoekt clauses waar het predicaat een pronominaal objectsuffix draagt (`prs_ps` p1/p2/p3 op een woord in de Pred-frase) en daarna nog een nominale Objc/Cmpl-frase (`sp=subs|nmpr`) volgt die hetzelfde object expliciteert. Dat kan wijzen op afterthought, right-dislocation of staartmodificatie.

### circumstantial_slowdown
circumstantial_slowdown zoekt een narratieve wayyiqtol-clause (`typ` Way* of predicaat `vt=wayq`) gevolgd door 1-4 nominale of participiale circumstantiële clauses (`typ` NmCl/AjCl/Ptcp/CPen, `kind=NC` of predicaat `vt=ptca|ptcp`) en weer gesloten door een narratieve wayyiqtol-clause. Dat kan wijzen op narratieve vertraging, spanningsopbouw of een ingelaste achtergrondscène.

### historical_present_participles
historical_present_participles zoekt clauses met een actief participium als hoofdpredicaat (`vt=ptca|ptcp`) waarvan minstens één buur binnen ±2 clauses een narratieve clause (wayq/WayX) is. Dat kan wijzen op een historisch praesens, het presenteren van de scène als lopende toestand of verhoogde levendigheid.

### poetic_aspect_shift
poetic_aspect_shift zoekt, alleen binnen poëtische boeken (Psalmen, Job, Spreuken, Hooglied, Klaagliederen), aangrenzende finiete predicaten die wisselen tussen qatal en yiqtol (`vt=perf↔impf`). Dat kan wijzen op aspectuele perspectiefwisseling, tijdloos of meervoudig perspectief in de poëzie.

### spatiotemporal_dislocation
spatiotemporal_dislocation zoekt clauses met een HJH[-predicaat (lex HJH[) waarbij een tijd- of plaatsbepaling (`function` Time/Loca/Adju/Cmpl) vóór de predicaatspositie staat: het 'en het geschiedde in/op/te…'-patroon. Dat kan wijzen op een annalistische opening of een ruimtetijd-gefragmenteerde sceneschikking.

### weqatal_procedural_chain
weqatal_procedural_chain zoekt ketens van ≥3 opeenvolgende weqatal-clauses (`typ` WQt*/Wqtl*/WQtX, of een perfectum-predicaat `vt=perf` met een waw-conjunctie als kopwoord). Dat kan wijzen op een procedurele instructie, herhaalde handeling of langetermijnhandeling (perfectum consecutivum).

### epistemic_doubt_zone
epistemic_doubt_zone zoekt clusters van modale partikels van onzekerheid, hoop of afwending (lex >WLJ/>WLY/PN/LWW/LW: 'misschien', 'opdat niet', 'och') die in de woordruimte dicht bijeen liggen (1D-clustering, eps=25). Dat kan wijzen op epistemische druk, psychologische spanning of twijfel in de passage.

### volitive_clash
volitive_clash zoekt aangrenzende redeclauses (beide `txt~Q`) die wisselen tussen een directe imperatief (`vt=impv`) en een verzachte of indirecte volitief (jussief/cohortatief-proxy via `vt=impf ps=p1|p3`, of het partikel נא lex N>). Dat kan wijzen op statusverschil, beleefdheidswisseling of een toonverandering in de aanspraak.

### agentless_niphal
agentless_niphal zoekt clauses met een finiet niphal-predicaat (`vs=nif`, `vt` in perf/impf/wayq/impv) zónder expliciete `function=Subj`-frase: de agensloze passief of medium ('het werd gedaan'). Dat kan wijzen op verborgen of goddelijke agency ('divine passive') of een bewust ongenoemde dader.

### stem_contrast
stem_contrast zoekt twee of meer werkwoordsvormen van één consonantale stam (`root_skeleton` van `lex`) die dicht bijeen (1D-cluster, eps=15) in verschillende binyanim (`vs`) staan. Dat kan wijzen op voice-spel en een agens-patiens-omkering op één stam (wie sloeg, wordt geslagen).

### hitpael_speech
hitpael_speech zoekt hitpael-werkwoorden (`sp=verb vs=hit`) binnen directe rede (clause met `txt~Q`). Dat kan wijzen op reflexief of iteratief zelf-betrokken handelen binnen een aanspraak (gebed, eed, zelfaansporing).

### paragogic_nun
paragogic_nun zoekt lange yiqtol-vormen met paragogische of energische nun (`sp=verb vt=impf uvf=N`, de yiqtəlûn-uitgang): een afgeleide morfologie die geen vlakke detector ziet omdat `uvf` niet in OBJECT_FEATURES zit. Dat kan wijzen op een archaïsch, plechtig of pausaal-emfatisch register.

### volitive_chain
volitive_chain zoekt ketens van ≥3 opeenvolgende clauses met een volitief predicaat (`vt=impv`, of `vt=impf ps=p1|p3` als cohortatief of jussief gelezen). Dat kan wijzen op een escalerend appel of summons.

### volitive_in_speech
volitive_in_speech zoekt 3e-persoons yiqtol binnen directe rede (clause `txt~Q`, predicaat `vt=impf ps=p3`) als jussief- of decreet-proxy ('het zij…', 'hij moge…'). Dat kan wijzen op een decreet- of bevelstem, en bij een goddelijke spreker op een goddelijk decreet.

### nominal_clause_order
nominal_clause_order zoekt de interne frasevolgorde van verbloze clauses (`typ` NmCl/AjCl): predicaat-voor-subject (PreC<Subj) tegenover subject-voor-predicaat (Subj<PreC), gemeten via de `function`-volgorde van de Subj- en PreC-frasen. Dat kan wijzen op het onderscheid tussen een identificerende uitspraak ('JHWH is God') en een classificerende of beschrijvende uitspraak.

### extraposition_referent
extraposition_referent zoekt casus pendens (`rela=Resu`-frase) waarvan de clause een Godsnaam (DIVINE_LEX in `lex`) of een kernpronomen (`sp=prps|prde`) bevat: een geladen extrapositie ('Hij, Hij is mijn rots'). Dat kan wijzen op nadrukkelijke foregrounding van de hoofdactant of een theologisch geladen topicalisatie.

### asyndeton_cluster
asyndeton_cluster zoekt ketens van ≥3 opeenvolgende clauses zonder verbindend kop-voegwoord (eerste woord `sp≠conj` en clause niet `rela=Coor`). Dat kan wijzen op staccato-ritme, schok of urgentie.

### ki_profile
ki_profile zoekt het partikel כִּי (lex KJ) en splitst het naar syntactische functie via `rela` en de aanwezigheid van een spreekwerkwoord (SPEECH_LEX): recitatief of object ('dat', bij `rela=Objc` of na een spreekwerkwoord), temporeel of conditioneel ('wanneer/als', bij `rela=Adju|Cmpl`), of causaal of grond ('want/omdat'). Dat kan wijzen op de argumentatieve grond van een betoog (homiletisch raakt de causale 'want' de kern).

### nested_speech
nested_speech zoekt clauses met een `txt`-discourse-string die ≥2 'Q'-niveaus draagt (bv. NQQ): directe rede binnen directe rede. Dat kan wijzen op een stem geciteerd binnen een stem (God geciteerd in mensenrede, een eed die andermans woorden aanhaalt).

### ithou_register
ithou_register meet de onbalans tussen 1e- en 2e-persoons pronominale suffixen (`prs_ps=p1` tegenover `p2`) over de hele passage, en vuurt bij voldoende totaal (≥8) en sterke scheefheid (≥0,70). Dat kan wijzen op een relationeel of aansprekend register (gebed, klacht, intieme aanspraak).

### suffix_referent_shift
suffix_referent_shift zoekt hetzelfde nomenlexeem (`sp=subs|nmpr`, gelijke `lex`) dat binnen een venster (1D-cluster, eps=60) terugkeert met een wisselende suffix-persoon (`prs_ps` p1, dan p2, dan p3: 'mijn', 'uw', 'zijn volk'). Dat kan wijzen op verschuivend eigenaarschap of een veranderende relatie tot de referent.

### agreement_discord
agreement_discord zoekt verbale clauses (`kind=VC`) waarin het getal (`nu`) van het werkwoord afwijkt van de subject-kop (`sp=subs|nmpr|adjv`): constructio ad sensum, met plurale-tantum-godsnamen e.d. (PLURAL_FORM_SINGULAR) uitgefilterd. Dat kan wijzen op grammatica die buigt voor de zin: een collectief enkelvoud met meervoudig werkwoord of omgekeerd.

### disputation_QA
disputation_QA zoekt de Maleachi-disputatieconfiguratie: een geciteerde spreek-onset (een SPEECH_LEX-spreekwerkwoord in `txt~Q`, de aangehaalde tegenstem 'jullie zeggen') die binnen ≤3 clauses gevolgd wordt door een vraagmarker (`ls=ques` of een vraaglexeem uit QUESTION_LEX), ook in rede. Dat kan wijzen op een twistgesprek met citaat-en-weerlegging.

### female_suffix_cluster
female_suffix_cluster zoekt lokale clustering (1D, eps=40, ≥4 punten) van vrouwelijke vormen of suffixen (`gn=f` of `prs_gn=f`) in de slotruimte. Dat kan wijzen op een vrouwelijk-gecentreerde scène of aanspraak.

### localized_participant_pressure
localized_participant_pressure zoekt een lokale piek in pronominale-referentiedichtheid: een schuivend woordvenster (win=25) waarin het aandeel pronominale suffixen (`prs_ps` p1/p2/p3) of zelfstandige pronomina (PRON_SP) een drempel boven het perikoopgemiddelde (max(0,40, 1,6× globaal) en ≥6 hits) overschrijdt. Dat kan wijzen op geconcentreerde participant-interactie (confrontatie, intimiteit).

### left_dislocation_resumption_plus
left_dislocation_resumption_plus zoekt clauses met een vooropgeplaatste nominale constituent (`function=Frnt`, `sp=subs|nmpr`) en elders in dezelfde clause een hervattend pronomen of suffix (`sp=prps|prde` of `prs_ps` p1/p2/p3), maar zónder expliciete `rela=Resu`-tag (die de vaste casus_pendens-detector al dekt). Dat kan wijzen op ongetagde dislocatie of topicalisatie.

### imperative_promise_pair
imperative_promise_pair zoekt een imperatief-clause (`vt=impv`) onmiddellijk gevolgd door een 1e- of 3e-persoons yiqtol/wayyiqtol-clause (`vt=impf|wayq ps=p1|p3`): de 'doe X, dan Y'-configuratie (bevel, dan belofte of respons). Dat kan wijzen op een conditionele belofte of verzekering na een bevel ('keer terug tot Mij, dan keer Ik terug').

### kinship_register_chain
kinship_register_chain zoekt constructusketens (`st=c`-runs plus nucleus, ≥2 leden) waarin minstens één lid een verwantschaps- of titellexeem is (lexicons.json 'kinship'/'title'-bucket op `lex`). Dat kan wijzen op een relationeel of hiërarchisch register ('de losser van mijn man', 'de bode van het verbond').

### appositional_title_ladder
appositional_title_ladder zoekt clauses met ≥2 appositionele nominale frasen (`rela=Appo` met nominale kop `sp=subs|nmpr`) op één referent: een stapel titels of epitheta ('de Heer … de bode van het verbond'). Dat kan wijzen op een opbouwende titel-ladder of retorische verzwaring van één actant.

### speech_safety_zone
speech_safety_zone zoekt clauses in directe rede (`txt~Q`) die zowel een 2e-persoons aanspraak bevatten (`ps=p2` of `prs_ps=p2`) als een zegen- of verbod/negatie-element (`sp=nega`, of een lexeem uit de 'blessing'/'prohibition'-buckets). Dat kan wijzen op een beschermende of gastvrije zone ('raap niet elders … gezegend zijt gij', Ruth 2).

### modal_infabs
modal_infabs zoekt de infinitivus absolutus (`vt=infa`) en typeert die naar context: bevestigend of paronomastisch (een gelijkwortelige finiete vorm `vt` in FINITE_VT met dezelfde `root_skeleton` in de clause), imperativisch of modaal in rede (`txt~Q`), of absoluut of narratief. Dat kan wijzen op een intensiverende ('voorzeker/geheel'), bevelende of modale functie van de infinitief.

### name_rootplay_focus
name_rootplay_focus zoekt root-woordspel (cluster van ≥2 verschillende lexemen met dezelfde consonantale `root_skeleton`, eps=15, op `sp=subs|verb|adjv|nmpr`) waarvan minstens één lid een eigennaam of gentilicum (`nametype` gens/pers/topo) of een identiteits- of vreemdelingschapslexeem ('identity'-bucket) is, bv. Ruth 2:10 rond נכר/נכריה. Dat kan wijzen op identiteit, herkenning of buitensluiting die taalvormig wordt.

### speech_action_misalignment
speech_action_misalignment zoekt een imperatief-bevel in directe rede (`txt~Q`, `vt=impv`, met aangrenzende same-verse imperatieven als één bevelseenheid) en classificeert de respons in een venster van ≤5 volgende clauses via predicaat-roots, subjectfrasen en clausevolgorde als absent, delayed, compliant, transferred of inverted (motion-roots QWM/HLK/QR> tegenover BRX/JRD/NWS). Dat kan wijzen op gehoorzaamheid of ongehoorzaamheid, uitstel, omkering of overdracht van een bevel: een Jona-achtige scène.

### spatial_kinetic_axis
spatial_kinetic_axis zoekt bewegingswerkwoorden (root in MOTION_DIRECTION: QWM/<LH/JRD/HLK/BW>/BRX/JY>/CWB/NWS) in predicaatsfrasen en ordent ze als een ruimtelijke as met richting, grammaticaal subject (`function=Subj`) en lokale complementen (`function` Cmpl/Loca/Adju/Objc), inclusief inversie-spans (QWM gevolgd door JRD/BRX/NWS). Dat kan wijzen op een betekenisvolle bewegingsketen (wie beweegt, waarheen, naar welk complement) boven losse leitwort-tellingen.

### vocative_imperative_bundle
vocative_imperative_bundle zoekt clauses met een expliciete vocatieffrase (`function=Voct`) waarbij een imperatief predicaat (`vt=impv`) in dezelfde of de direct aangrenzende clause staat (beide richtingen): de aangesprokene wordt genoemd én bevolen. ETCBC codeert de vocatief als eigen (meestal werkwoordloze) clause; corpusbreed komt Voct+imperatief binnen één clause nooit voor, dus de adjacentie draagt het signaal (370 voorwaartse paren corpusbreed). De corpusrate komt schema-gedreven uit de baseline (v11), zodat de finding echte G²/q/robustness krijgt; de vooraf geregistreerde TF-query is `vocative_then_imperative` in `references/query_library.json` (voorwaartse variant, `c1 <: c2`). Dat kan wijzen op directe aanspraak met appel, gebedstaal of profetisch vermaan.

### disjunctive_waw_x_onset
disjunctive_waw_x_onset zoekt clauses die openen met een conjunctie (`sp=conj` als eerste woord) terwijl de Subj-frase vóór de Pred-frase staat (waw-X-volgorde): de klassieke disjunctieve opening die een wayyiqtol-keten onderbreekt. De corpusrate komt uit de baseline (v11); de vooraf geregistreerde TF-query is `disjunctive_waw_x_clause` in `references/query_library.json`. Het patroon zit binnen de clause en is dus niet gevoelig voor clausevolgorde; de `random`-fire-rate uit calibrate.py is de negatieve controle. Dat kan wijzen op contrast, achtergrond, simultaneïteit of een scènewissel.

### negative_existential_bundle
negative_existential_bundle zoekt clauses met het negatieve existentieel אין (`lex=>JN/`) gevolgd binnen dezelfde clause door een participium (`vt=ptca|ptcp`): de ontkende duratief, er-is-niemand-die-X-doet. De corpusrate komt uit de baseline (v11). Dat kan wijzen op een leegte- of isolementsmotief, een klacht of een ontkende toestand die voortduurt.

---

## Corpus-relationele laag (`relational_detectors.py`, `--relational`)

### collexeme_anomaly
collexeme_anomaly meet de collostructionele associatie (Stefanowitsch-Gries) via een 2×2 log-likelihood G² tussen een constructiesleuf en het daarin gerealiseerde lexeem, corpusbreed over twee slots: werkwoord-Pred-lex × Objc-head-lex (`clause kind=VC`, `phrase function=Pred`/`Objc`, `sp=verb`, `lex`) en nomen-regens × rectum (een `st=c` woord direct gevolgd door het volgende woord binnen dezelfde frase). Per stratum vlagt G² (min_g2=10,83, ~p<0,001) of de collocatie corpusbreed sterk gebonden (`bound`) dan wel afgestoten (`repelled`) is tegenover toeval. Dat kan wijzen op een idiomatische of vaste verbinding, een opvallend zeldzaam-bij-elkaar woordpaar, of een bewuste stilistische keuze.

### transition_anomaly
transition_anomaly meet aangrenzende clausetype-bigrammen (`typ` op opeenvolgende clauses) als Markov-overgang en toetst de geobserveerde frequentie van typ_a naar typ_b tegen de corpus-overgangskans P(typ_b | typ_a) met een one-sample G² (min_g2=10,0, min_obs=2), gelabeld `over` of `under`. Het is order-gevoelig: een shuffle die de adjacentie breekt laat de finding wegvallen. Dat kan wijzen op een afwijkend discourse-ritme, een opvallende narratieve cadans of een genre-effect in de afwisseling van clausetypen.

### distribution_shape
distribution_shape meet de vorm van de volledige feature-verdeling van een passage met een multi-cel goodness-of-fit G² (df=k−1) tegen de corpusproporties, over vier verdelingen: clausetype (`clause typ`), werkwoordstijd (`word vt`), frasefunctie (`phrase function`) en de godsnaam-verdeling (`word lex` ∈ DIVINE_LEX), met genormaliseerde Shannon-entropie (H) en Gini (G) als duale lezing. Het vuurt juist wanneer de hele vorm afwijkt (afgevlakt of ingeklapt) terwijl geen enkele losse cel significant is, iets wat categorical niet ziet. Dat kan wijzen op een eentonig of juist ongewoon gevarieerd register, een stilistische profilering of een geconcentreerd vocabulaire.

### function_collexeme_anomaly
function_collexeme_anomaly meet de drieweg-collostructie lexeme × frasefunctie × clausetype: hoe vaak vult dít head-lexeem (eerste inhoudswoord van de frase, `common.phrase_head_lex`) díe grammaticale sleuf (`phrase function`) binnen dít clausetype (`clause typ`), corpusbreed? Per stratum toetst een 2×2 G² (min_g2=10,83) de cel tegen de v11-marges (`extra.collostruct.fn`; linkermarge = functie+typ, rechtermarge = lexeem) en labelt haar `bound` of `repelled`. Het is de in README aangekondigde kruising voorbij collexeme_anomaly, dat alleen werkwoord×object en regens×rectum kent. Dat kan wijzen op een vaste formule in een specifieke clause-architectuur, of op een lexeem dat in deze grammaticale omgeving corpusbreed juist vermeden wordt.

### entity_syntactic_role_anomaly
entity_syntactic_role_anomaly meet of een eigennaamklasse (`sp=nmpr` met strikte `nametype` pers/topo/gens) in de passage vaker of juist minder vaak in een gegeven frasefunctie staat (Subj/Objc/Cmpl/...) dan het corpusprofiel van die klasse verwacht (v11-tabel `extra.ner_roles`), getoetst met een one-sample G² per stratum via het standaard `_pref`-pad. BHSA-`nametype` is incompleet gedocumenteerd; dat beperkt de dekking, de getelde cellen zelf zijn harde tags. Dat kan wijzen op persoonsnamen die opvallend vaak lijdend voorwerp zijn, plaatsnamen die als subject optreden, of een passage die haar namen grammaticaal anders inzet dan het corpus.

---

## NER-laag (`ner_detectors.py`, `--ner`, BHSA 2023)

### entity_role_pressure
entity_role_pressure zoekt benoemde entiteiten (uit de BHSA 2023 NER-laag via `common.entity_mentions`: gecompileerde entity-nodes of NER-sheet occurrence-specs, met `nametype` als conservatieve fallback) die via hun frasefunctie (`function` Subj/Objc/Cmpl/Loca/Adju/Frnt) syntactisch zijn geplaatst rond een predicaat-wortel (`sp=verb`, `lex` naar `root_skeleton` in een Pred-frase) uit vooraf gedefinieerde bewegings-, spreek- of respons/druk-wortels. Het labelt entiteiten als subject-driver, bewegingsdoel, locatieve drukknoop of spreekdoel, en signaleert entiteiten die binnen de passage van rol wisselen (≥2 functies). Dat kan wijzen op plot-druk, narratieve agentschap-verschuiving of het inzoomen van een scène op één figuur.

### entity_role_transition
entity_role_transition volgt per entiteit de rolreeks in documentvolgorde en telt agens↔patiens-flips: dezelfde entiteit staat in opeenvolgende rol-dragende vermeldingen eerst als Subj en dan als Objc/Cmpl, of omgekeerd. Het vuurt bij één entiteit met twee of meer flips, of bij twee of meer entiteiten met elk minstens één flip. De rollen zijn formele tags; de lezing dat het om één referent gaat veronderstelt referentidentiteit over mentions (discourse_uncertain). Het signaal is volgordegevoelig: de niet-aaneengesloten `synthetic`-controle in calibrate.py hoort het te laten instorten. Dat kan wijzen op een figuur die van handelend naar ondergaand schuift, een omkering in het plot of een wisselend perspectief.

### entity_copresence
entity_copresence telt entiteitenparen die dezelfde clause delen (terugval: hetzelfde vers) en vuurt wanneer één paar twee of meer clauses deelt; het markeert bovendien exclusieve entiteiten, die alleen samen met één vaste partner voorkomen. De co-presentie is hard geteld; de identiteitsbinding via NER-sheets of `nametype` is de zwakke schakel (semantic_proxy). Dat kan wijzen op een vaste personagecombinatie, een scène die om een duo draait of een figuur die alleen in andermans gezelschap verschijnt.

### entity_speech_action_link
entity_speech_action_link bucket per entiteit de predicaat-wortels van haar rol-dragende vermeldingen op de vaste lexiconlijsten SPEECH_ROOTS en MOTION_ROOTS, gekruist met de rol: spreker (Subj bij spreekwortel), toegesprokene (Objc/Cmpl bij spreekwortel), beweger of bewegingsdoel. Het vuurt op entiteiten met drie of meer events waarvan minstens 80% in één bucket valt: een figuur die alleen toegesproken wordt, alleen spreekt of alleen beweegt. Bucketlidmaatschap is een gecureerde lexiconproxy (semantic_proxy). Dat kan wijzen op een zwijgend personage, een louter sprekende God of een figuur die uitsluitend doelwit van handeling is.

---

## Novelty-familie (`novelty_families.py`, `--novelty-families`)

### deictic_participant_chain
deictic_participant_chain meet per clause welke verwijsvormen aanwezig zijn (naam via `sp=nmpr`/`nametype`, pronomen via PRON_SP, suffix via `prs_ps`, nulsubject via finiet werkwoord met `ps` zonder Subj-frase) en telt de overgangen tussen aangrenzende clauses waar de set verwijsvormen verandert; het rapporteert pas bij ≥3 overgangen en ≥3 verschillende vormtypes. Dat kan wijzen op levendige participant-tracking, perspectiefwisseling of dialoogdynamiek.

### verb_frame_slot_pressure
verb_frame_slot_pressure groepeert per verbale wortel (root-skeleton van het predicaat-`lex`) de gerealiseerde argumentframes (de gesorteerde set niet-predicaatsfunctities Subj/Objc/Cmpl/Loca/Adju... per clause) en markeert wortels met ≥3 voorkomens in ≥2 verschillende frames. Dat kan wijzen op valentieflexibiliteit, betekenisverschuiving of bewust spel met de argumentstructuur van één werkwoord.

### quote_topology
quote_topology brengt de directe-rede-architectuur in kaart via citaatdiepte (aantal "Q" in clause-`txt`), spreekwerkwoorden (predicaat-`lex` in SPEECH_LEX) en vragen (`ls=ques` of vraagwoord), en rapporteert bij ≥3 geciteerde clauses mits er nesting (diepte ≥2), vragen of ≥2 dieptewisselingen zijn. Dat kan wijzen op complexe spreekstructuur, ingebedde citaten of dialogische spanning.

### clause_chain_rhythm
clause_chain_rhythm berekent over de clausetype-reeks (`typ`) de langste gelijkblijvende run en de langste A/B-alternatie, en rapporteert bij een run van ≥4 of een alternatie van ≥5. Dat kan wijzen op een ritmisch patroon, een litanie-effect of strakke afwisseling van clausetypes.

### lexical_register_zone
lexical_register_zone zoekt met een schuifvenster van drie verzen de dichtste lokale zone waar woord-lexemen (`lex`) in samengestelde lexicon-buckets vallen (de buckets uit `references/lexicons.json` plus een vaste motion_spatial-set zoals QWM[/<LH[/HLK[), en rapporteert bij ≥3 treffers met ≥2 buckets of een dominante bucket boven de drempel. Dat kan wijzen op een thematische registerzone, een geconcentreerd motief of semantisch veld.

---

## Predictieve / informatietheoretische laag (`predictive_families.py`, `--predictive-families`)

### syntactic_surprise
syntactic_surprise zoekt clause-overgangen waar het clausetype (`typ`) volgt op een vorig clausetype dat in het lokale voorafgaande venster (max 50 clauses) zelden naar dit type leidt: alleen overgangen waarvan de voorganger ≥3 keer voorkwam en de overgang in ≤15% van die gevallen optrad. Dat kan wijzen op een retorische breuk, een nieuw tekstsegment of een genrewissel.

### forward_predictive_scaffolding
forward_predictive_scaffolding zoekt clauses met een pronominale verwijzing (`sp` in de pronomenklassen of een `prs_ps`-suffix, of een 3e-persoons predicaatwerkwoord zonder Subj-frase) zonder expliciet nomen, die binnen drie clauses gevolgd worden door een clause met een expliciet nomen (`sp=nmpr` of `subs`). Dat kan wijzen op cataforische spanning, waarbij een referent eerst pronominaal wordt opgehouden voor hij benoemd wordt.

### referential_decay_rate
referential_decay_rate zoekt een eigennaam-subject (`sp=nmpr` in de Subj-frase) gevolgd door een aaneengesloten reeks van ≥3 clauses die alleen pronominale, suffix- of nulsubject-verwijzing dragen voordat de volgende eigennaam verschijnt. Dat kan wijzen op participant-focus, waarbij expliciete benoeming mag wegslijten zolang de hoofdpersoon centraal staat.

### semantic_compression_ratio
semantic_compression_ratio meet per clause de verhouding tussen inhoudswoorden (`sp` in subs/verb/adjv/nmpr) en functiewoorden (`sp` in prep/conj/art/nega/prps/prde/prin/intj) en markeert clauses met ≥3 inhoudswoorden waar er geen functiewoorden zijn of de ratio inhoud/functie ≥3 is. Dat kan wijzen op verdichte, lapidaire of poëtische formulering.

### inanimate_subject_fronting
inanimate_subject_fronting zoekt verbale clauses waar een niet-persoonsnomen (`sp=subs`, niet in de menselijke-lexemenlijst zoals >JC/, >CH/, >DM/, MLK/) als Subj-frase vóór het finiete predicaat staat. Dat kan wijzen op personificatie, ontologische verschuiving of nadrukkelijke fronting van een niet-levend onderwerp.

### binyan_escalation_ladder
binyan_escalation_ladder zoekt dezelfde verbale wortel (root-skeleton van `lex`) die binnen een venster van zes clauses in oplopend sterkere stammen (`vs`-rang: qal/nif=1, piel/pual=2, hif/hof=3) terugkeert. Dat kan wijzen op een formele intensiverings- of causativiseringsclimax rond één begrip.

### actant_centrality
actant_centrality bouwt een ruwe graaf door per clause subject-mentions (out-degree via `_subject_key` op `lex` en persoonskenmerken) en object-mentions (in-degree via Objc-frases met `sp` nmpr/subs/prps/prde) te tellen, en markeert een actant met ≥4 totaalmentions waarvan ≥75% aan één kant zit. Dat kan wijzen op een dominante agens of een overheersend lijdend voorwerp.

### lexical_resonance_distance
lexical_resonance_distance zoekt inhoudslexemen (`sp` in CONTENT_SP) die ≥3 keer terugkeren in de woordvolgorde, waarbij de afstanden tussen opeenvolgende voorkomens bijna gelijk zijn (verschil tussen grootste en kleinste gap ≤2). Dat kan wijzen op een ritmisch refrein of bewuste herhaling op vaste intervallen.

### verbal_entanglement
verbal_entanglement zoekt aaneengesloten reeksen (≥4) finiete verbale clauses zonder expliciet nomen, waarin de impliciete subjecten (`_subject_key` op ps/nu/gn) afwisselen zodat er ≥2 verschillende actoren in de run zitten. Dat kan wijzen op een dialoog of een snel wisselende handelingsketen die alleen door werkwoordsmorfologie gedragen wordt.

### hapax_gravity
hapax_gravity zoekt clauses met een clause-signatuur waarin ≥2 verschillende zeldzame inhoudslexemen staan (zeldzaam via `freq_lex` ≤ 5, met `rank_lex` in de voorbeelden). Dat kan wijzen op een lexicaal opvallende, mogelijk archaïsche of unieke passage.

### syntactic_chiasm
syntactic_chiasm zoekt vensters van 5 tot 9 clauses waarvan de reeks clausetypes (`typ`) exact gelijk is aan zijn eigen omgekeerde en ≥2 verschillende types bevat. Dat kan wijzen op een chiastische of ringcompositie op clauseniveau.

### asyndetic_staccato_pressure
asyndetic_staccato_pressure zoekt aaneengesloten reeksen (≥3) verbale clauses waarvan het eerste woord geen voegwoord is (geen `sp=conj`), dus zonder inleidende waw. Dat kan wijzen op een staccato-effect, urgentie of opgestapelde gebeurtenissen zonder verbindende connectoren.

### polysyndetic_slowdown
polysyndetic_slowdown zoekt clauses met veel voegwoorden (≥3 woorden met `sp=conj`, of minstens net zoveel conjuncties als het aantal frases min 1). Dat kan wijzen op een polysyndetisch vertragend effect of opsommende plechtigheid.

### morphological_weight
morphological_weight berekent per woord een gewicht door bound-morfeemsignalen te tellen (`prs_ps`, `prs_nu`, `prs_gn`, `uvf`, `vbe`) en markeert clauses met een gemiddeld gewicht ≥1,8 en ≥1 woord met gewicht 4. Dat kan wijzen op morfologisch zware, suffix-rijke of plechtige formulering.

### clausal_gasp
clausal_gasp telt per clause een inbeddingsscore op uit afhankelijke relaties (`rela` op clause en frases in Adju/Objc/Cmpl/PrAd/RgRc/Resu/Attr) plus infinitivus-constructus-woorden (`vt=infc`), en markeert clauses met score ≥3. Dat kan wijzen op syntactische opstapeling, ingebedde bijzinnen of een cognitief zware constructie.

### actant_obfuscation
actant_obfuscation zoekt verbale clauses zonder Subj-frase waarvan het predicaat een passieve stam heeft (`vs` in nif/pual/hof) of een 3e-persoons meervoud is (`ps=p3`, `nu=pl`). Dat kan wijzen op verhulling van de handelende persoon, een onpersoonlijke of agentloze constructie.

### spatial_euphemism_distance
spatial_euphemism_distance zoekt clauses met een distaal demonstratief of pronomen (lexemen als HW>, HJ>, HMH, HLZ) terwijl er tegelijk een lokale of complement-frase aanwezig is (`function` in Loca/Cmpl/Adju). Dat kan wijzen op afstand nemen, eufemisme of distantie tegenover iets in de directe ruimtelijke context.

### enallage_gender_mismatch
enallage_gender_mismatch zoekt clauses waar het subject-geslacht (`gn` uit de Subj-frase) en het geslacht van het finiete predicaatwerkwoord (`gn` op het werkwoord) beide bekend zijn maar verschillen, bij 3e persoon. Dat kan wijzen op enallage (geslachtswisseling als stijlfiguur) of een opvallende congruentie-uitzondering.

### numeric_discord
numeric_discord zoekt clauses waar subject-getal (`nu` uit Subj) en getal van het finiete werkwoord (`nu`) beide bekend zijn maar verschillen (sg/pl/du), nadat standaard pluralis-vorm-singularia (lexemen als >LHJM/, MJM/, CMJM/) zijn uitgefilterd. Dat kan wijzen op een getalsdiscordantie, een collectief subject of een opvallende congruentiebreuk.

### tam_chaos
tam_chaos schuift een venster van vijf clauses over de tekst en markeert vensters waarin de finiete predicaten (`vt` in perf/impf/wayq/ptca/ptcp) ≥4 keer voorkomen met ≥3 verschillende waarden. Dat kan wijzen op tijdsinstabiliteit, snelle tijd-, aspect- of moduswisselingen of een onrustige verteltijdlijn.

### infabs_climax_overkill
infabs_climax_overkill zoekt clauses waar een infinitivus absolutus (`vt=infa`) dezelfde wortel deelt als een finiet werkwoord (`vt` finiet) in die clause, en weegt de lokale finiete werkwoordsdichtheid in een venster van zeven clauses. Dat kan wijzen op de figura etymologica (infinitivus-absolutus-versterking) als nadruk of zekerheidsmarkering, in een handelingsdichte zone.

### paused_interrogation
paused_interrogation zoekt een vraagclause (`ls=ques` of een vraagwoord uit QUESTION_LEX) waarop pas na 5 tot 10 clauses een antwoordwerkwoord volgt (<NH[, >MR[, DBR[). Dat kan wijzen op een retorisch opgehouden vraag, een spanningsboog of uitgestelde resolutie.

### deictic_shift_here_now
deictic_shift_here_now zoekt clauses met een proximaal 'hier/nu/zie'-deicticum (HNH, PH, P<H, <TH, ZH, Z>T) wanneer de vijf voorafgaande clauses ≥3 finiete werkwoorden bevatten. Dat kan wijzen op een verschuiving naar het hier-en-nu, een levendige onderbreking van een verledentijdsverhaal of directe aanspraak.

### stative_state_locking
stative_state_locking zoekt aaneengesloten reeksen (≥3) statieve clauses: predicaten met een statieve wortel (KBD, QDC, GDL...) of een participium (`vt=ptca/ptcp`), of nominale en adjectivische clauses (`typ` NmCl/AjCl/Ptcp). Dat kan wijzen op een 'bevroren' wereld waarin toestanden domineren over gebeurtenissen, bv. beschrijving of contemplatie.

### pronominal_ambiguity_chain
pronominal_ambiguity_chain zoekt, alleen in poëtische en profetische boeken, vensters van vier clauses met ≥2 verschillende 3e-persoons enkelvoud subject-kandidaten (`ps=p3`, `nu=sg`) en ≥3 3e-persoons enkelvoud suffixen (`prs_ps=p3`, `prs_nu=sg`). Dat kan wijzen op referentiële dubbelzinnigheid waarbij meerdere 'hij/hem'-referenten met elkaar concurreren.

---

## Discourse/pragmatiek-laag (`discourse_pragmatics_detectors.py`, `--discourse-pragmatics`)

Dertien detectoren over de ideeën 13-25 van `25-nieuwe-families.md`: dialoog- en citaatarchitectuur, valentie en stem, participant-tracking en adverbiale syntaxis. De vijf telbare leden (depersonalisatie, middle voice, vocatief, he-locale, clause-ellips) krijgen gestratificeerde corpusrates uit baseline v10's `discourse_pragmatics`-blok (hit/context-tabel, gedeelde extractors met `dp_raw_counts` als drift-invariant); de volgorde-gevoelige leden (qa-frames, ongekaderde onset, over-codering, infc-ketens) blijven heuristisch en moeten instorten onder de synthetic-nul van `calibrate.py`.

### asymmetric_qa_frames
asymmetric_qa_frames zoekt clauses die openen met een interrogatief (`ls=ques` of een vraaglexeem) en binnen een venster van 4 clauses GEEN antwoord krijgen; een antwoord moet een niet-vragend predicaat in een nieuwe beurt zijn (andere txt-Q-diepte, of een vers spreekwerkwoord direct ervoor), zodat de eigen vervolgzin van de spreker nooit als antwoord telt. Dat kan wijzen op een retorische vraag, een stilte of een geweigerd antwoord. Onderscheid met buren: `disputation_QA` paart juist een geciteerde aanklacht mét een tegenvraag; `question_profile` telt alleen vraagdichtheid, nooit of een repliek volgt (discourse_uncertain; volgordegevoelig).

### unframed_speech_onset
unframed_speech_onset zoekt overgangen ín directe rede (de txt-Q-diepte stijgt) waarbij de clause zelf en de twee voorgaande clauses geen spreekwerkwoord (>MR, DBR, QR>, NGD, <NH, C>L, YWH, BRK) dragen: het standaardframe "wayyiqtol + spreekwerkwoord + le'mor" ontbreekt en het citaat begint abrupt. Dat kan wijzen op geëmotioneerde, snelle of staccato dialoog. Onderscheid met buren: `quotation_introducers` profileert de inleidingsformule wanneer die er wél staat; de afwezigheid op een rede-onset is precies wat die detector niet ziet (formal_proxy; volgordegevoelig).

### heavy_quotation_formula
heavy_quotation_formula zoekt zware spreekinleidingen: een clause met ≥2 spreekwerkwoorden, of een run van ≥2 opeenvolgende spreekwerkwoord-clauses vóór één citaat ("en hij antwoordde en hief zijn stem op en sprak"). Dat kan wijzen op solemniteit of plechtigheid, typerend voor orakels en koninklijke besluiten. De vlakke detectoren reduceren een citaatframe tot één inleidend werkwoord; de stapeling is de configuratie die zij missen (formal_proxy).

### causative_coercion_spike
causative_coercion_spike zoekt lokale 1D-clusters (eps=20, min_pts=3) van hifil-predicaten, extra gewogen wanneer de wortel in qal intransitief of een bewegings-/toestandswerkwoord is (BW>, QWM, MWT...), zodat de hifil een andere partij dwingt ("maken dat hij gaat/sterft"). Dat kan wijzen op dwang, manipulatie of sterke (theologische) bemoeienis. Onderscheid met buren: `categorical` telt vs=hif vlak over de passage; hier telt de lokale concentratie plus de coërcieve-wortelweging (semantic_proxy: de wortelbucket is een curatabel semantisch oordeel; clusterdetector, stort in bij verspreide hifils).

### depersonalisation_pual_hofal
depersonalisation_pual_hofal telt werkwoorden in de zeldzame passieve binyanim pual en hofal (`vs=pual/hof`), samengenomen als depersonalisatie-signaal en gestratificeerd tegen de corpusrate per werkwoord. Dat kan wijzen op systematische agens-blindheid: het lot van de lijdende partij staat centraal en de dader wordt niet benoemd. Onderscheid met buren: `categorical` telt elke stam afzonderlijk; het poolen van de twee zeldzame passieven is de toegevoegde laag (formal_proxy).

### middle_voice_mimicry
middle_voice_mimicry telt clauses met een finiet niphal- of hitpael-predicaat zonder enige Objc- of Cmpl-frase: extreme valentiereductie, gestratificeerd tegen de corpusrate per finiete verbale clause. Dat kan wijzen op reflexieve introspectie of gebeurtenissen die zich "vanzelf" voltrekken zonder uitgeoefende macht. Onderscheid met buren: `agentless_niphal` mist het SUBJECT; deze detector mist het OBJECT/complement en neemt hitpael mee (formal_proxy).

### subject_over_encoding
subject_over_encoding zoekt opeenvolgende finiete clauses die hetzelfde expliciete lexicale subject (subs/nmpr) opnieuw uitspellen waar de werkwoordsuitgang had volstaan ("God deed X. God deed Y."). Dat kan wijzen op narratieve of theologische her-markering van de referent. Geen enkele single-feature-telling drukt een redundante her-codering over aangrenzende clauses uit; de herhaling is formeel, de nadruk-lezing interpretatief (discourse_uncertain; volgordegevoelig).

### vocative_isolation
vocative_isolation telt frasen met `function=Voct` en een nominale kop (naam of titel als directe aanspraak, los van de argumenten van het werkwoord), gestratificeerd tegen de corpus-Voct-rate per phrase. Dat kan wijzen op relationele intensiteit, wanhoop of intimiteit van gebed en confrontatie. De vlakke detectoren vouwen een vocatief in de gewone NP-tellingen; de Voct-rol zelf, gepoold als aanspraakdruk, is het signaal (formal_proxy: Voct is een expliciete BHSA-tag).

### relational_preposition_density
relational_preposition_density meet over de relationele preposities (B, L, >L, <M, <L, MN) de verhouding tussen voorkomens met pronominaal suffix (`prs_ps`) en voorkomens met een lexicaal nomen, en vuurt bij ≥8 voorkomens en een suffix-aandeel ≥0,33. Dat kan wijzen op een "gesloten circuit": alles speelt zich af tussen reeds bekende actoren (interpersoonlijk) in plaats van met objecten. Onderscheid met buren: `participant_density` poolt álle suffixen; dit is de prepositie-gebonden ratio (formal_proxy).

### locative_he_pressure
locative_he_pressure telt de richtinggevende he (`uvf=H`) op nomina en toponiemen ("...waarts"), met 1D-clustering (eps=25) voor de dichtste zone en gestratificeerd tegen de corpusrate per nominaal. Dat kan wijzen op kinetische, ruimtelijke energie: alles is in beweging ergens naartoe. `uvf` zit niet in de OBJECT_FEATURES van de vlakke laag, dus geen vlakke detector ziet dit; de beperking tot nominale dragers houdt de he-locale gescheiden van verbale uvf=H (formal_proxy).

### instrumental_b_focus
instrumental_b_focus telt Adju- en Cmpl-frasen met de prepositie בְּ (lex `B`) als kop: het middel of instrument ("door/met", vaak geweld, techniek of vaardigheid). Dat kan wijzen op nadruk op de methode in plaats van alleen de handeling. De vlakke detectoren tellen beth-dichtheid vlak; het isoleren van de instrumentele syntactische slot is de toegevoegde laag (semantic_proxy: beth heeft ook locatieve en temporele functies, de middel-lezing is contextueel).

### infc_purpose_chains
infc_purpose_chains zoekt 1D-clusters (eps=20, min_pts=3) van de infinitivus constructus (`vt=infc`), extra gewogen wanneer de prepositie לְ voorafgaat ("om te..."). Dat kan wijzen op uiterst intentioneel, teleologisch handelen en een hoog-complexe zinsarchitectuur. Geen vlakke detector telt infc-clustering of het l+infc-doelframe (formal_proxy; clusterdetector, stort in bij verspreide infinitieven).

### clause_ellipsis_pressure
clause_ellipsis_pressure telt extreem korte finiete verbale clauses (≤2 woorden) waarin zowel Subj- als Objc-frase ontbreekt, gestratificeerd tegen de corpusrate per finiete verbale clause. Dat kan wijzen op poëtische compressie, haast of woede (staccato-grammatica). Onderscheid met buren: `ellipsis_density` (`--ellipsis`) leest de expliciete ETCBC-tag `typ=Ellp` (verb gapping met donor); dit meet de afwezigheid van verplichte argumenten in een minimale clause, ongeacht die tag (formal_proxy).

---

## Text-dynamics laag (`text_dynamics_detectors.py`, `--text-dynamics`)

### bayesian_participant_shift
bayesian_participant_shift zoekt een burst van benoemde participanten (frasen met `function=Subj` waarvan een woord `sp=nmpr` is) die voor het eerst opduiken, geclusterd in een venster van ~8 clauses en pas na ≥8 voorgaande clauses, met ≥3 introducties in dat venster. Dat kan wijzen op een plotse cast-influx die het voorgaande discours niet voorbereidde, een Bayesiaanse low-prior-verrassing.

### latent_collexeme_surprise
latent_collexeme_surprise zoekt werkwoord-object-paren (`function=Pred` werkwoord-lex via `sp=verb`, plus `function=Objc`-kop met `sp` in subs/nmpr/adjv) waarbij zowel het werkwoord als het object lokaal vaker voorkomen met andere partners, maar deze ene combinatie uniek is en sterk verrassend scoort op een g2 over de lokale marginalen. Dat kan wijzen op een betekenisvolle, onverwachte collocatie die de lokale context niet voorspelde.

### cataphoric_ted_drift
cataphoric_ted_drift meet de voor- tegenover achterwaartse structurele asymmetrie van een clause door per clause een tokenreeks (`typ` plus de `function`-waarden van de frasen) te vergelijken met clauses 3 tot 5 stappen vooruit en achteruit via Levenshtein-editafstand, en vlagt clauses die structureel veel verder van hun toekomst dan van hun verleden staan. Dat kan wijzen op cataforische anticipatie van een komende structurele omslag.

### information_bottleneck_pressure
information_bottleneck_pressure zoekt een clause_atom waar veel `E.mother`-afhankelijkheidsedges binnenkomen (ingraad ≥6 binnen het venster), dus een enkele zwaar beladen structurele hub. Dat kan wijzen op een knooppunt waar de hele informatiestroom doorheen geperst wordt.

### syntactic_comorbidity_index
syntactic_comorbidity_index zoekt verzen waarin ≥2 onderling onafhankelijke zeldzame grammaticale features samenvallen: een zeldzame passieve stam (`vs` pual/hof), paragogische nun (`uvf=N`), infinitivus absolutus (`vt=infa`) of casus-pendens-resumptie (`rela` Resu/PrAd of `typ=CPen`). Dat kan wijzen op een statistisch ongebruikelijke opeenstapeling van markeringen in één vers.

### speech_survival_duration
speech_survival_duration meet de lengte in woorden van ononderbroken directe-rede-runs (clauses met `Q` in `txt`), doorlopend tot een narratieve clause of een nieuwe spreekinleider (lex in een vaste set zoals >MR[, DBR[, <NH[) de run breekt, en vlagt runs vanaf 120 woorden. Dat kan wijzen op een ongewoon lang volgehouden betoog.

### fronting_diagnostic_ratio
fronting_diagnostic_ratio meet bij clauses met `function=Frnt` welk aandeel direct gevolgd wordt door een clause met een finiet werkwoord (`vt` in perf/impf/wayq/impv) plus een expliciet nominaal subject, en vlagt als die ratio ≥0,6 is over ≥3 fronting-gevallen. Dat kan wijzen op vooropplaatsing die hier betrouwbaar een abrupte actant-handeling voorspelt.

### lexeme_percolation_rate
lexeme_percolation_rate zoekt een herhaald inhoudslexeem (`sp` subs/verb/nmpr, ≥8 voorkomens) dat zowel op het zeldzame hoofdniveau (clause-atom `tab ≤ 1`) als in de zeldzame diepe inbeddingsstaart (`tab ≥ 10`) voorkomt. Dat kan wijzen op een lokaal leitwort dat doorsijpelt van hoofdniveau tot diep ingebedde bijzinnen.

### longitudinal_tense_drift
longitudinal_tense_drift meet de daling van de actie-ratio (aandeel predicaten met `vt` in wayq/perf/impf tegenover statische predicatie: participia `ptca`/`ptcp` of nominale clauses `NmCl`/`AjCl`) over de hoofdstukken binnen het venster, of over de twee venster-helften als er maar één hoofdstuk is, en vlagt een daling ≥0,3. Dat kan wijzen op een sluipende verschuiving van actie-narratief naar statische reflectie.

### deep_construct_branching
deep_construct_branching zoekt binnen één frase een constructus-keten (`st=c`) van ≥3 schakels, of ≥2 schakels die mid-keten via een gebonden suffix (`prs_ps` aanwezig) vertakt. Dat kan wijzen op een genest constructusverband dat dieper of complexer is dan de gewone twee-leden-keten.

### nominal_asphyxiation
nominal_asphyxiation zoekt een dichte lokale zone van werkwoordloze nominale clauses (`typ` NmCl/AjCl zonder predicaatswerkwoord), gevonden door de eerste woorden van die clauses 1D te clusteren (eps=20, min_pts=7). Dat kan wijzen op een bevroren, statisch verbloos moment in de tekst.

### infc_subject_rarity
infc_subject_rarity zoekt de zeldzame configuratie waarin een frase met `function=Subj` als kopwoord een werkwoord (`sp=verb`) met `vt=infc` heeft: een infinitivus constructus in de nominale subjectrol. Dat kan wijzen op een opvallende verbaal-nominale vermenging in de subjectpositie.

### spatiotemporal_axis_tilt
spatiotemporal_axis_tilt zoekt een abrupte kanteling tussen een zone gedomineerd door tijdsadjuncten (`function=Time`) en een zone gedomineerd door plaatsadjuncten (`function=Loca`), door de clausestroom op deze assen te labelen en een grens te eisen waar `win` zuivere Time-clauses overgaan in `win` zuivere Loca-clauses (of omgekeerd). Dat kan wijzen op een scherpe overgang van temporele naar locatieve oriëntatie.

### dialogue_turn_volatility
dialogue_turn_volatility meet de spreiding in woordlengte van opeenvolgende spreekbeurten (`txt~Q`-runs) als de verhouding langste/mediaan over ≥6 beurten, en vlagt bij een ratio ≥6,0. Dat kan wijzen op scheve dialoogverhoudingen, korte commando's tegenover lange verdedigingen.

### arthrous_anarthrous_contrast
arthrous_anarthrous_contrast meet de verschuiving in definietheidsdichtheid (het aandeel nominale frasen met `subs`/`nmpr` dat een lidwoordwoord `sp=art` draagt) tussen de eerste en tweede helft van het venster, en vlagt bij een delta ≥0,4 over ≥8 nomina. Dat kan wijzen op een verschuiving van bepaald naar onbepaald (bekend naar onbekend of universeel) of omgekeerd.

### phrase_level_waw_density
phrase_level_waw_density zoekt dichte runs van frase-intern `w` (voegwoorden `sp=conj` in niet-clause-initiale positie) door die woorden 1D te clusteren (eps=18, min_pts=7). Dat kan wijzen op eindeloze opsommingen of gedetailleerde inventarissen via sub-clausale coördinatie.

### prepositional_overloading
prepositional_overloading zoekt één werkwoordsstam (root-skelet van de `function=Pred`-werkwoordslex) die binnen een korte spanne van ≤6 opeenvolgende verbale clauses met ≥4 verschillende preposities (`sp=prep`-lexemen) geconstrueerd wordt. Dat kan wijzen op onstabiele, overbelaste argumentmarkering van dat werkwoord.

### transmission_noise_density
transmission_noise_density zoekt lokale concentraties van qere/ketiv-divergentie (woorden met een `qere` of `qere_utf8` die van de ketiv afwijkt) door die woorden 1D te clusteren (eps=40, min_pts=3). Dat kan wijzen op secties waar leestraditie en consonantentekst historisch botsten.

### aramaic_intrusion_index
aramaic_intrusion_index zoekt Aramese woorden (`language` begint met "Aram") die binnendringen in een overwegend Hebreeuws venster (aandeel Aramees boven 0 maar onder 0,5), geclusterd via 1D-clustering (eps=40, min_pts=3). Dat kan wijzen op Aramese morfologie die binnensluipt in Hebreeuwse context.

### entropy_collapse
entropy_collapse meet de daling van de genormaliseerde entropie van de clausetype-verdeling (`typ`) tussen de eerste en tweede venster-helft, en vlagt bij een daling ≥0,25 over ≥8 clauses. Dat kan wijzen op een tekst die scherp verstart tot iets repetitiefs en mechanisch voorspelbaars.

### nested_quote_boundary_blur
nested_quote_boundary_blur zoekt clauses waarvan het `txt`-citaatdomein door BHSA als ambigu is gemarkeerd (bevat een `?`, zoals `?Q`/`?NQ`), waarbij gewone diepe nesting (meerdere gestapelde Q zonder `?`) bewust wordt uitgesloten. Dat kan wijzen op een werkelijk onbepaalde grens tussen verteller, hoofdspreker en geciteerde spreker.

---

## Connectiviteitslaag (`connectivity_detectors.py`, `--connectivity`)

clause_atom-connectiviteit via `code`, `dist`/`dist_unit`, `E.mother`.

### defective_clause_atom_density
defective_clause_atom_density zoekt clause-atomen die in de ETCBC-codering `code=999` dragen (het 'defectieve clause-atoom': een afgebroken of nooit voltooide constructie, anakoloet) en meet hoeveel daarvan zich in de passage opeenhopen (`object_type` clause_atom, met de `E.mother`-referentie en `g_word_utf8`-oppervlakte erbij). Dat kan wijzen op stotterende, geëmotioneerde of verstoorde rede in klaagzangen en affectieve toespraken, waar de grammatica zelf hapert.

### discourse_restart_density
discourse_restart_density zoekt clause-atomen met `code=0` (geen enkele relatie tot een mother) midden in de passage terwijl de ETCBC- en masoretische paragraafindeling, getoetst via de `pargr`-toplevel (`common.pargr_top`) van het vorige en het huidige clause-atoom, gewoon doorloopt zonder wissel. Dat kan wijzen op een abrupte nieuwe inzet, een compositienaad of een redactionele las waar het discours vanuit het niets herstart.

### remote_continuation
remote_continuation zoekt clause-atomen waarvan de mother op `|dist| ≥ 11` clause-atomen afstand ligt (gemeten via de BHSA-features `dist`/`dist_unit`, waarbij alleen `dist_unit=clause_atoms` of ongezet wordt geaccepteerd), dus een dochter die een ver verwijderde moederclause hervat over een tussenliggende strook heen. Dat kan wijzen op een parenthese of uitweiding gevolgd door resumptie, het terzijde als retorisch middel.

### connection_band_anomaly
connection_band_anomaly meet of de mix van grove verbindingstype-banden in de passage (de ETCBC `code`-feature gebucket via `code_band`: 0, 999, 10-19, 50-74, 1xx-5xx, other) met een G²-toets afwijkt van de gestratificeerde corpusverdeling, bij voorkeur tegen het genre-histogram (`same_genre`, anders `global`) uit baseline v10's `connectivity`-blok. Dat kan wijzen op opvallend veel asyndetische of juist parallelle aanhechtingen, het syntactische 'voegwerk' van de perikoop.

---

## Prosodie/poetica-laag (`prosody_poetics_detectors.py`, `--prosody-poetics`)

Masoretische en colometrische surface: half_verse cola, trailer marks, pargr, maqef, paseq.

### colometric_parallelism
colometric_parallelism zoekt parallellisme tussen de twee vershelften over de atnach (BHSA otype half_verse, label A/B), door per colon het phrase-`function`-skelet te vergelijken (gelijk A//A', gespiegeld A-B//B-A, of gegapt waarbij B een subsequentie van A is, verb gapping) en weegt dat met gedeelde lexicale wortels (`lex`/root_skeleton). Dat kan wijzen op synoniem of chiastisch parallellisme, het kernverschijnsel van Hebreeuwse poëzie.

### acrostic_sequence
acrostic_sequence zoekt een reeks opeenvolgende verzen waarvan de beginletters het alfabet in volgorde doorlopen (de eerste letter van `g_cons_utf8`/`g_word_utf8` van het eerste woord, met gelijke opeenvolgende letters eerst samengevoegd zodat de 8-versblokken van Ps 119 als één stap tellen). Dat kan wijzen op een alfabetisch acrostichon, een hard compositiesignaal dat versgrenzen aan de letterlijke vorm onderwerpt (Klaagliederen, alfabetische psalmen, Spr 31).

### petucha_setuma_pivot
petucha_setuma_pivot meet de masoretische paragraafmarkeringen (petucha פ / setuma ס na sof pasuq in de trailer, via common.petucha_setuma_mark) tegen de inhoudelijke naden: een markering middenin een doorlopende directe rede (`txt` met Q in opeenvolgende verzen) of een domein-pivot (`domain` N tegenover Q/D over een versgrens) verder dan max_dist verzen van elke markering. Dat kan wijzen op een spanning tussen leestraditie en retorische structuur, relevant voor perikoopkeuze.

### maqef_compression_zone
maqef_compression_zone meet de dichtheid van maqef-gebonden woorden (codepoint ־ in `trailer_utf8`, via common.has_maqef) als aandeel van alle woorden in de passage, gestratificeerd tegen de corpus maqef-per-woord-rate. Dat kan wijzen op prosodische compressie: staccato, formule- of lijstdictie waarbij grafische woorden tot één prosodisch woord worden samengebonden.

### paseq_density
paseq_density zoekt opeenhopingen van de corpus-zeldzame paseq-streep (codepoint ׀ in `trailer_utf8`, via common.has_paseq), gestratificeerd tegen de corpus paseq-per-woord-rate, met per voorbeeld een annotatie of een godsnaam aangrenzend is (DIVINE_LEX op `lex`). Dat kan wijzen op masoretische leesvoorzichtigheid, traditioneel rond godsnamen en gevoelige lezingen.

### sof_pasuq_rhythm
sof_pasuq_rhythm meet de verdeling van verslengtes (woorden per sof-pasuq-interval, gebucket in ≤5/6-10/11-15/16-25/>25) en toetst die met een G²-test tegen het verslengte-histogram van het stratum (bij voorkeur same_genre, anders global). Dat kan wijzen op staccato-verzen of monsterverzen, de versadem van poëzie tegenover de proza-adem.

---

## Ellips/gapping-laag (`ellipsis_detectors.py`, `--ellipsis`)

De expliciete ETCBC-ellipstag `clause typ='Ellp'` (2820 clauses corpuswijd): argumenten zonder eigen predikaat, dat geleend wordt van een buurclause — verb gapping en double-duty-constituenten (Cynthia Miller). Onderscheid met buren: de vlakke `categorical`-detector toetst de cel clause-typ=Ellp als één waarde tussen vele; `ellipsis_density` verfijnt die cel met annotatie per clause. `clause_ellipsis_pressure` (discourse-pragmatiek) gebruikt een lengte-heuristiek (≤2 woorden, geen finiet werkwoord) en leest de Ellp-tag nooit. `colometric_parallelism` matcht colon-skeletten; deze laag leest de clausetag zelf. Pitfall: Ellp is niet poëzie-exclusief — census- en genealogielijsten (1 Kronieken, Nehemia, Numeri) elideren zwaar; clauses met een cardinaal (`ls='card'`) of pure naam/gentilicum-rijen (alle woorden conj/prep/art/nmpr/adjv, zoals de cardinaal-loze genealogierijen van 1 Kr 1) zijn als `list_context` geannoteerd.

### ellipsis_density
ellipsis_density meet het aandeel clauses met `typ=Ellp` tegen de gestratificeerde corpusrate (gelezen uit de bestaande categorische clause-typ-tabellen), met per voorbeeld de gerealiseerde functies, de donorclause (positionele backward-scan; de mother-edge dekt maar ~17% en is enkel annotatie) en de lijstcontext. Dat kan wijzen op een passage die structureel op het geleende predikaat drijft — in poëtische cola de norm, daarbuiten gemarkeerd; het genre-stratum verdisconteert dat.

### gapped_constituent_profile
gapped_constituent_profile bucket per Ellp-clause WELKE functies wél gerealiseerd zijn (klassen over Objc/Subj/Cmpl/Adju, bv. "Objc" of "Cmpl+Objc") en toetst de profielverdeling met een G²-test tegen het stratum-histogram (bij voorkeur same_genre, anders global) uit baseline v12's `ellipsis`-blok. Dat kan wijzen op wélke sleuf geleend wordt: een object-profiel is klassiek verb gapping, een subject-profiel een predikaat-delende lijst of trapparallellie.

### gapping_distance
gapping_distance scant per Ellp-clause achterwaarts naar de dichtstbijzijnde Pred-dragende clause (buckets 1/2/3-4/≥5/none_backward; none_backward = wel een donor vooruit maar geen achteruit, het achterwaartse gapping dat Miller als uitzonderlijk markeert) en scoort het staartaandeel (≥5 + none_backward) tegen het gestratificeerde afstandshistogram. Passage-initiële Ellp-clauses worden overgeslagen (afknotting en achterwaartse gapping zijn daar niet te onderscheiden). Dat kan wijzen op ellips over een afstand of tegen de leesrichting in, waar de lezer het predikaat actief moet aanvullen.

### prose_ellipsis_marked
prose_ellipsis_marked vuurt alleen buiten poëzie/wijsheid en telt Ellp-clauses ná filtering van lijstcontexten (cardinaal in de clause of een pure naam/gentilicum-rij). Dat kan wijzen op een poëtisch register dat het proza binnendringt: verhoogde stijl, een citaat of een liedfragment. De tag is hard; de gemarkeerdheidsclaim is interpretatief (claim_type interpretive_hypothesis).

---

## Accent-syntaxis-laag (`accent_syntax_detectors.py`, `--accent-syntax`)

De masoretische te'amim zelf, als combining codepoints U+0591–U+05AE uit `g_word_utf8` geëxtraheerd (common.word_accents, met geverifieerde qere_utf8-fallback: qere-woorden dragen geen accenten in g_word_utf8) — de prosodielaag leest alleen trailer-tekens, nooit de accenthiërarchie. De accenten coderen de eigen syntactische lezing van de Masoreten (Price, The Syntax of Masoretic Accents); gemeten tegen de ETCBC-structuur worden de plekken zichtbaar waar beide segmentaties botsen ("double segmentation"). Twee accentsystemen delen het codepoint-bereik: de 21 prozaboeken en de 3 poëtische boeken (Psalmen/Job/Spreuken, de sifre emet); elke detector kiest zijn sterk-disjunctief-set via common.accent_system(boek) én scoort genre-gegate. Maqef-gebonden woorden zijn accent-neutraal en tellen nooit als mismatch.

### atnach_asymmetry
atnach_asymmetry meet WAAR de atnach (de hoofddeling van het vers) valt: de verdeling van zijn relatieve positie (early ≤0.25 / mid / late ≥0.75 / none) getoetst met een G²-test tegen het stratum-histogram uit baseline v12's `accents`-blok. Onderscheid met `colometric_parallelism`: dat matcht de functie-skeletten van de cola, dit meet de positie van de snede. Dat kan wijzen op scheve cola — kop- of staartzware verzen, het twistpunt van het colometrie-debat.

### accent_syntax_mismatch
accent_syntax_mismatch zoekt woorden met een sterk disjunctief accent (atnach/segolta/shalshelet/zaqef in proza; atnach/ole in de poëtische boeken) die NIET het laatste woord van hun ETCBC-phrase zijn, met uitsluiting van maqef-gebonden en versfinale woorden, gestratificeerd tegen de corpus mid-phrase-rate. Dat kan wijzen op "double segmentation" (Price): de voordracht snijdt waar de zin doorloopt — leestraditie en grammatica lezen het vers verschillend, vaak precies op exegetisch omstreden plekken.

### atnach_absence
atnach_absence zoekt verzen van ≥6 woorden zonder atnach op enig woord (incl. qere_utf8-fallback), gestratificeerd tegen de corpusrate over lange verzen. Dat kan wijzen op een vers dat de Masoreten in één adem lieten lezen waar een dichotomie de norm is — vaak lijsten, opschriften of verzen waarvan de deling omstreden was. Puur codepoint-aanwezigheidstest (hard_formal).

---

## Referentiële-markering-laag (`referential_marking_detectors.py`, `--referential-marking`)

Differential object marking (DOM) met את en definietheidsketens (Peter Bekins, Transitivity and Object Marking in Biblical Hebrew): corpuswijd draagt 62.4% van de definiete Objc-phrases את tegen 3.3% van de indefiniete, en in poëzie stort de markering in (.76 narratief vs .13 poëzie). Ankers: phrase `function=Objc`, phrase-`det` (det/und; NA wordt nooit gescoord), en de objectmarker als EXACTE `lex='>T'` — het homoniem `'>T=='` ('met', identiek oppervlak את) en het pronomen `'>T='` tellen nooit mee. Clauses met PreO/PtcO-predikaat (object al pronominaal op het werkwoord) vallen buiten de noemer. Onderscheid met buren: `valence_object_drop` toetst object-AANWEZIGHEID, deze laag object-MARKERING gegeven aanwezigheid; `arthrous_anarthrous_contrast` toetst de geaggregeerde artikel-rate tussen vensterhelften, `referent_chain_anomaly` volgt de definietheid per referent. De poëzievraag zit in de multi-stratum-machinerie zelf (same_genre naast global); een aparte poëzie-detector zou dezelfde cel dubbel toetsen.

### dom_unmarked_definite
dom_unmarked_definite meet definiete directe objecten ZONDER את als aandeel van alle definiete Objc-phrases, gestratificeerd tegen de corpusmarges uit baseline v12's `referential`-blok. Dat kan wijzen op laag geïndividueerde of achtergrond-objecten (Bekins koppelt nul-codering aan lage informatiestatus); in poëzie is ongemarkeerd de norm en het genre-stratum verdisconteert dat.

### dom_marked_indefinite
dom_marked_indefinite zoekt INdefiniete directe objecten MET את — corpus-zeldzaam (~3%) en gemarkeerd: uitzonderlijke markering die het nieuwe referent juist prominent zet (individuatie, aanstaande discourse-topic). Dat kan wijzen op een referent die het discours binnenkomt met meer gewicht dan zijn vorm verraadt.

### referent_chain_anomaly
referent_chain_anomaly volgt de definietheid per referent (lex, `sp=subs`, geen godsnamen, geen pronominaal suffix want die determinatie komt van de bezitter, `freq_lex` ≤ 400 tegen corpus-banale nomina, en alleen lexemen met ≥2 scoorbare vermeldingen — één vermelding is geen keten) langs de passage via de `det` van het omvattende phrase_atom (constructverbindingen erven daar de determinatie van het rectum) en markeert twee ketenvormen: eerste vermelding al definiet (vooronderstelde vertrouwdheid) en her-indefinitisering (een als definiet geïntroduceerd referent keert indefiniet terug). Dat kan wijzen op referenten die tegen de gegeven-nieuw-orde ingaan. Lex-gelijkheid als referent-identiteit is een aanname (discourse_uncertain); orde-afhankelijk, dus de synthetische nul van calibrate.py is de controle die bijt.

## Vorm-rariteit-laag (`form_rarity_detectors.py`, `--form-rarity`)

Unieke en bijna-unieke oppervlaktevormen van frequente lexemen via `freq_occ`, de corpusfrequentie van de exacte consonantische vorm (geverifieerd op de 2021-data: `freq_occ` telt (g_cons_utf8, taal)-paren, lexeem-blind, waardoor `freq_occ<=1` een conservatieve binnen-lexeem-grens is: homoniemen kunnen de telling alleen opblazen). Het signaal is het spiegelbeeld van `rare_lexeme`/`hapax_gravity`/`topological_hapax`: daar is het LEXEEM zeldzaam, hier is het lexeem alledaags (`freq_lex>=100`) en de REALISATIE uitzonderlijk, een morfologische hapax (type שְׁמַעַן in Gen 4:23, de vr.mv.-imperatief in Lamechs lied). Scoorbaar zijn woorden zonder eigennaam-status (elke naamspelling is "zeldzaam"), zonder pronominaal suffix (suffigering verdubbelt het hapax-aantal mechanisch zonder stilistische winst) en zonder qere (een ketiv-spelling is tekstkritisch gemarkeerd; dat signaal is van `qere_ketiv`). Poëzie loopt op ~3x de narratieve rate (0.0069 vs 0.0024); het genre-stratum uit baseline v13's `form_rarity`-blok draagt die norm.

### morphological_hapax
morphological_hapax telt scoorbare woorden met `freq_occ<=1` bij `freq_lex>=100`: de consonantische vorm komt nergens anders in het corpus voor hoewel het woord zelf alledaags is. Dat kan wijzen op morfologische voorgrondplaatsing: archaïsche of plechtige buigingen, uitzonderlijke binyan/persoon-combinaties. De telling zelf is het expliciete corpusfeit (hard_formal).

### rare_form_cluster
rare_form_cluster telt de bijna-hapax-band (`freq_occ` 2-3) van frequente lexemen, disjunct van de strikte band zodat de twee detectors FDR-massa splitsen in plaats van dubbel te tellen. Individueel zwakker dan een strikte hapax, vandaar een hogere drempel (min_obs=3); een cluster markeert een passage die stelselmatig naar uitzonderlijke buigingen grijpt. Dat kan wijzen op een register- of ouderdomssignaal met dezelfde strekking als de vorm-hapax (formal_proxy).

## Orthografie-laag (`orthography_detectors.py`, `--orthography`)

Plene/defectieve spelling van dezelfde morfologische vorm (Andersen & Forbes, Spelling in the Hebrew Bible, 1986; Barr, The Variable Spellings of the Hebrew Bible, 1989). Woorden worden gegroepeerd per vormcel (lex, vt, ps, nu, gn, vs, st, uvf, prs); cellen waarvan de spellingen na het strippen van waw/yod identiek zijn en in matres-aantal verschillen vormen het corpus-register (geverifieerd: 167 sterke cellen, 16.5k tokens; klassieke paren als עולם/עלם, גדול/גדל, אותו/אתו). Het boekniveau reproduceert de literatuur: Genesis .20 plene, Samuël .33, Kronieken .54/.44, Prediker .50, dus spelling draagt een diachroon/redactioneel signaal. Valkuilen (geverifieerd): het qere perpetuum הוא-voor-היא is substitutie (gelijk matres-aantal) en valt buiten het register; eigennamen volgen eigen boekconventies en tellen nooit mee; qere-woorden zijn tekstkritisch (`qere_ketiv`); Aramees heeft een eigen spellingssysteem. Het register staat onder het globale stratum van baseline v14's `orthography`-blok; per-stratum plene/defectief-tellingen dragen de genre- en boeknorm.

### plene_defective_skew
plene_defective_skew meet het plene-aandeel van de passage over de register-tokens tegen de gestratificeerde corpusrate. Dat kan wijzen op een passage die tegen de spellingsnorm van het eigen boek of genre in gespeld is: een transmissie- of redactiesignaal (late invoeging in een vroeg boek, of andersom). De spelling is letterlijk de overgeleverde tekst (hard_formal).

### spelling_switch
spelling_switch zoekt vormcellen die BINNEN de passage in beide spellingen voorkomen (Barrs "rapid alternation"), zonder corpus-register: skelet-gelijke, matres-verschillende spellingen van dezelfde cel wisselen per definitie. Eén wissel is kopiistenruis; meerdere wisselende cellen in korte spanne markeren instabiele orthografie. Dat kan wijzen op een bronnaad of redactiewissel (formal_proxy).

## Convergentie-meta-pass (`convergence_detectors.py`, `--convergence`)

Generalisatie van `rhetorical_pivot` (drie vaste signalen op één clause-naad) naar alle lagen: per versnaad (het venster van vers i en vers i+1) telt de pass hoeveel ONAFHANKELIJKE robuuste findings hun examples daar verankeren, en toetst het aantal beladen naden tegen een exact onafhankelijkheidsmodel: de Poisson-binomiale staart P(≥3 van de per-familie naad-Bernoulli's), gevoed aan g2_one_sample. Het is een echte meta-pass: hij consumeert de reeds verrijkte findings-lijst (na `_enrich` en FDR), draait in `analyze()` zonder nieuwe Text-Fabric-scan, en zijn eigen finding gaat door een aparte `_enrich`-aanroep. Onafhankelijkheid wordt bewaakt door vier poorten. (1) De harde familie-naar-stem-mapping `VOTE_FAMILY`: detectoren die hetzelfde oppervlak lezen tellen als één stem, anders stemt één Ellp-cluster driedubbel via density/profile/distance; ongemapte types stemmen als zichzelf en de mapping moet meegroeien met nieuwe lagen. (2) Alleen example-dragende, vers-verankerbare findings doen mee; passage-brede structuurtypes (`narrative_arc`, `divine_agency`, `composite_structure`) zijn uitgesloten omdat hun examples segmentstarts markeren, geen anomalie-loci, en `rhetorical_pivot`/`pivot_plus` zijn uitgesloten omdat hun examples zelf naden zijn, opgebouwd uit signalen die ook los kunnen stemmen. (3) Diffuse families (examples op >50% van de verzen) vallen af: een familie die op bijna elke naad stemt draagt geen lokalisatie-informatie. (4) Alleen findings die de DETERMINISTISCHE robuuste vloer halen stemmen; exploratieve (LLM-voorgestelde) findings voeden de convergentie nooit. Stemmen ankeren aan de meegegeven versvolgorde (nooit hergesorteerd), dus de shuffle-nul van calibrate.py (`--convergence`) breekt de vers-adjacentie en moet het signaal laten instorten; tests/test_convergence.py pint dat contract ook synthetisch. De diffusie-poort werkt op de SAMENGEVOEGDE familieset: achttien individueel lokale categorical-cellen kunnen samen 0,6 van de verzen dekken en vallen dan als één stem af. De min_g2-drempel (2.0) is empirisch gekalibreerd zoals bij rhetorical_pivot: op 40 willekeurige 25-versvensters (Genesis/1 Samuël/Jesaja/Psalmen, alle lagen aan) stort de geschudde nul volledig in op 2.0 (max 1.88, 0/39 erboven) terwijl geordende vensters 7,7% recall houden; een a-priori-drempel van 4.0 liet vrijwel geen recall over. De finding overleeft de `--top`-afkap samen met de vloer-findings, omdat zijn gekalibreerde G²-bereik onder de surprise-range van de vlakke detectoren ligt. Gevalideerd op echte BHSA (tests/test_convergence_validation.py, BHSA_REGRESSION=1): Genesis 22 vuurt (12 van 23 naden beladen, de Akeda-reis-en-dialoogzone 22:1-9), het dichte poëtische Richteren 5 blijft stil omdat zijn vele beladen naden niet boven de eigen naadkansen uitkomen.

### anomaly_convergence
anomaly_convergence telt versnaden waar examples van ≥3 onafhankelijke robuuste detectorfamilies samenvallen en toetst dat aantal tegen wat de per-familie naadkansen onder onafhankelijkheid al voorspellen. Onderscheid met buren: `rhetorical_pivot`/`pivot_plus` tellen een vaste set formele signalen op clause-naden binnen één detector; dit telt over ALLE lagen heen, op versnaden, en alleen stemmen die zelf al robuust+FDR-significant zijn. Dat kan wijzen op een naad waar meerdere onafhankelijke vormlagen dezelfde plek aanwijzen: een compositorische of retorische scharnierplaats die geen enkele laag afzonderlijk kan claimen (formal_proxy; de deelnemende signalen dragen elk hun eigen plafond al).

## Pauzale-vormen-laag (`pausal_detectors.py`, `--pausal-forms`)

De pauzale alternantie van dezelfde consonanttekst (Revell, "Pausal Forms in Biblical Hebrew", JSS 1980; "Pausal Forms and the Structure of Biblical Poetry", VT 1981): de leestraditie verlengt klinkers op de hoofdpauze (type qamets-voor-patach: מָיִם naast מַיִם, נָפֶשׁ naast נֶפֶשׁ). Woorden worden gegroepeerd per vocalisatiecel: de orthografie-vormcel (lex, vt, ps, nu, gn, vs, st, uvf, prs) plus de consonantspelling, zodat plene/defectief-variatie de vergelijking nooit vervuilt; het oppervlak wordt vergeleken na het strippen van de accenten (U+0591–U+05AE) en silluq/meteg (U+05BD, want silluq deelt dat codepoint en zou elk versfinaal woord tot schijnvariant maken). Geverifieerd op de 2023-data: 306 cellen dragen een heldere pauze-geassocieerde variant (20.195 tokens); daarover is P(pauzale vorm | pauzepositie) = .966 (3985/4126) tegen .015 (204/13772) op contextposities zonder sterk disjunctief. De registerregel classificeert PER VARIANT (pauzaal bij pauzerate ≥ .6, context bij ≤ .25, middenband ongescoord): מָיִם heeft twee pauzale spellingen (met/zonder dagesj na מן) en een één-winnaar-regel zou er één als context misfilen. Dezelfde dubbele poort weert de lidwoord-allomorfie (הָעָם, הָאָרֶץ): de qamets-vorm van עם is in context frequent en belandt in de middenband, waarna de cel vervalt. Pauzeposities zijn atnach, sof pasuq en in de sifre emet ook ole (via common.accent_system, conform de v12-accentlaag); maqef-gebonden woorden zijn overal uitgesloten (accent-neutraal, nooit bewijs); woorden met een ander sterk disjunctief accent (zaqef, segolta, sjalsjelet in proza) zijn een tussenklasse die geen van beide detectoren scoort. Alleen registercellen scoren: een lexeem zonder geattesteerde alternantie zou anders enkel "heeft geen alternantie" meten. Onderscheid met buren: `accent_syntax_mismatch` meet accent tegen ETCBC-SYNTAXIS, deze laag meet accent tegen FONOLOGIE (de vocalisatie die de leestraditie op die positie koos); `plene_defective_skew` varieert de consonanten van één vorm, dit varieert de klinkers van één spelling. Gestratificeerde rates komen uit baseline v15's `pausal`-blok; het register staat onder het globale stratum.

### pausal_out_of_place
pausal_out_of_place telt registerwoorden met de pauzale vocalisatie maar ZONDER enig sterk disjunctief accent, tegen de gestratificeerde corpusrate van pauzale vormen op contextposities (~1,5%). Dat kan wijzen op Revells kernanomalie "pausal form in context": de leestraditie pauzeert waar haar eigen accentsysteem geen pauze markeert, vaak een versinterne ledigingsgrens of emfase. De vorm is hard, de duiding interpretatief (formal_proxy).

### pausal_absent_at_pause
pausal_absent_at_pause telt registerwoorden met de context-vocalisatie óp de hoofdpauze (atnach/sof-pasuq; ole in de sifre emet), tegen de gestratificeerde corpusrate van contextvormen op pauzeposities (~3,4%). Dat kan wijzen op een afwijkende of late leestraditie, of een verstoorde verseinde-structuur: de pauze krijgt niet de vorm die het lexeem elders wél neemt (formal_proxy).

## Individuatie-laag (`individuation_detectors.py`, `--individuation`)

Bekins' individuatieschaal (Transitivity and Object Marking in Biblical Hebrew) gekruist met de DOM-machinerie: את-markering volgt niet alleen definietheid maar de plaats van het referent op de animacy/identificeerbaarheidshiërarchie. Geverifieerd op de 2023-data over definiete Objc-frasen: menselijke-klasse-hoofden (persoonseigennamen plus de menselijke lexlijst common.INDIVIDUATION_HUMAN_LEX) markeren op .82 (1766/2147), dieren op .56, onbezield op .51; de schaal reproduceert en de mens/ding-kloof is het signaal. Het frase-hoofd is het EERSTE subs/nmpr-woord (Hebreeuwse NP's zijn hoofd-initieel: een constructverbinding levert zijn hoofd, niet zijn rectum). Godsnamen zijn uitgesloten, inclusief de kortvorm JH/ (hallelu-Jah parseert als ongemarkeerd Objc met nametype=pers en zou de menselijke klasse in de Psalmen overspoelen, gevonden bij validatie op Psalm 135); indefiniete menselijke nomina staan lager op de identificeerbaarheidsschaal (markering .03) en komen de klasse nooit binnen. Bijvangst van de verificatie: de oude HUMAN_LEX in predictive_families bevatte het dode lexeem KOHN/ (0 tokens; priester is KHN/), gefixt en verplaatst naar common. De Objc-extractie (det/und, PreO/PtcO uitgesloten, את als exact lexeem '>T') is hergebruikt uit de referentiële-markering-laag, dus de twee lagen kunnen niet uiteenlopen. Onderscheid met buren: `dom_unmarked_definite` toetst hetzelfde oppervlak ZONDER klasseconditie; `dom_marked_indefinite` bezit de spiegelcel al (indefiniete objecten zijn >90% onbezield, een tweede toets zou alleen FDR-massa verdubbelen); `entity_syntactic_role_anomaly` kruist nametype met functieDISTRIBUTIE corpuswijd; `referent_chain_anomaly` volgt definietheid, niet markering. Gestratificeerde rates uit baseline v16's `individuation`-blok.

### participant_individuation
participant_individuation telt menselijke-klasse definiete objecten ZONDER את tegen de gestratificeerde klasserate (.177 globaal), met voorbeelden per participant gegroepeerd en een `consistent_participants`-veld voor participanten van wie alle objectvermeldingen (≥2) ongemarkeerd zijn. Dat kan wijzen op systematische de-individuatie: een mens die grammaticaal als ding gecodeerd wordt, een perspectief- of empathiesignaal (validatie-anker: Daniël 1:7, de vier Judese ballingen ongemarkeerd object bij hun hernoeming). De tags zijn hard; de animacy-klasse is een gecureerde lexlijst en de lezing interpretatief (discourse_uncertain).

## Prosodie-alignment-laag (`alignment_detectors.py`, `--prosody-alignment`)

Componeert de v12-accentmachinerie met de ETCBC-clause_atom-segmentatie tot één congruentiemaat per vers: de fractie sterke disjunctieven (per accentsysteem; maqef-gebonden woorden accent-neutraal) die op een clause_atom-grens vallen, dus het laatste woord van hun clause_atom zijn. Volledige congruentie is de norm (geverifieerd op de 2023-data: proza-mediaan 1.00, gemiddelde .77 over 14.869 verzen met ≥2 disjunctieven); de staart van verzen waar GEEN enkel sterk disjunctief met een clause_atom-grens samenvalt is 4,4% (669/15.217 corpusbreed) en dat is de anomalieklasse. Onderscheid met buren: `accent_syntax_mismatch` telt losse mid-PHRASE-disjunctiefwoorden waar dit hele VERZEN scoort tegen de clause-segmentatie en alleen totale incongruentie telt; `colometric_parallelism` matcht colon-skeletten; `atnach_asymmetry` meet de positie van de snede. Valkuil (geverifieerd): de zero-staart concentreert in lijstregister — offerlijsten (Numeri 29: 17 van 25 verzen), census (Ezra 2, Nehemia 7), genealogie (1 Kronieken 6), volkerenlijst (Genesis 10) — waar één lange clause onder vele disjunctieven doorloopt; het genre-stratum en de voorbeelden dragen die context, en een vuring in regulier narratief is daarom de interessante uitkomst. Erfenis van de accentlaag: qere via qere_utf8-fallback, accentsysteem per boek (het proza-raamwerk van Job leest mee onder de poëtische set).

### prosody_syntax_alignment
prosody_syntax_alignment telt verzen met ≥2 sterk-disjunctieve woorden waarvan geen enkel op een clause_atom-grens valt, tegen de gestratificeerde corpus-zero-rate (~4,4%). Dat kan wijzen op Price' "double segmentation" op zijn sterkst: leestraditie en grammatica segmenteren het hele vers verschillend, in lijsten registergebonden en daarbuiten vaak tekstkritisch of retorisch geladen (formal_proxy).

## Gapping-parallelisme-laag (`gapping_parallelism_detectors.py`, `--ellipsis-parallelism`)

Componeert de v12-ellipslaag (clause typ='Ellp', de positionele donor-scan) met de half_verse-colonstructuur: wáár staat het donor-predikaat ten opzichte van zijn gegapte clause? Miller maakt verb gapping in poëzie een PARALLELISME-verschijnsel: donor in colon A, gap in colon B. Geverifieerd op de 2023-data (Ellp-paren met achterwaartse donor): poëzie gapt cross-colon op .64 en wijsheid op .68, narratief op .14 (zijn ellips leeft in lijsten: zelfde-colon-rijen en voortzettingen over de versgrens); corpus-histogram 749 cross_colon / 1281 same_colon / 790 cross_verse. De drie klassen (gedeeld met het baseline v18-blok `gapping_colon`): cross_colon (zelfde vers, ander colon — klassiek poëtisch gapping), same_colon (gap leunt op een direct voorafgaand predikaat, geen parallelisme), cross_verse (donor achter de versgrens — voortzettings-/lijstellips, Millers gemarkeerde orde). Paren zonder achterwaartse donor zijn hier niet classificeerbaar; dat signaal is van `gapping_distance`. Onderscheid met buren: `gapping_distance` meet LINEAIRE afstand in clauses, dit de COLON-STRUCTURELE positie van dezelfde paren; `colometric_parallelism` matcht colon-skeletten zonder de Ellp-tag; `prose_ellipsis_marked` telt proza-ellips zonder colonstructuur, waar de proza-detector hier juist de cross-colon-configuratie eist.

### ellipsis_parallelism_coupling
ellipsis_parallelism_coupling toetst het afwijkende aandeel van de donor-paren (same_colon + cross_verse) tegen het gestratificeerde corpusaandeel, tweezijdig: bij ≥5 geclassificeerde paren emitteert het ook zonder afwijkende treffers, zodat een volledig parallelisme-gebonden passage als under-anomalie zichtbaar wordt (Psalm 78: 0 van 13). Over-effect: de passage gapt buiten het parallelle-colon-frame waar het stratum colon-gebonden gapping verwacht (Psalm 136, de litanie: alle zes paren leunen op het eigen colon-refrein). Dat kan wijzen op litanie-/lijstregister binnen poëzie of juist op streng parallelistische compositie (formal_proxy).

### prose_parallel_gapping
prose_parallel_gapping telt cross-colon gapping-paren in een niet-poëtisch/niet-wijsheidsboek, na lijstfiltering (cardinaal of naam/gentilicum-rij). Dat kan wijzen op het versgapping-patroon dat het proza binnendringt: verhoogde stijl, citaat of liedfragment — Millers kernvraag (validatie-anker: het Lied van Mozes, Deuteronomium 32, in een wetsboek). De tags zijn hard; de intrusielezing is interpretatief (discourse_uncertain, claim_type interpretive_hypothesis).

## Subphrase-laag (`subphrase_detectors.py`, `--subphrase`)

Het otype dat de rest van de engine nooit leest: `subphrase` met zijn `rela`-waarden, de NP-INTERNE structuur onder het phrase-niveau. Geverifieerd op de 2023-data: 113.850 subphrase-knopen (rela-inventaris: NA 56.925, rec 34.989, par 11.946, adj 4.138, atr 3.064, dem 1.847, mod 941); 15% van de frasen draagt subphrases. De rec-relatie (rectum) ÍS de constructverbinding en blijft bewust bij de word-st-machinerie (`construct_chain`, `deep_construct_branching`); dem/mod zijn dun. Wat geen andere laag leest is de par/atr/adj-structuur: coördinatieketens en attributieve stapeling binnen één NP. Drempels uit de corpushistogrammen: par-ketens ≥3 in 841 frasen corpusbreed, atr/adj-stapels ≥2 in 736 (van 253.203 frasen). Valkuil: lijstboeken (Kronieken, Numeri, Ezra/Nehemia) domineren NP-coördinatie — censusrijen zijn één NP met vele par-leden — dus het genre-stratum is de dragende poort en de voorbeelden dragen de oppervlaktetekst voor registercontrole. Onderscheid met buren: `appositional_title_ladder` leest phrase-rela Appo (appositie TUSSEN phrase_atoms), niet subphrase-interne structuur.

### np_coordination_depth
np_coordination_depth telt frasen met ≥3 par-subphrases (een lijst binnen één NP) tegen de gestratificeerde corpus-phraserate (.0033). Dat kan wijzen op censuslijst-register (1 Kronieken 6: 20 ketens) of, daarbuiten, op retorische opeenstapeling binnen één frase (formal_proxy).

### attributive_stacking
attributive_stacking telt frasen met ≥2 atr/adj-subphrases op één nominaal hoofd tegen de gestratificeerde corpus-phraserate (.0029). Dat kan wijzen op beschrijvende verdichting: titulatuur, epitheta, gekwalificeerde cultusobjecten (Numeri 7: 42 stapels in de offergaven-formules) of gestapelde adjectieven in narratieve beschrijving (Genesis 41: de koeien "mooi van uiterlijk en vet van vlees"). De rec-subphrases tellen nooit mee; dat signaal is van construct_chain (formal_proxy).
