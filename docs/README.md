# Statische zoekbrowser bij de 1 Samuël-toelichtingen

Een afgebakende, statische versie van de Text-Fabric-zoekbrowser, bedoeld voor GitHub Pages. De
lezer kan de zoekregels uit de toelichtingen zelf intypen en de treffers tellen — zonder iets te
installeren, volledig client-side, over alleen de geëxporteerde passages.

De echte Text-Fabric-browser is een Python-server en kan **niet** op Pages draaien. Deze versie
omzeilt dat door per passage de woorden + kenmerken vooraf te exporteren naar JSON en de zoeklogica
in `app.js` te draaien.

## Bestanden

```
docs/
  index.html              UI (Nederlands, Hebreeuws RTL)
  app.js                  zoekmachine — exacte spiegel van het export-script
  .nojekyll               voorkomt Jekyll-verwerking
  data/
    index.json            lijst van passages
    <slug>.json           per passage: woorden, clauses, geverifieerde presets
```

## Ondersteunde zoeksyntaxis

Een deel van Text-Fabric: één anchor-object (`word` / `clause` / `phrase` / `sentence`) met
eventueel ingesprongen `word`-regels eronder, en `kenmerk=waarde`-filters (meerdere waarden met
`|`). Relationele operatoren (`<`, `<:`, `[[ ]]`, `mother`, …) worden niet ondersteund; presets met
zulke syntaxis worden door het export-script automatisch overgeslagen.

