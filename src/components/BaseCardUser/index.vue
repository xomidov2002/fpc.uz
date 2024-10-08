<script setup lang="ts">
import BaseIcon from '@/components/Icons/index.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const emit = defineEmits(['byInfo'])
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  },
  customClass: {
    type: String as any,
    default: ''
  }
})
</script>
<template>
  <div class="bg-[#14151B] hover:bg-[#080D75] transition duration-300 ease-in-out w-full h-[250px] rounded-2xl pt-[70px] relative p-5">
    <div
      class="rounded-[100%] absolute -top-[20%] left-1/2 -translate-x-1/2  overflow-hidden p-1 bg-[#0A0A0E] w-[100px] h-[100px]">
      <img src="/main.png" alt="" class="w-full h-full rounded-[100%] object-cover select-none">
    </div>
    <div class="pb-5">
      <p class="text-white text-center text-xl select-none">{{ props.cardData.name }}</p>
      <p class="text-xl uppercase text-center text-[#797a7c] select-none">{{ props.cardData.rank }}</p>
    </div>
    <button class=" left-1/2 absolute bottom-4 -translate-x-1/2 px-5 py-2 bg-slate-600 select-none text-base rounded-3xl text-white" @click="$emit('byInfo')">
      {{ t('mainPage.mainButton') }}
    </button>
  </div>
</template>