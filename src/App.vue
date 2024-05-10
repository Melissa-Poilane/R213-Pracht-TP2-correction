<script setup lang="ts">
import { onErrorCaptured } from 'vue'
import HeaderPage from './components/HeaderPage.vue';
import { RouterLink, RouterView } from 'vue-router/auto'

onErrorCaptured((err, instance, info) => {
  console.error('erreur : ', err, '\ninfo : ', info, '\ncomposant : ', instance)
  return true
})

import FooterPage from './components/FooterPage.vue' // Importez le composant FooterPage

</script>

<template>
 <HeaderPage />
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </RouterView>
  <FooterPage />
</template>
