<template>
 <Landing>
 <div class="index_wrapper">
   <div class="index_left">
       <g-link to="/about/">
         <div class="center">
           <div class="title">
           <p>Portfolio</p>
           </div>
           <div class="description-text">
      <p>
        Welcome to my portfolio! My name is David Milosevic and I am a web developer
        from Belgrade.
      </p>
           </div>
         </div>
       </g-link>
   </div>

   <div class="index-right">
     <g-link to="/blog/">
       <div class="center">
         <p>Blog</p>
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
  layout: 'Landing'
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


  @media (max-width: 576px) {
    width: 100%;
    border-right: none;
  }
}
 
.title {
  p {
    animation-name: moveInLeft;
    animation-duration: 2s;
    animation-timing-function: ease-out;
  }
  font-size: 3rem;
}

.description-text {
}

.index-right {
  font-size: 3rem;
  height: 100vh;
  display: flex;
  border-left: 2px solid #2e8b57;
  justify-content: center;
  align-items: center;
  width: 50%;

  p {
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

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateY(-10rem); }
  80% {
    transform: translateY(1rem); }
  100% {
    opacity: 1;
    transform: translate(0); } }

  @keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateY(10rem); }
  80% {
    transform: translateY(-1rem); }
  100% {
    opacity: 1;
    transform: translate(0); } }


</style>
