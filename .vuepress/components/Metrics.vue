<template>
    <div :id="id">
        <ul class="metrics">
            <li v-for="metric in this.metrics">
                <a :href="metric.link || '#'" target="_blank">
                    <img :src="$withBase(metric.image)" alt="">
                    <div>{{ (metric.value * 1).toLocaleString() }}</div>
                    <div>{{ metric.text }}</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: {id: {type: String, default: 'metrics'}, type: {type: String, default: 'metrics'}},
        data() {
            return {
                metrics: []
            }
        },
        methods: {
            fetchData() {
                let metrics = this.$frontmatter['metrics'];

                Object.entries(metrics).map(async ([id, metric]) => {
                        let src = Object.assign({}, {type: 'json', 'path': '', regex: ''}, metric['src'] || {});
                        let value = metric['value'];
                        if (!src['url']) {
                            return;
                        }
                        await fetch(src['url'])
                            .then((response) => {
                                if ('headers' === src['type']) {
                                    return response.headers.get(src['path'])
                                }
                                if ('json' === src['type']) {
                                    return response.json().then((result) => {
                                        if (src['path']) {
                                            return eval(`${src['path']}`);
                                        }
                                        return result;
                                    });
                                }
                                return response.text().then((text) => {
                                    return text;
                                })
                            }).then((data) => {
                                value = data + '';
                                if (src['regex']) {
                                    let Regex = new RegExp(src['regex'], 'g');
                                    let match = Regex.exec(value);
                                    if (match.length) {
                                        value = match[0];
                                    }
                                }
                            });
                        metric['value'] = value;
                    }
                );
                this.metrics = metrics;
            }
        },
        mounted() {
            this.$nextTick(() => this.fetchData());
        },
    }
</script>
