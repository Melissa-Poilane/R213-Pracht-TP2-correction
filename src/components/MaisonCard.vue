<script setup lang="ts">
import type { MaisonRecord } from '@/pocketbase-types'

defineProps<MaisonRecord>()
</script>

<template>
  <div
    class="bg-default-white border-default-indigo-100 relative flex h-[417px] w-[387px] flex-col items-start justify-start gap-0 rounded-lg border-[1.5px] border-solid"
  >
    <div class="static h-[200px] shrink-0 self-stretch">
      <div
        class="absolute left-[calc(50%_-_193.5px)] top-0 h-[200px] w-[387px] rounded-[8px_8px_0px_0px] bg-[#130f26]"
      ></div>

      <img
        class="absolute left-[calc(50%_-_193.5px)] top-[-24px] h-[235px] w-[387px]"
        src="pexels-binyamin-mellish-106399-1.png"
      />
    </div>

    <div
      class="relative flex shrink-0 flex-col items-start justify-start gap-[15px] self-stretch pb-[30px] pl-5 pr-5 pt-[30px]"
    >
      <div
        class="relative flex shrink-0 flex-row items-start justify-start gap-[15px] self-stretch"
      >
        <div class="relative flex flex-1 flex-col items-start justify-start gap-2.5">
          <div class="relative flex w-[197.07px] shrink-0 flex-row items-end justify-start gap-0.5">
            <div
              class="text-default-indigo-500 relative text-left"
              style="font: var(--text-2-xl-leading-8-font-bold, 700 24px/32px 'Inter', sans-serif)"
            >
              {{ prix }}
            </div>

            <div
              class="text-default-gray-500 relative flex h-8 w-[58px] items-center justify-start text-left"
              style="
                font: var(--text-base-leading-6-font-normal, 400 16px/24px 'Inter', sans-serif);
              "
            >
              /month
            </div>
          </div>

          <div
            class="text-default-gray-900 relative h-8 w-[299px] text-left"
            style="
              font: var(--text-2-xl-leading-8-font-semibold, 600 24px/32px 'Inter', sans-serif);
            "
          >
            {{ nomMaison }}
          </div>
        </div>

        <div class="static h-12 w-12 shrink-0">
          <div
            class="bg-default-white border-default-indigo-100 absolute right-0 top-[calc(50%_-_37px)] h-12 w-12 rounded-[50%] border-[1.5px] border-solid"
            style="box-shadow: 0px 4px 20px 0px rgba(14, 8, 84, 0.1)"
          ></div>

          <svg
            class="absolute right-3 top-[calc(50%_-_24px)] overflow-visible"
            style=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" fill="white" />
            <path
              d="M4.31804 5.31804C3.90017 5.7359 3.5687 6.23198 3.34255 6.77795C3.1164 7.32392 3 7.90909 3 8.50004C3 9.09099 3.1164 9.67616 3.34255 10.2221C3.5687 10.7681 3.90017 11.2642 4.31804 11.682L12 19.364L19.682 11.682C20.526 10.8381 21.0001 9.69352 21.0001 8.50004C21.0001 7.30656 20.526 6.16196 19.682 5.31804C18.8381 4.47412 17.6935 4.00001 16.5 4.00001C15.3066 4.00001 14.162 4.47412 13.318 5.31804L12 6.63604L10.682 5.31804C10.2642 4.90017 9.7681 4.5687 9.22213 4.34255C8.67616 4.1164 8.09099 4 7.50004 4C6.90909 4 6.32392 4.1164 5.77795 4.34255C5.23198 4.5687 4.7359 4.90017 4.31804 5.31804V5.31804Z"
              stroke="#6366F1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div
        class="text-default-gray-500 relative self-stretch text-left"
        style="font: var(--text-base-leading-6-font-normal, 400 16px/24px 'Inter', sans-serif)"
      >
        {{ adresse }}
      </div>

      <div
        class="border-default-indigo-100 relative h-0 shrink-0 self-stretch border-solid"
        style="border-width: 1.5px 0 0 0"
      ></div>

      <div class="relative flex shrink-0 flex-row items-center justify-center gap-1.5 self-stretch">
        <div class="relative flex flex-1 flex-row items-center justify-start gap-2">
          <svg
            class="relative shrink-0 overflow-visible"
            style=""
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 9.375H3.75V5.3125C3.75124 4.89848 3.91625 4.50177 4.20901 4.20901C4.50177 3.91625 4.89848 3.75124 5.3125 3.75H14.6875C15.1015 3.75124 15.4982 3.91625 15.791 4.20901C16.0837 4.50177 16.2488 4.89848 16.25 5.3125V9.375H15Z"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.875 16.25V11.875C1.87696 11.2126 2.14098 10.5778 2.6094 10.1094C3.07781 9.64098 3.71256 9.37696 4.375 9.375H15.625C16.2874 9.37696 16.9222 9.64098 17.3906 10.1094C17.859 10.5778 18.123 11.2126 18.125 11.875V16.25"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.875 16.25V15.9375C1.87572 15.6891 1.97473 15.451 2.15038 15.2754C2.32604 15.0997 2.56408 15.0007 2.8125 15H17.1875C17.4359 15.0007 17.674 15.0997 17.8496 15.2754C18.0253 15.451 18.1243 15.6891 18.125 15.9375V16.25"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div
            class="text-default-gray-600 relative text-left"
            style="font: var(--text-xs-leading-4-font-normal, 400 12px/16px 'Inter', sans-serif)"
          >
            {{ nbChambres }}
          </div>
        </div>

        <div class="relative flex flex-1 flex-row items-center justify-center gap-2">
          <svg
            class="relative shrink-0 overflow-visible"
            style=""
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_29323_902)">
              <path
                d="M3.33333 10H16.6667C16.8877 10 17.0996 10.0878 17.2559 10.2441C17.4122 10.4004 17.5 10.6123 17.5 10.8333V13.3333C17.5 14.2174 17.1488 15.0652 16.5237 15.6904C15.8986 16.3155 15.0507 16.6667 14.1667 16.6667H5.83333C4.94928 16.6667 4.10143 16.3155 3.47631 15.6904C2.85119 15.0652 2.5 14.2174 2.5 13.3333V10.8333C2.5 10.6123 2.5878 10.4004 2.74408 10.2441C2.90036 10.0878 3.11232 10 3.33333 10V10Z"
                stroke="#6366F1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 10V4.16667C5 3.72464 5.17559 3.30072 5.48816 2.98816C5.80072 2.67559 6.22464 2.5 6.66667 2.5H9.16667V4.375"
                stroke="#6366F1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.33337 17.5L4.16671 16.25"
                stroke="#6366F1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.6667 17.5L15.8334 16.25"
                stroke="#6366F1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_29323_902">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div
            class="text-default-gray-600 relative text-left"
            style="font: var(--text-xs-leading-4-font-normal, 400 12px/16px 'Inter', sans-serif)"
          >
            {{ nbSdb }}
          </div>
        </div>

        <div class="relative flex flex-1 flex-row items-center justify-end gap-2">
          <svg
            class="relative shrink-0 overflow-visible"
            style=""
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_29323_913)">
              <path
                d="M8.83161 15.5436L3.45643 10.1684C2.84802 9.56002 2.84802 8.4398 3.45643 7.83139L8.83161 2.45621C9.44001 1.84781 10.5602 1.84781 11.1686 2.45621L16.5438 7.83139C17.1522 8.4398 17.1522 9.56002 16.5438 10.1684L11.1686 15.5436C10.5602 16.152 9.44001 16.152 8.83161 15.5436V15.5436Z"
                stroke="#6366F1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.99988 13.1716L6.36359 17.5353"
                stroke="#6366F1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.6361 17.5353L17.9998 13.1716"
                stroke="#6366F1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_29323_913">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div
            class="text-default-gray-600 relative text-left"
            style="font: var(--text-xs-leading-4-font-normal, 400 12px/16px 'Inter', sans-serif)"
          >
            {{ surface }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
