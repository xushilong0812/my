<!--  -->
<template>
  <div>
    <section class="content-text">
      <h4 class="text-title">派送信息</h4>
      <p class="text-muted">
        <span class="text-delivery">硅谷专送</span>由商家配送提供配送,
        约28分钟送达,距离1000m
      </p>
      <div class="text-money">配送费￥4</div>
    </section>
    <div class="footer">
      <h4 class="text-title">活动与服务</h4>
      <ul class="list-styled">
        <li>
          <span class="bgc-green">首单</span>新用户下单立减17元（不与其它活动同享）
        </li>
        <li>
          <span class="bgc-pink">满减</span>新用户下单立减17元（不与其它活动同享）
        </li>
        <li>
          <span class="bgc-orange">特价</span>新用户下单立减17元（不与其它活动同享）
        </li>
        <li>
          <span class="bgc-orange">特价</span>新用户下单立减17元（不与其它活动同享）
        </li>
        <li>
          <span class="bgc-orange">特价</span>新用户下单立减17元（不与其它活动同享）
        </li>
        <li>
          <span class="bgc-orange">特价</span>新用户下单立减17元（不与其它活动同享）
        </li>
      </ul>
    </div>
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
@import '../../../assets/stylus/mixins.styl';

.content-text {
  padding: 20px 15px;
  border-bottom: 2px solid #f1f1f1;
}

.text-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.text-muted {
  line-height: 25px;
}

.text-delivery {
  background-color: $dColor;
  color: #fff;
  padding: 2px;
  border-radius: 2px 5px;
}

.text-money {
  color: #999999;
}
.footer{
      margin-top 20px;
      padding: 20px 15px;
       border-top: 3px solid #f1f1f1;
}
.list-styled {
  li {
      line-height 40px
      font-size 14px
     color: #999      
    span {
      padding:  2px 5px ;
      color #fff
      border-radius 5px
      margin-right 10px
    }
  }
 
}
 .bgc-green{
      background-color #78bb54
  }
   .bgc-pink{
       background-color #e37578
   }
   .bgc-orange{
       background-color #f58a54
   }
</style>