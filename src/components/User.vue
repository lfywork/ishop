<template>
 <div class="myzone_index">
    <div class="user_info">
      <ul class="list-group">
        <li class="user list-group-item">
          <section>
          <router-link to='bingo'>
            <img src="../assets/touxiang.jpeg" class="img-circle" alt="">
          </router-link>
          </section>
          <section class="user-info">
            <span class="user-name">朵莉</span><br/>
            <div class="user-signature">个性签名： 左耳最靠近心脏，请把甜言蜜语都对我的左耳说！</div>
          </section>
        </li>
        <li class="user-behavior list-group-item">
          <div class="container-fluid" align="center">
            <ul class="nav nav-tabs nav-tabs-justified">
              <div class="row" align="center">
                <div class="col-md-4 col-sm-4 col-xs-4">
                  <li role="presentation">
                    <img src="../assets/icon/favor.png" alt="">
                    <router-link class="button" to="bingo">收藏</router-link>
                  </li>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-4">
                  <li role="presentation">
                    <img src="../assets/icon/settings.png" alt="">
                    <router-link class="button" to="bingo">设置</router-link>
                  </li>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-4">
                  <li role="presentation">
                    <img src="../assets/icon/calendar.png" alt="">
                    <router-link class="button" to="bingo">浏览记录</router-link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </li>
        <router-link class="my-orders list-group-item" to='bingo'>
            <img src="../assets/orders.png" alt="">
            <span>全部订单</span>
            <i class="icon iconfont icon-xiangyoujiantou"></i>
        </router-link>
        <li class="order-act list-group-item">
          <div class="container-fluid" align="center">
            <ul class="nav nav-tabs nav-tabs-justified" id="menu">
              <div class="row" align="center">
                <div class="col-md-3 col-sm-3 col-xs-3">
                  <img src="../assets/icon/pay.png" alt="" >
                  <li role="presentation">
                    <router-link class="button" to="bingo">待付款</router-link>
                  </li>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-3">
                  <img src="../assets/icon/deliver.png" alt="" >
                  <li role="presentation">
                    <router-link class="button" to="bingo">待发货</router-link>
                  </li>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-3">
                  <img src="../assets/icon/send.png" alt="" >
                  <li role="presentation">
                    <router-link class="button" to="bingo">待收货</router-link>
                  </li>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-3">
                  <img src="../assets/icon/edit_light.png" alt="" >
                  <li role="presentation">
                    <router-link class="button" to="bingo">待评价</router-link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </li>
        <!-- 功能入口 -->
        <section class="core-entry">
          <router-link class="list-group-item" to='bingo'>
            <img src="../assets/优惠券.png" alt="">
            <span>优惠券</span>
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </router-link>
          <router-link class="list-group-item" to='bingo'>
            <img src="../assets/我的积分.png" alt="">
            <span>我的积分</span>
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </router-link>
          <router-link class="list-group-item" to='bingo'>
            <img src="../assets/收货地址.png" alt="">
            <span>收货地址管理</span>
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </router-link>
          <router-link class="list-group-item" to='bingo'>
            <img src="../assets/帮助反馈.png" alt="">
            <span>帮助反馈</span>
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </router-link>
          <router-link class="list-group-item" to='bingo'>
            <img src="../assets/分享.png" alt="">
            <span>推荐给好友</span>
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </router-link>
        </section>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      uname: ''
    }
  },
  activated () {
    this.$store.dispatch('setLoadheader', false)
    this.$store.dispatch('setWhichpage', 'user')
    this.$store.dispatch('setPageindex', 3)
  }
}
</script>

<style lang="less" scoped>
.myzone_index {
  width: 10rem;
  .user_info {
    width: 10rem;
    .list-group {
      width: 10rem;
      .list-group-item{
        width: 100%;
        height: 1.3rem;
        font-size: .5rem;
        line-height: 1rem;
        img {
          height: 0.8rem;
          width: 0.8rem;
          margin-bottom: .18rem;
        }
        span {
          margin-left: .2rem;
        }
      }
      .user {
        height: 4rem;
        background: url('http://www.5068.com/uploads/allimg/171118/1-1G11Q11936.jpg') no-repeat;
        background-size: cover;
        // background-attachment: fixed;
        border: 0px solid #d459a8;
        img {
          width: 2.3rem;
          height: 2.3rem;
          margin-top: 23%;
          margin-left: 5%;
          border: #fd7cd05e solid .1rem;
        }
        section {
          width: 3rem;
          float: left;
        }
        .user-info {
          margin-top: 10%;
          width: 6rem;
          .user-signature {
            border: #fd7cd02e solid .001rem;
            // border-radius: .1rem;
            margin-left: .2rem;;
            font-size: .25rem;
            line-height: .35rem;
            filter: blur(.015rem);
            // background-attachment: inherit;
          }
        }
      }
      .user-behavior {
        height: 1.2rem;
        background-color: #d459a8;
        opacity: 0.5;
        border: 0px solid #d459a8;
        a {
          font-size: .40rem;
          color: rgb(255, 255, 255);
          // margin-top: auto;
          // margin-bottom: auto;
        }
      }
      .my-orders {
        height: 1.2rem;
        box-sizing: border-box;
        border-top: .1rem solid #eee;
        .icon {
          font-size: .5rem;
          float: right;
        }
      }
      .order-act {
        height: 1.8rem;
        font-size: .3rem;
        line-height: .3rem;
        a {
          color: #666;
        }
      }
      .core-entry {
        box-sizing: border-box;
        border-top: .1rem solid #eee;
        // border-radius: .1rem;
        .icon {
          font-size: .5rem;
          float: right;
        }
      }
    }
  }
}
</style>
