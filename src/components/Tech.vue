<template>
   <div class="icon-container">
      <div class="icon-t">
        <g-image src="~/assets/html.svg" />
      </div> 
      <div class="icon-t">
        <g-image src="~/assets/css.svg" width="80"/>
      </div> 
      <div class="icon-t">
        <g-image src="~/assets/graphql.svg" width="80"/>
      </div> 
      <div class="icon-t">
        <g-image src="~/assets/vue.svg" width="80"/>
      </div> 
      <div class="icon-t">
        <g-image src="~/assets/javascript.svg" width="80"/>
      </div>
      <div class="icon-t">
        <g-image src="~/assets/sass.svg" width="80"/>
      </div>
     <div class="icon-t">
       <g-image src="~/assets/gridsome.svg" width="80"/>
     </div>
          <div class="icon-t">
       <g-image src="~/assets/vim.svg" width="80"/>
     </div>
     <div class="icon-t">
       <g-image src="~/assets/bash.svg" width="80"/>
     </div>
          <div class="icon-t">
       <g-image src="~/assets/linux.svg" width="80"/>
     </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.icon-container {
   padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}



.icon-t {
  padding: 1.5rem;
  width: 100px;

  img {
    width: 50%;
    height: 50%;
  }
}

</style>
