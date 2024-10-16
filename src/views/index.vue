<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/BaseNavbar/index.vue'
import TheFooter from '@/components/BaseFooter/index.vue'
</script>
<template>
  <div>
    <TheHeader />
    <div class="">
      <RouterView></RouterView>
      <!-- <div class="fixed bottom-10 right-10 sm:w-16 sm:h-16 w-10 h-10 z-50 cursor-pointer">
        <div class="w-16 h-16 rounded-[100%] bg-[#080D75] flex items-center justify-center">
          <routerLink to="/contact">
            <BaseIcon name="phone" class="w-10 h-10 object-cover text-white" />
          </routerLink>
        </div>
      </div> -->
    </div>
    <TheFooter />
  </div>
</template>
