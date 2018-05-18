<template>
  <nav class="navbar navbar-default navbar-fixed-bottom my-navbar">
    <div class="container" align="center">
      <ul class="nav nav-tabs nav-tabs-justified" id="menu">
        <div class="row" align="center">
          <div v-for="item in linkerImg" :key="item.id" :class="item.choose" class="my-item col-md-3 col-sm-3 col-xs-3" align="center">
            <i class="icon iconfont icon-saoyisao" :class="item.class"></i>
            <li role="presentation">
              <router-link class="button" :to="{path: item.toKey}">{{ item.title }}</router-link>
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
        class: 'icon-shouye', id: 1, title: '首页', choose: 'active', toKey: '/'
      }, {
        class: 'icon-sousuo', id: 2, title: '搜索', choose: ''
      }, {
        class: 'icon-gouwuche', id: 3, title: '购物车', choose: ''
      }, {
        class: 'icon-wodejuhuasuan', id: 4, title: '个人中心', choose: '', toKey: '/User'
      }]
    }
  }
}

$(function(){
  $(".my-item").click(function() {
    $(".my-item").removeClass('active');    
    $(this).addClass('active');
  });
});
</script>

<style scoped>
.nav-tabs {
  text-align: center;
  height: 40px;
  line-height: 20px;
}
.my-item {
  /* background-color: lightpink;
  border-color: lightpink; */
  margin-top: 4px;
} 
.my-navbar a {
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
  height: 3px;
  top: -4px;
  background-color: #d34ba8;
}
.active .icon {
  font-size: 150%;
  color: #d34ba8;
}
</style>
