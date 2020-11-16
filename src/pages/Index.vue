<template>
   <Landing>
      <div class="index_all">
         <Header :quote="quoteText" />
         <div class="index_wrapper">
            <div class="index_left">
               <g-link to="/about/">
                  <div class="center">
                     <div class="title">
                        <h2>PORTFOLIO</h2>
                     </div>
                     <div class="description-text">
                        <p>
                           Hi, my name is David Milošević and I'm a web
                           developer residing in Belgrade, Serbia. Starting from here, you can
                           get info about my projects, career, web technologies
                           that I'm using, things that I like. Get to know me better !
                        </p>
                     </div>
                  </div>
               </g-link>
            </div>

            <div class="index-right">
               <g-link to="/blog/">
                  <div class="center">
                     <div class="title">
                        <h2>TECHNOLOGY <span class="white-blog">BLOG</span></h2>
                     </div>
                     <div class="description-text">
                        <p>
                           Discover the latest news in tech and web development
                           in this articles section! Fresh topics about all
                           kinds of technologies I am involved in. Read about it
                           here.
                        </p>
                     </div>
                  </div>
               </g-link>
            </div>
         </div>
         <Footer />
      </div>
   </Landing>
</template>

<script>
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export default {
   components: {
      Footer,
      Header,
   },
   metaInfo: {
      title: "Welcome!",
   },
   layout: "Landing",

   data() {
      return {
         quoteText: ["CODE DEVELOPS", "YOU", "MODULE BY MODULE"],
      };
   },
};
</script>

<style lang="scss">
.index_all {
   background-image: url(../assets/workstation.png);
   background-size: cover;

   @media (max-width: 576px) {
      background-image: url(../assets/workstation2.png);
      background-size: cover;
   }
}

.index_wrapper {
   display: flex;
   font-weight: 600;
   color: #2e8b57;
   background-size: cover;

   @media (max-width: 576px) {
      flex-direction: column;
      background-size: cover;
   }
}
.index_left {
   height: calc(100vh - 400px);
   width: 50%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;

   p {
      margin: 1rem auto;
      text-indent: 10%;
      font-size: 1.2rem;
      line-height: 1.5rem;
      word-spacing: 0.4rem;
   }

   @media (max-width: 576px) {
      width: 100%;
      border-right: none;
      height: 100vh;
   }

   .title {
      margin: 1rem;

      h2 {
         font-size: 3rem;
         font-weight: 700;
         animation-name: moveInUp;
         animation-duration: 2s;
         animation-timing-function: ease-out;
      }
   }
}

.white-blog {
   color: wheat;
}

.description-text {
   text-align: justify;
   width: calc(100% - 2rem);

   @media (max-width: 576px) {
      text-align: center;
   }
}

.index-right {
   height: calc(100vh - 400px);
   display: flex;
   border-left: 1px solid #2e8b57;
   justify-content: center;
   align-items: center;
   width: 50%;

   p {
      margin-top: 1rem;
      font-size: 1.2rem;
      word-spacing: 0.4rem;
   }
   .title {
      margin-bottom: 1rem;

      h2 {
         font-size: 3rem;
         font-weight: 700;
         animation-name: moveInDown;
         animation-duration: 2s;
         animation-timing-function: ease-out;
         text-align: center;
      }
   }

   @media (max-width: 576px) {
      border-top: 2px solid #2e8b57;
      border-left: none;
      width: 100%;
      height: 100vh;
   }
}

.center {
   display: flex;
   cursor: pointer;
   width: 25vw;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;

   @media (max-width: 1024px) {
      width: 40vw;
   }

   @media (max-width: 576px) {
      p {
         font-size: 0.9rem;
         word-spacing: 0.2rem;
      }
      width: 70vw;
   }
}

@keyframes moveInUp {
   0% {
      opacity: 0;
      transform: translateY(-10rem);
   }
   80% {
      transform: translateY(1rem);
   }
   100% {
      opacity: 1;
      transform: translate(0);
   }
}

@keyframes moveInDown {
   0% {
      opacity: 0;
      transform: translateY(10rem);
   }
   80% {
      transform: translateY(-1rem);
   }
   100% {
      opacity: 1;
      transform: translate(0);
   }
}
</style>
