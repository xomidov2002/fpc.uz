<script setup lang="ts">
import BaseIcon from '@/components/Icons/index.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
interface Navbar {
  id: number
  name: string
  sectionId: string
}

const navLinks = computed<Navbar[]>(() => [
  { id: 0, name: t('navbar.mainPage'), sectionId: '#main' },
  { id: 1, name: t('navbar.solution'), sectionId: '#advices-section' },
  { id: 2, name: t('navbar.services'), sectionId: '#services-section' },
  { id: 3, name: t('navbar.projects'), sectionId: '#projects-section' },
  { id: 4, name: t('navbar.aboutUs'), sectionId: '#aboutus-section' },
  { id: 5, name: t('navbar.contact'), sectionId: '#contact-section' },
  { id: 6, name: t('navbar.clients'), sectionId: '#client-section' }
])
const scrollToSection = (sectionId: string) => {
  const cleanId = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId
  const section = document.getElementById(cleanId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<template>
  <div class="bg-[#14151B] p-5 w-full py-24 mt-24">
    <div
      class="flex justify-between md:justify-around flex-wrap gap-5 items-start border-b border-b-white pb-5 container"
    >
      <div>
        <img src="/logo-1.png" class="w-28" />
        <p class="text-white font-bold tracking-widest">Full Point Consult</p>
        <p class="text-white">est. 2022</p>
      </div>
      <div>
        <p class="text-white uppercase font-bold pb-5 tracking-widest">{{ t('footer.contact') }}</p>
        <div class="flex flex-col gap-3">
          <div class="box">
            <BaseIcon name="message" class="w-5 h-5 text-[#080D75]" />
            <p class="title">example@gmail.com</p>
          </div>
          <div class="box">
            <BaseIcon name="phone" class="w-5 h-5 text-[#080D75]" />
            <p class="title">+998 93 378 63 61</p>
          </div>
          <div class="box">
            <BaseIcon name="location" class="w-5 h-5 text-[#080D75]" />
            <p class="title">{{ t('footer.location') }}</p>
          </div>
          <div class="box">
            <BaseIcon name="calendar" class="w-5 h-5 text-[#080D75]" />
            <p class="title">{{ t('footer.isOpen') }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div
        class="cursor-pointer flex items-center select-none"
        v-for="(navlink, index) in navLinks"
        :key="index"
        @click="scrollToSection(navlink.sectionId)"
      >
        <a class="all-submenu text-lg text-white hover:text-[#080D75] 2xl:text-2xl font-[semibold]">
          {{ navlink.name }}
        </a>
      </div>
      </div>
    </div>
    <div class="flex gap-5 justify-start pt-5 container px-5">
      <BaseIcon class="w-10 h-10 text-white" name="telegram" />
      <BaseIcon class="w-10 h-10 text-white" name="instagram" />
      <BaseIcon class="w-10 h-10 text-white" name="facebook" />
    </div>
  </div>
</template>
<style scoped>
.router:hover .icon {
  @apply text-[#080D75];
}
.title {
  @apply text-white;
}
.box {
  @apply flex items-center gap-2;
}
</style>
