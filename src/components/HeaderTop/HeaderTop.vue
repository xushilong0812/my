<template>
   <header class="header">
            <a class="header_title">
              <span class="header_title_text">{{title}}</span>
            </a>
            <slot name="right"></slot>
          </header>
</template>

<script>
export default {
            props:{title:String},
     
  data() {
    return {};
  },
};
</script>

<style lang='stylus' type='text/stylus' >

  
</style>