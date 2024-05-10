<script setup lang="ts">

import { onErrorCaptured } from 'vue'
import { RouterLink, RouterView } from 'vue-router/auto'
import FooterPage from './components/FooterPage.vue' // Importez le composant FooterPage

import MaisonCard from './components/MaisonCard.vue'
import { type MaisonResponse, Collections } from './pocketbase-types'

const maisonsListe: MaisonResponse[] = [
  {
    adresse: 'rue test 90000 Belfort',
    collectionId: 'sidpkt9hmbfwoeb',
    collectionName: Collections.Maison,
    created: '2023-05-01 14:00:54.598Z',
    favori: true,
    id: '64l3n8nar836i5j',
    images: ['pexels_binyamin_mellish_106399_bnHdy6H03e.jpg'],
    nbChambres: 3,
    nbSdb: 2,
    nomMaison: 'alpha',
    prix: 252000,
    surface: 120,
    updated: '2023-05-01 14:00:54.598Z'
  },
  {
    adresse: 'Montbéliard',
    collectionId: 'sidpkt9hmbfwoeb',
    collectionName: Collections.Maison,
    created: '2023-05-01 14:01:25.740Z',
    favori: false,
    id: '2bubgl4tmljx5q4',
    images: [],
    nbChambres: 2,
    nbSdb: 1,
    nomMaison: 'beta',
    prix: 239000,
    surface: 100,
    updated: '2023-05-01 14:01:25.740Z'
  },
  {
    adresse: 'Belfort',
    collectionId: 'sidpkt9hmbfwoeb',
    collectionName: Collections.Maison,
    created: '2023-05-01 14:01:56.650Z',
    favori: true,
    id: 'yxui4b61ovt1nct',
    images: [],
    nbChambres: 5,
    nbSdb: 2,
    nomMaison: 'gamma',
    prix: 320000,
    surface: 142,
    updated: '2023-05-01 14:01:56.650Z'
  }
]
console.log(maisonsListe)

onErrorCaptured((err, instance, info) => {
  console.error('erreur : ', err, '\ninfo : ', info, '\ncomposant : ', instance)
  return true
})
import { ref } from 'vue';

const menuIsOpen = ref(false)
</script>

<template>
 <header>
    <nav>
    <div>
<button
  aria-controls="mainNav"
  aria-expanded="true"
  class="rounded-full border-2 border-red-600 bg-red-300 px-2"
  @pointerdown="menuIsOpen = !menuIsOpen"
>
  menu
</button>
<Transition
  class="transition-transform duration-1000"
  enter-from-class="-translate-x-full"
  enter-to-class="translate-x-0"
  leave-active-class="-translate-x-full"
>
<nav v-show="menuIsOpen" id="mainNav">
  <ul>
    <li><RouterLink to="/" class="text-red-500 underline"> Accueil </RouterLink></li>
    <li><RouterLink to="/Accordéon1" class="text-red-500 underline"> Accordéon classique </RouterLink></li>
    <li><RouterLink to="/Accordéon2" class="text-red-500 underline"> Accordéon v-for </RouterLink></li>
  </ul>
</nav>
</Transition>
      <ul>
        <li>
        
        </li>
      </ul>
      </div>
    </nav>
  
  </header>

  <main>
    <MaisonCard v-for="uneMaison of maisonsListe" :key="uneMaison.id" v-bind="uneMaison" />
  </main>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </RouterView>
  <FooterPage /> <!-- Utilisez le composant FooterPage ici -->
</template>
