import { type Chooses } from "@/interfaces";
import { type Cards } from "../interfaces";
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
export function useCardPage() {
  const cards = ref<Cards[]>([
    {
      id: 1,
      icon: 'icons-1/1.svg',
      title: 'Digital Marketing',
      subtitle: 'We focus on ergonomics and meeting you where you work.'
    },
    {
      id: 2,
      icon: 'icons-1/2.svg',
      title: 'National top 50 firms',
      subtitle: "Just type what's on your mind and we'll get you there."
    },
    {
      id: 3,
      icon: 'icons-1/1.svg',
      title: 'Digital Marketing',
      subtitle: 'the quick fox jumps over the lazy dog'
    },
  ])
  return {
    cards
  }
}
