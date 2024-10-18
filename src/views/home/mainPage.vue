<template>
  <section
    id="main"
    class="section bg-[#14151B] w-full h-[100vh] relative flex justify-start flex-cols items-center"
  >
    <div class="container flex justify-between items-center relative mx-auto px-5 select-none">
      <div class="z-10">
        <h1
          class="2xl:text-6xl lg:text-4xl md:text-2xl text-white font-[bold] uppercase tracking-widest leading-normal"
        >
          {{ t('mainPage.mainTitle') }}:
        </h1>
        <div class="service-container py-5">
          <transition-group name="letter-fade" tag="span" class="sm:text-2xl p-2 rounded-xl">
            <span
              v-for="(letter, index) in currentLetters"
              :key="currentService + index"
              class="letter text-white uppercase font-extrabold"
            >
              <!-- Ensure spaces are properly rendered -->
              <span v-if="letter === ' '">&nbsp;</span>
              <span v-else>{{ letter }}</span>
            </span>
          </transition-group>
        </div>
        <h1
          class="2xl:text-6xl lg:text-4xl md:text-2xl text-white font-[bold] uppercase tracking-widest leading-normal"
        >
          {{ t('mainPage.mainSecondTitle') }}
        </h1>
        <div class="backdrop-blur-sm sm:w-1/2 p-2 m-5 rounded-2xl">
          <p class="2xl:text-xl text-lg 2xl:pl-0 text-white font-[montserrat500] pb-5">
            {{ t('mainPage.mainSubtitle') }}
          </p>
        </div>

        <button class="button-86" role="button">
          <a class="uppercase font-bold" href="#contact-section">{{ t('mainPage.mainButton') }}</a>
        </button>
      </div>
      <div class="absolute w-full z-0 flex">
        <div class="clipped-image -right-[120px] bg-[url('/business/banner.jpg')]">
          <div class="absolute w-full h-full bg-black/40"></div>
        </div>
        <div class="clipped-image -right-[40px] bg-[url('/business/banner.jpg')]">
          <div class="absolute w-full h-full bg-black/40"></div>
        </div>
        <div class="clipped-image -left-[40px] bg-[url('/business/building.avif')]">
          <div class="absolute w-full h-full bg-black/40"></div>
        </div>
        <div class="clipped-image -left-[120px] bg-[url('/business/coding.jpeg')]">
          <div class="absolute w-full h-full bg-black/40"></div>
        </div>
      </div>
    </div>

    <div class="w-full hidden sm:flex absolute justify-center bottom-[-70px] z-[1]">
      <div
        class="w-[80%] flex justify-around border border-white items-center rounded-3xl shadow-lg shadow-[#080D75] bg-[#0A0A0E] p-10"
      >
        <div class="flex flex-col gap-2 items-center">
          <BaseIcon name="future" class="w-10 h-10 text-white" />
          <p class="text-white font-semibold">{{ t('mainPage.block1') }}</p>
        </div>
        <div class="flex flex-col gap-2 items-center">
          <BaseIcon name="brain" class="sm:w-10 sm:h-10 w-5 h-5 text-white" />
          <p class="text-white font-semibold">{{ t('mainPage.block2') }}</p>
        </div>
        <div class="flex flex-col gap-2 items-center">
          <BaseIcon name="creative" class="sm:w-10 sm:h-10 w-5 h-5 text-white" />
          <p class="text-white font-semibold">{{ t('mainPage.block3') }}</p>
        </div>
      </div>
    </div>
  </section>
  <div class="mt-11">
    <section id="advices-section">
      <Advices />
    </section>

    <section id="services-section">
      <Services />
    </section>

    <section id="projects-section">
      <Projects />
    </section>

    <section id="aboutus-section">
      <AboutUs />
    </section>

    <section id="comments-section">
      <Comments />
    </section>

    <section id="contact-section">
      <Contact />
    </section>

    <section id="client-section">
      <Client />
    </section>
  </div>
