<script setup lang="ts">
import BaseChoose from '@/components/BaseChoose/index.vue'
import { useChoosePage } from '../composable';
const { chooses } = useChoosePage()
</script>
<template>
  <div class="bg-bg">
    <div class="container mx-auto py-44">
      <p class="text-center text-4xl font-bold tracking-widest uppercase text-[#252B42]">why choose us</p>
      <p class="text-[#737373] text-sm font-medium tracking-widest mx-auto w-auto max-w-[511px] mt-5 mb-10">Problems
        trying to
        resolve the conflict between the two major realms
        of Classical physics: Newtonian mechanics </p>
      <div class="flex justify-around flex-wrap">
        <BaseChoose v-for="(choose, index) in chooses" :key="index" :id="`${choose.id}`" :card-data="choose" />
      </div>
    </div>
  </div>
</template>