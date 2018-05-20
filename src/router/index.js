import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Homepage from '@/components/Homepage'
import Goods from '@/components/Goods'
import ShoppingCart from '@/components/Shopping_Cart'
import User from '@/pages/User'
import Search from '@/pages/Search'

// 默认跳转页面
import bingo from '@/pages/bingo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '',
          name: 'Homepage',
          component: Homepage
        },
        {
          path: 'goods',
          name: 'Goods',
          component: Goods
        },
        {
          path: 'shoppingcart',
          name: 'ShoppingCart',
          component: ShoppingCart
        }
      ]
    }, {
      path: '/user',
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
