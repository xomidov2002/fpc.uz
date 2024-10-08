<script setup lang="ts">
import { type PropType, ref, onMounted, onBeforeUnmount } from 'vue';
import BaseIcon from '@/components/Icons/index.vue';

// Emit events for select and v-model
const emit = defineEmits(['select', 'update:modelValue']);

// Interface for language options
interface Language {
  id: number;
  title: string;
  icon?: string;
  value?: string;
}

// Props definition
const props = defineProps({
  options: {
    type: Array as PropType<Language[]>,
    required: true,
  },
  modelValue: {
    type: String,
  },
  color: {
    type: String,
    default: 'white',
  },
  size: {
    type: String,
    default: 'sm',
    validator(value: string) {
      return ['sm', 'md'].includes(value);
    },
  },
});

// State for selected item and dropdown open/close
const selectedItem = ref(props.options.find((item) => item.value === props.modelValue) || props.options[0]);
const isOpen = ref(false);

// Function to emit the input and update model value
function emitInput(event: any) {
  emit('update:modelValue', event.target.value);
}

// Function to handle option click
function clickOption(val: Language) {
  selectedItem.value = val;
  emit('update:modelValue', val.value);
  emit('select', val);
  isOpen.value = false; // Close dropdown after selection
}

// Global event listener to close dropdown if clicked outside
function handleClickOutside(event: Event) {
  if (!(event.target as HTMLElement).closest('.dropdown')) {
    isOpen.value = false;
  }
}

// Add and clean up global click event listener
onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="relative dropdown">
    <div
      class="flex items-center justify-between rounded-lg cursor-pointer select-none gap-1"
      @click.stop="isOpen = !isOpen"
      :class="{
        'py-2 pl-2': size === 'sm',
        'md:py-5 py-2 px-4': size === 'md',
        'bg-white': !selectedItem.icon
      }"
    >
      <div class="flex items-center justify-start">
        <BaseIcon v-if="selectedItem.icon" :name="selectedItem.icon" class="w-5 h-5" />
        <p
          :class="{
            'text-[#202636]': color === 'black',
            'text-white': color === 'white'
          }"
          class="2xl:text-lg font-medium lg:text-sm ml-1"
        >
          {{ selectedItem.title }}
        </p>
      </div>
      <BaseIcon
        name="down"
        class="text-black"
        :class="{
          'rotate-180': isOpen,
          'text-white': color === 'white',
          'text-[#202636]': color === 'black',
          'w-3.5 h-3.5': size === 'sm',
          'w-5 h-5': size === 'md'
        }"
      />
    </div>

    <!-- Dropdown menu -->
    <Transition>
      <div
        class="bg-white select-none border rounded-lg w-full mt-2 absolute z-20"
        v-if="isOpen"
      >
        <div
          v-for="item in options"
          :key="item.id"
          @click.stop="clickOption(item)"
          :class="{
            'px-1.5 py-1.5': size === 'sm',
            'px-3 py-3': size === 'md'
          }"
          class="cursor-pointer hover:bg-slate-200 duration-150 rounded-md flex items-center justify-start gap-2 w-full"
        >
          <BaseIcon v-if="item.icon" :name="item.icon" class="w-5 h-5" />
          <p class="lg:text-sm 2xl:text-lg">{{ item.title }}</p>
        </div>
      </div>
    </Transition>
  </div>
</template>
