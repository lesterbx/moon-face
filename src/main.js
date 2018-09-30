import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { MdDatepicker, MdButton, MdDialog } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
Vue.config.productionTip = false
Vue.use(MdDatepicker)
Vue.use(MdButton)
Vue.use(MdDialog)
new Vue({
  render: h => h(App)
}).$mount('#app')
