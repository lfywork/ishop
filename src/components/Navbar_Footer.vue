<template>
<div class="my-navbar">
  <nav class="navbar navbar-default navbar-fixed-bottom">
    <div class="container" align="center">
      <ul class="nav nav-tabs nav-tabs-justified" id="menu">
        <div class="row" align="center">
          <div v-for="item in linkerImg" :key="item.id" :class="{'active':item.id == pageindex}"
                class="my-item col-md-3 col-sm-3 col-xs-3" align="center">
            <div class="space"></div>
            <i class="icon iconfont" :class="item.class"></i>
            <li role="presentation">
              <router-link class="button" :to="{path: item.toKey}">{{ item.title }}</router-link>
            </li>
          </div>
        </div>
      </ul>
    </div>
  </nav>
  <div class="nav-space"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar_Footer',
  data () {
    return {
      linkerImg: [{
        class: 'icon-shouye', id: 0, title: '首页', toKey: '/'
      }, {
        class: 'icon-huo', id: 1, title: '商品', toKey: '/goods'
      }, {
        class: 'icon-gouwuche', id: 2, title: '购物车', toKey: '/shoppingcart'
      }, {
        class: 'icon-wodejuhuasuan', id: 3, title: '我的', toKey: '/user'
      }]
    }
  },
  computed: {
    ...mapState([
      'pageindex'
    ])
  }
}
// $(function(){
//   $(".my-item").click(function() {
//     $(".my-item").removeClass('active')
//     $(this).addClass('active')
//   });
// });
</script>

<style scoped>
.my-navbar {
  width: 10rem;
  height: 1rem;
}
.nav-space {
  width: 10rem;
  height: 1rem;
}
.navbar {
  width: 10rem;
  height: 1rem;
}
.container {
  height: 100%;
  width: 100%;
}
.nav-tabs {
  text-align: center;
  height: 1rem;
  width: 100%;
  line-height: 0.3rem;
  font-size: 0.2rem;
}
.my-item .space{
  width: 100%;
  height: 0.2rem;
}
.my-item i{
  font-size: 0.3rem;
}

.my-item a {
  background: transparent !important;
  color: black !important;
}
.active a {
  color: #d34ba8 !important;
  background: transparent;
  outline: 0;
  text-decoration: none;
}
.active::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 0.05rem;
  top: -4px;
  background-color: #d34ba8;
  margin-bottom: 1%;
}
.active .icon {
  font-size: 0.5rem;
  color: #d34ba8;
}
</style>
