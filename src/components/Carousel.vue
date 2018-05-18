<template>
<div id="myCarousel" class="carousel slide">
  <!-- 轮播（Carousel）指标 -->
  <ol class="carousel-indicators">
      <li data-target="#myCarousel" :data-slide-to="item.index" 
          :class="{'active':!index}" v-for="(item, index) in adsinfo.adlist" :key="item.index"></li>
  </ol>
  <!-- 轮播（Carousel）项目 -->
  <div class="carousel-inner">
      <div class="item" :class="{'active':!index}" v-for="(item, index) in adsinfo.adlist" :key="item.index" >
          <a :href="item.url">
            <img style="height: 200px" :src="item.img" :alt="item.name">
          </a>
      </div>
  </div>
  <!-- 轮播（Carousel）导航 -->
  <!-- <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
  </a> -->
</div>
</template>

<script>
export default {
  name: 'Carousel',
  // created: function(){
  //     $.ajax({
  //       type: "GET",
  //       url: "/static/adlist.json",
  //       dataType: "json",
  //       success: function(data){          
  //         console.log(data);
  //         this.adsinfo = data;
  //       },
  //       error: function(data){
  //       }
  //     })
  // },
  mounted(){
    this.$nextTick(()=>{
      var that = this;
      $.ajax({
        type: "GET",
        url: "/static/adlist.json",
        dataType: "json",
        success: function(data){
          that.adsinfo = data;
        },
        error: function(data){
        }
      })
      // 初始化轮播
      $("#myCarousel").carousel('cycle');
      // 循环轮播到下一个项目
      $("#myCarousel").carousel('next');
    })
  },
  data () {
    return {
      adsinfo: {}
    }
  }
}
</script>

<style scoped>
.item {
  width: 100%;
  height: 200px;
}
img {
  width: 100%;
  text-align: center;
  color: #fff;
  background-color: #000;
  background-size: cover;
}
</style>