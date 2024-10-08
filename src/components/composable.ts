import { ref } from "vue"

export function useHeader() {
  const locales = ref(['uz', 'ru'])
  return{
    locales
  }
}