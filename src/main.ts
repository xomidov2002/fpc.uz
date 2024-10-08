import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import uz from './locale/uz.json'
import ru from './locale/ru.json'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale:'ru',
  messages: {
    uz,
    ru
  }
})

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
