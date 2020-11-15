<template>
  <Landing>
         <Header :quote="quoteText" />
   <Footer />
  </Landing>
</template>

<script>

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Tech from "~/components/Tech";

export default {
  components: {
      Footer,
      Header,
      Tech
  },
  metaInfo: {
      title: "About",
   },
   layout: "Landing",

   data() {
      return {
         quoteText: ["GET TO KNOW", "ME", "A LITTLE BIT BETTER"],
      };
   },

};
</script>



<style lang="scss">


</style>
