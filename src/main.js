// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import { store } from './store'
import router from './router'
import myPortfolioNavigation from './components/my-portfolio-navigation.vue'
import myPortfolioFooter from './components/my-portfolio-footer.vue'

Vue.component('my-portfolio-navigation', myPortfolioNavigation)
Vue.component('my-portfolio-footer', myPortfolioFooter)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
