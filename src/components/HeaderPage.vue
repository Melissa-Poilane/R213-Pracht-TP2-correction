<script setup lang="ts">
import LogoIcon from '@/components/icons/IconLogo.vue'
import { RouterLink } from 'vue-router/auto'
import { ref } from 'vue'

const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}
</script>

<template>
  <header class="flex align-baseline bg-white px-6  sticky top-0 z-10 w-full border-b border-indigo-100 ">

    <div class="flex justify-between w-full absolute top-0 left-0 items-center bg-white px-6 py-6 z-10 border-b-2 border-indigo-100 lg:relative lg:border-transparent lg:w-auto  ">
      <RouterLink to="/" @click="closeMenu" >
        <LogoIcon />
      </RouterLink>
      <button
        class="relative z-10 flex h-5 w-8 flex-col justify-between  *:h-[2px] *:w-full *:bg-black *:transition-all *:duration-300 *:ease lg:hidden"
        @click="activeMenu = !activeMenu"
      >
        <div :class="{ 'translate-y-[9px] rotate-45 ': activeMenu }"></div>
        <div :class="{ ' opacity-0': activeMenu }"></div>
        <div :class="{ '-translate-y-[9px] -rotate-45 ': activeMenu }"></div>
      </button>
    </div>

<!-- menu -->

      <nav
        class="grow flex flex-col h-full mt-6 bg-indigo-50 fixed inset-0 invisible opacity-0 transition-all duration-300 ease-in-out lg:visible lg:relative justify-between lg:items-center lg:bg-transparent lg:text-sm lg:text-black lg:font-bold lg:uppercase lg:opacity-100 lg:flex-row"
        :class="{ '!visible opacity-100': activeMenu }"
        v-scroll-lock="activeMenu"
      >
        <ul class="mx-6 mt-[15dvh] gap-4 lg:flex lg:m-0 items-center">
          <li class="menu-item" >
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
            <RouterLink class="menu-link" to="/offres" @click="closeMenu">Toutes les offres</RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink class="menu-link" to="/manage" @click="closeMenu">Manage&nbsp;Proprety</RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink class="menu-link" to="/ressources" @click="closeMenu"
              >Ressources</RouterLink
            >
          </li>
        </ul>

        <ul class="flex mx-6 my-6 gap-4 font-bold lg:flex lg:m-0">
    <li class="flex-grow menu-item text-indigo-500" > 
      <RouterLink class="menu-link  px-6 border-2 flex justify-center border-indigo-200" to="/connexion" @click="closeMenu">Login</RouterLink>
    </li>
    <li class="flex-grow menu-item text-white">
      <RouterLink class="menu-link px-6 border-2 border-indigo-500 bg-indigo-500 flex justify-center" to="/connexion" @click="closeMenu">Sign&nbsp;up</RouterLink>
    </li>
  </ul>
      </nav>
  </header>
</template>
