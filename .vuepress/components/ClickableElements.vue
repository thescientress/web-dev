<template></template>
<script>
    export default {
        props: {
            // CSS selector for elements that will toggle their .active class on click
            'selector': { type: String },
            // CSS selector for elements to exclude from handling clicks (e.g. '.active a')
            'excludeSelector': { type: String, default: '' },
        },
        methods: {
            initClickHandler($el) {
                const selector = this.selector;
                const excludeSelector = this.excludeSelector;
                $el.querySelectorAll(this.selector)
                    .forEach(el => {
                        el.addEventListener('mousedown', function (e) {
                            const excluded = [...$el.querySelectorAll(excludeSelector || null)];
                            if (excluded.filter(ignored => e.composedPath().includes(ignored)).length > 0) {
                                e.stopImmediatePropagation();
                                return;
                            }
                            let isActive = this.classList.contains('active');
                            $el.querySelectorAll(selector)
                                .forEach((child) => {
                                    child.classList.remove('active');
                                });
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
