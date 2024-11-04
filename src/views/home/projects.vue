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
      subtitle: t('ourProjects.agmk.title'),
      // title: 'АО «O’ZOG’IRSANOATLOYIHA»',
      date: t('ourProjects.agmk.data'),
      bgImg: '/ourProjects/agmk.jpg',
      info: t('ourProjects.agmk.info'),
    },
    {
      id: 1,
      subtitle: t('ourProjects.gm.title'),
      // title: 'АО «O’ZOG’IRSANOATLOYIHA»',
      date: t('ourProjects.gm.data'),
      bgImg: '/ourProjects/gm.jpg',
      info: t('ourProjects.gm.info'),
    },
    {
      id: 2,
      subtitle: t('ourProjects.byd.title'),
      // title: 'АО «O’ZOG’IRSANOATLOYIHA»',
      date: t('ourProjects.byd.data'),
      bgImg: '/ourProjects/byd.jpg',
      info: t('ourProjects.byd.info'),
    },
    {
      id: 4,
      subtitle: t('ourProjects.textile.title'),
      // title: 'ООО «Perfect Textile Company»',
      date: t('ourProjects.textile.data'),
      bgImg: '/ourProjects/tuval.jpg',
      info: t('ourProjects.textile.info'),
    },
    {
      id: 5,
      subtitle: t('ourProjects.belissimo.title'),
      // title: 'ООО «Belissimo»',
      date: t('ourProjects.belissimo.data'),
      bgImg: '/ourProjects/bel.jpg',
      info: t('ourProjects.belissimo.info'),
    },
    {
      id: 6,
      subtitle: t('ourProjects.farfor.title'),
      // title: 'Сеть ресторанов «Farfor» (Россия)',
      date: t('ourProjects.farfor.data'),
      bgImg: '/ourProjects/farfor.jpg',
      info: t('ourProjects.farfor.info'),
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
