import Vue from 'vue'
import App from './App.vue'
import '@/assets/tailwind.css'
import { getApi } from "@/assets/lib/api"
getApi()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
