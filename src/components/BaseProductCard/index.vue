<script setup lang="ts">
import BaseButton from '@/components/BaseButton/index.vue'
const emit = defineEmits(['byInfoUser'])
const props = defineProps({
    option: {
        type: Object,
        required: true
    }
})
</script>

<template>
  <div
    class="bg-[url('/images/about-1.jpg')] bg-cover bg-center bg-no-repeat relative w-[300px] h-[400px] overflow-hidden"
  >
    <div class="absolute text-white w-full transition-all duration-300 p-5">
      <p class="text-xl font-bold">{{ props.option.title }}</p>
      <div class="pt-10">
        <p class="scrollbarActive overflow-scroll h-[100px]">{{ props.option.subtitle }}</p>
      </div>
      <div>
        <p>{{ props.option.date }}</p>
        <BaseButton @click="$emit('byInfoUser')" name="Batafsil" />
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
.absolute {
  @apply -bottom-1/2;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7959558823529411) 0%,
    rgba(0, 0, 0, 0.41220238095238093) 76%,
    rgba(255, 255, 255, 0) 100%
  );
}

.relative:hover .absolute {
  @apply bottom-0;
}
</style>
