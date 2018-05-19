<template>
<nav class="navbar navbar-defalut navbar-fixed-top my-navbar" role="navigation">
    <div class="container-fluid">
        <div class="row">      
            <div class="navbar-header col-md-2 col-sm-2 col-xs-2">
                <router-link :class="linker[0].class" :to='linker[0].toKey'>登录</router-link>
            </div>        
            <div class="navbar-collapse col-md-9 col-sm-9 col-xs-9">
                <form class="navbar-form navbar-left" role="search">
                    <div class="form-group">
                        <input type="text" class="form-control" @keydown.enter="enter_search" v-model="search_word" :placeholder="msg" />
                    </div>
                </form>
            </div>
            <div class="navbar-collapse col-md-1 col-sm-1 col-xs-1">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link :class="linker[1].class" :to='linker[1].toKey'>
                            <i class="icon iconfont icon-saoyisao"></i>
                        </router-link>
                    </li>
                </ul>
            </div>    
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar_Header',
  data () {
    return {
      msg: '大家正在搜索：毕业照',
      search_word: '',          // 搜索词
      linker: [{
        class: 'button', toKey: '/'
      }, {
        class: 'button', toKey: '/'
      }]
    }
  }
}
$(window).scroll(function () {
  if($(".navbar").offset().top > 50){
    $(".navbar-fixed-top").addClass("top-nav");
  }else{
    $(".navbar-fixed-top").removeClass("top-nav");
  }
})
</script>

<style scoped>
.my-navbar {
    transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
}
.my-navbar a{
    background: transparent !important;
    color: #d34ba8 !important;
}
.my-navbar a:hover {
    /* color: #000000 !important; */
    background: transparent;
    outline: 0;
    text-decoration: none;
}
.top-nav {
    padding: 0;
    /* -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -ms-filter: blur(5px);
    -o-filter: blur(5px);
    filter: blur(5px); */
    background: #d34ba8;
}
.top-nav a {
    background: transparent !important;
    color: #ffffff !important;
}

.nav {
    margin-left: 5px;
    margin-right: 5px;
}
.icon {
    font-size: 200%;
    position: absolute;
    right: 0%;
}
.navbar-header {
    margin-top: 15px;
    margin-left: 5px;
    padding-right: 5px;
    padding-left: 5px;
    width: auto;
}
.navbar-collapse {
    margin: auto;
    padding: 0;
    border: 0;
}
.navbar-form {
    border: 0;
    margin-top: 4px;
    margin-bottom: 4px;
    margin-right: 0%;
    margin-left: 0%;
    padding-top: 4px;
    padding-bottom: 0%;
    padding-left: 5px;
    padding-right: 0%;
    box-shadow: inset 0 0px 0 rgba(255,255,255,.1), 0 0px 0 rgba(255,255,255,.1);
    -webkit-box-shadow: inset 0 0px 0 rgba(255,255,255,.1), 0 0px 0 rgba(255,255,255,.1);
}

/*button.navbar-toggle {
    background-color: #fbfbfb;
}
button.navbar-toggle > span.icon-bar {
    background-color: #dedede
} */
</style>
