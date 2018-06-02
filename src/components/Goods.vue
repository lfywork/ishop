<template>
<div>
  <div class="space"></div>
  <div class="row">
    <Goodslist class="col-md-6 col-sm-6 col-xs-6" v-for="(item, index) in goodslist"
     :n="item" :index="index" :key="index"></Goodslist>
  </div>
  <!-- <div class="space"></div> -->
</div>
</template>

<script>
import Goodslist from './Goodslist'

export default {
  name: 'Goods',
  components: {
    Goodslist
  },
  data () {
    return {
      showMe: true,
      goodslist: [],
      isLoadingMore: false
    }
  },
  activated () {
    this.$store.dispatch('setLoadheader', true)
    // 设置当前标记为主页
    this.$store.dispatch('setWhichpage', 'goods')
    this.$store.dispatch('setPageindex', 1)
  },
  mounted () {
    // 设置当前状态为加载中
    this.$store.dispatch('setLoading', true)
    this.$nextTick(() => {
      var that = this
      $.ajax({
        type: 'GET',
        // url: '/static/goodslist.json',
        url: 'http://yunxtec.com/test/goodslist.php',
        dataType: 'json',
        success: function (data) {
          // 模拟请求等待
          setTimeout(() => {
            // 页面显示
            that.$store.dispatch('setLoading', false)
            that.showMe = true
          }, 1000)
          that.goodslist = data.goodslist
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
            // console.log(this.getFalseBussinessbrief
          }
          this.isLoadingMore = false
        }, 1000)
      }
    },
    // 触发加载更多
    dispatchLoad () {
      var dscrollTop = document.body.scrollTop || document.documentElement.scrollTop
      if (document.documentElement.offsetHeight <= (dscrollTop + window.innerHeight + 1)) {
        console.info('触发加载')
        this.loadMore()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.space {
  width: 10rem;
  height: 1.1rem;
}
.row {
  margin-left: .1rem;
  margin-right: .1rem;
}
</style>
