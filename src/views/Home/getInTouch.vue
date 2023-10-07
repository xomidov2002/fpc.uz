<script setup lang="ts">
import BaseInTouchCard from '@/components/BaseInTouchCard/index.vue'
import { useInTouchPage } from '../composable'
const { touchCards } = useInTouchPage()

</script>
<template>
  <div class="container mx-auto px-16 mb-[178px]">
    <div>
      <p class="text-center text-4xl font-bold tracking-widest text-[#252B42]">Get In Touch</p>
      <p class="text-[#737373] text-sm font-medium tracking-widest mx-auto w-auto max-w-[511px] mt-5 mb-10">Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>
    </div>
    <div class="mt-[110px] flex justify-between">
      <BaseInTouchCard v-for="(touchCard, index) in touchCards" :key="index" :card-data="touchCard"/>
    </div>
  </div>
</template>