<script setup lang="ts">
  import { pb } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue'

  import { useRoute } from 'vue-router/auto'

  const route = useRoute('/offres/[id]')
  console.log('id :', route.params.id)

  const maison = await pb.collection('maison').getOne(route.params.id);
</script>
<template>
  <div>
    <h1 class="text-xl">Une maison</h1>
    <MaisonCard v-bind="maison" />
  </div>
</template>