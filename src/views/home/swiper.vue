<template>
    <div class="relative flex items-center">
      <!-- Left button -->
      <button
        @click="prev"
        :disabled="currentIndex === 0"
        class="absolute left-0 z-10 px-4 py-2 text-white bg-blue-600 rounded disabled:bg-gray-300"
      >
        Prev
      </button>
  
      <!-- Cards container -->
      <div class="overflow-hidden w-full px-12">
        <div
          class=" transition-transform duration-300"
          :style="{ transform: `translateX(-${currentIndex * 25}%)` }"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="w-1/4 flex-shrink-0 p-4"
          >
            <!-- Customize your card content here -->
            <div class="p-6 bg-gray-200 rounded shadow">
              <h3 class="text-lg font-bold">{{ card.title }}</h3>
              <p class="mt-2 text-sm">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Right button -->
      <button
        @click="next"
        :disabled="currentIndex === maxIndex"
        class="absolute right-0 z-10 px-4 py-2 text-white bg-blue-600 rounded disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed } from 'vue';
  
  interface Card {
    title: string;
    description: string;
  }
  
  // Define your card data
  const cards = ref<Card[]>([
    { title: 'Card 1', description: 'Description for card 1' },
    { title: 'Card 2', description: 'Description for card 2' },
    { title: 'Card 3', description: 'Description for card 3' },
    { title: 'Card 4', description: 'Description for card 4' },
    { title: 'Card 5', description: 'Description for card 5' }
  ]);
  
  const currentIndex = ref(0);
  const maxIndex = computed(() => cards.value.length - 4);
  
  // Navigation functions
  const next = () => {
    if (currentIndex.value < maxIndex.value) {
      currentIndex.value++;
    }
  };
  
  const prev = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
  };
  </script>
  
  <style scoped>
  /* You can add custom styles here */
  </style>
  