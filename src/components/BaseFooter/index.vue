<script setup lang="ts">
import BaseIcon from '@/components/Icons/index.vue'
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
const navLinks = computed(() => {
  return [
    {
      id: 1,
      name: t('navbar.mainPage'),
      path: '',
    },
    {
      id: 2,
      name: t('navbar.projects'),
      path: '',
    },
    {
      id: 3,
      name: t('navbar.services'),
      path: '',
    },
    {
      id: 5,
      name: t('navbar.contact'),
      path: '',
    }
  ]
})
</script>
<template>
  <div class="bg-[#14151B] p-5 w-full py-24 mt-24">
    <div class="flex justify-between md:justify-around flex-wrap gap-5 items-start border-b border-b-white pb-5 container">
      <div>
        <img src="/logo-1.png" class="w-28">
        <p class="text-white font-bold tracking-widest">Full Point Consult</p>
        <p class="text-white">est. 2022</p>
      </div>
      <div>
        <p class="text-white uppercase font-bold pb-5 tracking-widest">Biz bilan bog'laning</p>
        <div class="flex flex-col gap-3">
          <div class="box">
            <BaseIcon name="message" class="w-5 h-5 text-[#080D75]"/>
            <p class="title">example@gmail.com</p>
          </div>
          <div class="box">
            <BaseIcon name="phone" class="w-5 h-5 text-[#080D75]"/>
            <p class="title">+998 93 378 63 61</p>
          </div>
          <div class="box">
            <BaseIcon name="location" class="w-5 h-5 text-[#080D75]"/>
            <p class="title">Toshkent, Chilonzor tumani Olmazor massivi 15/10</p>
          </div>
          <div class="box">
            <BaseIcon name="calendar" class="w-5 h-5 text-[#080D75]"/>
            <p class="title">Dushanba - shanba</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <RouterLink v-for="(i, index) in navLinks" :key="i.id" :to="i.path" class="flex border-b border-b-white router items-center gap-1">
          <p class="text-white text-xl hover:text-[#080D75]">{{ i.name }}</p>
          <BaseIcon name="right" class="w-5 h-5 icon text-white"/>
        </RouterLink>
      </div>
    </div>
    <div class="flex gap-5 justify-start pt-5 container px-5">
      <BaseIcon class="w-10 h-10 text-white" name="telegram"/>
      <BaseIcon class="w-10 h-10 text-white" name="instagram"/>
      <BaseIcon class="w-10 h-10 text-white" name="facebook"/>
    </div>
  </div>
</template>
<style scoped>
.router:hover .icon{
@apply text-[#080D75]
}
.title{
  @apply text-white
}
.box{
  @apply flex items-center gap-2
}
</style>