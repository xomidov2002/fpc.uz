<script setup lang="ts">
import { computed, reactive, ref, onMounted } from 'vue'
import BaseSelect from '@/components/BaseSelect/index.vue'
import { useI18n } from 'vue-i18n'

const { t, locale, setLocaleMessage } = useI18n()
const selectedLanguage = ref(locale.value)
const isActive = ref(false)
const activeSection = ref('')

const changeLanguage = async () => {
  await setLocaleMessage(
    selectedLanguage.value,
    await import(`@/locale/${selectedLanguage.value}.json`)
  )
  locale.value = selectedLanguage.value
}

const toggleClass = () => {
  isActive.value = !isActive.value
}

interface Navbar {
  id: number
  name: string
  sectionId: string
}

const navLinks = computed<Navbar[]>(() => [
  { id: 0, name: t('navbar.mainPage'), sectionId: '#main' },
  { id: 1, name: t('navbar.solution'), sectionId: '#advices-section' },
  { id: 2, name: t('navbar.services'), sectionId: '#services-section' },
  { id: 3, name: t('navbar.projects'), sectionId: '#projects-section' },
  { id: 4, name: t('navbar.aboutUs'), sectionId: '#aboutus-section' },
  { id: 5, name: t('navbar.contact'), sectionId: '#contact-section' },
  { id: 6, name: t('navbar.clients'), sectionId: '#client-section' },
])

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

// Scroll to section
const scrollToSection = (sectionId: string) => {
  const cleanId = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId
  const section = document.getElementById(cleanId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

// Detect active section with IntersectionObserver
const observeSections = () => {
  const sections = document.querySelectorAll('section')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { threshold: 0.5 } // Sensitivity for activating the section
  )
  sections.forEach((section) => observer.observe(section))
}

onMounted(() => {
  observeSections()
})
</script>


<template>
  <div class="bg-black backdrop-blur-sm nav">
    <div class="md:block hidden container mx-auto my-0 py-6 px-5">
      <div>
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
          <div class="flex item-center gap-8 menus">
            <div
              class="cursor-pointer flex items-center select-none"
              v-for="(navlink, index) in navLinks"
              :key="index"
              @click="scrollToSection(navlink.sectionId)"
              :class="{
                'active-class': activeSection === navlink.sectionId.slice(1)
              }"
            >
              <a
                class="all-submenu text-lg text-white hover:text-[#080D75] 2xl:text-2xl font-[semibold]"
              >
                {{ navlink.name }}
              </a>
            </div>

            <BaseSelect
              color="white"
              :options="langs"
              v-model="$i18n.locale"
              @change="changeLanguage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>  

  <!-- FOR MOBILE -->
  <div class="block md:hidden fixed top-0 right-0 w-full z-50 bg-[#252525]">
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
        <div>
          <div class="flex justify-between items-center">
            <RouterLink to="/">
              <div class="w-20 flex items-center h-10">
                <img src="/logo-1.png" class="object-cover w-full" alt="Logo" />
              </div>
            </RouterLink>
            <BaseSelect
              color="white"
              :options="langs"
              v-model="selectedLanguage"
              @change="changeLanguage"
            />
          </div>
        </div>
        <div class="cursor-pointer select-none" v-for="(navlink, index) in navLinks" :key="index">
          <a
            @click="scrollToSection(navlink.sectionId), toggleClass()"
            class="all-submenu text-lg text-white 2xl:text-2xl font-[semibold]"
          >
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
  </div>
</template>

<style scoped>
.active-class a {
  background-color: #ff0000; /* Red background for active */
  transition: background-color 0.3s ease-in-out; /* Smooth transition */
  color: #fff;
}

.all-submenu {
  position: relative;
  padding: 5px;
}

.all-submenu:hover::after {
  width: 100%;
}

.all-submenu::after {
  content: '';
  width: 0;
  height: 2px;
  background-color: #080d75;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: all 0.2s linear;
}

.all-submenu:hover::after {
  width: 100%;
}

.all-submenu::before {
  content: '';
  width: 0;
  background-color: #252b42;
  right: 0;
  top: 0;
  transition: all 0.2s linear;
  position: absolute;
}

.all-submenu:hover::before {
  width: 100%;
}

.nav {
  position: fixed;
  width: 100%;
  background: var(--body-color);
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

.burger input {
  display: none;
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

.burger input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 5px;
}

.burger input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.burger input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 28px;
  left: 5px;
}
</style>
