<!--  -->
<template>
  <div>
      <link
      rel="stylesheet"
      href="//at.alicdn.com/t/font_2084201_rgrc9ljxqr.css"
    />
    <header class="shop_detail_header">
      <img
        src="//elm.cangdu.org/img/164ad0b6a3917599.jpg"
        class="header_cover_img"
      />
      <router-link to="/msite" class="fh">    <a href="javascript:" class="go_back">
              <i class="iconfont icon-leftarrow" style="color:#000;"></i>
            </a></router-link>
      <section data-v-c8684834="" class="description_header">
        <a data-v-c8684834="" class="description_top"
          ><section data-v-c8684834="" class="description_left">
            <img
              data-v-c8684834=""
              src="//elm.cangdu.org/img/164ad0b6a3917599.jpg"
            />
          </section>
          <section data-v-c8684834="" class="description_right">
            <h4 data-v-c8684834="" class="description_title ellipsis">
              效果演示
            </h4>
            <p data-v-c8684834="" class="description_text">
              商家配送／分钟送达／配送费¥5
            </p>
            <p data-v-c8684834="" class="description_promotion ellipsis">
              公告：欢迎光临，用餐高峰请提前下单，谢谢
            </p>
          </section>

          ></a
        >
        <!---->
      </section>
    </header>
    <section class="change_show_type">
      <div v-for="(item, index) in dataList" :key="index">
        <span @click="Shopshow(index)"
          ><router-link
            :to="PathRoute[index]"
            :class="{ on: clicked == index }"
            >{{ item }}</router-link
          ></span
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: ["点餐", "评价", "商家"],
      PathRoute: ["/shopgoods", "shopratings", "/shopinof"],
      show: true,
      clicked: 0, //标识，初始化默认选中第一项
    };
  },
  methods: {
    Shopshow(index) {
      this.clicked = index;
    },
  },
};
</script>

<style lang='stylus' type='text/stylus' scoped>
@import '../../assets/stylus/reset.styl';

.fh {
  position: absolute;
  top: 0px;
  z-index 20
  padding 5px
}

.shop_detail_header {
  overflow: hidden;
  position: relative;
}

.description_header {
  position: relative;
  z-index: 10;
  background-color: rgba(119, 103, 137, 0.43);
  padding: 0.4rem 0 0.4rem 0.4rem;
  width: 100%;
  overflow: hidden;
}

.header_cover_img {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9;
  -webkit-filter: blur(10px);
  filter: blur(10px);
}

.description_left {
  img {
    margin: 10px;
    width: 80px;
    height: 80px;
    float: left;
  }

  position: relative;
  z-index: 10;
  color: red;
}

.description_right {
  margin: 10px;
  position: relative;
  z-index: 10;
  color: red;
  float: left;
}

.description_title {
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  width: 100%;
  margin-bottom: 15px;
}

.description_text {
  font-size: 14px;
  color: #fff;
  margin-bottom: 15px;
}

.description_promotion {
  font-size: 14px;
  color: #fff;
  width: 11.5rem;
}

@import '../../assets/stylus/mixins.styl';

.change_show_type {
  display: flex;
  justify-content: space-around;
  text-align: center;
  height: 50px;
  background-color: width;
  line-height: 50px;
  border-bottom: 1px solid #ccc;

  span {
    padding-bottom: 2px;
    font-size: 18px;
  }
}

&.on {
  color: $dColor;
  font-weight: 700;
  border-bottom: 3px solid $dColor;
}
</style>