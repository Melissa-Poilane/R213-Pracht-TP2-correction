<script setup lang="ts">
import card from '@/components/Maisoncard.vue'
import IconSearch from '@/components/icons/IconSearch.vue'

import type { MaisonRecord } from '@/types';

const maisonsListe: MaisonRecord[] = [
  {
    adresse: '123 rue des roses, 75000 Paris',
    collectionId: 's45u5tlo28basdz',
    collectionName: 'maison',
    created: '2024-04-12 08:37:27.820Z',
    favori: true,
    id: '81b0peqhqb0jdun',
    image: 'https://www.pexels.com/fr-fr/photo/maison-en-beton-bleu-et-gris-avec-grenier-pendant-le-crepuscule-186077/',
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

</script>


<template>
  <main class="bg-indigo-50 py-14">
  <div class="flex flex-col p-4 text-center gap-8 max-w-screen-xl mx-auto mb-10 lg:mb-12">
    <div class="flex flex-col gap-8 lg:flex-row lg:justify-between">
    <h1 class=" text-4xl leading-10">Search properties to rent</h1>

   
  <div class="flex justify-between items-center px-4 py-3 rounded-lg bg-white border-2 border-indigo-100 lg:gap-32" >
    <p class="opacity-70">
      Search with Search Bar
    </p>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle cx="10" cy="10" r="10" fill="#E0E7FF"></circle>
      <g clip-path="url(#clip0_4372_182)">
        <path
          d="M6.5 8.25L10 11.75L13.5 8.25"
          stroke="#6366F1"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_4372_182">
          <rect width="12" height="12" fill="white" transform="translate(4 4)"></rect>
        </clipPath>
      </defs>
    </svg>
  </div>
</div>
<div class=" flex justify-between items-center p-2 pl-4 rounded-lg bg-white">
  <p>Search location</p>
    <IconSearch class="p-3.5 rounded-lg bg-indigo-500 stroke-white" />
</div> 

  </div>

  <div class="grille">
    <card v-for="maison in maisonsListe" :maison="maison" :key="maison.id" v-bind="maison"/>



  </div>
  
  <div class="small flex justify-center items-center gap-4 mx-6 mt-8">
  <svg
  width="40"
  height="40"
  viewBox="0 0 40 40"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="flex-grow-0 flex-shrink-0 w-10 h-10"
  preserveAspectRatio="xMidYMid meet"
>
  <g opacity="0.5" clip-path="url(#clip0_4372_769)">
    <path
      d="M22.5 15L17.5 20L22.5 25"
      stroke="#312E81"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </g>
  <defs>
    <clipPath id="clip0_4372_769">
      <rect width="20" height="20" fill="white" transform="translate(10 10)"></rect>
    </clipPath>
  </defs>
</svg>
<p class=" text-white px-3 py-1.5 bg-indigo-900 rounded-full">1</p>
<p class="px-3 py-1.5 bg-white rounded-full">2</p>
<p class="px-3 py-1.5 rounded-full">...</p>
<p class="px-[7px] p-1.5 bg-white rounded-full">10</p>
<svg
  width="40"
  height="40"
  viewBox="0 0 40 40"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="flex-grow-0 flex-shrink-0 w-10 h-10"
  preserveAspectRatio="xMidYMid meet"
>
  <g opacity="0.5" clip-path="url(#clip0_4372_786)">
    <path
      d="M17.5 15L22.5 20L17.5 25"
      stroke="#312E81"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </g>
  <defs>
    <clipPath id="clip0_4372_786">
      <rect width="20" height="20" fill="white" transform="translate(10 10)"></rect>
    </clipPath>
  </defs>
</svg>
</div>
  </main>
</template>
