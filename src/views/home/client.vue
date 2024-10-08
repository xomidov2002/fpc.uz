<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
const modules = [Pagination, Autoplay]
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const partners = computed(() => {
  return [
    {
      id: 1,
      img: '/partners/1.jfif'
    },
    {
      id: 1,
      img: '/partners/2.jfif'
    },
    {
      id: 1,
      img: '/partners/3.jpg'
    },
    {
      id: 1,
      img: '/partners/4.png'
    },
    {
      id: 1,
      img: '/partners/5.svg'
    },
    {
      id: 1,
      img: '/partners/6.jfif'
    },
    {
      id: 1,
      img: '/partners/7.png'
    }
  ]
})
const windowWidth = ref(window.innerWidth);

    const updateWindowWidth = () => {
      windowWidth.value = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener("resize", updateWindowWidth);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateWindowWidth);
    });

    const slidesPerView = computed(() => {
      if (windowWidth.value > 1200) {
        return 4; // Katta ekranlarda 4 ta slayd
      } else if (windowWidth.value > 768) {
        return 3; // O'rta ekranlarda 3 ta slayd
      } else if (windowWidth.value > 480) {
        return 2; // Kichik ekranlarda 2 ta slayd
      } else {
        return 1; // Juda kichik ekranlarda 1 ta slayd
      }
    });
</script>
<template>
  <div class="container mx-auto px-5 pt-14">
    <p class="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white px-5 border-l-2 py-5 border-l-blue-600">{{ t('mainPage.partners') }}</p>
    <swiper
    :slidesPerView="slidesPerView"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide v-for="img in partners" :key="img.id">
      <img :src="img.img" alt="" class="object-cover object-center select-none" />
    </swiper-slide>
  </swiper>
  </div>
</template>
<style scoped>
.swiper-slide {
  @apply h-[150px] bg-[#252525] shadow-xl overflow-hidden border-l-4 border-l-[#080D75]
}

.swiper {
  width: 100%;
  height: 100%;
  padding: 40px 20px 40px 20px;
}

.swiper-slide {
  @apply bg-[#f5f8f3]
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>