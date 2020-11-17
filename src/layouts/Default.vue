<template>
  <div class="layout">
        <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 800px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  a {
    text-decoration: none;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
.fade-enter-active {
  transition: opacity .8s;
}

.fade-enter {
  opacity: 0;
}
</style>
