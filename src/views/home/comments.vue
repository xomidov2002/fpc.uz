<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import OurProjects from '@/components/BaseMainPro/index.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const modules = [Navigation]
const { t } = useI18n()
const projects = computed(() => {
  return [
    {
      id: 1,
      img: '/pro/prooject-1.jpg',
      subtitle: '01.04.2024',
      title: "O'ZOG'IRSANOATLOYIHA",
      info: t('mainProject.subtitle')
    },
    {
      id: 2,
      img: '/pro/prooject-1.jpg',
      subtitle: '01.04.2024',
      title: "O'ZOG'IRSANOATLOYIHA",
      info: t('mainProject.subtitle')
    },
  ]
})
</script>
<template>
  <div class="container mx-auto px-5 pb-14 relative">
    <p
      class="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white px-5 border-l-2 py-5 border-l-blue-600">
      {{ t('mainPage.ourPro') }}</p>
    <div class="mt-11 relative">
      <swiper :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="(person, index) in projects" :key="index">
          <OurProjects :cardData="person" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style scoped></style>