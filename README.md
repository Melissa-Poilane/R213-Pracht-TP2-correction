# R213-Agence

# Travail TP2

## Base avec données satique (`JSON`)

Importation manuelle des données

### La variable :

Lancer manuellement (F5) le `backend.mjs` (Du TP R214 | Système d'information) qui devrait afficher dans la console la liste des `maisons`. (Alternativement la copier depuis un lien présent sur la page de cours.)

Rq: s'assurer d'avoir une propriété `image` (au singulier) sockant qu'une image (et non une liste).

Dans le `<script setup>` de [`/src/pages/index.vue`](/src/pages/index.vue), ajoutez :

```ts
const maisonsListe = /* coller ici le tableau d'objet */
```

### Le type :

- Survoler la variable `maisonsListe` : vous devez voir s'afficher le type inféré par TypeScript.
- Copier le type et l'appliquer à la variable :\
  ```ts
  const maisonsListe: {
    adresse: string;
    collectionId: string;
    /* ... */
  }[] = /* ... */
  ```
  - Vérifiez que l'éditeur ne signale pas d'erreurs.
- Extraire le type dans une déclaration `MaisonRecord` :
  ```ts
  interface MaisonRecord {
    adresse: string;
    collectionId: string;
    /* ... */
  }
  const maisonsListe: MaisonRecord[] = /* ... */
  ```
  - Vérifiez que l'éditeur ne signale pas d'erreurs.
- Faire le fichier `/src/types.ts` .

  - Y copier le code de l'interface `MaisonRecord` et **l'exporter** :
    ```ts
    export interface MaisonRecord {
      adresse: string
      collectionId: string
      /* ... */
    }
    ```
  - Dans `/src/pages/index.vue` , remplacer la déclaration de l'interface par son import depuis `/src/types.ts`

    ```ts
    import type { MaisonRecord } from '@/types'

    const maisonsListe: MaisonRecord[] = /* ... */
    ```

  - Vérifiez que l'éditeur ne signale pas d'erreurs.

## Le composant `MaisonCard.vue`

### Code du composant

Faire le fichier [`/src/components/MaisonCard.vue`](/src/components/MaisonCard.vue)\
Prendre modèle sur le CM/TD [`PersonneCard.vue`](https://github.com/ppierre/vue-base-tailwind/tree/vue3.3-test-personne#composant-avec-param%C3%A9tre)

Pour le code du template, vous pouvez utiliser un des plugins Figma suivants :

- [Inspect - Export to HTML, React, Tailwind](https://www.figma.com/community/plugin/1049994768493726219) : donne un code HTML/Tailwind à coller dans `<template>`. Juste remplacer les textes par les interpolations (eg. `{{ maProp }}`)
- [AutoHTML](https://www.figma.com/community/plugin/1077172952654000760) : Fais un composant (choisir Vue et Taillwind en option). Mais pas en TypeScript ni avec les types de PocketBase.

Pour les `props` du composant `MaisonCard`, bien utiliser le type fait manuellement : `MaisonRecord` à importer de `/src/types.ts`.

```ts
import type { MaisonResponse } from '@/types'

const props: MaisonResponse = defineProps<MaisonResponse>()
```

### Tester le composant

Dans le `<template>` de `App.vue`, ajouter :

```html
<MaisonCard v-bind="maisonsListe[0]" />
```

(Vérifiez que l'import du composant a été automatiquement ajouté.)

## Afficher les données

Afficher toutes les maisons avec un `v-for`comme [vu en CM/TD][CM-boucle-objet]

[CM-boucle-objet]: https://github.com/ppierre/vue-base-tailwind/tree/vue3.3-test-personne#usage-dans-une-boucle

## PocketBase (données dynamiques)

### Intégration au projet VueJS

S'assure que PocketBase n'est pas en cours d'exécution. Puis, déplacer (à la racine) le dossier `pocketbase` fait (en R214 | Système d'information) dans ce projet.

Rq: s'assurer d'avoir une propriété `image` (au singulier) stockant qu'une image (et non une liste).

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

### Utiliser le type généré

Dans `pages/index.vue` :

- Remplacer l'import du type `MaisonResponse` depuis `@/types` par `@/pocketbase-types`.
- Vérifiez que l'éditeur ne signale pas d'erreurs.
  ```ts
  const maisonsListe:MaisonResponse[] = /* ... */
  ```
- Faire de même dans le composant [`/src/components/MaisonCard.vue`](/src/components/MaisonCard.vue)
- Vérifiez que l'éditeur ne signale pas d'erreurs.

Vous pouvez maintenant effacer le fichier `/src/types.ts`.

Pour l'avenir, retenez cette démarche :

- Faire la structure de données dans le backend (PocketBase).
- Générer les types correspondants.
- Utiliser les types pour s'assurer d'écrire un code adapté aux données.

### Afficher les images

Ne fonctionne que si PocketBase est lancé et que vous avez utilisé les données copiées depuis votre PocketBase.

Pour obtenir les "vraies" URL des images, le code suivant ([PocketBase file URL][pb-file-url]) est nécessaire. Mais je vous fournis un composant qui le fait pour vous :

[pb-file-url]: https://pocketbase.io/docs/files-handling/#file-url

#### Usage de `/src/components/ImgPb.vue`

Dans `/src/components/MaisonCard.vue` :

```html
<script setup lang="ts">
  import type { MaisonResponse } from '@/pocketbase-types'
  import ImgPb from './ImgPb.vue'

  const props = defineProps<MaisonResponse>()
</script>
<template>
  <div>
    <!-- ... Changez <img> en : -->
    <ImgPb :record="props" :filename="image" :width="387" :height="235" class="..." />
  </div>
</template>
```

- `props` contient tout l'enregistrement passé au composant.
  - Contient les "`id`" nécessaires pour retrouver ou est stocker l'image.
- `image` est la propriété contenant le nom de l'image (valeur de la colonne).

# Travail TP3

## utiliser les données dynamiques

Pour afficher sur page d'accueil les offres en favori :

Compléter le `backend.ts` fournis avec les fonctions faites en R214 | Système d'information.

Dans `/src/pages/index.vue`, remplacez le tableau par l'appel de la fonction de `/src/backend.ts` chargeant toutes les "offres" en favori (ou autre si pas faites) :

```ts
import { allMaisonsFavori } from '@/backend'

const maisonsListe = await allMaisonsFavori()
```

À noter, faire un `await` dans `<script setup>` ne fonctionne que, car l'on a mis un <[Suspense]> dans `/src/App.vue` .

## pages "offres", toutes les "offres"

Faire le fichier `/src/pages/offres/index.vue`

- Même code que `/src/pages/index.vue`
- Remplacer `allMaisonsFavori` par `allMaisonsSorted`

Testez en allant à l'URL : http://localhost:5173/offres

**Important :** Apprenez à afficher les routes dans Vue DevTools (demandez).

## Menu de navigation

Pour les liens il est préférable d'utiliser le composant <[RouterLink]>

[RouterLink]: https://router.vuejs.org/api/interfaces/RouterLinkProps.html

Ajouter le menu dans `/src/App.vue` :

```html
<nav>
  <ul>
    <li>
      <RouterLink to="/">Accueil</RouterLink>
    </li>
    <li>
      <RouterLink to="/offres">Toutes les offres</RouterLink>
    </li>
  </ul>
</nav>
```

# Travail TP4

Faire le fichier `/src/pages/offres/[id].vue`

## Changer `/offres` en une liste de liens

```html
<ul>
  <li v-for="uneMaison of maisonsListe" :v-key="uneMaison.id">
    <RouterLink
      :to="{
        name: '/offres/[id]',
        params: {
          id: uneMaison.id
        }
      }"
      class="text-red-400 hover:text-red-600"
    >
      {{ uneMaison.nomMaison }}
    </RouterLink>
  </li>
</ul>
```

On remarquera l'usage d'un binding (`:`) pour la props `to` pour pouvoir passer un objet :

- `name` : le nom de la route (ne change pas avec les paramètres)
- `params` : un objet contenant les paramètres de route passés au composant affiché par la route (de `/src/pages/...` dans `<RouterView>`)

## afficher une offre :

fichier `/src/pages/offres/[id].vue`

```html
<script setup lang="ts">
  import MaisonCard from '@/components/MaisonCard.vue'

  import { useRoute } from 'vue-router/auto'

  const route = useRoute('/offres/[id]')
  console.log('id :', route.params.id)

  const uneMaison = await /* Avez-vous une fonction pour cela ? */
</script>
<template>
  <div>
    <h1 class="text-xl">Une maison</h1>
    <MaisonCard v-bind="uneMaison" />
  </div>
</template>
```

# Travail TP5

- `/src/pages/agents/index.vue` : la liste des agents avec des liens vers...
- `/src/pages/agents/[id].vue` : la page d'un agent qui liste les offres dont il est responsable.
