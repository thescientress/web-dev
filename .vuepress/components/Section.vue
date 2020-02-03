<template>
    <section :id="id" :class="classes">
        <slot name="header"></slot>
        <div class="section-content top">
            <slot></slot>
        </div>
        <slot name="body"></slot>
        <div class="cards" v-if="$slots.cards">
            <slot name="cards"></slot>
        </div>
        <div class="section-buttons" v-if="$slots.buttons">
            <slot name="buttons"></slot>
        </div>
        <div class="section-content bottom" v-if="$slots.bottom">
            <slot name="bottom"></slot>
        </div>
        <slot name="footer"></slot>
    </section>
</template>
<script>
    export default {
        props: {id: String, type: {type: String, default: 'normal'}},
        computed: {
            classes() {
                return 'section section--' + this.type
            }
        },
        mounted() {
            this.$nextTick(function () {
                // reset css counter "total" for each UL so we can use it in CSS
                this.$el
                    .querySelectorAll('.cards > ul')
                    .forEach(el => {
                        el.style.cssText = `--total: '${el.childElementCount}'`;
                    });
            })
        }
    }
</script>
