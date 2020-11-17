<template>
   <div class="icon-container">
      <div  class="icon-t">
         <g-image  src="~/assets/vue.svg" width="80" />
      </div>
      <div class="icon-t">
         <g-image src="~/assets/gridsome.svg" width="80" />
      </div>
      <div class="icon-t">
         <g-image src="~/assets/graphql.svg" width="80" />
      </div>
      <div class="icon-t">
         <g-image src="~/assets/sass.svg" width="80" />
      </div>
      <div class="icon-t">
         <g-image src="~/assets/vim.svg" width="80" />
      </div>
      <div class="icon-t">
         <g-image src="~/assets/linux.svg" width="80" />
      </div>
      <div class="icon-t">
         <g-image src="~/assets/inkscape.svg" width="80" />
      </div>
      <div class="icon-t">
         <g-image src="~/assets/disqus.svg" width="80" />
      </div>
   </div>
</template>

<script>

export default {

}
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
