<template></template>
<script>
    export default {
        props: {
            'selector': { type: String },
        },
        methods: {
            initClickHandler($el) {
                $el.querySelectorAll(this.selector)
                    .forEach(el => {
                        el.addEventListener('mousedown', function (e) {
                            if (e.target.tagName === 'A') {
                                e.stopImmediatePropagation();
                                return;
                            }
                            let isActive = this.classList.contains('active');
                            [...this.parentNode.children].forEach((child) => child.classList.remove('active'));
                            this.classList.toggle('active', !isActive);
                        });
                    });
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.initClickHandler(document);
            });
        },
    };
</script>
