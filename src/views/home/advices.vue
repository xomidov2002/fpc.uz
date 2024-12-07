<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="container mx-auto px-5 pt-10 relative">
    <p
      class="text-white text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold px-5 border-l-2 md:py-5 border-l-blue-600">
      {{ t('mainPage.practiceTitle') }}</p>
    <p class="text-white text-xs sm:text-lg font-[montserrat400] pb-5 pt-10 w-full md:w-1/2">{{ t('mainPage.practiceSubtitle')
      }}</p>
    <div class="mt-10 relative flex flex-col items-center">
      <div class="w-full flex flex-col md:flex-row h-full gap-5">
        <div class="md:w-2/3 flex flex-col gap-5">
          <div class="flex flex-col sm:flex-row gap-5 w-full">
            <div class="images bg-[url('/images/advice-1.png')] sm:w-2/5 h-[250px]">
              <div class="shadow"></div>
              <div class="box">
                <p class="text">{{ t('advices.first') }}</p>
              </div>
            </div>
            <div class="images bg-[url('/images/advice-2.jpg')] sm:w-3/5 h-[250px]">
              <div class="shadow"></div>
              <div class="box">
                <p class="text">{{ t('advices.second') }}</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-5 w-full">
            <div class="images bg-[url('/images/advice-3.png')] sm:w-3/5 h-[250px]">
              <div class="shadow"></div>
              <div class="box">
                <p class="text">{{ t('advices.third') }}</p>
              </div>
            </div>
            <div class="images bg-[url('/images/advice-4.jpg')] sm:w-2/5 h-[250px]">
              <div class="shadow"></div>
              <div class="box">
                <p class="text">{{ t('advices.fourth') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/3 w-full md:h-auto h-[200px]">
          <div class="images bg-[url('/images/advice-5.jpg')] h-full">
            <div class="shadow"></div>
            <div class="box">
              <p class="text">{{ t('advices.fifth') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:w-2/5 text-center mt-10">
        <p class="text-white sticky top-24 text-xl tracking-widest  ">{{ t('advices.title') }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.images {
  @apply flex items-end justify-center bg-no-repeat bg-center bg-cover rounded-2xl overflow-hidden relative cursor-pointer transition duration-300
}

.box {
  @apply border-t border-t-white p-5 mx-5
}

.text {
  @apply text-white text-base
}

.shadow {
  @apply absolute w-full h-full bg-black/35 transition duration-300
}
.images:hover .shadow{
  @apply bg-black/60
}
</style>