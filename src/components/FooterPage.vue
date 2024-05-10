<script setup lang="ts">
import IconLogo from './icons/IconLogo.vue'
import IconFacebook from './icons/IconFacebook.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
</script>

<template>
  <footer class="container bg-Default-white  ">
    <div class="lg:flex lg:justify-center ">
    <div class="my-12 lg:mt-0">
    <IconLogo /></div>
<div class="columns-2 lg:columns-3 mb-20 space-y-8">
 
         <div>
    <h5>SELL A HOME</h5>
    <ul>
        <li><RouterLink to="#">Request an offer</RouterLink></li>
        <li><RouterLink to="#">Pricing</RouterLink></li>
        <li><RouterLink to="#">Reviews</RouterLink></li>
        <li><RouterLink to="#">Stories</RouterLink></li>
    </ul>  
   </div>
<div>
    <h5>BUY A HOME</h5>
    <ul >
        <li><RouterLink to="#">Buy</RouterLink></li>
        <li><RouterLink to="#">Finance</RouterLink></li>
    </ul>   
   </div>

    <div>
    <h5>BUY, RENT AND SELL</h5>
    <ul>
        <li><RouterLink to="#">Buy & sell properties</RouterLink></li>
        <li><RouterLink to="#">Rent home</RouterLink></li>
        <li><RouterLink to="#">Builder trade-up</RouterLink></li>
    </ul>   
   </div>
    

   
    <div class="break-inside-avoid-column">
    <h5>TERMS & PRIVACY</h5>
    <ul >
        <li><RouterLink to="#">Trust & Safety</RouterLink></li>
        <li><RouterLink to="#">Terms of Service</RouterLink></li>
        <li><RouterLink to="#">Privacy Policy</RouterLink></li>
    </ul>   
   </div>
   
   <div>
    <h5>ABOUT</h5>
    <ul>
        <li><RouterLink to="#">Company</RouterLink></li>
        <li><RouterLink to="#">How it works</RouterLink></li>
        <li><RouterLink to="#">Contact</RouterLink></li>
        <li><RouterLink to="#">Investors</RouterLink></li>
    </ul>   
   </div>



   <div>
    <h5>RESOURCES</h5>
    <ul>
        <li><RouterLink to="#">Blog</RouterLink></li>
        <li><RouterLink to="#">Guides</RouterLink></li>
        <li><RouterLink to="#">FAQ</RouterLink></li>
        <li><RouterLink to="#">Help Center</RouterLink></li>
    </ul>   
   </div>
</div>
</div>
   <div class="lg:mx-36 flex flex-col lg:flex-row justify-center items-center lg:justify-between  lg:items-baseline border-t-2 border-indigo-100 pt-8 ">
    <p class="text-base text-gray-900 leading-6 font-normal">© 2021 Estatery. All rights reserved</p>
    <ul class="flex gap-10 mt-6 mb-12">
        <li><a href="#"><IconFacebook/></a></li>
        <li><a href="#"><IconInstagram/></a></li>
        <li><a href="#"><IconTwitter/></a></li>
        <li><a href="#"><IconLinkedin/></a></li>
    </ul>
   </div>

  </footer>
</template>
