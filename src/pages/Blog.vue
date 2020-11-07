<template>
    <Layout>
        <h1 class="title">Blog</h1>
        <div class="wrapper">
            <div class="icons">
                <span class="circle-icon">
                    <vue-fontawesome
                        class="icon"
                        icon="github"
                        size="1.5"
                        color="#2E8B57"
                    ></vue-fontawesome>
                </span>
                <span class="circle-icon">
                    <vue-fontawesome
                        class="icon"
                        icon="instagram"
                        size="1.5"
                        color="#2E8B57"
                    ></vue-fontawesome>
                </span>
                <span class="circle-icon">
                    <vue-fontawesome
                        class="icon"
                        icon="linkedin"
                        size="1.5"
                        color="#2E8B57"
                    ></vue-fontawesome>
                </span>
                <span class="circle-icon">
                    <vue-fontawesome
                        class="icon"
                        icon="envelope"
                        size="1.4"
                        color="#2E8B57"
                    ></vue-fontawesome>
                </span>
            </div>

            <div class="container">
                <ul>
                    <li v-for="{ node } in $page.posts.edges" :key="node.id">
                        <g-link :to="node.path">
                            <div class="blog">
                                <b-skeleton-wrapper :loading="loading">
                                    <template v-slot:loading>
                                        <b-card>
                                            <b-skeleton-img
                                                card-img="top"
                                                aspect="1:1"
                                            ></b-skeleton-img>
                                            <br />
                                            <b-skeleton
                                                width="85%"
                                            ></b-skeleton>
                                            <b-skeleton
                                                width="55%"
                                            ></b-skeleton>
                                            <b-skeleton
                                                width="70%"
                                            ></b-skeleton>
                                            <b-skeleton
                                                width="85%"
                                            ></b-skeleton>
                                            <b-skeleton
                                                width="55%"
                                            ></b-skeleton>
                                            <b-skeleton
                                                width="70%"
                                            ></b-skeleton>
                                        </b-card>
                                    </template>
                                    <br />
                                    <div class="b-card">
                                        <g-image
                                            alt="Example image"
                                            :src="node.image.file.url"
                                            blur="70"
                                            width="135"
                                            height="30"
                                        />
                                        <div class="description">
                                            <h2>
                                                {{ node.title }}
                                            </h2>
                                            <p>
                                                {{ node.description }}
                                            </p>
                                            <p class="date">
                                                Posted on {{ node.date }}
                                            </p>
                                            <p>Read More...</p>
                                        </div>
                                    </div>
                                </b-skeleton-wrapper>
                            </div>
                        </g-link>
                    </li>
                </ul>
            </div>
        </div>

        <div class="pages">
            <Pager
                v-if="$page.posts.pageInfo.totalPages > 1"
                :info="$page.posts.pageInfo"
            />
        </div>
    </Layout>
</template>

<page-query>
     query Posts($page: Int) { posts: allContentfulPortfolioBlog(sortBy: "date", order: DESC, perPage: 3, page: $page)
    @paginate { totalCount pageInfo { totalPages
  currentPage } 
    edges { node { id, path, image { file { url } }, title, body, date (format:
  "MMMM D, Y") } } } }
</page-query>

<script>
import { Pager } from "gridsome";

export default {
    components: {
        Pager,
    },
    metaInfo: {
        title: "Blog",
    },

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

<style scoped lang="scss">
.title {
    text-align: center;
    margin-top: 2rem;
    margin-left: 2rem;
}

.container {
    padding-right: 2rem;
    img {
        width: 100%;
    }
    ul {
        list-style: none;
        margin: 0;
    }
    a {
        text-decoration: none;
    }
}

.blog {
    margin-bottom: 2rem;
    border-radius: 1rem;
    color: black;

    img {
        border-radius: 1rem 1rem 0 0;
    }
}

.description {
    background-color: #2e8b57;
    padding: 0.5rem;
    color: white;

    h2 {
        font-size: 1.5rem;
    }
}

.pages {
    margin: 2rem auto;
    text-align: center;
    font-size: 2rem;
}
a {
    padding: 1rem;
    text-decoration: none;
    &:hover {
        color: #2e8b57;
    }
}

.wrapper {
    display: flex;
}

.icons {
    margin-top: 12rem;
    height: 300px;
    position: -webkit-sticky;
    position: sticky;
    top: 12rem;
    cursor: pointer;
}

.circle-icon {
    margin-top: 0.5rem;
    border: 1px solid #2e8b57;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
