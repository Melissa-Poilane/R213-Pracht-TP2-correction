# Composant avec paramètre

Nécessite Vue 3.3 encore en bêta. Si erreur à l'installation des dépendances, faire :

```
npm install --force
```

# Travail

## PocketBase

Copier le dossier `pocketbase` fait (en R214 | Système d'information) dans ce projet.

### Générations des types des tables PocketBase

Utilise [PocketBase typegen](typegen). Dans le terminal, faire :

```
npx pocketbase-typegen --db ./pocketbase/pb_data/data.db --out ./src/pocketbase-types.ts
```

Ou, comme le script a été ajouté au [`package.json`](./package.json#L13) :

```
npm run typegen
```

[typegen]: https://github.com/patmood/pocketbase-typegen#quickstart
