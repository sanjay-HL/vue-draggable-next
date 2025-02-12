import './index.css'
import './ribbons.css'
import 'vue3-virtual-scroller/dist/vue3-virtual-scroller.css'

import App from './App.vue'
import VueVirtualScroller from 'vue3-virtual-scroller'
import { createApp } from 'vue'
import { registerComponents } from './components/dynamic'
import { router } from './router'
import { store } from './store'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(registerComponents)
app.use(VueVirtualScroller)
window.vm = app.mount('#app')
