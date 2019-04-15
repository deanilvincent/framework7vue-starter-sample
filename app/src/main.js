import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import 'framework7/css/framework7.bundle.min.css'
import 'framework7-icons'
import 'material-design-icons'

import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'

Framework7.use(Framework7Vue)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
