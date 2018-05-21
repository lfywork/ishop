<template>
<nav class="my-navbar navbar navbar-defalut" :class="{'navbar-fixed-top':fixheader}" role="navigation">
    <div class="container-fluid">
        <div class="row">
            <div class="navbar-header">
                <router-link :class="linker[0].class" :to='linker[0].toKey'>登录</router-link>
            </div>
            <form class="navbar-form navbar-left" role="search">
                <div class="form-group">
                    <input type="text" class="form-control" @click="setOpacity" @keydown.enter="enter_search" v-model="search_word" :placeholder="msg" />
                </div>
            </form>
            <div class="navbar-right">
                <router-link :class="linker[1].class" :to='linker[1].toKey'>
                    <i class="icon iconfont icon-saoyisao"></i>
                </router-link>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Navbar_Header',
  data () {
    return {
      msg: '大家正在搜索：毕业照',
      search_word: '',
      linker: [{
        class: 'button', toKey: '/'
      }, {
        class: 'button', toKey: '/'
      }]
    }
  },
  computed: {
    ...mapState([
      'fixheader'
    ])
  },
  methods: {
    enter_search () {
      this.$router.push('/search/' + this.search_word)
    },
    setOpacity () {
      $('.top-nav').css('opacity', 1)
    }
  }
}
$(window).scroll(function () {
  if ($('.navbar').offset().top > 50) {
    $('.navbar-fixed-top').addClass('top-nav')
  } else {
    $('.navbar-fixed-top').removeClass('top-nav')
  }
})
// $("input").oninput(function(){
//   $(".top-nav").css("opacity", 1);
// })
</script>

<style lang="less" scoped>
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
    opacity: 0.7;
    border-width: 0 !important;
}
.top-nav a {
    background: transparent !important;
    color: #ffffff !important;
}
.my-navbar,.top-nav {
  width: 10rem;
  height: 1rem;
  overflow: hidden;
  .container-fluid {
    height: 100%;
    width: 100%;
    .row {
      height: 100%;
      .navbar-header {
        font-size: 0.5rem;
        width: 10%;
        height: 100%;
        float: left;
        margin: auto;
        margin-left: 1%;
        margin-top: 1%;
      }
      form {
        height: 100%;
        width: 80%;
        float: left;
        border: 0;
        margin: 0 auto;
        padding-top: 1%;
        box-shadow: inset 0 0px 0 rgba(255,255,255,.1), 0 0px 0 rgba(255,255,255,.1);
        -webkit-box-shadow: inset 0 0px 0 rgba(255,255,255,.1), 0 0px 0 rgba(255,255,255,.1);
        .form-group {
        width: 100%;
        height: 80%;
        input {
            margin-left: 1%;
            font-size: 0.3rem;
            width: 100%;
            height: .8rem;
            text-align: center;
        }
        }
      }
      .navbar-right {
        height: 100%;
        margin: auto;
        margin-right: 1%;
        i {
          text-align: center;
          font-size: 0.7rem;
          margin: auto;
          margin-top: 25%;
        }
      }
    }
  }
}
</style>
