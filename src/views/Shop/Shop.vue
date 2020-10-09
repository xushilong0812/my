<!--  -->
<template>
  <div>
    <ShopHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import ShopHeader from "@/components/ShopHeader/ShopHeader";
export default {
  components: {
    ShopHeader,
  },
};
</script>

<style lang='stylus' type='text/stylus' scoped>
.page-component__scroll {
  height: 100%;
}

.page-component__scroll .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>