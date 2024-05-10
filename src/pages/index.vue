<script setup lang="ts">
import MaisonCard from '@/components/Maisoncard.vue';
import type { MaisonRecord } from '@/types';

const maisonsListe: MaisonRecord[]
 = [
  {
    adresse: '123 rue des roses, 75000 Paris',
    collectionId: 's45u5tlo28basdz',
    collectionName: 'maison',
    created: '2024-04-12 08:37:27.820Z',
    favori: true,
    id: '81b0peqhqb0jdun',
    image: 'pexels_expect_best_323780_OQHXXuwrLS.jpg',
    nbChambres: 3,
    nbSdb: 0,
    nomMaison: 'Villa moderne',
    prix: 500000,
    surface: 120,
    updated: '2024-04-12 09:36:42.797Z'
  },
  {
    adresse: '456 chemin des lilas, 12345 Villefranche',
    collectionId: 's45u5tlo28basdz',
    collectionName: 'maison',
    created: '2024-04-12 08:38:54.224Z',
    favori: false,
    id: 'gerzygsyzca1e57',
    image: 'pexels_christa_grover_2121121_07R2WmZEey.jpg',
    nbChambres: 4,
    nbSdb: 1,
    nomMaison: 'Maison de campagne',
    prix: 350000,
    surface: 132,
    updated: '2024-04-12 09:36:32.376Z'
  },
  {
    adresse: '789 avenue des tilleuls, 75011 Pari',
    collectionId: 's45u5tlo28basdz',
    collectionName: 'maison',
    created: '2024-04-12 08:39:54.857Z',
    favori: false,
    id: '8qwzbiflszfyd6g',
    image: 'pexels_thgusstavo_santana_2102587_XOciLquyFF.jpg',
    nbChambres: 2,
    nbSdb: 0,
    nomMaison: 'Appartement en ville',
    prix: 250000,
    surface: 60,
    updated: '2024-04-12 09:36:17.557Z'
  },
  {
    adresse: '321 rue du faubourg, 75010 Paris',
    collectionId: 's45u5tlo28basdz',
    collectionName: 'maison',
    created: '2024-04-12 08:40:38.199Z',
    favori: true,
    id: 'k47f521mhd54gng',
    image: 'pexels_scott_webb_1029599_eNlE8bQhYz.jpg',
    nbChambres: 1,
    nbSdb: 1,
    nomMaison: 'Loft industriel',
    prix: 700000,
    surface: 80,
    updated: '2024-04-12 09:36:06.726Z'
  },
  {
    adresse: '147 chemin des sapins, 73000 Chambéry',
    collectionId: 's45u5tlo28basdz',
    collectionName: 'maison',
    created: '2024-04-12 08:41:25.864Z',
    favori: false,
    id: 'b8vt1k1kx3sbtpu',
    image: 'pexels_binyamin_mellish_186077_ffHH1lCHLi.jpg',
    nbChambres: 3,
    nbSdb: 2,
    nomMaison: 'Chalet à la montagne',
    prix: 450000,
    surface: 100,
    updated: '2024-04-12 09:35:57.526Z'
  }
]

console.log(maisonsListe);

</script>

<template >


  <h1 class="text-2xl">Bonjour monde !</h1>
<!-- <MaisonCard v-bind="maisonsListe[0]"/>  -->
<MaisonCard v-for="maison in maisonsListe" :maison="maison" :key="maison.id" /> 
</template>