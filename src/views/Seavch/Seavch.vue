<!--  -->
<template>
  <div>
    <section class="content">
        <section class="search">
       <HeaderTop title="搜索"></HeaderTop>
          <form class="search_form" action="#">
            <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
            <input type="submit" name="submit" class="search_submit">
          </form>  
               </section>
        </section>
 
  </div>
   
</template>

<script>
import HeaderTop from "@/components/HeaderTop/HeaderTop.vue"
export default {
  components:{
HeaderTop,
  }
  }
</script>

<style lang='stylus' type='text/stylus' scoped>
@import '../../assets/stylus/mixins.styl';
@import '../../assets/stylus/reset.styl';

 &.search  //搜索
          width 100%
          .search_form
            clearFix()
            margin-top 45px
            background-color #fff
            padding 12px 8px
            input
              height 35px
              padding 0 4px
              border-radius 2px
              font-weight bold
              outline none
              &.search_input
                float left
                width 79%
                border 4px solid #f2f2f2
                font-size 14px
                color #333
                background-color #f2f2f2
              &.search_submit
                float right
                width 18%
                border 4px solid $dColor
                font-size 16px
                color #fff
                background-color $dColor
</style>