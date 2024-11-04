<script setup lang="ts">
import BaseIcons from '@/components/Icons/index.vue';
import { type PropType } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  info: {
    type: Object,
    default: () => ({})
  },
  isOpen: {
    type: Boolean as PropType<boolean>,
    required: false
  }
});

const emit = defineEmits(['handleClicked']);

function tedt(val: string) {
  if (val === 'close') {
    emit('handleClicked', 'close');
  }
}
</script>

<template>
  <div
    v-if="props.isOpen" 
    class="z-0 fixed top-0 left-0 px-5 w-full h-full overflow-hidden backdrop-blur-[12.5px] bg-black/30 flex justify-center items-center"
  >
    <div class="md:w-2/3 h-3/5 bg-[#14151B] flex justify-center items-center rounded-3xl relative p-5">
      <div @click="tedt('close')" class="absolute right-5 top-5 p-2 rounded-md bg-[#252525]">
        <BaseIcons name="close" class="z-50" />
      </div>
      <div class="p-5 mr-10 text-white tracking-wide scrollbarActive overflow-scroll">
        <p class="h-[40vh]">{{ props.info.info }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.scrollbarActive::-webkit-scrollbar {
    @apply ease-in duration-300 ;
    width: 2px;
    height: 0;
    /* display: none; */
    opacity: 0;
  }
  .scrollbarActive::-webkit-scrollbar-track {
    @apply bg-inherit opacity-0;
  }
  .scrollbarActive::-webkit-scrollbar-thumb {
    @apply dark:bg-[rgb(37,48,64)] bg-slate-400 hover:bg-slate-500 hover:dark:bg-slate-600 opacity-0 ease-in duration-300 transition rounded-md cursor-pointer;
  }
</style>
