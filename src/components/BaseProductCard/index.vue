<script setup lang="ts">
import BaseButton from '@/components/BaseButton/index.vue'
import { useI18n } from 'vue-i18n';
const emit = defineEmits(['byInfoUser'])
const {t} = useI18n()
const props = defineProps({
    option: {
        type: Object,
        required: true
    }
})
</script>

<template>
  <!-- <div
    :style="{ backgroundImage: `url(${props.option.bgImg})` }"
    class="bg-cover bg-center bg-no-repeat rounded-2xl relative w-[300px] h-[400px] overflow-hidden"
  >
    <div class="bg-color bottom-0 absolute text-white w-full  p-5">
      <p class="text-xl font-bold">{{ props.option.title }}</p>
      <div class="pt-2">
        <p class="scrollbarActive overflow-scroll h-[100px]">{{ props.option.subtitle }}</p>
      </div>
      <div>
        <p>{{ props.option.date }}</p>
        <BaseButton @click="$emit('byInfoUser')" :name="t('mainPage.mainButton')" />
      </div>
    </div>
  </div> -->
  <div class="w-full h-auto">
      <div class="w-full h-[200px] rounded-2xl bg-red-900 overflow-hidden">
        <img :src="props.option.bgImg" class="w-full h-full object-cover" alt="products">
      </div>
      <div class="w-full h-[250px] rounded-2xl bg-[#14151B] -top-10 text-white p-5 relative">
        <p class="">{{ props.option.title }}</p>
        <p class="scrollbarActive overflow-scroll h-[100px]">{{ props.option.subtitle }}</p>
        <p class="text-[#8d8d8d]">{{ props.option.date }}</p>
        <div class="absolute bottom-5 left-5">
          <BaseButton @click="$emit('byInfoUser')" :name="t('mainPage.mainButton')" />
        </div>
      </div>
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
.bg-color {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7959558823529411) 0%,
    rgba(0, 0, 0, 0.41220238095238093) 76%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
