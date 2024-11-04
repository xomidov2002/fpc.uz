<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseModal from '@/components/BaseModalCard/index.vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import BaseCardUser from '@/components/BaseCardUser/index.vue'
const modules = [Pagination]
const { t } = useI18n()
const partners = computed(() => {
  return [
  {
      id: 1,
      name: "Xamidov Nurbek",
      rank: t('team.specialist'),
      description: 'Nurbek'
    },
    {
      id: 2,
      name: "Shamsiddinov Jo'rabek",
      rank: t('team.director'),
      description: 'Shamsiddinov'
    },
    {
      id: 3,
      name: "Xamidov Azizbek",
      rank: t('team.specialist'),
      education: t('team.azizbekUniver'),
      experience: "8 лет",
      certificate: "«POLITECNICO DI TORINO» (Италия) - Mashinasozlik",
      project: "ООО «Maxsus Metall Sanoat»"
    },
    {
      id: 4,
      name: "Xabibullayev Alisher",
      rank: t('team.menejer'),
      education: t('team.alisherUniver'),
      experience: " 6 лет",
      project: "«Belissimo», Сеть ресторанов «Farfor» (Россия), АО «O’ZOG’IRSANOATLOYIHA», ООО «Perfect Textile Company» "

    },
    {
      id: 5 ,
      name: "Xomidov Husniddin",
      rank: t('team.specialist'),
      education: t('team.husniddinUniver'),
      experience: "1 лет",
      certificate: "ITLABS programming acedemy «front-end development»",
      project: "sunhightech.uz, fpc.uz"
    }
  ]
})
const openStudentsModal = ref<boolean>(false)
function clickModal(val: string) {
  if (val == 'close') {
    openStudentsModal.value = false
    console.log('closed')
  }
}
const currentStudent = ref<any>({})
function getEachStudentInfo(id: number) {
  for (let i = 0; i < partners.value.length; i++) {
    if (partners.value[i].id === id) {
      currentStudent.value = partners.value[i]

      toggleVariable()
      console.log(partners.value[i])
      break
    }
  }
}
function toggleVariable() {
  openStudentsModal.value = !openStudentsModal.value
}
console.log(partners.value.length)

</script>
<template>
  <div class="container mx-auto px-5 pb-14">
    <p
      class="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold px-5 border-l-2 text-white sm:py-5 border-l-blue-600">
      {{ t('mainPage.businessTitle') }}</p>
    <p class="text-xs sm:text-lg font-[montserrat400] pt-5 text-white w-full md:w-1/2">{{ t('mainPage.businessSubtitle')
      }}</p>
    <div class="flex flex-col lg:flex-row items-center pt-11">
      <div class="lg:w-3/5 w-full h-auto flex flex-col gap-5">
        <div class="bg-[url('/images/about-1.jpg')] bgimage w-full h-[200px]">
          <div class="shadow"></div>
         <div>
          <p class="p-3 border-b border-b-white font-bold tracking-widest">{{ t('mainPage.busSolution1') }}</p>
          <p>{{ t('mainPage.Solution1') }}</p>
         </div>
        </div>
        <div class="flex gap-5 sm:flex-row flex-col">
          <div class="bg-[url('/images/about-2.jpg')] bgimage sm:w-1/2 h-[400px]">
            <div class="shadow"></div>
            <div>
              <p class="p-3 border-b border-b-white font-bold tracking-widest">{{ t('mainPage.busSolution2') }}</p>
            <p>{{ t('mainPage.Solution2') }}</p>
            </div>
          </div>
          <div class="bg-[url('/images/about-3.png')] bgimage sm:w-1/2 h-[400px]">
            <div class="shadow"></div>
            <div>
              <p class="p-3 border-b border-b-white font-bold tracking-widest">{{ t('mainPage.busSolution3') }}</p>
            <p>{{ t('mainPage.Solution3') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-2/5 w-full md:ml-32 relative">
        <img src="/robot.png" alt="" class="absolute top-0 opacity-20">
        <p class="text-[#737373] text-sm font-medium tracking-widest mt-5 mb-14">{{ t('mainPage.businessText') }}</p>
        <div>
          <div class="flex gap-3">
            <img src="/business/human.svg" alt="">
            <div>
              <p class="text-base font-bold text-[#252B42] tracking-wider">{{ t('mainPage.businessser1') }}</p>
            </div>
          </div>
          <div class="flex gap-3 mt-8">
            <img src="/business/speed.svg" alt="">
            <div>
              <p class="text-base font-bold text-[#252B42] tracking-wider">{{ t('mainPage.businessser2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p
      class="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold px-5 border-l-2 text-white sm:py-5 border-l-blue-600  mt-10">
      {{ t("team.ourTeam") }}</p>
    <div class="mt-8 w-full gap-6 lg:px-10">
      <swiper :slidesPerView="1" :spaceBetween="10" :pagination="{
        clickable: true,
      }" :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }" :modules="modules" class="mySwiper">
        <swiper-slide v-for="(person, index) in partners" :key="index">
          <BaseCardUser :cardData="person" @byInfo="getEachStudentInfo(person.id)" />
        </swiper-slide>
      </swiper>

    </div>
  </div>
  <BaseModal class="z-50" :isOpen="openStudentsModal" :info="currentStudent" @handleClicked ="toggleVariable" />
</template>
<style scoped>
p {
  @apply text-white mb-5
}

.swiper {
  width: 100%;
  height: 100%;
  padding: 40px;
}

.bgimage {
  @apply bg-no-repeat bg-center bg-cover rounded-2xl overflow-hidden relative p-5 cursor-pointer flex items-end justify-center
}

.shadow {
  @apply absolute w-full h-full bg-black/35 top-0 left-0 transition duration-300
}

.bgimage:hover .shadow {
  @apply bg-black/50
}
</style>