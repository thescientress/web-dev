<template>
    <div>
        <Navigation :scroll="scrollTop"/>
        <main>
            <div class="announcement">
                <Content slot-key="announcement"/>
            </div>
            <Content/>
            <Footer/>
        </main>
        <aside>
            <Content slot-key="aside"/>
        </aside>
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
        data() {
            return {
                scrollTop: 0
            }
        },
        methods: {
            onScroll(target) {
                this.scrollTop = target.scrollTop;
            },
            initScroll() {
                let htmlEl = document.querySelector('html');
                let mainEl = htmlEl.querySelector('main');
                window.addEventListener('scroll', () => this.onScroll(htmlEl));
                mainEl.addEventListener('scroll', () => this.onScroll(mainEl));

            },
            initCards($el) {
                $el.querySelectorAll('.cards > ul')
                    .forEach(el => {
                        el.style.cssText = `--total: '${el.childElementCount}'`;
                    });
            },
            initRibbon($el) {
                $el.querySelectorAll('.ribbon > ul > li')
                    .forEach(el => {
                        el.addEventListener('mousedown', function () {
                            [...this.parentNode.children].forEach((child) => child.classList.remove('active'));
                            this.classList.add('active');
                        });
                        el.addEventListener('hover', function () {
                            [...this.parentNode.children].forEach((child) => child.classList.remove('active'));
                            this.classList.add('active');
                        })
                    });
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.initScroll();
                this.initCards(document);
                this.initRibbon(document);
            });
        }
    }
</script>
