<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
  import type { MaisonRecord } from '@/types'
 

  defineProps<MaisonRecord>()
</script>
<template>
  <div class="personne-card border-2 p-1">
    <p>favori : {{ favori ? 'oui' : 'non' }}</p>
  </div>
  <div
  class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative rounded-lg bg-white border-[1.5px] border-indigo-100"
>
  <div class="self-stretch flex-grow-0 flex-shrink-0 h-[200px]">
    <div
      class="w-[360px] h-[200px] absolute left-[-0.5px] top-[-0.5px] rounded-tl-lg rounded-tr-lg bg-gray-500"
    ></div>
    <img
      class="w-[360px] h-[235px] absolute left-[-0.5px] top-[-24.5px] object-cover"
    />
  </div>
  <div
    class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 px-5 py-7"
  >
    <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
      <div class="flex-grow-0 flex-shrink-0 w-[249px] h-[75px]">
        <div class="flex justify-start items-end w-[164.11px] absolute left-0 top-0 gap-0.5">
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-indigo-500">
            ${{ prix }}
          </p>
          <p class="flex-grow-0 flex-shrink-0 w-[58px] h-8 text-base text-left text-gray-500">
            /month
          </p>
        </div>
        <p
          class="w-[249px] absolute left-0 top-[43px] text-2xl font-semibold text-left text-gray-900"
        >
        {{ nomMaison }}
        </p>
      </div>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="flex-grow-0 flex-shrink-0 w-12 h-12"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="24" cy="24" r="23.25" fill="white" stroke="#E0E7FF" stroke-width="1.5"></circle>
        <path :fill="'red'"
          d="M16.318 18.318C15.9002 18.7359 15.5687 19.232 15.3425 19.778C15.1164 20.3239 15 20.9091 15 21.5C15 22.091 15.1164 22.6762 15.3425 23.2221C15.5687 23.7681 15.9002 24.2642 16.318 24.682L24 32.364L31.682 24.682C32.526 23.8381 33.0001 22.6935 33.0001 21.5C33.0001 20.3066 32.526 19.162 31.682 18.318C30.8381 17.4741 29.6935 17 28.5 17C27.3066 17 26.162 17.4741 25.318 18.318L24 19.636L22.682 18.318C22.2642 17.9002 21.7681 17.5687 21.2221 17.3425C20.6762 17.1164 20.091 17 19.5 17C18.9091 17 18.3239 17.1164 17.778 17.3425C17.232 17.5687 16.7359 17.9002 16.318 18.318V18.318Z"
          stroke="#6366F1"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
    <p class="self-stretch flex-grow-0 flex-shrink-0 w-80 text-base text-left text-gray-500">
      {{ adresse }}
    </p>
    <svg
      width="320"
      height="2"
      viewBox="0 0 320 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="self-stretch flex-grow-0 flex-shrink-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="1.25" x2="320" y2="1.25" stroke="#E0E7FF" stroke-width="1.5"></line>
    </svg>
    <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-1.5">
      <div class="flex justify-start items-center flex-grow relative gap-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M15 9.375H3.75V5.3125C3.75124 4.89848 3.91625 4.50177 4.20901 4.20901C4.50177 3.91625 4.89848 3.75124 5.3125 3.75H14.6875C15.1015 3.75124 15.4982 3.91625 15.791 4.20901C16.0837 4.50177 16.2488 4.89848 16.25 5.3125V9.375H15Z"
            stroke="#6366F1"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1.875 16.25V11.875C1.87696 11.2126 2.14098 10.5778 2.6094 10.1094C3.07781 9.64098 3.71256 9.37696 4.375 9.375H15.625C16.2874 9.37696 16.9222 9.64098 17.3906 10.1094C17.859 10.5778 18.123 11.2126 18.125 11.875V16.25"
            stroke="#6366F1"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1.875 16.25V15.9375C1.87572 15.6891 1.97473 15.451 2.15038 15.2754C2.32604 15.0997 2.56408 15.0007 2.8125 15H17.1875C17.4359 15.0007 17.674 15.0997 17.8496 15.2754C18.0253 15.451 18.1243 15.6891 18.125 15.9375V16.25"
            stroke="#6366F1"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
          <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-gray-600">{{ nbChambres }}</p>
          <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-gray-600">Beds</p>
        </div>
      </div>
      <div class="flex justify-center items-center flex-grow relative gap-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <g clip-path="url(#clip0_34922_562)">
            <path
              d="M3.33333 10H16.6667C16.8877 10 17.0996 10.0878 17.2559 10.2441C17.4122 10.4004 17.5 10.6123 17.5 10.8333V13.3333C17.5 14.2174 17.1488 15.0652 16.5237 15.6904C15.8986 16.3155 15.0507 16.6667 14.1667 16.6667H5.83333C4.94928 16.6667 4.10143 16.3155 3.47631 15.6904C2.85119 15.0652 2.5 14.2174 2.5 13.3333V10.8333C2.5 10.6123 2.5878 10.4004 2.74408 10.2441C2.90036 10.0878 3.11232 10 3.33333 10V10Z"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M5 10V4.16667C5 3.72464 5.17559 3.30072 5.48816 2.98816C5.80072 2.67559 6.22464 2.5 6.66667 2.5H9.16667V4.375"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3.33325 17.5L4.16659 16.25"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M16.6666 17.5L15.8333 16.25"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_34922_562">
              <rect width="20" height="20" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1">
          <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-gray-600">{{ nbSdb }}</p>
          <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-gray-600">Bathrooms</p>
        </div>
      </div>
      <div class="flex justify-end items-center flex-grow relative gap-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
          preserveAspectRatio="none"
        >
          <g clip-path="url(#clip0_34922_572)">
            <path
              d="M8.83148 15.5437L3.45631 10.1685C2.8479 9.56011 2.8479 8.43989 3.45631 7.83148L8.83148 2.45631C9.43989 1.8479 10.5601 1.8479 11.1685 2.45631L16.5437 7.83148C17.1521 8.43989 17.1521 9.56011 16.5437 10.1685L11.1685 15.5437C10.5601 16.1521 9.43989 16.1521 8.83148 15.5437V15.5437Z"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M2 13.1716L6.36371 17.5353"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M13.6362 17.5353L17.9999 13.1716"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_34922_572">
              <rect width="20" height="20" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-1">
          <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-gray-600">{{ surface }}</p>
          <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-gray-600">m²</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>