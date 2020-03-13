<template>
    <div id="cookie_consent" v-show="showConsent">
        We use cookies to make this website more user-friendly and improve user experience. <a href="./cookies-policy.html">Read our cookies policy</a>
        <button id="deny_cookies" v-on:click="denyCookies">Deny</button>
        <button id="accept_cookies" v-on:click="acceptCookies">Accept</button>
    </div>
</template>
<script>
    import Cookies from 'js-cookie';

    export default {
        data() {
            return {
                showConsent: typeof Cookies.get('opt_in') === 'undefined'
            }
        },
        methods: {
            acceptCookies() {
                this.$gtag.optIn();
                Cookies.set('opt_in', '1');
                this.showConsent = false;
            },
            denyCookies() {
                Object.keys(Cookies.get()).forEach((cookie) => Cookies.remove(cookie));
                this.$gtag.optOut();
                Cookies.set('opt_in', '0');
                this.showConsent = false;
            }
        }
    }
</script>
