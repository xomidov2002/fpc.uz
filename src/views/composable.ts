import { type Chooses } from "@/interfaces";
import { ref } from "vue";
export function useChoosePage() {
  const chooses = ref<Chooses[]>([
    {
      id: 1,
      icon: '/Icons/1.svg',
      num: '3K',
      name: 'cases done'
    },
    {
      id: 2,
      icon: '/Icons/2.svg',
      num: '45',
      name: 'happy costumers'
    },
    {
      id: 3,
      icon: '/Icons/3.svg',
      num: '12+',
      name: 'award winning'
    },
    {
      id: 4,
      icon: '/Icons/4.svg',
      num: '1.5K',
      name: 'cases done'
    }
  ])
  return {
    chooses
  }
}
