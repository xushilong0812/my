<template>
  <div id="app">
         <!-- 挂载到 DOM -->
      <FootberNav v-if="true"/>
          <router-view />
  </div>
</template>
<script>
import FootberNav from "@/components/FootberNav/FootberNav"
import axios from "axios"
export default {
components:{
  FootberNav,
},
mounted(){

  console.log(axios);
}
  
}
</script>
<style lang="stylus">

</style>
