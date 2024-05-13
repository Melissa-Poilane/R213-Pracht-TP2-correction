<script setup lang="ts">
import IconLove from '@/components/icons/IconLove.vue'
import IconBed from '@/components/icons/IconBed.vue'
import IconBath from '@/components/icons/IconBath.vue'
import IconArea from '@/components/icons/IconArea.vue'
import { defineProps } from 'vue' // Add this import statement

import type { MaisonRecord } from '@/types'
defineProps<MaisonRecord>() 

</script>

<template>

<div class="flex flex-col rounded-lg border-2 border-indigo-100 mx-4 bg-white">
<img :src="image" alt="Image de la maison" class="h-52 bg-slate-200 ">

<div class="flex  flex-col gap-4 px-5 py-8">
    <div class="flex justify-between">
        <div class="flex flex-col gap-3">
            <div class="flex items-center">
            <h2 class="text-indigo-500">$ {{prix}} </h2>
            <p>/month</p>
            </div>
            <h2>{{nomMaison}}</h2>
        </div>
<IconLove class="p-3 border-2 border-indigo-100 rounded-full fill-none" :class="{ 'fill-red-400': favori }" /> 
<!-- PROBLEME DE FLEX -->
    </div>

    <p class="border-b-2 border-indigo-100 pb-4">{{adresse}}</p>

    <div class="flex justify-between">
        <div class="flex gap-2">
            <IconBed class="stroke-indigo-500"/>
            <p>{{nbChambres}} Beds</p>
        </div>

        <div class="flex gap-2">
            <IconBath class="stroke-indigo-500"/>
            <p>{{nbSdb}} Bathrooms</p>
        </div>

        <div class="flex gap-2">
            <IconArea class="stroke-indigo-500"/>
            <p>{{surface}} m²</p>
        </div>
    </div>
</div>
</div>

</template>