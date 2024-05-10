<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
import { sectionsData } from "../data";

const activeAccordion = ref<number | null>(null)


</script>
<template>

    <div v-for="(section, key) in sectionsData" :key="key">
  <button class="accordion" @pointerdown="activeAccordion = activeAccordion === key ? null : key">
    {{ section.label }}
  </button>
  <div class="panel" v-show="activeAccordion === key">
    <p>{{ section.texte }}</p>
  </div>
</div>
</template>