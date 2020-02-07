<template>
    <section :id="id" :class="['section', 'section--' + type]">
        <slot name="header"></slot>
        <div class="section-content default">
            <slot></slot>
        </div>
        <div v-for="slot in slots" :class="slot">
            <slot :name="slot"></slot>
        </div>
    </section>
</template>
<script>
    export default {
        props: {id: String, type: {type: String, default: 'normal'}},
        mounted() {
            this.$el.querySelectorAll('.cards > ul')
                .forEach(el => {
                    el.style.cssText = `--total: '${el.childElementCount}'`;
                });
        },
        computed: {
            slots() {
                let staticSlots = ['default', 'header'];
                return Object.keys(this.$slots).filter(slot => staticSlots.indexOf(slot) < 0);
            }
        }
    }
</script>
