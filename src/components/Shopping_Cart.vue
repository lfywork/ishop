<template>
<div class="index_main" v-if="showMe">
  <div class="space"></div>
  <nav class="my-navbar navbar navbar-defalut navbar-fixed-top" role="navigation">
    <div class="container-fluid">
        <span>购物车</span>
    </div>
  </nav>
  <span class="nogood" v-if="goods.length == 0" >购物车空</span>
  <div class="item" v-for="item in goods" :key="item.index">
    <section class="good">
      <!-- 商品图片 -->
      <div class="good_img">        
        <img :src="item.img" alt="">
      </div>
      <!-- 商品信息 -->
      <div class="good_info">
        <!-- 商品名 -->
        <a :href="item.url"> 
          <section class="good_name">
            <span class="fl ell">{{ item.goods }}</span>
          </section>
        </a>
        <!-- 商品描述 -->
        <section class="good_descr">
          <span class="fl ell">{{ item.descr }}</span>
        </section>
        <div class="container-fluid">
          <div class="row">
            <!-- 商品单价和总价 -->
            <section class="good_price fl col-md-7 col-sm-7 col-xs-7">
                <span class="zsd">
                  价格 ￥{{ item.price }}/ 合计
                </span>
                <span class="zxd">
                  ￥{{ item.price*item.num }}
                </span>
            </section>
            <div class="add_remove col-md-4 col-sm-4 col-xs-4">
              <div class="add_remove_btn">
                <img src="../assets/减.png" @click="reduce_num(item)">
                <span class="commodity_count">
                  {{ item.num }}
                </span>
                <img src="../assets/加.png" @click="add_num(item)">
              </div>
            </div>
            <div class="delete_btn col-md-1 col-sm-1 col-xs-1">
              <button class="btn btn-default" type="button" @click="deleteGood(item)">删除</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="submit" v-if="goods.length != 0">
    <button type="button" class="btn btn-primary btn-lg" @click="submit">提交订单</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  components: {
  },
  data () {
    return {
      goods: [],
      isLoadingMore: false,
      showMe: true
    }
  },
  activated (){
    this.$store.dispatch('setLoadheader', false);
  },
  mounted () {
    // 设置当前标记为主页
    this.$store.dispatch('setWhichpage', 'ShoppingCart');
    this.$nextTick(()=>{
      var that = this;
      if(typeof(Storage) !== "undefined"){
      var goodslist;
      var goods;
      if(goodslist = localStorage.getItem('goods')){
        goods = JSON.parse(goodslist);
        this.goods = goods.goodslist;
        this.goods.forEach(function(e){
          e.num = 1;
        })
      }
    }else {
      alert('error');
    }
    })
  },
  methods: {
    add_num(item){
      item.num = item.num + 1;
    },
    reduce_num(item){
      if(item.num > 0){
        item.num = item.num - 1;
      }
    },
    deleteGood(item){
      // 匹配去除
      for(var j = 0,len=this.goods.length; j < len; j++) {
        if(JSON.stringify(this.goods[j]) == JSON.stringify(item)){
          this.goods.splice(j,1);
          // 拉取数据
          var goodslist = localStorage.getItem('goods');
          var goods = JSON.parse(goodslist);
          goods.goodslist = this.goods;
          localStorage.setItem('goods', JSON.stringify(goods));
          break;
        } //if
      } //for
    } // function deleteGood
  } // methods:
} // export default
</script>

<style lang="less" scoped>
.nogood{
  height:3rem;
  width: 3rem;
  top:50%;
  left:50%;
  position:absolute;
  margin-top:-100px;
  margin-left:-100px;
  font-size: 1.3rem;
  color: #66666645;
}
.submit{
  width: 10rem;
  button{
    background-color: #d34ba8;
    border-color: #d34ba8;    
    float: left; 
    width: 9rem;
    margin-left: .5rem;
    margin-right: .5rem;
    margin-top: .5rem;
    overflow: hidden; 
    position: relative;
  }
}
.com_gray{
  color: #666;
  text-decoration:line-through
}
.com_gray1{
  color: #666;
  font-size: .25rem;
}
.index_main{
  width: 10rem;
  .space {
    width: 10rem;
    height: 1rem;
  }
  .my-navbar {
    width: 10rem;
    height: 1rem;
    overflow: hidden;
    .container-fluid {
      height: 100%;
      width: 100%;
      background-color: #d34ba8;
      text-align: center;
      span {
        text-align: center;
        color: #fff;
        font-size: .7rem;
        height: 100%;
      }
    }
  }
  .item{
    width: 10rem;
    .good{
      width: 10rem;
      height: 2.2rem;
      border-top: 2px solid #eee;
      .good_img{
        width:2rem;
        height:2rem;
        padding:0.4rem;
        float: left;
        img{
          width:100%;
          height:100%;
        }
      }
      .good_info{
        float: right;
        width:8rem;
        height:1.6rem;
        // padding:0.4rem .2rem .4rem 0;
        box-sizing: border-box;
        .good_name{
          font-size:.35rem;
          line-height:.45rem;
          vertical-align:top;
          span{
            width: 7rem;
            display:inline-block;
            margin-top: 10px;
            margin-bottom: 0;
            word-break:keep-all;       /* 不换行 */
            white-space:nowrap;        /* 不换行 */
            overflow:hidden;           /* 内容超出宽度时隐藏超出部分的内容 */
            text-overflow:ellipsis;    /*溢出时显示省略标记...；需与overflow:hidden;一起使用*/
          }
        }
        .good_descr{
          font-size:.2rem;
          line-height:.45rem;
          vertical-align:top;
          span{
            width: 7rem;
            display:inline-block;
            margin-top: 10px;
            margin-bottom: 0;
            word-break:keep-all;       /* 不换行 */
            white-space:nowrap;        /* 不换行 */
            overflow:hidden;           /* 内容超出宽度时隐藏超出部分的内容 */
            text-overflow:ellipsis;    /*溢出时显示省略标记...；需与overflow:hidden;一起使用*/
          }
        }
        .row{
          // position: absolute;
          // bottom: 1rem;
          .good_price{
            font-size:.3rem;
            line-height:.3rem;
            padding-left: 0;
            padding-right: .1rem;
            width: auto;
            margin-top: .1rem;
            .zsd{
              height: .35rem;
              padding: 0;
              display:inline-block;
              background: #fff;
              box-sizing: border-box;
              border-radius:3px;
              color: #666;
            }
            .zxd{
              font-size:.33rem;
              height: .35rem;
              padding: 0;
              color: red;
              display:inline-block;
              background: #fff;
              box-sizing: border-box;
              border-radius:3px;
            }
          }
          .add_remove{
            // font-size:.20rem;
            line-height:.20rem;
            padding: 0;
            width: auto;
            margin-top: .1rem;
            .add_remove_btn{
              height: 100%;
              width: auto;
              font-size: .4rem;
              img{
                height: .3rem;
              }
            }
          }
          .delete_btn{            
            padding: auto;
            float: right;
            margin-right: .6rem;
            .btn{              
              font-size: .3rem;
              width: auto;
            }
          }
        }
      }
    }
  }
}
</style>
