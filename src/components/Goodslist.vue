<template>
<div class="my-thumbnail thumbnail">
  <img :src="n.img" :alt="n.goods">
  <div class="caption">
    <a :href="n.url">
    <h3>{{ n.goods }}</h3>
    </a>
    <div class="good_info row">
      <span class="com_red col-md-6 col-sm-6 col-xs-6">￥{{ n.price }}</span>
      <div class="add_btn col-md-6 col-sm-6 col-xs-6">
        <i :class="isbuy" class="icon iconfont" @click="getGood(n, index, $event)"></i>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Goodslist',
  props: ['n', 'index'],
  data () {
    return {
      shoppingCarList: {},
      isbuy: 'icon-gouwuchetianjia'
    };
  },
  created () {
    if(typeof(Storage) !== "undefined"){
      var goodslist;
      var goods;
      if(goodslist = localStorage.getItem('goods')){
        goods = JSON.parse(goodslist);
        // 匹配去除
        this.n.index = this.index;
        for(var j = 0,len=goods.goodslist.length; j < len; j++) {
          if(JSON.stringify(goods.goodslist[j]) == JSON.stringify(this.n)){
            this.isbuy = 'icon-zhengque com_buy';
          }
        }
      }
    }else {
      alert('error');
    }
  },
  methods: {
    getGood(item, index, event){
      if(this.isbuy==='icon-gouwuchetianjia'){
        this.isbuy = 'icon-zhengque com_buy tantantan';
        setTimeout(()=>{
          this.isbuy = 'icon-zhengque com_buy';
        }, 1000);        
        if (typeof(Storage) !== "undefined") {
          // Store;
          var goodslist;
          var goods;
          if(goodslist = localStorage.getItem('goods')){
            item.index = index;
            goods = JSON.parse(goodslist);
            goods.goodslist.push(item);
            // 去重，再存入
            goods.goodslist = this.removeRepeat(goods.goodslist)
            localStorage.setItem('goods', JSON.stringify(goods));
          }else{ // 第一次
            item.index = index;
            goodslist = '{"goodslist":[]}';
            goods = JSON.parse(goodslist);
            goods.goodslist.push(item);
            localStorage.setItem('goods', JSON.stringify(goods));
          }
        } else {
          alert('error');
        }
      }else{
        goodslist = localStorage.getItem('goods');
        goods = JSON.parse(goodslist);
        // 匹配去除
        for(var j = 0,len=goods.goodslist.length; j < len; j++) {
          if(JSON.stringify(goods.goodslist[j]) == JSON.stringify(item)){
              goods.goodslist.splice(j,1);
              break;
          }
        }
        localStorage.setItem('goods', JSON.stringify(goods));
        this.isbuy = 'icon-gouwuchetianjia tantantan';
        setTimeout(()=>{
          this.isbuy = 'icon-gouwuchetianjia';
        }, 1000);
      }      
    },
    removeRepeat(arr){
      for(var i=0;i<arr.length;i++)
          for(var j=i+1;j<arr.length;j++)
              if(JSON.stringify(arr[i]) == JSON.stringify(arr[j])){
                arr.splice(j,1);
                j--;
              }
      return arr.sort(function(a,b){return a-b});
    }
  }
}
</script>

<style scoped>
.com_red {
  color: red;
  font-size: .25rem;
}
.com_buy {
  color: red;
  font-weight: bold;
}
.my-thumbnail {
  height: 5rem;
}
.caption {
  width: 100%;
  position: absolute;
  bottom: .1rem;
}
.icon {
  float: right;
  font-size: .3rem;
  margin-right: .1rem;
  margin-bottom: .1rem;
}

/* 购物车弹弹弹 */
@-webkit-keyframes mymove{
   0%   { -webkit-transform: scale(1) }
   25%  { -webkit-transform: scale(.8) }
   50%  { -webkit-transform: scale(1.1) }
   75%  { -webkit-transform: scale(.9) }
   100% { -webkit-transform: scale(1) }
}
@keyframes mymove{
   0%   { transform: scale(1) }
   25%  { transform: scale(.8) }
   50%  { transform: scale(1.1) }
   75%  { transform: scale(.9) }
   100% { transform: scale(1) }
}
.tantantan{
  -webkit-animation:mymove 1s;
  animation:mymove 1s;
}
</style>

