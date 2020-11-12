<template>
  <div class="header">
    <div class="logo">
      <g-link to="/">
<g-image src="~/assets/dt.png" />
      </g-link>
    </div>
    <div class="links">
      <span class="page-links">
        <g-link to="/about">About Me</g-link>
      </span>
      <span class="page-links">
       <g-link to="/contact">Contact</g-link>
      </span>
      <span class="page-links">
        <g-link to="/blog">Blog</g-link>
      </span>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.header {
  font-size: 1.2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 120px;
  width: 100%;
  border-bottom: 1px solid #2e8b57;
  margin-bottom: 0;


  @media (max-width: 576px) {
    flex-direction: column;
    height: 160px;
  }
}


.logo {
  
  margin-top: 1rem;
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

.links {
  padding: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

a:hover { 
  color: white;
  border-bottom: 1px solid white;
  }

}

.page-links {
  padding: 1rem;

  @media (max-width: 576px) {
    padding: 0.5rem;
  }
}
</style>
