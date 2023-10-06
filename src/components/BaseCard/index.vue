<script setup lang="ts">
import { ref } from 'vue';
const isEnter = ref<boolean>(false) 
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="box cursor-pointer w-80 h-52 shadow-xl hover:bg-[#00A0C1] transition-all duration-300 bg-[#FFFFFF] rounded-md" @mouseenter="isEnter=true" @mouseleave="isEnter=false">
    <div class="px-5 py-5">
      <div class="w-[48px] h-[40px] mb-[14px]">
        <img :src="props.cardData.icon" alt="" v-if="!isEnter">
        <img :src="props.cardData.hover" alt="" v-if="isEnter">
      </div>
      <div>
        <p class=" text-2xl font-bold tracking-widest text-[#252B42] mb-[10px]">{{ props.cardData.title }}</p>
        <p class=" text-sm font-medium text-[#737373] tracking-widest">{{ props.cardData.subtitle }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.box:hover p{
  color: white;
}
.box:hover img{
  color: white;
}
</style>