<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useHeaderStore } from '@/stores'
const store: any = useHeaderStore()
const { navLinks } = store
</script>
<template>
  <div class="backdrop-blur-md bg-white nav">
    <div class="container mx-auto lg:px-15 py-6 px-5">
      <div>
        <div class="flex items-center justify-between">
          <!-- -------------------------LOGO---------------------------- -->
          <div class="cursor-pointer select-none flex items-center gap-3">
            <div class="w-10 h-10">
              <img src="/logo-1.png" class="object-cover w-full" alt="">
            </div>
            <span class="text-xl font-semibold">Full Poin Consult</span>
          </div>
          <!-- --------------------------MENUS------------------------------ -->
          <div class="flex gap-8 menus">
            <div class="cursor-pointer select-none" v-for="(navlink, index) in navLinks" :key="index">
              <p class="all-submenu text-lg text-[#252B42] font-semibold">{{ navlink.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.all-submenu::after {
  content: '';
  width: 0;
  height: 2px;
  background-color: #252B42;
  left: 0;
  bottom: 0;
  transition: all 0.2s linear;
  position: absolute;
}

.all-submenu:hover::after {
  width: 100%;
}

.all-submenu::before {
  content: '';
  width: 0;
  background-color: #252B42;
  right: 0;
  top: 0;
  transition: all 0.2s linear;
  position: absolute;
}

.all-submenu:hover::before {
  width: 100%;
}
.nav{
    position: fixed;
    width: 100%;
    background: var(--body-color);
    transition: .3s;
    z-index: 100;
}
</style>