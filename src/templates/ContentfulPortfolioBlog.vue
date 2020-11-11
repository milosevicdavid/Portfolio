<template>
    <Layout>
        <div class="container">
            <div class="main">
                <h1 class="">{{ $page.post.title }}</h1>
                <g-image
                    alt="Example image"
                    :src="$page.post.image.file.url"
                    blur="70"
                    width="135"
                />

                <p>
                    Share:
                </p>
                
                <p class="posted">Posted on {{ $page.post.date }}</p>
                <div id="body" class="blog-text" v-html="body" />
            </div>
        </div>
    </Layout>
</template>

<page-query>
    query Post ($path: String!) {
      post: contentfulPortfolioBlog (path: $path) {
        id,
        title,
        image {
        file {
            url
        }
        },
        body,
        date (format: "MMMM DD, YYYY"),
        path
      }
    }
</page-query>

<script>
import MarkdownIt from "markdown-it";


export default {
      
    metaInfo() {
        return {
            title: this.$page.post.title,
        };
    },
    computed: {
        body() {
            const md = new MarkdownIt();

            return md.render(this.$page.post.body);
        },

           },
};
</script>



<style lang="scss">
.container {
    margin-top: 2rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 2rem;
    }
}

.blog-text {
    margin-top: 2rem;
}

.main {
    width: 760px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
    }

    p {
        margin-top: 1rem;
    }
}

.social-share {
    display: flex;
    margin-top: 0.5rem;
}
</style>
