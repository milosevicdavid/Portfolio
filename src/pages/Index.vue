<template>
  <div class="index_wrapper">
    <div class="index_left">
      <div class="center">
        <p>Portfolio</p>
      </div>
    </div>

      <div class="index-right">
        <g-link to="/blog/">
        <div class="center">
          <p>Blog</p>
        </div>
        </g-link>
      </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Welcome!",
  },
};
</script>

<style lang="scss">

.index_wrapper {

  font-family: 'Orbitron', sans-serif;
  display: flex;

  @media (max-width: 576px) {
    flex-direction: column;
  }

}
.index_left {
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  border-right: 2px solid #2e8b57;
  transition: .8s ease-in;
  
  @media (max-width: 576px) {
    width: 100%;
  }

  &:hover {
    transform: translateX(50px);
  }
  
 }

.index-right {
  font-size: 3rem;
  height: 100vh;
  display: flex;
  border-left: 2px solid #2e8b57;
  justify-content: center;
  align-items: center;
  width: 50%;
  transition: .8s ease-in;

  @media (max-width: 576px) {
  border-top: 2px solid #2e8b57;
  border-left: none;
  width: 100%;
  }

  &:hover {
    transform: translateX(-50px);
  }

}




.center {
  cursor: pointer;
  display: flex;
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
