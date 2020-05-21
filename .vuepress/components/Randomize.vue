<template></template>
<script>
    export default {
        props: {
            'selector': { type: String, default: '.team > ul' },
        },
        methods: {
            randomize($el) {
                let ul = $el.querySelectorAll(this.selector)[0];
                if (!ul || !ul.children || ul.children.length === 0) {
                    return;
                }
                for (let i = ul.children.length; i >= 0; i--) {
                    ul.appendChild(ul.children[Math.floor(Math.random() * i | 0)]);
                }
                ul.classList.add('ordered');
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.randomize(document);
            });
        },
    };
</script>
