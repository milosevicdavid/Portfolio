<template>
  <div class="header">
    <div class="logo">Davidian Tech</div>
    <div class="icons">
      <span class="page-links">
        <g-link to="/">About Me</g-link>
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

  
  a:hover { 
  color: white;
  border-bottom: 1px solid white;
}


  @media (max-width: 576px) {
    flex-direction: column;
  }
}


.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.links {
  padding: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.page-links {
  padding: 1rem;
}
</style>
