import { defineStore } from 'pinia'
import { type NavLink } from '@/interfaces'
interface StateHeader {
  ipadNavs: boolean
  allMenus: boolean
  navLinks: NavLink[]
  phoneView: number
}
export const useHeaderStore = defineStore('header', {
  state: (): StateHeader => {
    return {
      phoneView: 1,
      ipadNavs: false,
      allMenus: false,
      navLinks: [
        {
          id: 1,
          name: 'Home',
          route: '/home'
        },
        {
          id: 2,
          name: 'Product',
          route: '/whatarewedoing'
        },
        {
          id: 3,
          name: 'Pricing',
          route: '/whoweare'
        },
        {
          id: 4,
          name: 'blog',
          route: '/blog'
        },
        {
          id: 5,
          name: 'contact',
          route: '/contact'
        }
      ]
    }
  }
})
