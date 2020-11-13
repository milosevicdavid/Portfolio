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

                <p>Share:</p>
                
                <div class="social-share">

                <ShareNetwork
                    network="facebook"
                    :url= "`${website}${$page.post.path}`"
                    title="Welcome to Davidian Blog "
                    description="Technology, web development..."
                    hashtags="technology,webdev"
                >
                    <span class="circle">
                    <vue-fontawesome
                        class="icon"
                        icon="facebook"
                        size="1.5"
                        color="#2E8B57"
                    ></vue-fontawesome>
                </span>

                </ShareNetwork>
                <ShareNetwork
                    network="twitter"
                    :url= "`${website}${$page.post.path}`"
                    title="Welcome to Davidian Blog "
                    description="Technology, web development..."
                    hashtags="technology,webdev"
                >
                    <span class="circle">
                    <vue-fontawesome
                        class="icon"
                        icon="twitter"
                        size="1.5"
                        color="#2E8B57"
                    ></vue-fontawesome>
                </span>

                </ShareNetwork>
                <ShareNetwork
                    network="linkedin"
                    :url= "`${website}${$page.post.path}`"
                    title="Welcome to Davidian Blog "
                    description="Technology, web development..."
                    hashtags="technology,webdev"
                >
                    <span class="circle">
                    <vue-fontawesome
                        class="icon"
                        icon="linkedin"
                        size="1.5"
                        color="#2E8B57"
                    ></vue-fontawesome>
                </span>

                </ShareNetwork>
                <ShareNetwork
                    network="whatsapp"
                    :url= "`${website}${$page.post.path}`"
                    title="Welcome to Davidian Blog "
                    description="Technology, web development..."
                    hashtags="technology,webdev"
                >
                    <span class="circle">
                    <vue-fontawesome
                        class="icon"
                        icon="whatsapp"
                        size="1.5"
                        color="#2E8B57"
                    ></vue-fontawesome>
                </span>

                </ShareNetwork>
                </div>


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

    data() {
        return {
            website: "davidiansite.netlify.app"
        }
    },
   
   
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
        url() {
            return `davidiansite.netlify.app${$page.post.path}`
        }
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
    justify-content: center;
    align-items: center;
    cursor: pointer;

}

.circle {
    margin: 1rem;
    border: 1px solid #2e8b57;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform .5s ease-in;

        &:hover {
            transform: translateY(-0.3rem); 
        }


    .icon {
        line-height: 0;
        padding: 0.5rem;
    } 
}

</style>
