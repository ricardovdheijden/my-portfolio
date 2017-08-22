// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { store } from './store'
import router from './router'
import mpNavigation from './components/mp-navigation.vue'
import mpFooter from './components/mp-footer.vue'

Vue.component('mp-navigation', mpNavigation)
Vue.compoment('mp-footer', mpFooter)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
