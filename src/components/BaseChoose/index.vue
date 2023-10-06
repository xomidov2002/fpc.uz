<script setup lang="ts">
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="w-[230px] h-auto px-10 py-8 border-solid border-1 bg-white shadow-xl flex justify-center items-center">
    <div class="flex flex-col items-center justify-center">
      <img :src="props.cardData.icon" alt="">
      <p class="text-5xl font-bold tracking-widest my-4 ">{{ props.cardData.num }}</p>
      <p class="text-base font-bold tracking-widest uppercase text-[#737373]">{{ props.cardData.name }}</p>
    </div>
  </div>
</template>