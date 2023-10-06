<script setup lang="ts">
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="w-80 h-52 shadow-xl bg-[#FFFFFF] rounded-md ">
    <div class="px-5 py-5">
      <div class="w-[48px] h-[40px] mb-[14px]">
        <img :src="props.cardData.icon" alt="">
      </div>
      <div>
        <p class="text-2xl font-bold tracking-widest text-[#252B42] mb-[10px]">{{ props.cardData.title }}</p>
        <p class="text-sm font-medium text-[#737373] tracking-widest">{{ props.cardData.subtitle }}</p>
      </div>
    </div>
  </div>
</template>