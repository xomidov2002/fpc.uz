<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseProductCard from '@/components/BaseProductCard/index.vue'
import BaseUsermodal from '@/components/BaseUserModal/index.vue'
import { useI18n } from 'vue-i18n';
const {t} = useI18n()
interface Product {
  id: number
  subtitle: string
  // title: string
  date: string
  bgImg: string[]
  info: string
}

// Mahsulotlar ro'yxati
const products = computed<Product[]>(() => {
  return [
    {
      id: 0,
      subtitle:
        '«Организация производства и ремонта горно-металлургических машин и оборудования на базе Центрального ремонтно-механического завода АО «Алмалыкский ГМК» ',
      // title: 'АО «O’ZOG’IRSANOATLOYIHA»',
      date: '2023 май',
      bgImg: '/ourProjects/agmk.jpg',
      info: 'this is first ID'
    },
    {
      id: 1,
      subtitle:
        '«Организация новых штампосварных мощностей на территории АО «Uzauto Motors» в г. Асака, Андижанской области» ',
      // title: 'АО «O’ZOG’IRSANOATLOYIHA»',
      date: '2023 сентябрь',
      bgImg: '/ourProjects/gm.jpg',
      info: 'this is second ID'
    },
    {
      id: 2,
      subtitle: '«Организация производства автомобилей на новых источниках энергии» ',
      // title: 'АО «O’ZOG’IRSANOATLOYIHA»',
      date: '2023 сентябрь',
      bgImg: '/ourProjects/byd.jpg',
      info: 'this is third ID'
    },
    {
      id: 4,
      subtitle: 'Маркетинговое исследование для текстильной продукции (лёгкая промышленность)',
      // title: 'ООО «Perfect Textile Company»',
      date: '2021 март',
      bgImg: '/ourProjects/tuval.jpg',
      info: 'this is fourth ID'
    },
    {
      id: 5,
      subtitle: 'Маркетинговое исследование в сфере общепита',
      // title: 'ООО «Belissimo»',
      date: '2021 февраль',
      bgImg: '/ourProjects/bel.jpg',
      info: 'this is fifth ID'
    },
    {
      id: 6,
      subtitle: 'Маркетинговое исследование в сфере общепита и продвижение брэнда',
      // title: 'Сеть ресторанов «Farfor» (Россия)',
      date: '2022-2023 гг',
      bgImg: '/ourProjects/farfor.jpg',
      info: 'this is sixth ID'
    }
  ]
})

const showAll = ref(false)

// Ko'rsatilayotgan mahsulotlarni boshqarish
const visibleProducts = computed(() => {
  return showAll.value ? products.value : products.value.slice(0, 4)
})

// Kartalarni ko'proq yoki kamroq ko'rsatish funksiyasi
const toggleView = () => {
  showAll.value = !showAll.value
}

const openUserModal = ref<boolean>(false)

const currentUser = ref<any>({})
function getEachUser(id: number) {
  for (let i = 0; i < products.value.length; i++) {
    if (products.value[i].id === id) {
      currentUser.value = products.value[i]
      toggleVariable()
      break
    }
  }
}
function toggleVariable() {
  // if(!openUserModal) {
  //   document.body.style.overflow = '';
  // }
  // else if(openUserModal){
  //   document.body.style.overflow = 'hidden';
  // }
  openUserModal.value = !openUserModal.value
}
</script>

<template>
  <BaseUsermodal
    class="z-50"
    :isOpen="openUserModal"
    :info="currentUser"
    @handleClicked="toggleVariable"
  />
  <div class="container mx-auto px-5">
    <p
      class="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white px-5 border-l-2 py-5 border-l-blue-600 mb-10"
    >
     {{t('mainPage.ourProjects')}}
    </p>
    <div class="flex justify-center">
      <transition-group
        name="fade"
        tag="div"
        class="grid justify-center sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        <div v-for="(product, index) in visibleProducts" :key="index">
          <BaseProductCard :option="product" @byInfoUser="getEachUser(product.id)" />
        </div>
      </transition-group>
    </div>

    <div class="w-full flex justify-center">
      <button
        @click="toggleView"
        class="mt-4 px-6 py-2 bg-[#080D75] text-white rounded-lg hover:bg-blue-600"
      >
        {{ showAll ? t('mainPage.proMinButton') : t('mainPage.proButton') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