</template>

<script setup lang="ts">
import Advices from '@/views/home/advices.vue'
import Services from '@/views/home/services.vue'
import AboutUs from '@/views/home/aboutUs.vue'
import Client from '@/views/home/client.vue'
import Comments from '@/views/home/comments.vue'
import Contact from '@/views/home/contact.vue'
import Projects from '@/views/home/projects.vue'

import { useI18n } from 'vue-i18n'
import BaseIcon from '@/components/Icons/index.vue'
const { t } = useI18n()
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Services list
const services = computed(() => [
  t('ourServices.marketing'),
  t('ourServices.moliya'),
  t('ourServices.buxgalteriya'),
  t('ourServices.arxitektura'),
  t('ourServices.qurilish'),
  t('ourServices.it'),
  t('ourServices.kamera')
])

const currentService = ref<string>(services.value[0])
const currentLetters = ref<string[]>([])
let currentIndex = 0
let letterIndex = 0
let typingIntervalId: number
let deletingIntervalId: number
let pauseTimeoutId: number

// Function to type letters one by one
const typeLetters = () => {
  if (letterIndex < currentService.value.length) {
    currentLetters.value.push(currentService.value[letterIndex])
    letterIndex++
  } else {
    clearInterval(typingIntervalId)
    pauseBeforeDeleting()
  }
}

// Function to delete letters all at once
const deleteLetters = () => {
  if (letterIndex > 0) {
    currentLetters.value.pop()
    letterIndex--
  } else {
    clearInterval(deletingIntervalId)
    currentIndex = (currentIndex + 1) % services.value.length // Move to the next service
    currentService.value = services.value[currentIndex]
    startTyping()
  }
}

// Function to start typing letters for the current service
const startTyping = () => {
  clearTimeout(pauseTimeoutId) // Clear any existing pause
  letterIndex = 0 // Reset letter index
  typingIntervalId = window.setInterval(typeLetters, 100) // Type letters every 100ms
}

// Function to pause before deleting the letters
const pauseBeforeDeleting = () => {
  pauseTimeoutId = window.setTimeout(() => {
    deletingIntervalId = window.setInterval(deleteLetters, 100) // Delete letters every 100ms
  }, 2000) // Pause for 2 seconds before deleting
}

// On component mount, start the letter typing loop
onMounted(() => {
  startTyping() // Start typing the first service
})

// On component unmount, clear all intervals
onUnmounted(() => {
  clearInterval(typingIntervalId)
  clearInterval(deletingIntervalId)
  clearTimeout(pauseTimeoutId)
})
</script>

<style scoped>
.clipped-image{
  clip-path: polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%);
  @apply w-1/3 h-[600px] object-cover bg-no-repeat bg-center bg-cover relative
}
.menu-item.active {
  color: #080d75;
  font-weight: bold;
}
.letter {
  display: inline-block;
  opacity: 1;
  transition:
    opacity 0.1s ease-in-out,
    transform 0.1s ease-in-out;
}

.letter-fade-enter-active,
.letter-fade-leave-active {
  transition:
    opacity 0.1s ease,
    transform 0.1s ease;
}

.letter-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.letter-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.mainButton {
  position: absolute;
  animation: bounce 0.8s cubic-bezier(0.8, 0, 1, 1) infinite;
}

.mainButton:hover {
  background-color: #080d75;
  color: white;
  transition: all 0.5s ease-out;
}

@keyframes bounce {
  100% {
    margin-top: 10px;
  }
}

/* CSS for button styles */
.button-86 {
  all: unset;
  width: 130px;
  height: 30px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-86::after,
.button-86::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all 0.4s;
}

.button-86::before {
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
  background: #080d75;
  border-radius: 10px;
}

.button-86::after {
  transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 50px;
}

.button-86:hover::before {
  transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
}

.button-86:hover::after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
}
</style>
