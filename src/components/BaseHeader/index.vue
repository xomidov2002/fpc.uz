<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useHeaderStore } from '@/stores'
const store: any = useHeaderStore()
const { navLinks } = store
</script>
<template>
  <div class="bg-slate-200">
    <div class="container lg:px-20 py-6 px-5">
      <div>
        <div class="flex">
          <!-- -------------------------LOGO---------------------------- -->
          <div class="w-10 h-10 flex items-center gap-3">
            <img src="/logo-1.png" class="object-cover w-full" alt="">
            <span class="text-xl font-semibold">FPC</span>
          </div>
          <!-- --------------------------MENUS------------------------------ -->
          <div class="flex gap-8 ">
            <div v-for="(navlink, index) in navLinks" :key="index">
              <p class="text-lg text-menucolor font-medium">{{ navlink.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        hello
      </div>
    </div>

  </div>
</template>