<template>
  <nav class="navbar navbar-default navbar-fixed-bottom">
    <div class="container" align="center">
      <ul class="nav nav-tabs nav-tabs-justified">
        <div class="row" align="center">
          <div v-for="item in linkerImg" :key="item.id" class="col-md-3 col-sm-3 col-xs-3" align="center">
            <img :src="item.src" alt="...">
            <li>
              <a href="#">{{ item.title }}</a>
            </li>
          </div>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar_Footer',
  data () {
    return {
      linkerImg: [{
        src: require('../assets/首页.png'), id: 1, title: '首页'
      }, {
        src: require('../assets/搜索.png'), id: 2, title: '搜索'
      }, {
        src: require('../assets/购物车.png'), id: 3, title: '购物车'
      }, {
        src: require('../assets/我的聚划算.png'), id: 4, title: '个人中心'
      }]
    }
  }
}
</script>

<style scoped>
.nav-tabs {
  text-align: center;
  height: 40px;
  line-height: 20px;
}
</style>
