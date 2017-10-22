// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import { store } from './store'
import router from './router'
import VueProgressiveImage from 'vue-progressive-image'
import mpNavigation from './components/mp-navigation.vue'
import mpFooter from './components/mp-footer.vue'

Vue.component('mp-navigation', mpNavigation)
Vue.component('mp-footer', mpFooter)
Vue.config.productionTip = false
Vue.use(VueProgressiveImage, {
  delay: 2000, // 2 seconds before the image is displayed
  blur: 2
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
