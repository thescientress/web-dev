<template>
    <ul :id="id" :class="[this.topic ? 't-' + this.topic : 'c-' + this.category]">
        <li v-for="topic in this.topics">
            <img :src="topic.image_url" alt="" v-if="topic.image_url">
            <a :href="`${baseUrl}/t/${topic.id}`" target="_blank">{{ topic.title }}</a>
            <div v-if="topic.excerpt">{{ topic.excerpt }}</div>
        </li>
    </ul>
</template>
<script>
    export default {
        props: {
            id: {type: String, default: null},
            category: {type: String, default: null},
            count: {type: Number, default: 1},
            start: {type: Number, default: 0},
            pinned: {type: Boolean, default: null},
            baseUrl: {type: String, default: 'https://forum.aeternity.com'},
            topic: {type: String, default: null},
        },
        data() {
            return {
                topics: []
            }
        },
        methods: {
            async fetchData() {
                if (this.topic) {
                    let topic = await fetch(`${this.baseUrl}/t/${this.topic}.json`)
                        .then(response => response.json())
                    ;
                    this.topics.push({
                        id: topic.id,
                        title: topic.title,
                        image_url: null,
                        excerpt: null,
                        pinned_at: topic.pinned_at,
                        pinned: topic.pinned
                    });
                    return;
                }
                let pinned = this.pinned;
                if (this.category) {
                    let topics = await fetch(`${this.baseUrl}/c/${this.category}.json`)
                        .then(response => response.json())
                        .then(data => data['topic_list']['topics'])
                    ;
                    this.topics = [...topics]
                        .filter(topic => topic.visible && (pinned === null || topic.pinned === !!pinned))
                        .slice(this.start, this.count);
                }
            }
        },
        created() {
            this.fetchData();
        },
    }
</script>
