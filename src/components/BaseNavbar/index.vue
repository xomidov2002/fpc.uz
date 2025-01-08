<script setup lang="ts">
import { computed, reactive, ref, onMounted } from 'vue'
import BaseSelect from '@/components/BaseSelect/index.vue'
import { useI18n } from 'vue-i18n'

const { t, locale, setLocaleMessage } = useI18n()
const selectedLanguage = ref(locale.value)
const isActive = ref(false)
const activeSection = ref('')

// Language change function
const changeLanguage = async () => {
  await setLocaleMessage(
    selectedLanguage.value,
    await import(`@/locale/${selectedLanguage.value}.json`)
  )
  locale.value = selectedLanguage.value
}

// Toggle for mobile menu
const toggleClass = () => {
  isActive.value = !isActive.value
}

// Interface for Navbar links
interface Navbar {
  id: number
  name: string
  sectionId: string
}

const navLinks = computed<Navbar[]>(() => [
  { id: 0, name: t('navbar.mainPage'), sectionId: '#main' },
  { id: 1, name: t('navbar.aboutUs'), sectionId: '#aboutus-section' },
  { id: 2, name: t('navbar.solution'), sectionId: '#advices-section' },
  { id: 3, name: t('navbar.services'), sectionId: '#services-section' },
  { id: 4, name: t('navbar.projects'), sectionId: '#projects-section' },
  { id: 5, name: t('navbar.contact'), sectionId: '#contact-section' },
  { id: 6, name: t('navbar.clients'), sectionId: '#client-section' },
])

// Interface for Language selection
interface Language {
  id: number
  title: string
  icon: string
  value: string
}

const langs = reactive<Language[]>([
  { id: 1, title: 'RU', icon: 'rus', value: 'ru' },
  { id: 2, title: 'UZ', icon: 'uzb', value: 'uz' }
])

// Scroll to section on menu click
const scrollToSection = (sectionId: string) => {
  const cleanId = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId
  const section = document.getElementById(cleanId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

// Detect active section using IntersectionObserver
import { nextTick } from 'vue'

const observeSections = () => {
  nextTick(() => {
    const sections = document.querySelectorAll('section')
    
    if (sections.length === 0) {
      console.warn('No sections found in the document.')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      { threshold: 0.2 } // Adjust threshold as needed
    )
    sections.forEach((section) => observer.observe(section))
  })
}

const checkScrollEvent = ref(false)
onMounted(() => {
  observeSections()
})
const checkScroll = () => {
  if (window.scrollY>10) {
    checkScrollEvent.value = true
  } else {
    checkScrollEvent.value = false
  } 

}
onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})
</script>

<template>
  <nav class="nav " :class="{'bg-[#0A0A0E] shadow-md shadow-[#080D75]': checkScrollEvent}">
    <!-- DESKTOP NAVBAR -->
    <div class="lg:block hidden container mx-auto my-0 py-3 px-5">
      <div class="flex items-center justify-between">
        <!-- LOGO -->
        <RouterLink to="/">
          <div class="cursor-pointer select-none flex items-center gap-3">
            <div class="w-28 h-10 flex items-center">
              <img src="/logo-1.png" class="object-cover w-full" alt="Logo" />
            </div>
          </div>
        </RouterLink>
        <!-- MENUS -->
        <div class="flex border border-[#a0a0a0] p-1 rounded-3xl overflow-hidden items-center gap-8 menus">
          <div
            v-for="(navlink, index) in navLinks"
            :key="index"
            @click="scrollToSection(navlink.sectionId)"
            class="cursor-pointer one-menu p-1 flex items-center select-none"
            :class="{
              'active-class': activeSection === navlink.sectionId.slice(1)
            }"
          >
            <a class="p-1 text-base text-white font-[semibold]">
              {{ navlink.name }}
            </a>
          </div>
        </div>
        <div >
          <BaseSelect
            color="white"
            :options="langs"
            v-model="$i18n.locale"
            @change="changeLanguage"
          />
        </div>
      </div>
    </div>
  </nav>

  <!-- MOBILE NAVBAR -->
  <nav class="block lg:hidden fixed top-0 right-0 w-full z-50 bg-[#252525]">
    <div class="container mx-auto px-5 py-5 flex justify-between items-center">
      <RouterLink to="/">
        <div class="cursor-pointer select-none flex items-center gap-3">
          <div class="w-24 h-10 flex items-center">
            <img src="/logo-1.png" class="object-cover w-full" alt="Logo" />
          </div>
        </div>
      </RouterLink>
      <div @click="toggleClass">
        <label class="burger" for="burger">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </div>

    <Transition>
      <div
        v-if="isActive"
        class="fixed top-0 left-0 w-[70%] h-[100vh] bg-[#252525] z-50 p-10 gap-5 flex flex-col pb-16 justify-start"
      >
        <div class="flex justify-between items-center">
          <RouterLink to="/">
            <div class="w-20 flex items-center h-10">
              <img src="/logo-1.png" class="object-cover w-full" alt="Logo" />
            </div>
          </RouterLink>
          <BaseSelect
          color="white"
            :options="langs"
            v-model="$i18n.locale"
            @change="changeLanguage"
          />
        </div>
        <div
          v-for="(navlink, index) in navLinks"
          :key="index"
          class="cursor-pointer select-none"
          @click="scrollToSection(navlink.sectionId), toggleClass()"
        >
          <a class="all-submenu text-lg text-white font-[semibold]">
            {{ navlink.name }}
          </a>
        </div>
      </div>
    </Transition>

    <div
      @click="toggleClass"
      v-if="isActive"
      class="absolute top-0 left-0 bg-black/50 w-full h-[100vh] z-40"
    ></div>
  </nav>
</template>

<style scoped>
.active-class {
  background-color: #080D75; /* Red background for active menu */
  transition: background-color 0.3s ease-in-out; /* Smooth transition */
  color: #fff;
  border-radius: 24px;
  overflow: hidden;
}

.nav {
  position: fixed;
  width: 100%;
  /* background: var(--body-color);
  backdrop-filter: blur(4px); */
  transition: 0.3s;
  z-index: 100;
}

.burger {
  position: relative;
  width: 30px;
  height: 20px;
  background: transparent;
  cursor: pointer;
  display: block;
}

.burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: white;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}
</style>
