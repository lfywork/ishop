<template>
    <!-- 列表单个商品 -->  
    <a :href="a.url"> 
    <section class="good clear">
      <div class="good_img">
        <img :src="a.img" alt="">
      </div>
      <div class="good_info">        
        <section class="good_name clear">
          <h3 class="fl ell"><span>今日</span>{{ a.goods }}</h3>
        </section>
        <section class="good_price clear">
          <div class="good_price fl">
            <div class="zsd">
              <span class="com_gray1">折后价</span>
              ￥{{ a.dprice }}
            </div>
          </div>
        </section>
        <section class="good_other"> 
          <div class="other_price fl">
            <span class="com_gray">原价￥{{ a.price }}</span>
          </div>
        </section>
      </div>
    </section>
    </a>
</template>

<script>
export default {
  name: 'DiscountList',
  props: ['a'],
  data () {
    return {

    };
  }
};
</script>

<style lang="less" scoped>
.com_gray{
  color: #666;
  text-decoration:line-through
}
.com_gray1{
  color: #666;
  font-size: .25rem;
}
.good{
  width: 10rem;
  height: 1.6rem;
  border-top: 2px solid #eee;
  .good_img{
    width:1.6rem;
    height:1.6rem;
    padding:0.4rem;
    float: left;
    img{
      width:100%;
      height:100%;
    }
  }
  .good_info{
    float: right;
    width:7.4rem;
    height:1.6rem;
    // padding:0.4rem .2rem .4rem 0;
    box-sizing: border-box;
    .good_name{
      font-size:.35rem;
      line-height:.45rem;
      vertical-align:top;
      h3{
        width: 7rem;
        display:inline-block;
        margin-top: 10px;
        margin-bottom: 0;
        word-break:keep-all;       /* 不换行 */
        white-space:nowrap;        /* 不换行 */
        overflow:hidden;           /* 内容超出宽度时隐藏超出部分的内容 */
        text-overflow:ellipsis;    /*溢出时显示省略标记...；需与overflow:hidden;一起使用*/
        span{
          color: #52250a;
          background:#ffd930;
          font-size:.2rem;
          padding:.02rem;
          border-radius: 2px;
          vertical-align:top;
          margin-right: .04rem;
        }
      }
    }
    .good_price,.good_other{
      font-size:.25rem;
      margin-top: .1rem;
      line-height:.25rem;
    }
    .zsd{
      height: .35rem;
      line-height: .3rem;
      padding: 0 0.05rem;
      display:inline-block;
      background: #fff;
      box-sizing: border-box;
      border-radius:3px;
      color: rgb(255, 0, 0);
      font-size: .35rem;
  }
  }
}
</style>
