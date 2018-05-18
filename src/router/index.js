import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import User from '@/pages/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/User',
      name: 'User',
      component: User
    }
  ]
})
