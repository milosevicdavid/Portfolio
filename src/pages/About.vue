<template>
  <Landing>
  <div class="icon-container">
    <div class="icon-row">
      <span class="icon">
        <g-image src="~/assets/html.svg" />
      </span> 
      <span class="icon">
        <g-image src="~/assets/css.svg" width="80"/>
      </span> 
      <span class="icon">
        <g-image src="~/assets/graphql.svg" width="80"/>
      </span> 
      <span class="icon">
        <g-image src="~/assets/vue.svg" width="80"/>
      </span> 
      <span class="icon">
        <g-image src="~/assets/javascript.svg" width="80"/>
      </span>
      <span class="icon">
        <g-image src="~/assets/sass.svg" width="80"/>
      </span>
    </div>
   <div class="icon-row">
     <span class="icon">
       <g-image src="~/assets/gridsome.svg" width="80"/>
     </span>
     <span class="icon">
       <g-image src="~/assets/nuxt.svg" width="80"/>
     </span>
     <span class="icon">
       <g-image src="~/assets/vim.svg" width="80"/>
     </span>
     <span class="icon">
       <g-image src="~/assets/bash.svg" width="80"/>
     </span>
     <span class="icon">
       <g-image src="~/assets/gatsby.svg" width="80"/>
     </span>
     <span class="icon">
       <g-image src="~/assets/linux.svg" width="80"/>
     </span>
   </div>
  </div>
  </Landing>
</template>

<script>
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";

export default {
  components: {
    twitterButton: TwitterButton
  }
};
</script>



<style lang="scss">

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.icon-row {
  margin-top: 2rem;
  text-align: center;
 }

.icon {
  padding: 1.5rem;
  line-height: 6rem;
  width: 100px;

  img {
    width: 50px;
    height: 50px;
  }
}



</style>
