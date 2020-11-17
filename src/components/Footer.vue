<template>
    <div class="footer-wrapper">
        <div class="footer">
            <div class="copyright">
                Copyright © Davidian Tech {{ new Date().getFullYear() }}
            </div>
            <div class="icons-wrap">
                <span class="connect">Connect with me: </span>
                <div class="icons">
                     <a href="https://github.com/milosevicdavid">
                         <span class="circle-icon">
                             <vue-fontawesome
                                 class="icon"
                                 icon="github"
                                 size="2"
                                 color="wheat"
                             ></vue-fontawesome>
                         </span>
                     </a>   
                     <a href="https://www.instagram.com/miloshevitshdavid/">
                         <span class="circle-icon">
                             <vue-fontawesome
                                 class="icon"
                                 icon="instagram"
                                 size="2"
                                 color="wheat"
                             ></vue-fontawesome>
                         </span>
                     </a>
                     <a href="https://www.linkedin.com/in/david-milosevic-9391a617/">
                         <span class="circle-icon">
                             <vue-fontawesome
                                 class="icon"
                                 icon="linkedin"
                                 size="2"
                                 color="wheat"
                             ></vue-fontawesome>
                         </span>
                     </a>
                     <g-link to="/contact">
                         <span class="circle-icon">
                             <vue-fontawesome
                                 class="icon"
                                 icon="envelope"
                                 size="2"
                                 color="wheat"
                             ></vue-fontawesome>
                         </span>
                     </g-link>
                </div>
            </div>
        </div>
        <div class="tech">
            <span>Website built using: </span>
            <Tech />
        </div>
    </div>
</template>

<script>
import Tech from "~/components/Tech";

export default {
    components: {
        Tech,
    },
};
</script>

<style lang="scss">

.icons-wrap {
    display: flex;
    justify-content: space-between;

    @media (max-width: 576px) {
        flex-direction: column;
        width: 100%;
    }
}

.connect {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

.footer {
    padding-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 120px;
    width: 100%;
    border-top: 1px solid #2e8b57;

    @media (max-width: 576px) {
        flex-direction: column;
    }
}

.copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-weight: 700;
}

.tech {
    margin-top: 2rem;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.icons {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.circle-icon {
    padding: 1rem;
}
</style>
