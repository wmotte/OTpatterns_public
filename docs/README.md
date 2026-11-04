# Statische zoekbrowser bij de 1-2 Samuël-rapporten

Met deze statische zoekbrowser kunt u de zoekregels uit de
[rapporten en toelichtingen](../rapporten/README.md) invoeren en de treffers
tellen. De browser werkt op GitHub Pages en doorzoekt de geëxporteerde
passages, zonder installatie.

De volledige Text-Fabric-browser heeft een Python-server nodig en draait
daarom niet op GitHub Pages. Deze versie gebruikt vooraf geëxporteerde woorden
en kenmerken in JSON. `app.js` doorzoekt die gegevens in uw browser.

## Bestanden

```
docs/
  index.html              UI (Nederlands, Hebreeuws RTL)
  app.js                  zoekmachine, exacte spiegel van het export-script
  .nojekyll               voorkomt Jekyll-verwerking
  data/
    index.json            lijst van passages
    <slug>.json           per passage: woorden, clauses, geverifieerde presets
```

## Ondersteunde zoeksyntaxis

Een deel van Text-Fabric: één anchor-object (`word` / `clause` / `phrase` / `sentence`) met
eventueel ingesprongen `word`-regels eronder, en `kenmerk=waarde`-filters (meerdere waarden met
`|`). Relationele operatoren (`<`, `<:`, `[[ ]]`, `mother`, …) worden niet ondersteund. Presets met
zulke syntaxis worden door het export-script automatisch overgeslagen.

