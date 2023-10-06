<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader/index.vue'
import BaseCard from '@/components/BaseCard/index.vue'
import Practice from './practice.vue'
import Choose from './choose.vue'
import businessService from './businessService.vue'
import { useCardPage } from '../composable';
const { cards } = useCardPage()
</script>
<template>
  <div>
    <BaseHeader />
  </div>
  <div class="bg-[url('/main-bg.jpg')] mb-0 pb-0 bg-no-repeat bg-cover overflow-hidden w-full h-[100vh] relative">>
    <div class="container mx-auto px-16 lg:mt-40 rounded-md">
      <div class="w-[640px] p-5 z-30">
        <p class="tracking-widest text-6xl uppercase font-bold text-white">empower your business</p>
        <p class="mt-5 text-2xl text-white tracking-widest font-medium ">We know how large objects will act, but things on
          a small scale.</p>
        <button
          class=" mt-5 px-5 py-2 bg-[#00A0C1] rounded-3xl hover:text-[#00A0C1] hover:bg-white ease-in duration-200 text-white text-md font-bold tracking-widest">Learn
          more</button>
      </div>
    </div>
    <div class="bg-black/50 absolute top-[88px]  z-10 left-0 w-full h-[100vh]"></div>
  </div>
  <div class="bg-bg mt-0 pt-0 relative">
    <div class="container mx-auto ">
      <div class="absolute -top-[100px] z-20 flex justify-around w-full">
        <BaseCard v-for="(card, index) in cards" :key="index" :card-data="card" />
      </div>
    </div>
    <div>
      <Choose />
    </div>
    <div>
      <Practice />
    </div>
  </div>
  <div>
    <businessService />
  </div>
</template>