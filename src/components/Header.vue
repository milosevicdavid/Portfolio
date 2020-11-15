<template>
  <div class="header-container">
  <div class="header-wrapper">
    <div class="header">
      <div class="logo">
        <g-link to="/">
          <img src="../assets/dt2.png" />
        </g-link>
      </div>
      <header class="links">
        <span class="page-links">
          <g-link to="/about">About Me</g-link>
        </span>
        <span class="page-links">
          <g-link to="/contact">Contact</g-link>
        </span>
        <span class="page-links">
          <g-link to="/blog">Blog</g-link>
        </span>
      </header>
    </div>
    <div class="quote">
      <h1>
        <span class="first-quote">{{ quote[0] }} </span>
        <span class="white-quote">{{ quote[1] }}</span>
        <br />
        <span class="last-quote">{{ quote[2] }}</span>
      </h1>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">

.header-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  border-bottom: 1px solid #2e8b57;
  height: 400px;

  @media (max-width: 576px) {
    height: 100vh;
  }
}

.header {
  display: flex;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
}

.logo {
  margin-top: 5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  border-radius: 100%;
  width: 110px;
  height: 110px;

  img {
    width: 100%;
  }

  @media (max-width: 576px) {
    margin-bottom: 0;
  }
}

.quote {
  margin-left: 4rem;
  margin-top: 4rem;
  font-size: 3rem;
  font-weight: 700;
  line-height: 3rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  @media (max-width: 576px) {
    margin-top: 7rem;
    margin-left: 2rem;
    line-height: 4rem;
  }
}

.first-quote {
  animation: fadeInFirst 2s ease-in;
}

.white-quote {
  animation: fadeInSecond 2s ease-in;
  color: wheat;
}

.last-quote {
  animation: fadeInThird 2.8s ease-in;
}

.links {
  margin-top: 3rem;
  padding: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  animation-name: MoveInUp;
  animation-duration: 2s;
  animation-timing-function: ease-out;

  a:hover {
    color: wheat;
    border-bottom: 1px solid white;
  }
}

.page-links {
  padding: 1rem;

  @media (max-width: 576px) {
    padding: 0.5rem;
  }
}

@keyframes fadeInFirst {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeInSecond {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  80% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeInThird {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  80% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}


@keyframes MoveInUp {
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

</style>
