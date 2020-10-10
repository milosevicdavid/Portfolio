<template>
  <div class="wrapper">
    <div class="portfolio">
      <div class="center">
        <p>Milosevic</p>
      </div>
    </div>

    <div class="blog">
      <div class="center">
        <p>David</p>
      </div>
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
.wrapper {
  display: flex;

  @media (max-width: 576px) {
    flex-direction: column;
  }
}

.blog {
  border-left: 2px solid #2e8b57;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 576px) {
  border-top: 2px solid #2e8b57;
  border-left: none;
  width: 100%;
  }
}

.portfolio {
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 576px) {
    width: 100%;
  }
  
 }

.center {
  justify-content: center;
  align-items: center;
}
</style>
