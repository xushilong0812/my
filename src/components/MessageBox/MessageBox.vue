<template>
  <el-button type="text" @click="open" class="alert"
    >点击打开 Message Box</el-button
  >
</template>
<script>
export default {
  methods: {
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
      });
    },
  },
};
</script>
<style lang='stylus' type='text/stylus' scoped>
.alert {
  margin-top: 20px;
}

&.el-message-box {
  width: 300px;
  color: red;
}
@media screen and (max-width: 750px) {
  .el-message-box {
    width: 60% !important;
  }
}
</style>
