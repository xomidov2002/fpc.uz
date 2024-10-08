<script setup lang="ts">
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="w-full sm:px-28">
    <div class="flex items-center justify-center gap-5 pb-5">
      <img :src="props.cardData.img" class="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-[100%] overflow-hidden object-cover">
      <div>
        <p class="text-white text-base md:text-2xl">{{ props.cardData.title }}</p>
        <p class="text-[#797a7c] text-xs sm:text-base">{{ props.cardData.subtitle }}</p>
      </div>
    </div>
    <p class="scrollbarActive text-center text-[#797a7c] text-base overflow-scroll h-[200px]">{{ props.cardData.info }}</p>
  </div>
</template>
<style scoped>
.scrollbarActive::-webkit-scrollbar {
  @apply ease-in duration-300;
  width: 2px;
  height: 0;
  /* display: none; */
  opacity: 0;
}

.scrollbarActive::-webkit-scrollbar-track {
  @apply bg-inherit opacity-0;
}

.scrollbarActive::-webkit-scrollbar-thumb {
  @apply dark:bg-[#252525] bg-slate-400 hover:bg-slate-500 hover:dark:bg-slate-600 opacity-0 ease-in duration-300 transition rounded-md cursor-pointer;
}
</style>