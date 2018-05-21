<template>
  <div id="myCarousel" class="myCarousel carousel slide" data-ride="carousel">
    <!-- 轮播（Carousel）指标 -->
    <ol class="myCarousel_indicators carousel-indicators">
      <li data-target="#myCarousel" :data-slide-to="item.index" :class="{'active':!index}" v-for="(item, index) in adsinfo.adlist"
        :key="item.index"></li>
    </ol>
    <!-- 轮播（Carousel）项目 -->
    <div class="myCarousel_innner carousel-inner">
      <div class="item" :class="{'active':!index}" v-for="(item, index) in adsinfo.adlist" :key="item.index">
        <a :href="item.url">
          <img style="height:100%" :src="item.img" :alt="item.name">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel', // created: function(){
  //     $.ajax({
  //       type: "GET",
  //       url: "/static/adlist.json",
  //       dataType: "json",
  //       success: function(data){
  //         console.log(data);
  //         this.adsinfo = data
  //       },
  //       error: function(data){
  //       }
  //     })
  // },
  mounted () {
    this.$nextTick(() => {
      var that = this
      $.ajax({
        type: 'GET',
        url: '/static/adlist.json',
        dataType: 'json',
        success: function (data) {
          that.adsinfo = data
        },
        error: function (data) {}
      })
    })
  },
  data () {
    return {
      adsinfo: {}
    }
  }
}
</script>

<style lang="less" scoped>
.myCarousel {
  width: 10rem;
  overflow: hidden;
  .myCarousel_innner {
    height: 5rem;
    background: #ffffff;
    margin-bottom: 0.2rem;
    .item {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        text-align: center;
        color: #fff;
        background-color: #000;
        background-size: cover;
      }
    }
  }
}
</style>
