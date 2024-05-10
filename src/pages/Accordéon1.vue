<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';

const sectionOpen = ref(1)

</script>
<template>
    
 <section >
    <button class="text-xl" @pointerdown="sectionOpen = sectionOpen === 1 ? 0 : 1">bouton 1 </button>
    <p v-show="sectionOpen === 1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores hic, pariatur sed veritatis tempore atque ducimus natus sapiente eveniet, corporis laborum ullam eaque dignissimos at iste dolore consequuntur? Blanditiis, labore.</p>
  </section>
  <section >
    <button class="text-xl" @pointerdown="sectionOpen = sectionOpen === 2 ? 0 : 2">bouton 2</button>
    <p v-show="sectionOpen === 2">Error quae itaque iste molestiae ipsum earum voluptas similique delectus atque laborum consectetur et non consequatur ex nihil, repudiandae alias necessitatibus nemo nisi? Reiciendis, modi quia ipsum ratione dolorem ut!</p>
  </section>
  <section >
    <button class="text-xl" @pointerdown="sectionOpen = sectionOpen === 3 ? 0 : 3">bouton 3</button>
    <p v-show="sectionOpen === 3">Fuga, ea adipisci omnis dolore autem veniam reiciendis voluptate praesentium repellat aperiam ipsa, tempore voluptatibus? Ab, ea est! Eum voluptates at deserunt error accusamus omnis cum voluptatem incidunt dicta dolore.</p>
  </section>
</template>