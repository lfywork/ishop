// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import Layout from '@/Layout'
import router from '@/router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})

var cssUrl = require('./font/iconfont.css')
var link = document.createElement('link')
link.type = 'text/css'
link.rel = 'stylesheet'
link.href = cssUrl.toString()
document.getElementsByTagName('head')[0].appendChild(link)
