<template>
    <section :id="id" :class="['section', 'section--' + this.type]">
        <div>
            <ul class="metrics">
                <li v-for="metric in this.metrics">
                    <img :src="$withBase(metric.image)" alt="">
                    <div>{{ metric.value }}</div>
                    <div>{{ metric.text }}</div>
                </li>
            </ul>
        </div>
    </section>
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
                        let Data = metric['value'];
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
                                Data = data;
                                if (src['regex']) {
                                    let Regex = new RegExp(src['regex'], 'g');
                                    let match = Regex.exec(Data);
                                    if (match.length) {
                                        Data = match[0];
                                    }
                                }
                            });
                        metric['value'] = Data;
                    }
                );
                this.metrics = metrics;
            }
        },
        created() {
            this.fetchData();
        },
    }
</script>
