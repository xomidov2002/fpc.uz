<script setup lang="ts">
import BasePracticeCard from '@/components/BasePracticeCard/index.vue'
import { usePracticePage } from '../composable';
const { practiceCards } = usePracticePage()
</script>
<template>
  <div>
    <div class="container mx-auto px-16">
      <p class="text-center text-4xl font-bold tracking-widest text-[#252B42]">Practice Advice</p>
      <p class="text-[#737373] text-sm font-medium tracking-widest mx-auto w-auto max-w-[511px] mt-5 mb-10">Problems
        trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
      <div class="flex justify-between flex-wrap">
        <BasePracticeCard v-for="(practiceCard, index) in practiceCards" :key="index" :card-data="practiceCard"/>
      </div>
    </div>
  </div>
</template>