import Vue from 'vue'
import Router from 'vue-router'
import cv from '@/components/cv'
import projects from '@/components/projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/projects',
      name: 'projects',
      component: projects
    }, {
      path: '/cv',
      name: 'cv',
      component: cv
    }, {
      path: '/',
      name: 'default',
      component: projects
    }
  ]
})
