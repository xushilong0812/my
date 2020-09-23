<!--  -->
<template>
  <div>
    <HeaderTop title="订单"></HeaderTop>
    <section class="content">
        <section class="order">
          <section class="order_no_login">
            <!-- <img src="./images/order/person.png"> -->
            <h3>登录后查看外卖订单</h3>
            <button>立即登陆</button>
          </section>
        </section>
        </section>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop/HeaderTop.vue"
export default {
  components:{
HeaderTop,
  }
  }
</script>



<style lang='stylus' type='text/stylus' scoped>
@import '../../assets/stylus/mixins.styl';
@import '../../assets/stylus/reset.styl';


  &.order  //订单
          width 100%
          .order_no_login
            padding-top 140px
            width 60%
            margin 0 auto
            text-align center
            >img
              display block
              width 100%
              height 30%
            >h3
              padding 10px 0
              font-size 17px
              color #6a6a6a
            >button
              display inline-block
              background $dColor
              font-size 14px
              color #fff
              border 0
              outline none
              border-radius 5px
              padding 10px 20px
</style>