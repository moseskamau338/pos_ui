import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'
import Authenticated from '@/Layouts/Authenticated.vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import mitt from 'mitt'
const emitter = mitt()


const pinia = createPinia()
pinia.use(piniaPersist)

//plugin global filters:
//For documentation: https://github.com/freearhey/vue2-filters
import AppFilters from './library/filters'


import('./setup')

const app = createApp(App)
app.provide('emitter', emitter)

app.config.globalProperties.$filters = AppFilters

app.use(router)
    .use(pinia)
    .component('BaseLayout', Authenticated)
    .mount('#app')
