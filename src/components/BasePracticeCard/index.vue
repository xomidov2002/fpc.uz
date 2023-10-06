<script setup lang="ts">
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="w-[241px] shadow-xl mb-40 h-[342px] bg-white">
    <div class="p-[30px] h-3/5">
      <p class="text-[#252B42] text-base font-bold tracking-widest">{{ props.cardData.title }}</p>
      <p class="text-[#737373] text-sm font-medium tracking-widest">{{ props.cardData.subtitle }}</p>
    </div>
    <div class="w-full h-2/5">
      <img class="object-cover w-full" :src="props.cardData.img" alt="">
    </div>
  </div>
</template>