<script setup lang="ts">
import BaseIcon from '@/components/Icons/index.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue';
import BaseButton from '@/components/BaseButton/index.vue'
const { t } = useI18n()
const services = computed(() => {
  return [
    {
      id: 1,
      icon: 'marketing',
      num: t('ourServices.marketingTitle'),
      name: t('ourServices.marketing')
    },
    {
      id: 2,
      icon: 'finance',
      num: t('ourServices.moliyaTitle'),
      name: t('ourServices.moliya'),
    },
    {
      id: 3,
      icon: 'accounting',
      num: t('ourServices.buxgalteriyaTitle'),
      name: t('ourServices.buxgalteriya')
    },
    {
      id: 4,
      icon: 'teo',
      num: t('ourServices.arxitekturaTitle'),
      name: t('ourServices.arxitektura')
    },
    {
      id: 5,
      icon: 'sale',
      num: t('ourServices.qurilishTitle'),
      name: t('ourServices.qurilish')
    },
    {
      id: 6,
      icon: 'it',
      num: t('ourServices.itTitle'),
      name: t('ourServices.it')
    },
    {
      id: 6,
      icon: 'business',
      num: t('ourServices.kameraTitle'),
      name: t('ourServices.kamera')
    }
  ]
})
</script>
<template>
  <div class="container mx-auto mt-14 px-5">
    <p
      class="text-xl sm:text-xl md:text-2xl lg:text-3xl mb-5 text-white font-semibold px-5 border-l-2 sm:py-5 border-l-blue-600">
      {{ t('mainPage.serviceTitle') }}
    </p>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center sm:px-16 py-10">
      <div v-for="i in services" class="card overflow-hidden border-[#252525] rounded-2xl relative p-5 bg-[#14151B] border-2 border-b-white">
        <div class="absolute top-2 left-1/2 -translate-x-1/2">
          <BaseIcon :name="i.icon" class="icon w-10 h-10 text-blue-700" />
        </div>
        <p class="text-2xl font-semibold pt-10 text-white py-5">
          {{ i.name }}
        </p>
        <p class="text-[#797a7c]">{{ i.num }}</p>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <a href="#contact-section">
      <BaseButton :name="t('mainPage.mainButton')"/>
    </a>
    </div>
  </div>
</template>
<style scoped>
.card:hover {
  @apply border-[#080D75]
}

.scrollbarActive::-webkit-scrollbar {
  @apply ease-in duration-300;
  width: 2px;
  height: 0;
  /* display: none; */
  opacity: 0;
}

.scrollbarActive::-webkit-scrollbar-track {
  @apply bg-inherit opacity-0;
}

.scrollbarActive::-webkit-scrollbar-thumb {
  @apply dark:bg-[#252525] bg-[slate-400] hover:bg-slate-500 hover:dark:bg-slate-600 opacity-0 ease-in duration-300 transition rounded-md cursor-pointer;
}
</style>