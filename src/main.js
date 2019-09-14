import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './firebase/axios'
import './plugins/vuesax.js'
import './assets/style.scss'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
