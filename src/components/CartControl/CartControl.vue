<!--  -->
<template>
  <div>
    <section data-v-c8684834 class="menu_container">
      <section id="wrapper_menu" class="menu_left">
        <el-scrollbar style="">
          <ul
            class="infinite-list nav-list"
            v-infinite-scroll="load"
            style="overflow: auto"
          >
            <li
              v-for="(item, index) in title"
              class="infinite-list-item menu_left_li"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </el-scrollbar>
      </section>
      <section class="menu_right">
        <ul>
          <li data-v-c8684834>
            <header class="menu_detail_header">
              <section class="menu_detail_header_left">
                <strong class="menu_item_title">热销榜</strong>
                <span class="menu_item_description">热销来袭～</span>
              </section>
              <span class="menu_detail_header_right"></span>
              <!---->
            </header>
            <section class="menu_detail_list">
              <div class="menu_detail_link">
                <section class="menu_food_img">
                  <img src="//elm.cangdu.org/img/16f35f39b6262048.jpg" />
                </section>
                <section class="menu_food_description">
                  <h3 class="food_description_head">
                    <strong class="description_foodname">阿斯顿·</strong>
                    <ul class="attributes_ul">
                      <li>
                        <p style="color: rgb(240, 115, 115)">招牌</p>
                      </li>
                    </ul>
                  </h3>
                  <p class="food_description_content">的撒旦</p>
                  <p class="food_description_sale_rating">
                    <span>月售265份</span>
                    <span>好评率30%</span>
                  </p>
                  <p class="food_activity">
                    <span
                      style="
                        color: rgb(241, 136, 79);
                        border-color: rgb(240, 115, 115);
                      "
                      >打威群岛</span
                    >
                  </p>
                </section>
              </div>
              <footer class="menu_detail_footer">
                <section class="food_price">
                  <span>¥</span>
                  <span>20</span>
                  <span>起</span>
                </section>
                <section data-v-2feef6d8="" class="cart_module">
                  <section data-v-2feef6d8="" class="choose_specification">
                    <section data-v-2feef6d8="" class="choose_icon_container">
                      <span data-v-2feef6d8="" class="cart_num">1</span>
                      <el-button
                        data-v-2feef6d8=""
                        type="text"
                        @click="open"
                        class=" "
                        ><span class="show_chooselist alert"
                          >选规格</span
                        ></el-button
                      >
                    </section>
                  </section>
                </section>
              </footer>
            </section>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: [
        "热销榜",
        "折扣榜",
        "好吃的😋",
        "招牌",
        "热销榜",
        "测试榜",
        "tytryu",
        "5后天",
        "订单",
        "佰百",
        "安安",
        "订单",
        "佰百",
        "安安",
      ],
    };
  },
  methods: {
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
      });
    },
    listenScroll(element) {
      this.foodScroll = new BScroll(element, {
        probeType: 3,
        deceleration: 0.001,
        bounce: false,
        swipeTime: 2000,
        click: true,
      });

      const wrapperMenu = new BScroll("#wrapper_menu", {
        click: true,
      });

      const wrapMenuHeight = this.$refs.wrapperMenu.clientHeight;
      this.foodScroll.on("scroll", (pos) => {
        if (!this.$refs.wrapperMenu) {
          return;
        }
        this.shopListTop.forEach((item, index) => {
          if (this.menuIndexChange && Math.abs(Math.round(pos.y)) >= item) {
            this.menuIndex = index;
            const menuList = this.$refs.wrapperMenu.querySelectorAll(
              ".activity_menu"
            );
            const el = menuList[0];
            wrapperMenu.scrollToElement(el, 800, 0, -(wrapMenuHeight / 2 - 50));
          }
        });
      });
    },
  },
};
</script>

<style lang='stylus' type='text/stylus' scoped>
.el-scrollbar__wrap {
  height: 100%;
  overflow-x: hidden;
}

.nav-list {
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-duration: 0ms;
  transform: translate(0px, 0px) translateZ(0px);
}

.menu_container {
  display: flex;
}

.menu_left_li {
  z-index: 5;
  padding: 1.7rem 0.5rem;
  border-bottom: 0.025rem solid #ededed;
  box-sizing: border-box;
  border-left: 0.15rem solid #f8f8f8;
  position: relative;
  height: 65px;
}

.menu_left {
  width: 25%;
  background-color: #f5f5f5;
}

.menu_left_li span {
  font-size: 0.9rem;
  color: #666;
}

.menu_right {
  width: 100%;
}

.on {
  border-left: 0.25rem solid #3190e8;
  background-color: #fff;
}

.menu_item_title {
  font-size: 16px;
  color: #666;
  font-weight: 700;
}

.menu_item_description {
  font-size: 0.5rem;
  color: #999;
  width: 30%;
  overflow: hidden;
  margin: 0px 5px;
}

.menu_detail_header {
  background-color: #f5f5f5;
  padding: 15px 10px;
}

.menu_food_img {
  margin-right: 10px;

  img {
    width: 45px;
    height: 45px;
  }
}

.menu_detail_list {
  background-color: #fff;
  padding: 0.6rem 0.4rem;
  border-bottom: 1px solid #f8f8f8;
  position: relative;
  overflow: hidden;
}

.food_description_head {
  margin-bottom: 0.4rem;
}

.menu_detail_link {
  display: flex;
}

.description_foodname {
  font-size: 18px;
  color: #333;
}

.menu_food_description {
  width: 100%;
}

.attributes_ul {
  li {
    border: 1px solid rgb(240, 115, 115);
    border-radius: 10px;
    padding: 2px 5px;

    p {
      font-size: 5px;
    }
  }

  float: right;
}

.food_description_content {
  font-size: 0.5rem;
  color: #999;
  line-height: 0.6rem;
}

.food_description_sale_rating {
  line-height: 1.2rem;

  span {
    font-size: 0.5rem;
    color: #333;
  }
}

.food_activity span {
  font-size: 0.3rem;
  border: 1px solid rgb(240, 115, 115);
  border-radius: 10px;
}

.menu_detail_footer {
  margin-left: 3.4rem;
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-between;

  .food_price {
    span:first-of-type {
      font-size: 0.5rem;
      color: #f60;
      margin-right: 0.05rem;
    }

    span:nth-of-type(2) {
      font-size: 1rem;
      color: #f60;
      font-weight: 700;
      margin-right: 0.3rem;
    }

    span:nth-of-type(3) {
      font-size: 0.5rem;
      color: #666;
    }
  }
}

.show_chooselist {
  display: block;
  font-size: 0.55rem;
  color: #fff;
  padding: 0.2rem 0.4rem;
  background-color: #3190e8;
  border-radius: 0.2rem;
  border: 1px solid #3190e8;
}

.choose_icon_container {
  display: flex;
}

.cart_num {
  font-size: 1rem;
  color: #666;
  min-width: 1rem;
  text-align: center;
  font-family: Helvetica Neue, Tahoma;
}

.el-button {
  padding: 0px 0px;
}
</style>