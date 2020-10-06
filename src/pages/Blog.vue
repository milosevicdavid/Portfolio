<template>
    <Layout>
        <div class="container">
                <h1 class="title">Blog</h1>

                <ul>
                    <li v-for="{ node } in $page.posts.edges" :key="node.id">
                        <g-link :to="node.path">
                            <div class="blog">
                                <g-image
                                    alt="Example image"
                                    :src="node.image.file.url"
                                    blur="70"
                                    width="135"
                                    height="30"
                                />
                                    <div class="description">
                                        <h1>
                                            {{ node.title }}
                                        </h1>
                                        <p>
                                            {{ node.description }}
                                        </p>
                                        <p class="date">Posted on {{ node.date }}</p>
                                        <p>Read More...</p>
                                    </div>
                            </div>
                        </g-link>
                    </li>
                </ul>
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
   
     query Posts($page: Int) { 
     posts: allContentfulPortfolioBlog(sortBy: "date", order:
  DESC, perPage: 3, page: $page)
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
};
</script>

<style scoped lang="scss">

.title {
        text-align: center;
}

.container {
    

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
    box-shadow: 5px 10px 18px #888888;

    img {
        border-radius: 1rem 1rem 0 0;
    }
}

.description {
    padding: 1rem;
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
        color: orange;
    }
}
</style>
