<template>
  <div class="landing">
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
.fade-enter-active {
  transition: opacity 4s;
}

.fade-enter {
  opacity: 0;
}
</style>
