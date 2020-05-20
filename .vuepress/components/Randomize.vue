<template></template>
<script>
    export default {
        props: {
            'selector': { type: String, default: '.team > ul > li' },
        },
        methods: {
            randomize($el) {
                $el.querySelectorAll(this.selector)
                    .forEach(el => {
                        let rnd = Math.floor(Math.random() * 100);
                        el.style.cssText = `order: ${rnd}`;
                    });
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.randomize(document);
            });
        },
    };
</script>
