<script setup lang="ts">
// Importer ici les composants des icônes
import IconLogo from '@/components/icons/IconLogo.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <footer class="container space-y-10 pt-20 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
    <IconLogo class="mx-8 lg:col-span-1" />
    <nav
      class="px-5 columns-2 gap-8 space-y-8 lg:columns-3 lg:col-span-3 lg:px-0 *:break-inside-avoid *:space-y-3"
    >
      <div>
        <h3 class="uppercase text-sm lg:text-base">Sell at home</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <li><RouterLink to="/request">Request an offer</RouterLink></li>
          <li><RouterLink to="/pricing">Pricing</RouterLink></li>
          <li><RouterLink to="/reviews">Reviews</RouterLink></li>
          <li><RouterLink to="/stories">Stories</RouterLink></li>
        </ul>
      </div>
      <div>
        <h3 class="uppercase text-sm lg:text-base">Buy a home</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <li><RouterLink to="/buy">Buy</RouterLink></li>
          <li><RouterLink to="/finance">Finance</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="uppercase text-sm lg:text-base">Buy, rent and sell</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <li><RouterLink to="/buy-and-sell">Buy and sell properties</RouterLink></li>
          <li><RouterLink to="/rent">Rent home</RouterLink></li>
          <li><RouterLink to="/builder">Builder trade-up</RouterLink></li>
        </ul>
      </div>
      <div>
        <h3 class="uppercase text-sm lg:text-base">Terms &amp; privacy</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <li><RouterLink to="/trust">Trust & Safety</RouterLink></li>
          <li><RouterLink to="/terms">Terms of Service</RouterLink></li>
          <li><RouterLink to="/privacy">Privacy Policy</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="uppercase text-sm lg:text-base">About</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <li><RouterLink to="/company">Company</RouterLink></li>
          <li><RouterLink to="/how-it-works">How it works</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
          <li><RouterLink to="/investors">Investors</RouterLink></li>
        </ul>
      </div>
      <div class="break-inside-avoid space-y-3">
        <h3 class="uppercase text-sm lg:text-base">Resources</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <li><RouterLink to="/blog">Blog</RouterLink></li>
          <li><RouterLink to="/guides">Guides</RouterLink></li>
          <li><RouterLink to="/faq">FAQ</RouterLink></li>
          <li><RouterLink to="/help">Help Center</RouterLink></li>
        </ul>
      </div>
    </nav>
    <div
      class="px-5 text-gray-400 border-t border-gray-300 py-8 space-y-6 text-center lg:col-span-4 lg:flex lg:justify-around lg:items-center lg:space-y-0"
    >
      <p>©2021 Estatery. All rights reserved</p>
      <ul class="flex gap-12 justify-center">
        <li>
          <a href="#" aria-label="Facebook"
            ><IconFacebook class="fill-gray-400" aria-hidden="true"
          /></a>
        </li>
        <li>
          <a href="#" aria-label="Instagram"
            ><IconInstagram class="fill-gray-400" aria-hidden="true"
          /></a>
        </li>
        <li>
          <a href="#" aria-label="Twitter"
            ><IconTwitter class="fill-gray-400" aria-hidden="true"
          /></a>
        </li>
        <li>
          <a href="#" aria-label="Linkedin"
            ><IconLinkedin class="fill-gray-400" aria-hidden="true"
          /></a>
        </li>
      </ul>
    </div>
  </footer>
</template>
