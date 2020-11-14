<template>
    <Landing>
    <div class="height-wrapper">
    <Header :quote="quoteText"/>
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
                <span
                    class="single-post"
                    v-for="{ node } in $page.posts.edges"
                    :key="node.id"
                >
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
                                        <span class="preview">
                                            {{ node.preview }}
                                        </span>
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
                </span>
            </div>
        </div>

        <div class="pages">
            <Pager
                class="pages"
                v-if="$page.posts.pageInfo.totalPages > 1"
                :info="$page.posts.pageInfo"
            />
        </div>
        <Footer />
    </div>
    </Landing>
</template>

<page-query>
     query Posts($page: Int) { posts: allContentfulPortfolioBlog(sortBy: "date", order: DESC, perPage: 3, page: $page)
    @paginate { totalCount pageInfo { totalPages
  currentPage } 
    edges { node { id, path, image { file { url } }, title, preview,  body, date (format:
  "MMMM D, Y") } } } }
</page-query>

<script>
import { Pager } from "gridsome";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export default {
    components: {
        Pager,
        Header,
        Footer,
        
    },
    metaInfo: {
        title: "Blog",
    },

    data() {
        return {
            loading: false,
            loadingTime: 0,
            maxLoadingTime: 3,
            quoteText: ["BLOG TO KEEP", "YOU", "UP TO DATE"]
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


    
.height-wrapper {

    height: 100%;
    background-image: url(../assets/workstation.png);
    background-size: cover;


   @media (max-width: 576px) {
      flex-direction: column;
    background-image: url(../assets/workstation2.png);
   }
}


.title {
    text-align: center;
    margin-top: 2rem;
}

.preview {
    font-size: 12px;
}

.container {
    display: flex;
    justify-content: space-evenly;
    padding-right: 2rem;
    max-width: 1280px;
    flex-wrap: wrap;
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

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
}

.single-post {
    max-width: 350px;
    min-width: 250px;
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
    background-color: black;
    padding: 0.5rem;
    color: white;

    h2 {
        font-size: 1.5rem;
    }

    &:hover {
   background-color: #2e8b57;
    }
}

.pages {
    margin-top: 1rem;
    padding: 1rem;
        text-align: center;
    font-size: 1.5rem;
    a {
        padding: 1rem;
        text-decoration: none;
        &:hover {
            color: #ffffff;
        }
    }
}

.wrapper {
    display: flex;
    justify-content: space-between;
    margin: auto 1rem;
}

.icons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    position: -webkit-sticky;
    position: sticky;
    cursor: pointer;
    top: calc(50% - 150px);

    @media (min-width: 1024px) {
        display: none;
    }
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
