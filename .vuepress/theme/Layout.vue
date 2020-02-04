<template>
    <div>
        <Navigation :scroll="scrollTop"/>
        <main>
            <div class="announcement" v-if="$page.frontmatter.announcement"
                 v-html="$page.frontmatter.announcement"></div>
            <Content/>
            <Footer/>
        </main>
        <CookieConsent/>
    </div>
</template>
<style lang="css">
    @import './styles/main.css';
</style>
<script>
    import Navigation from '@theme/components/Navigation.vue'
    import Footer from '@theme/components/Footer.vue'
    import CookieConsent from '@theme/components/CookieConsent.vue'

    export default {
        name: 'Layout',
        components: {
            Navigation,
            Footer,
            CookieConsent
        },
        data: () => {
            return {
                scrollTop: 0
            }
        },
        methods: {
            onScroll: function (target) {
                this.scrollTop = target.scrollTop;
            }
        },
        mounted: function () {
            let htmlEl = document.querySelector('html');
            let mainEl = htmlEl.querySelector('main');
            window.addEventListener('scroll', () => this.onScroll(htmlEl));
            document.querySelector('main').addEventListener('scroll', () => this.onScroll(mainEl));
        }
    }
</script>
