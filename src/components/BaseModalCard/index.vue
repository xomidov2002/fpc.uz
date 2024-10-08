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
    <div class="md:w-1/2 h-auto bg-[#14151B] rounded-3xl relative p-5">
      <div @click="tedt('close')" class="absolute right-5 top-5 p-2 rounded-md bg-[#252525]">
        <BaseIcons name="close" class="z-50" />
      </div>
      <div class="flex gap-6 items-center">
        <img src="/main.png" class="rounded-full w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-slate-600">
        <p class="title">{{ props.info.name }}</p>
      </div>
      <div class="scrollbarActive flex flex-col gap-2 pl-5 pt-5 h-[30vh] overflow-scroll">
        <div>
          <div class="flex gap-2 items-center">
            <BaseIcons name="education" class="w-5 text-[#080D75]"/>
            <p class="text-white font-semibold">{{ t('team.education') }}</p>
          </div>
          <p class="text-white text-xs sm:text-base pl-6">{{ props.info.education }}</p>
        </div>
        <div>
          <div class="flex gap-2 items-center">
            <BaseIcons name="experience" class="w-5 text-[#080D75]"/>
            <p class="text-white font-semibold">{{ t('team.experience') }}</p>
          </div>
          <p class="text-white text-xs sm:text-base pl-6">{{ props.info.experience }}</p>
        </div>
        <div v-if="props.info.project">
          <div class="flex gap-2 items-center">
            <BaseIcons name="pro" class="w-5 text-[#080D75]"/>
            <p class="text-white font-semibold">{{ t('team.project') }} </p>
          </div>
          <p class="text-white text-xs sm:text-base pl-6">{{ props.info.project }}</p>
        </div>
        <div v-if="props.info.certificate">
          <div class="flex gap-2 items-center">
            <BaseIcons name="cert" class="w-5 text-[#080D75]"/>
            <p class="text-white font-semibold">{{ t('team.certificate') }}</p>
          </div>
          <p class="text-white text-xs sm:text-base pl-6">{{ props.info.certificate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.title {
  @apply text-white text-base sm:text-lg font-semibold uppercase leading-relaxed tracking-wide;
}
.subtitle{
  @apply text-white text-xs font-normal font-['Inter'] leading-[18.89px] tracking-wide
}
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
