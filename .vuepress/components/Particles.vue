<template>
    <div :id="id" :class="[type ? 'particles-' + type : 'particles']"></div>
</template>
<script>
    export default {
        props: {
            id: {type: String, default: 'particles-' + Math.floor(Math.random() * 5000)},
            type: {type: String, default: ''},
            number: {type: Number, default: 40},
            density: {type: Number, default: 200},
            color: {type: String, default: '#f7296e'},
        },
        methods: {
            startAnimation() {
                particlesJS(this.id, {
                    "particles": {
                        "number": {
                            "value": this.number,
                            "density": {"enable": !!this.density, "value_area": this.density}
                        },
                        "color": {"value": this.color},
                        "shape": {
                            "type": "circle",
                            "stroke": {"width": 1, "color": this.color},
                            "polygon": {"nb_sides": 5},
                        },
                        "opacity": {
                            "value": 0.05,
                            "random": true,
                            "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
                        },
                        "size": {
                            "value": 1,
                            "random": false,
                            "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 200,
                            "color": this.color,
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 3,
                            "direction": "right",
                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": true,
                            "attract": {"enable": true, "rotateX": 600, "rotateY": 1200}
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {"enable": true, "mode": "repulse"},
                            "onclick": {"enable": false, "mode": "grab"},
                            "resize": false
                        },
                        "modes": {
                            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                            "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                            "repulse": {"distance": 100, "duration": 0.4},
                            "push": {"particles_nb": 4},
                            "remove": {"particles_nb": 2}
                        }
                    },
                    "retina_detect": true
                });
            },
        },
        mounted() {
            require('particles.js');
            this.$nextTick(() => {
                this.startAnimation();
            });
        }
    }
</script>
