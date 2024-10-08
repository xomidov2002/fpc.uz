<script setup lang="ts">
  import type { PropType } from 'vue';
  import { watch, toRefs, defineAsyncComponent } from 'vue';
  const props = defineProps({
    name: {
      type: String as PropType<string>,
      required: true,
      validate: (value: any) => {
        if (typeof value !== 'string') {
          return 'You should pass string type props';
        }
      }
    }
  });
  toRefs(props);
  let icons:any = defineAsyncComponent(() => import(`./icons/${props?.name}.vue`));
  watch(props, () => {
    icons = defineAsyncComponent(() => import(`./icons/${props?.name}.vue`));
  });
</script>

<template>
  <component :is="icons"></component>
</template>