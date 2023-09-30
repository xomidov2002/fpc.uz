<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader/index.vue'
import Choose from './choose.vue'
</script>
<template>
  <div class="bg-[url('/main-bg.jpg')] bg-no-repeat bg-cover w-full h-[100vh] relative">
    <BaseHeader class="sticky top-0 z-50"/>
    <div class="container mx-auto px-15 lg:mt-40 rounded-md">
      <div class="w-[640px] p-5 z-30">
        <p class="tracking-widest text-6xl uppercase font-bold text-white">empower your business</p>
        <p class="mt-5 text-2xl text-white tracking-widest font-medium ">We know how large objects will act, but things on a small scale.</p>
        <button class=" mt-5 px-5 py-2 bg-sky-900 rounded-3xl hover:text-sky-900 hover:bg-white ease-in duration-200 text-white text-md font-bold tracking-widest">Learn more</button>
      </div>
    </div>
    <div class="bg-black/50 absolute top-[88px]  z-10left-0 w-full h-full"></div>
  </div>
  <div>
    <Choose />
  </div>
</template>