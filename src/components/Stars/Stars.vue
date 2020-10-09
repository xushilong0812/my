<!--  -->
<template>
    <div class="star star-24">
     
      <span class="star-item " v-for="(item, index) in arr" :key="index" :class="item"> </span>
     
    </div>
  
</template>

<script>
export default {
    data() {
        return {
            arr:[],
        }
    },
  props:{Rating:Number},
  mounted(){
//获取 星级 on
      let fInt=Math.floor(this.Rating)
    for(var i=0;i<fInt;i++){
            this.arr.push('on')
    }
    //获取 half星级
    if(this.Rating*10-fInt*10>5){
       this.arr.push('half')
    }

      //获取星级的 off
  let num =  5-this.arr.length 
    for(let i=0;i<num;i++){
            this.arr.push("off")
    }
  }
  
  
  }
</script>

<style lang='stylus' type='text/stylus' scoped>
@import '../../assets/stylus/mixins.styl';
</style>