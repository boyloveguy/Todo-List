import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/global.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faCheck, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from 'pinia'

library.add(faTrash, faCheck, faSquarePlus);
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
