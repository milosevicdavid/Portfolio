<template>
    <Layout>
        <div class="main">
            <h1 class="">{{ $page.post.title }}</h1>
            <g-image
                alt="Example image"
                :src="$page.post.image.file.url"
                blur="70"
                width="135"
            />
            <p class="">Posted on {{ $page.post.date }}</p>
            <div id="body" class="" v-html="body" />
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
.main {
    width: 760px;

    img {
        width: 100%;
        height: 100%;
    }
}

#body {
    color: #2d3748;
}

#body h1 {
    font-size: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
}

#body hr {
    padding-bottom: 10px;
}

#body pre {
    background-color: #2d3748;
    color: #a0aec0;
    margin: 20px;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
}

#body pre code {
    overflow: scroll;
}
#body ul li {
    list-style-position: inside;
    list-style-type: square;
}
#body ol {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
    list-style-type: decimal;
    list-style-position: inside;
}
</style>
