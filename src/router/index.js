import Vue from 'vue'
import Router from 'vue-router'
import cv from '@/pages/cv'
import projects from '@/pages/projects'
import home from '@/pages/home'
import contact from '@/pages/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/projects',
      name: 'projects',
      component: projects
    }, {
      path: '/cv',
      name: 'cv',
      component: cv
    }, {
      path: '/contact',
      name: 'contact',
      component: contact
    }, {
      path: '/',
      name: 'default',
      component: home
    }
  ]
})
