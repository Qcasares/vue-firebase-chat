import Vue from 'vue'
import {router,Router} from './router'
import App from './components/App.vue'
import VueFire from 'vuefire'

Vue.use(Router)
Vue.use(VueFire)

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
