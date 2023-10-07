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
  <div class="box w-[328px] h-[333px] px-[40px] py-[50px] bg-white text-center shadow-xl hover:bg-[#252B42] transition-all duration-300" @mouseenter="isEnter=true" @mouseleave="isEnter=false">
    <div>
      <img :src="props.cardData.icon" alt="" class="mb-[15px] mx-auto" v-if="!isEnter">
      <img :src="props.cardData.hoverIcon" alt="" class="mb-[15px] mx-auto" v-if="isEnter">
    </div>
    <p class="tracking-widest text-[#252B42] text-sm font-semibold mb-[15px]">{{ props.cardData.subtitle }}</p>
    <p class="tracking-widest text-[#252B42] text-base font-bold mb-[15px]">{{ props.cardData.title }}</p>
    <button class="button mx-auto">Submit request</button>
  </div>
</template>
<style scoped>
.button {
  color: #FFA62B;
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid var(--primary-color, #FFA62B);
}
.box:hover p{
  color: white;
}
.box:hover button{
  color: white;
  border: 1px solid var(--primary-color, #ffffff);
}
</style>