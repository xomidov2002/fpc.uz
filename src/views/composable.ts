import { type Chooses } from "@/interfaces";
import { ref } from "vue";
export function useChoosePage() {
  const chooses = ref<Chooses[]>([
    {
      id: 1,
      icon: 'public/ChooseIcons/1.svg',
      num: '3K',
      name: 'cases done'
    },
    {
      id: 2,
      icon: 'public/ChooseIcons/2.svg',
      num: '45',
      name: 'happy costumers'
    },
    {
      id: 3,
      icon: 'public/ChooseIcons/3.svg',
      num: '12+',
      name: 'award winning'
    },
    {
      id: 4,
      icon: 'public/ChooseIcons/4.svg',
      num: '1.5K',
      name: 'cases done'
    }
  ])
  return chooses
}
