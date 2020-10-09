<!--  -->
<template>
  <div>
    <header class="rating_header">
      <section class="rating_header_left">
        <p>{{ shopDetailData.rating }}</p>
        <p>综合评价</p>
        <p>
          高于周边商家{{ (ratingScoresData.compare_rating * 100).toFixed(1) }}%
        </p>
      </section>
      <section class="rating_header_right">
        <p>
          <span>服务态度</span>
          <rating-star :rating="ratingScoresData.service_score"></rating-star>
          <span class="rating_num">{{
            ratingScoresData.service_score.toFixed(1)
          }}</span>
        </p>
        <p>
          <span>菜品评价</span>
          <rating-star :rating="ratingScoresData.food_score"></rating-star>
          <span class="rating_num">{{
            ratingScoresData.food_score.toFixed(1)
          }}</span>
        </p>
        <p>
          <span>送达时间</span>
          <span class="delivery_time"
            >{{ shopDetailData.order_lead_time }}分钟</span
          >
        </p>
      </section>
    </header>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";
export default {
  components: {},
};
</script>

<style lang='stylus' type='text/stylus' >
@import '../../../assets/stylus/reset.styl';

</style>