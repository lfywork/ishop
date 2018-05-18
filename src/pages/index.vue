<template>
<div>
  <Carousel />
</div>
</template>

<script>
import Carousel from '@/components/Carousel'
export default {
  name: 'index',
  components: {
    Carousel
  },
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
Carousel {
    display: table;
    width: 100%;
    height: 100%;
    padding: 100px 0;
    text-align: center;
    color: #fff;
    background: url(http://img.zcool.cn/community/038c0ee5744f9a500000025ae5acd2a.jpg) no-repeat bottom center;
    background-color: #000;
    background-size: cover;
}
</style>
