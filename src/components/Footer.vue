<template>
    <div class="footer">
        <div class="copyright">Copyright @DavidianDesign 2020</div>
        <div class="icons">
            <span class="circle-icon">
                <vue-fontawesome
                    class="icon"
                    icon="github"
                    size="2"
                    color="#2E8B57"
                ></vue-fontawesome>
            </span>
            <span class="circle-icon">
                <vue-fontawesome
                    class="icon"
                    icon="instagram"
                    size="2"
                    color="#2E8B57"
                ></vue-fontawesome>
            </span>
            <span class="circle-icon">
                <vue-fontawesome
                    class="icon"
                    icon="linkedin"
                    size="2"
                    color="#2E8B57"
                ></vue-fontawesome>
            </span>
            <span class="circle-icon">
                <vue-fontawesome
                    class="icon"
                    icon="envelope"
                    size="2"
                    color="#2E8B57"
                ></vue-fontawesome>
            </span>
        </div>
    </div>
</template>

<script></script>

<style lang="scss">

.footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 120px;
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
