<template>
  <div v-if="showMe">
    <div class="re_search">
      <i @click="$router.go(-1)" class="icon iconfont icon-xiangzuojiantou"></i>
      <input type="search" v-model="search_text" class="v-md" placeholder="请输入商品名称" @keydown.enter="search_method">
    </div>
    <Goods v-for="(item, n) in search_res" :key="n" :a="item"></Goods>
  </div>
</template>

<script>
import Goods from '../components/Goods'

export default {
  name: 'search',
  data () {
    return {
      showMe: false,
      goodslist: [],
      search_text: '', // 搜索框内容
      search_res: [] // 搜索结果
    }
  },
  mounted () {
    this.$store.dispatch('setLoading', true)
    // 模拟加载
    setTimeout(() => {
      this.$store.dispatch('setLoading', false)
      this.showMe = true
    }, 1000)
    this.$nextTick(() => {
      var that = this
      $.ajax({
        type: 'GET',
        // url: '/static/goodslist.json',
        url: 'http://yunxtec.com/test/goodslist.php',
        dataType: 'json',
        success: function (data) {
          that.goodslist = data.goodslist
        },
        error: function (data) {
        }
      })
    })
    this.search_method()
  },
  methods: {
    search_method () {
      this.search_res = []
      var mainWord = this.$route.params.keyword
      // var mainWord = this.search_text;
      if (this.search_text !== '' && this.search_text !== this.$route.params.keyword) {
        mainWord = this.search_text
      }
      this.search_text = mainWord
      for (var x in this.goodslist) {
        if (this.goodslist[x].goods.includes(mainWord)) {
          this.search_res.push(this.search_res[x])
        }
      }
    }
  },
  components: {
    Goods
  }
}
</script>

<style lang="less" scoped>
.re_search{
  background: #d34ba8;
  padding: .2rem;
  height: 1.3rem;
  .icon-xiangzuojiantou {
    font-size: 0.6rem;
    color: #ffffff;
  }
  input[type="search"]{
    display:inline-block;
    height:.9rem;
    width:8rem;
    outline: none;
    border: none;
    border-radius:.45rem;
    background:#f2f2f2;
    box-sizing: border-box;
    padding: 0 .5rem;
    font-size:.4rem;
  }
}
</style>
