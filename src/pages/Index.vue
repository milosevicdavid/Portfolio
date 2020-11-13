<template>
   <Landing>
   <div class="index_all">
      <Header :quote="quoteText"/>
      <div class="index_wrapper">
         <div class="index_left">
            <g-link to="/about/">
               <div class="center">
                  <div class="title">
                     <h1>Portfolio</h1>
                  </div>
                  <span class="icon-gray">
                     <g-image
                        class="svg"
                        src="~/assets/cranium2.webp"
                        width="230"
                     />
                  </span>
                  <div class="description-text">
                     <p>
                        Welcome to my portfolio page ! My name is David
                        Milošević and I am a web developer from Belgrade.
                        Starting from here, you can get info about my projects
                        and web development technologies that interests me,
                        skills that I possess, contact info. Enter Here...
                     </p>
                  </div>
               </div>
            </g-link>
         </div>

         <div class="index-right">
            <g-link to="/blog/">
               <div class="center">
                  <div class="title">
                     <h1>Technology Blog</h1>
                  </div>
                  <span class="gray-icon">
                     <g-image
                        class="svg"
                        src="~/assets/notebook.png"
                        width="230"
                     />
                  </span>
                  <div class="description-text">
                     <p>
                        Discover the latest news in tech and web development in
                        this articles section! The most fresh knowledge about
                        all kinds of technologies I am involved in. Some of the
                        titles are...
                     </p>
                  </div>
               </div>
            </g-link>
         </div>
      </div>
      <Footer/>
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

   
      data(){
         return {
            quoteText: ["CODE DEVELOPS", "YOU","MODULE BY MODULE"],
                     }
   }
};
</script>

<style lang="scss">

.index_all {
   background-image: url(../assets/workstation.png);
   background-size: cover;
}

.index_wrapper {
   display: flex;
   font-weight: 600;
   color: #2e8b57;
   background-image: url(../assets/workstation.png);
   background-size: cover;


   @media (max-width: 576px) {
      flex-direction: column;
      background-image: url(../assets/workstation2.png);
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
   border-right: 1px solid #2e8b57;

   p {
      text-indent: 10%;
      font-size: 1.2rem;
      margin: 1rem auto;
      line-height: 1.5rem;
      word-spacing: 0.4rem;
   }

   @media (max-width: 576px) {
      width: 100%;
      border-right: none;
      height: 100vh;
      }
  
   .title {
      margin: 1rem auto;

      h1 {
         animation-name: moveInLeft;
         animation-duration: 2s;
         animation-timing-function: ease-out;
      }
      font-size: 3rem;

     }
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
      font-size: 1.2rem;
      word-spacing: 0.4rem;
   }
   .title {
      h1 {
         animation-name: moveInRight;
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

.icon-gray {
   margin: 1rem auto;
   @media (max-width: 1024px) {
      img {
         width: 140px;
      }
   }
  }

.gray-icon {
   margin: 1rem auto;
   @media (max-width: 1024px) {
      img {
         width: 140px;
      }
   }
}
.center {
   cursor: pointer;
   display: flex;
   width: 30vw;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;

   @media (max-width: 576px) {
      p {
         font-size: 0.9rem;
         word-spacing: 0.2rem;
      }
      width: 70vw;
   }
}

@keyframes moveInLeft {
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

@keyframes moveInRight {
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
