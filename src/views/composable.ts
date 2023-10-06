import { type Chooses } from "@/interfaces";
import { type Cards } from "../interfaces";
import { type PracticeCards } from "@/interfaces";
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
      hover: 'icons-1/3.svg',
      title: 'Digital Marketing',
      subtitle: 'We focus on ergonomics and meeting you where you work.'
    },
    {
      id: 2,
      icon: 'icons-1/2.svg',
      hover: 'icons-1/3.svg',
      title: 'National top 50 firms',
      subtitle: "Just type what's on your mind and we'll get you there."
    },
    {
      id: 3,
      icon: 'icons-1/1.svg',
      hover: 'icons-1/3.svg',
      title: 'Digital Marketing',
      subtitle: 'the quick fox jumps over the lazy dog'
    },
  ])
  return {
    cards
  }
}
export function usePracticePage() {
  const practiceCards = ref<PracticeCards[]>([
    {
      title: 'A single source of truth',
      subtitle: 'Newton thought that light was made up of particles, but then it was discovered',
      img: '/images/1.jpg'
    },
    {
      title: 'Fastest way to organize',
      subtitle: '“Quantum mechanics”is the description of the behaviour of matter',
      img: '/images/2.jpg'
    },
    {
      title: 'Fastest way to take action',
      subtitle: 'They describe a universe consisting of bodies moving',
      img: '/images/3.jpg'
    },
    {
      title: 'Work better together',
      subtitle: 'They finally obtained a consistent description of the behaviour ',
      img: '/images/4.jpg'
    }
  ])
  return {
    practiceCards
  }
}