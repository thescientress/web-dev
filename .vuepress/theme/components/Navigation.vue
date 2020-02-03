<template>
    <header>
        <section :class="{'main-nav': true, active: navActive}">
            <div class="logo">
                <a :href="$withBase('/')">
                    <img src="../../../img/logo.svg" alt="Aeternity">
                </a>
            </div>
            <nav class="pages">
                <button v-on:click="navToggle"></button>
                <ul class="nav-items" v-on:click.stop="navToggle">
                    <li class="nav-item">
                        <a href="https://forum.aeternity.com" target="_blank">Forum</a>
                    </li>
                    <li class="social">
                        <a href="https://github.com/aeternity" target="_blank">
                            <img src="../../../img/Social_GitHub.svg" alt="">
                        </a>
                        <a href="https://forum.aeternity.com" target="_blank">
                            <img src="../../../img/Social_Forum.svg" alt="">
                        </a>
                        <a href="https://blog.aeternity.com" target="_blank">
                            <img src="../../../img/Social_Medium.svg" alt="">
                        </a>
                        <a href="https://telegram.me/aeternity" target="_blank">
                            <img src="../../../img/Social_Telegram.svg" alt="">
                        </a>
                        <a href="https://www.facebook.com/aeternityproject/" target="_blank">
                            <img src="../../../img/Social_Facebook.svg" alt="">
                        </a>
                        <a href="https://twitter.com/aeternity" target="_blank">
                            <img src="../../../img/Social_Twitter.svg" alt="">
                        </a>
                        <a href="http://qm.qq.com/cgi-bin/qm/qr?k=SyRwX1h8CaeNyGpLfy0r74EYqwJ6KERj" target="_blank">
                            <img src="../../../img/Social_QQ.svg" alt="">
                        </a>
                        <a href="https://weibo.com/aechinacn" target="_blank">
                            <img src="../../../img/Social_Weibo.svg" alt="">
                        </a>
                    </li>
                </ul>
            </nav>
            <div :class="{'lang-switcher': true, active: langActive}">
                <button type="button" class="lang-current" v-on:click="langToggle">ENG</button>
                <div class="lang-menu">
                    <ul class="lang-items">
                        <li class="lang-item">
                            <a class="lang-link" href="#" onclick="return false">English</a>
                        </li>
                        <li class="lang-item">
                            <a class="lang-link" onclick="return false">Español</a>
                        </li>
                        <li class="lang-item">
                            <a class="lang-link" onclick="return false">Русский</a>
                        </li>
                        <li class="lang-item">
                            <a class="lang-link" onclick="return false">中文 (简体)</a>
                        </li>
                        <li class="lang-item">
                            <a class="lang-link" onclick="return false">日本語</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </header>
</template>
<script>
    export default {
        data: () => {
            return {
                navActive: false,
                langActive: false
            }
        },
        methods: {
            navToggle: function () {
                this.navActive = !this.navActive
            },
            langToggle: function () {
                this.navActive = !this.navActive
            }
        }
    }
</script>
