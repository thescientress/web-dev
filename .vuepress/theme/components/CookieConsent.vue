<template>
    <div id="cookie_consent" v-if="show">
        We use cookies to make this website more user-friendly and improve user experience.
        <a href="./cookies-policy.html" target="_blank">Read our cookie policy</a>
        <div class="cookie_choice">
            <button id="deny_cookies" @click="acceptCookies(false)">Deny</button>
            <button id="accept_cookies" @click="acceptCookies(true)">Accept</button>
        </div>
    </div>
</template>
<script>
    import EventBus from '@theme/plugins/EventBus';

    export default {
        props: {
            show: { type: Boolean, default: false },
        },
        methods: {
            acceptCookies(value) {
                EventBus.$emit('optIn', value);
            },
        },
    };
</script>
