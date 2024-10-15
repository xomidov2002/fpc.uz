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
    <div class="md:w-2/3 h-3/5 bg-[#14151B] rounded-3xl relative p-5">
      <div @click="tedt('close')" class="absolute right-5 top-5 p-2 rounded-md bg-[#252525]">
        <BaseIcons name="close" class="z-50" />
      </div>
      
    </div>
  </div>
</template>
<style scoped>

</style>
