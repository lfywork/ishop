import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/Layout'
import User from '@/pages/User'
import Search from '@/pages/Search'

// 默认跳转页面
import bingo from '@/pages/bingo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    }, {
      path: '/User',
      name: 'User',
      component: User
    }, {
      path: '/search/:keyword',
      name: 'Search',
      component: Search
    }, {
      path: '/bingo',
      name: 'bingo',
      component: bingo
    }
  ]
})
