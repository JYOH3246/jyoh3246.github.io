import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Quasar from "quasar";
import router from './router'

// import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// import quasar css
import 'quasar/dist/quasar.css'

const app = createApp(App)
app.use(Quasar, {
    plugins : {},
})
app.use(router)

app.mount('#app')
