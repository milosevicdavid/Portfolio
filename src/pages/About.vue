<template>
  <Landing>
  <div class="icon-container">
    <div class="icon-row">
      <span class="icon">
        <g-image src="~/assets/html.png" width="80"/>
      </span> 
      <span class="icon">
        <g-image src="~/assets/css.svg" width="80"/>
      </span> 
      <span class="icon">
        <g-image src="~/assets/graphql.png" width="80"/>
      </span> 
      <span class="icon">
        <g-image src="~/assets/vue.png" width="80"/>
      </span> 
      <span class="icon">
        <g-image src="~/assets/js.svg" width="80"/>
      </span>
      <span class="icon">
        <g-image src="~/assets/sass.png" width="80"/>
      </span>
    </div>
   <div class="icon-row">
     <span class="icon">
       <g-image src="~/assets/gridsome.svg" width="80"/>
     </span>
     <span class="icon">
       <g-image src="~/assets/nuxt.png" width="80"/>
     </span>
     <span class="icon">
       <g-image src="~/assets/vim.png" width="80"/>
     </span>
     <span class="icon">
       <g-image src="~/assets/terminal.png" width="80"/>
     </span>
     <span class="icon">
       <g-image src="~/assets/gatsby.png" width="80"/>
     </span>
     <span class="icon">
       <g-image src="~/assets/linux.png" width="80"/>
     </span>
   </div>
  </div>
  </Landing>
</template>

<script>
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
}



</style>
