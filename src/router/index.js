import Vue from 'vue'
import Router from 'vue-router'
import cv from '@/components/cv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cv',
      component: cv
    }
  ]
})
