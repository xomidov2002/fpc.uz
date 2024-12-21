<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useHead, useSeoMeta } from '@vueuse/head';

// Define SEO meta tags
useSeoMeta({
  title: 'Professional xizmatlar | Marketing, moliyaviy tahlil va boshqalar',
  ogTitle: 'Professional xizmatlar - marketing, moliyaviy tahlil, veb-ishlab chiqish va boshqalar',
  description: "Marketing, moliyaviy hisob va tahlil, buxgalteriya hisobi, texnik-iqtisodiy asoslash, biznesni avtomatlashtirish, veb va ilovalarni ishlab chiqish bo'yicha ekspert xizmatlari. Bizning kompleks yechimlarimiz bilan biznesingiz samaradorligini oshiring.",
  ogDescription: "Biz marketing, moliyaviy tahlil, buxgalteriya hisobi, texnik-iqtisodiy asoslash, biznesni avtomatlashtirish, veb va ilovalarni ishlab chiqish bo'yicha ekspert xizmatlarini taqdim etamiz. Bizning kompleks yechimlarimiz bilan biznesingiz samaradorligini oshiring.",
  ogImage: '/logo-1.png',
  ogUrl: 'https://fullpoint.uz',
  keywords: "marketing, moliyaviy hisob, biznes tahlili, buxgalteriya hisobi, texnik-iqtisodiy asoslash, savdo bo'limi, biznesni avtomatlashtirish, veb-ishlab chiqish, ilovalarni ishlab chiqish, biznesni tizimlashtirish, professional xizmatlar, маркетинг, финансовый учет, бизнес-анализ, бухгалтерия, технико-экономическое обоснование, отдел продаж, автоматизация бизнеса, веб-разработка, разработка приложений, систематизация бизнеса, профессиональные услуги",
});

// Additional head configuration
useHead({
  link: [
    { rel: 'icon', href: '/logo-1.png' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap',
      crossorigin: '',
    },
  ],
  meta: [
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Full Point Consult' },
  ],
});
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped>
/* Add any scoped styles here */
</style>
