<!--  -->
<template>
  <div>
    <section class="buy_cart_container">
      <section class="cart_icon_num">
        <div class="cart_icon_container cart_icon_activity">
          <span class="cart_list_length"> 3 </span>
        </div>
        <div class="cart_num">
          <div>¥ 60.00</div>
          <div class="">配送费¥5</div>
        </div>
      </section>
      <section class="gotopay_acitvity">
        <a class="gotopay_button_style">去结算</a>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang='stylus' type='text/stylus' scoped>
@import '../../assets/stylus/mixins.styl';

.buy_cart_container {
  position: absolute;
  background-color: #3d3d3f;
  bottom: 0;
  width: 100%;
  height: 55px;
  display: flex;
}

.cart_icon_num {
      display: flex;
        width: 85%;
}
.buy_cart_container  {

}.cart_num{
     position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 6.5rem;
    div{
        color :#fff
        margin-bottom 5px
    }
}
.cart_list_length{
 float right
}
.cart_icon_container{
        position: relative;
        background-color: $dColor;
        width 65px;
        height 65px;
        border-radius: 50%
        bottom 20px
        left 20px
  
}
.gotopay_acitvity {
  position: relative;
  right: 0px;
  width: 180px;
  line-height: 55px;
  background-color: $dColor;
  text-align: center;

  a {
    font-size: 20px;
    color: #fff;
    font-weight: 700;
  }
}
</style>