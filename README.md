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

### Importation manuelle des données

#### La variable :

Lancer manuellement (F5) le `backend.mjs` qui devrait afficher dans la console la liste des `maisons`.

Dans le `<script setup>` de [`/src/App.vue`](/src/App.vue), ajoutez :

```ts
const maisonsListe = /* coller ici le tableau d'objet */
```

#### Le type :

Toujours dans `App.vue` :

- Ajouter l'import du type `MaisonResponse` depuis `@/pocketbase-types` (idem CM/TD).
- Spécifier le type `maisonsListe` :
  ```ts
  const maisonsListe:MaisonResponse[] = /* ... */
  ```
- Vérifiez que l'éditeur ne signale pas d'erreurs.
  - Supprimer la propriété `expand`
  - Remplacer la valeur `"maison"` de la propriété `"collectionName"` par : `Collections.Maison`
    - Vérifier que l'import de `Collections` a bien été ajouté

## Le composant `MaisonCard.vue`

### Code du composant

Faire le fichier [`/src/components/MaisonCard.vue`](/src/components/MaisonCard.vue)\
Prendre modèle sur le CM/TD [`PersonneCard.vue`](https://github.com/ppierre/vue-base-tailwind/tree/vue3.3-test-personne#composant-avec-param%C3%A9tre)

Pour le code du template, vous pouvez utiliser un des plugins Figma suivants :

- [Inspect - Export to HTML, React, Tailwin](https://www.figma.com/community/plugin/1049994768493726219) : donne un code HTML/Tailwind à coller dans `<template>`. Juste remplacer les textes par les interpolations (eg. `{{ maProp }}`)
- [AutoHTML](https://www.figma.com/community/plugin/1077172952654000760) : Fais un composant (choisir Vue et Taillwind en option). Mais pas en TypeScript, ni avec les types de PocketBase.

Pour les `props` du composant `MaisonCard`, bien utiliser le type générer automatiquement de PocketBase : `MaisonRecord` à importer de `/src/pocketbase-types.ts`.

Rq. pour colorier le coeur si "favoris" : entourer le `<path>` du code suivant :

```html
<g :class="{ 'fill-red-400': favori }">
  <path ... />
</g>
```

On utilise la syntaxe de ["binding" des classes CSS par un objet][bindClass].

### Tester le composant

Dans le `<template>` de `App.vue`, ajouter :

```html
<MaisonCard v-bind="maisonsListe[0]" />
```

(Vérifiez que l'import du composant a été automatiquement ajouté.)

## Afficher les données

Afficher toutes les maisons avec un `v-for`comme [vu en CM/TD][CM-boucle-objet]

[CM-boucle-objet]: https://github.com/ppierre/vue-base-tailwind/tree/vue3.3-test-personne#usage-dans-une-boucle

## Afficher les images

Vous pouvez tester le code suivant ([PocketBase file url][pb-file-url]) :

- Remomer `backend.mjs` en `backend.ts` et exporter `pb`
- Le fichier `/src/components/MaisonCard.vue`

  ```html
  <script setup lang="ts">
    import { pb } from '@/backend'
    import type { MaisonRecord, MaisonResponse, BaseSystemFields } from '@/pocketbase-types'

    // bug MaisonResponse
    const props = defineProps<MaisonRecord & BaseSystemFields<null>>()

    const img0 = props.images?.[0]
    const urlImg0 = img0 ? pb.getFileUrl(props, img0, { thumb: '100x250' }) : '/image-not-found.png'
    console.log(urlImg0)
  </script>
  ```

Il faut que :

- le client PocketBase soit installé (`npm i pocketbase`)
- le backend PocketBase soit lancé.
- le ficher `/src/backend.*` exporte `pb`

Attention si vous avez plusieurs images, utiliser `props.img[0]` , `props.img[1]` ...

## Si vous avez fini :

Afficher plusieurs fois la liste de `Maison` avec différent traitement :

- [`sort`][sort] : trier
- [`slice`][slice] : partie
- [`filter`][filter]: filtrer
- [`map`][map] : transformer
- ...

Exemple :

```js
const maisonsDePlusde100M2 = maisonsListe.filter(
  maison => /* teste si la superficie de `maison` est > 100 */
)
```

[sort]: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
[slice]: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[filter]: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[map]: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[pb-file-url]: https://pocketbase.io/docs/files-handling/#file-url
[bindClass]: https://vuejs.org/guide/essentials/class-and-style.html#binding-to-objects
