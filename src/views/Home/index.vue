<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader/index.vue'
import Choose from './choose.vue'
</script>
<template>
  <div class="bg-[url('public/main-bg.jpg')] w-full h-[100vh]">
    <BaseHeader class="sticky top-0 z-20"/>
    <div class="container mx-auto px-15 mt-72">
      <div class="w-[600px]">
        <p class="tracking-widest text-6xl uppercase font-bold text-[#252B42]">empower your business</p>
        <p class="mt-5 text-2xl tracking-widest font-medium ">We know how large objects will act, but things on a small scale.</p>
        <button class=" mt-5 px-5 py-2 bg-sky-900 rounded-3xl text-white text-sm font-bold tracking-widest">Learn more</button>
      </div>
    </div>
  </div>
  <div>
    <Choose />
  </div>
</template>