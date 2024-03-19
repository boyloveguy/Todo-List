import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/styles/global.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faCheck, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrash, faCheck, faSquarePlus);


createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
