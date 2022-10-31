console.log(111)
import { createApp, ref } from 'vue'
import './layout.css'

import App from './App'
import { router, routes } from './router'

const app = createApp(App, { routes })
app.use(router)
app.mount('#app')
