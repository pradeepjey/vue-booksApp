import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3StarRatings from "vue3-star-ratings"
import Vue3Toasity from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import './style.css'
import './main.css'
import App from './App.vue'
import router from "./router"
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ms from './locales/ms.json'

const pinia = createPinia()
const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
        en,
        ms        
    }
});

createApp(App)
.component("vue3-star-ratings", vue3StarRatings)
.use(router)
.use(pinia)
.use(i18n)
.use(Vue3Toasity, { autoClose: 3000 })
.mount('#app')
