<!--  -->
<template>
  <div>
    <!-- 侧导航栏 -->
    <CartControl/>
        <!-- 购物车 -->
    <ShopCart/>
  </div>
</template>

<script>

import ShopCart from "@/components/ShopCart/ShopCart";
import CartControl from "@/components/CartControl/CartControl";



export default {
  components: {
    ShopCart,
    CartControl,
  },

}
</script>

<style lang='stylus' type='text/stylus' scoped>


</style>