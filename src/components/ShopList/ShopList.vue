<!-- 商品列表 -->
<template>

      <div class="msite_shop_list" >
            <div class="shop_header">
              <i class="iconfont icon-xuanxiang"></i>
              <span class="shop_header_title">附近商家</span>
            </div>
            <div class="shop_container">
                <router-link to="/shop">
              <ul class="shop_list">
                <li class="shop_li border-1px" v-for="(item, index) in shoplist" :key="index" >
                  <a>
                    <div class="shop_left">
                      <img class="shop_img" :src="item.image_path">
                    </div>
                    <div class="shop_right">
                      <section class="shop_detail_header">
                        <h4 class="shop_title ellipsis">{{item.name}}</h4>
                        <ul class="shop_detail_ul">
                          <li class="supports">保</li>
                          <li class="supports">准</li>
                          <li class="supports">票</li>
                        </ul>
                      </section>
                      <section class="shop_rating_order">
                        <section class="shop_rating_order_left">
                           <Stars :Rating="item.rating"> </Stars>
                          <div class="rating_section">
                           {{item.rating}}
                          </div>
                          <div class="order_section">
                            月售106单
                          </div>
                        </section>
                        <section class="shop_rating_order_right">
                          <span class="delivery_style delivery_right">{{item.delivery_mode.text}}</span>
                        </section>
                      </section>
                      <section class="shop_distance">
                        <p class="shop_delivery_msg">
                          <span>¥20起送</span>
                          <span class="segmentation">/</span>
                          <span>配送费约¥5</span>
                        </p>
                      </section>
                    </div>
                  </a>
                </li>
              </ul>
             </router-link>
            </div>
      
          </div>

</template>

<script>
import { mapState } from 'vuex'
import Stars from '@/components/Stars/Stars.vue'

export default {
  data () {
    return {
         baseImageUrl:'https://fuss10.elemecdn.com'
    };
  },
    components:{
    Stars,
  },
     computed: {
  // 使用对象展开运算符将此对象混入到外部对象中
  ...mapState(['shoplist','foodlist']),//映射 this.address 为 store.state.address
   
},

}
</script>

<style lang='stylus' type='text/stylus' >


   
</style>