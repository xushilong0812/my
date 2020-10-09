<template>
  <div id="app">
    <!-- 挂载到 DOM -->
    <FootberNav v-show="$route.meta.infooter" />
    <router-view />
    <!-- 弹出框 -->
    <!-- <MessageBox/> -->
  </div>
</template>
<script>
// 导入 底部组件
import FootberNav from "@/components/FootberNav/FootberNav";
// import MessageBox from "@/components/MessageBox/MessageBox"

export default {
  components: {
    FootberNav,
    // MessageBox,
  },
  async mounted() {
    await this.$store.dispatch("getShoplist");
    await this.$store.dispatch("getAddress");
  },
};
</script>
<style lang="stylus">
@media screen and (max-width: 750px) {
  .el-message-box {
    width: 60% !important;
  }
}

.el-button {
  padding: 0px 20px;
}


</style>
