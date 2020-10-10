<template>
  <Layout>
    <b-skeleton-wrapper :loading="loading">
      <template v-slot:loading>
        <b-card>
          <b-skeleton-img card-img="top" aspect="1:1"></b-skeleton-img>
          <br />
          <b-skeleton width="85%"></b-skeleton>
          <b-skeleton width="55%"></b-skeleton>
          <b-skeleton width="70%"></b-skeleton>
          <b-skeleton width="85%"></b-skeleton>
          <b-skeleton width="55%"></b-skeleton>
          <b-skeleton width="70%"></b-skeleton>
        </b-card>
      </template>
      <br />
      <div class="b-card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          viverra nunc sapien, non rhoncus elit tincidunt vitae. Vestibulum
          maximus, ligula eu feugiat molestie, massa diam imperdiet odio, vitae
          viverra ligula est id nisi. Aliquam ut molestie est. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Phasellus at consequat dui. Aenean tristique sagittis
          quam, sit amet sollicitudin neque sodales in.
      </div>
    </b-skeleton-wrapper>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      loadingTime: 0,
      maxLoadingTime: 3,
    };
  },
  watch: {
    loading(newVal, oldValue) {
      if (newVal !== oldValue) {
        this.clearLoadingTimeInterval();

        if (newVal) {
          this.$_loadingTimeInterval = setInterval(() => {
            this.loadingTime++;
          }, 300);
        }
      }
    },
    loadingTime(newVal, oldValue) {
      if (newVal !== oldValue) {
        if (newVal === this.maxLoadingTime) {
          this.loading = false;
        }
      }
    },
  },
  created() {
    this.$_loadingTimeInterval = null;
  },
  mounted() {
    this.startLoading();
  },
  methods: {
    clearLoadingTimeInterval() {
      clearInterval(this.$_loadingTimeInterval);
      this.$_loadingTimeInterval = null;
    },
    startLoading() {
      this.loading = true;
      this.loadingTime = 0;
    },
  },
};
</script>

<style lang="scss">


</style>
