<script setup lang="ts">
import LogoIcon from '@/components/icons/IconLogo.vue'
import SearchIcon from '@/components/icons/IconSearch.vue'
import { RouterLink } from 'vue-router'
import { ref, computed, watch } from 'vue'

// Créer une référence réactive pour suivre l'état du menu
const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}


</script>

<template >
  <header class="px-6 py-2 bg-white sticky top-0 z-10 w-full flex items-stretch justify-between lg:py-0">
    <div class="flex items-center">
      <RouterLink to="/">
        <LogoIcon />
      </RouterLink>
    </div>

    <div class="flex items-center gap-4 lg:flex-row-reverse">
     

      <button
        class="relative z-10 flex h-5 w-8 flex-col justify-between *:h-[2px] *:w-full *:bg-black *:transition-all *:duration-300 *:ease lg:hidden"
        @click="activeMenu = !activeMenu"
      >
        <div :class="{ 'translate-y-[9px] rotate-45 !bg-white': activeMenu }"></div>
        <div :class="{ '!bg-white opacity-0': activeMenu }"></div>
        <div :class="{ '-translate-y-[9px] -rotate-45 !bg-white': activeMenu }"></div>
      </button>

      <nav
        class="invisible fixed inset-0 bg-indigo text-2xl text-white opacity-0 transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100"
        :class="{ '!visible opacity-100': activeMenu }"
        v-scroll-lock="activeMenu"
      >
        <ul class="mt-[25vh] mx-16 lg:m-0 lg:flex">
          <li class="menu-item">
            <RouterLink class="menu-link" to="/Accordéon1" @click="closeMenu"
              >Accordéon classique</RouterLink
            >
          </li>
          <li class="menu-item">
            <RouterLink class="menu-link" to="/Accordéon2" @click="closeMenu"
              >Accordéon v-for</RouterLink
            >
          </li>
         
          <li class="menu-item">
            <RouterLink
              class="menu-link lg:bg-indigo-500 lg:rounded-xl lg:text-white lg:px-8"
              to="/inscription"
              @click="closeMenu"
              >S'inscrire</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
