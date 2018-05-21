<template>
<div class="index_main" v-if="showMe">
  <Carousel />
  <div class="index_banner">
    <!-- 设置不自动滚动 -->
    <Swipe class="my-swipe" :auto="0">
      <Swipe-item class="slide slide1">
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/抢购.png" alt="">
              <p>限时抢购</p>
            </div>
          </router-link>
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/惊喜.png" alt="">
              <p>节日礼物</p>
            </div>
          </router-link>
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/推荐.png" alt="">
              <p>我的推荐</p>
            </div>
          </router-link>
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/手机充值.png" alt="">
              <p>手机充值</p>
            </div>
          </router-link>
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/火车票.png" alt="">
              <p>订购车票</p>
            </div>
          </router-link>
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/电影.png" alt="">
              <p>电影上新</p>
            </div>
          </router-link>
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/女士.png" alt="">
              <p>女生特权</p>
            </div>
          </router-link>
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/男士.png" alt="">
              <p>男生特权</p>
            </div>
          </router-link>
      </Swipe-item>

      <Swipe-item class="slide slide2">
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/抢购.png" alt="">
              <p>限时抢购</p>
            </div>
          </router-link>
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/惊喜.png" alt="">
              <p>节日礼物</p>
            </div>
          </router-link>
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/推荐.png" alt="">
              <p>我的推荐</p>
            </div>
          </router-link>
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/手机充值.png" alt="">
              <p>手机充值</p>
            </div>
          </router-link>
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/火车票.png" alt="">
              <p>订购车票</p>
            </div>
          </router-link>
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/电影.png" alt="">
              <p>电影上新</p>
            </div>
          </router-link>
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/女士.png" alt="">
              <p>女生特权</p>
            </div>
          </router-link>
          <router-link to="/bingo">
            <div class="common_slider">
              <img src="../assets/slider/男士.png" alt="">
              <p>男生特权</p>
            </div>
          </router-link>
      </Swipe-item>
    </Swipe>
  </div>
  <!-- 今日优惠标题 -->
  <h3 class="index_title"><img src="../assets/礼物.png" alt="">今日优惠</h3>
  <!-- 今日优惠列表 -->
  <div>
    <DiscountList v-for="item in discount" :a="item" :key="item.id"></DiscountList>
  </div>

</div>
</template>

<script>
import Carousel from './Carousel'
import { Swipe, SwipeItem } from 'vue-swipe'
import DiscountList from './DiscountList'

export default {
  name: 'Homepage',
  components: {
    Carousel,
    Swipe,
    SwipeItem,
    DiscountList
  },
  data () {
    return {
      showMe: true,
      discount: [],
      isLoadingMore: false
    }
  },
  activated () {
    this.$store.dispatch('setLoadheader', true)
    // this.$store.dispatch('setFixheader', true)
    this.$store.dispatch('setWhichpage', 'homepage')
    this.$store.dispatch('setPageindex', 0)
  },
  mounted () {
    // 设置当前状态为加载中
    this.$store.dispatch('setLoading', true)
    // 设置当前标记为主页
    this.$store.dispatch('setWhichpage', 'homepage')
    // 模拟请求等待
    // var time = Math.floor(Math.random() * 2000);
    // console.log('模拟加载用时' + time);
    // setTimeout(() => {
    //   // 页面显示
    //   this.$store.dispatch('setLoading', false);
    //   this.showMe = true;
    // }, time);
    // setTimeout(() => {
    //   window.addEventListener('scroll', this.dispatchLoad, false);
    // }, 0);
    this.$nextTick(() => {
      var that = this
      $.ajax({
        type: 'GET',
        url: '/static/discount.json',
        dataType: 'json',
        success: function (data) {
          // 模拟请求等待
          setTimeout(() => {
            // 页面显示
            that.$store.dispatch('setLoading', false)
            that.showMe = true
          }, 1000)
          that.discount = data.discount
        },
        error: function (data) {
        }
      })
    })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.dispatchLoad, false)
  },
  methods: {
    enter_search (e) {
      this.$router.push('/search/' + this.search_word)
    },
    // 加载更多
    loadMore () {
      // 大于十五条不加载
      if (this.discount.length > 15) return
      this.$store.dispatch('setLoading', true)
      if (!this.isLoadingMore) { // 是否加载中
        this.isLoadingMore = true
        setTimeout(() => {
          this.$store.dispatch('setLoading', false)
          if (this.discount.length <= 15) {
            this.$store.dispatch('setHomepageMore', [...this.discount, ...(this.discount).slice(0, 5)])
            // console.log(this.getFalseBussinessbrief);
          }
          this.isLoadingMore = false
        }, 1000)
      }
    },
    // 触发加载更多
    dispatchLoad () {
      var dscrollTop = document.body.scrollTop || document.documentElement.scrollTop
      if (document.documentElement.offsetHeight <= (dscrollTop + window.innerHeight + 1)) {
        // console.info('触发加载')
        this.loadMore()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.index_main{
  width: 10rem;
  overflow:hidden;
  .index_banner{
    height:4.6rem;
    background: #ffffff;
    margin-bottom:0.2rem;
    .common_slider{
      width:2.5rem;
      height:2rem;
      float: left;
      img{
        margin: 0 auto;
        display:block;
        width:1.2rem;
        height:1.2rem;
        margin-top:.2rem;
      }
      p{
        text-align:center;
        font-size: .3rem;
      }
    }
  }
  .index_title{
    line-height: .8rem;
    font-weight: 600;
    background: #00000014;
    border-top: 1px solid #eee;
    font-size: .4rem;
    padding-left: .4rem;
    margin: 0;
    img {
      margin: -.1rem .1rem .1rem 0;
      width: .6rem;
      height: .6rem;
    }
  }
}
</style>
