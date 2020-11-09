<template>
   <Landing>
      <div class="index_wrapper">
         <div class="index_left">
            <g-link to="/about/">
               <div class="center">
                  <p>
                     <g-image class="svg" src="~/assets/cranium2.webp" width="260" />
                  </p>
                  <div class="title">
                     <h1>Portfolio</h1>
                  </div>
                  <div class="description-text">
                     <p>
                        &nbsp; Welcome to my portfolio page! My name is David Milosevic and
                        I am a web developer from Belgrade. Starting from here, you can get info about me, my projects and web development technologies that interests me, skills that I possess, contact info..

                     </p>
                  </div>
               </div>
            </g-link>
         </div>

         <div class="index-right">
            <g-link to="/blog/">
               <div class="center">
                        <p>
                           <g-image class="svg" src="~/assets/notebook.png" width="260"/>
                        </p>
                  <h1>Blog</h1>
                  <div class="description-text">
                     <p>
                        &nbsp;  Discover the latest news in tech and web development in
                        this articles section! The most knowledge about all kinds of technologies I am involved in.
                     </p>
                  </div>
               </div>
            </g-link>
         </div>
      </div>
   </Landing>
</template>

<script>
export default {
   metaInfo: {
      title: "Welcome!",
   },
   layout: "Landing",
};
</script>

<style lang="scss">
.index_wrapper {
   font-family: "Orbitron", sans-serif;
   display: flex;

   @media (max-width: 576px) {
      flex-direction: column;
   }
}
.index_left {
   width: 50%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   border-right: 2px solid #2e8b57;

   p {
      margin: 2rem auto;
      line-height: 1.5rem;
      word-spacing: 0.4rem;
   }

   @media (max-width: 576px) {
      width: 100%;
      border-right: none;
   }
}

.title {
   h1 {
      animation-name: moveInLeft;
      animation-duration: 2s;
      animation-timing-function: ease-out;
   }
   font-size: 3rem;
}

.description-text {
}

.index-right {
   height: 100vh;
   display: flex;
   border-left: 2px solid #2e8b57;
   justify-content: center;
   align-items: center;
   width: 50%;

   p {
      margin: 2rem auto;
      line-height: 1.5rem;
      word-spacing: 0.4rem;
   }

   h1 {
      animation-name: moveInRight;
      animation-duration: 2s;
      animation-timing-function: ease-out;
   }

   @media (max-width: 576px) {
      border-top: 2px solid #2e8b57;
      border-left: none;
      width: 100%;
   }
}

.svg {
   color: #363636;
   fill: #363636;
}

.center {
   cursor: pointer;
   display: flex;
   width: 30vw;
   height: 300px;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   @media (max-width: 576px) {
      width: 70vw;
   }
}

.fade-enter-active {
   transition: opacity 6s;
}

.fade-enter {
   opacity: 0;
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
