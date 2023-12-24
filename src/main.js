import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueClickAway from "vue3-click-away";
const app = createApp(App);
app.use(VueClickAway)
app.mount('#app')
