<template>
    <section :id="id" :class="['section', 'section--' + type]">
    </section>
</template>
<script>
    import defaultExport from 'particles.js';
    export default {
        props: {id: {type: String, default: 'particles'}, type: {type: String, default: 'particles'}},
        methods: {
            startAnimation() {
                particlesJS(this.id, {
                    "particles": {
                        "number": {"value": 40, "density": {"enable": true, "value_area": 200}},
                        "color": {"value": "#f7296e"},
                        "shape": {
                            "type": "circle",
                            "stroke": {"width": 1, "color": "#f7296e"},
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
                            "color": "#f7296e",
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
                            "onhover": {"enable": false, "mode": "repulse"},
                            "onclick": {"enable": false, "mode": "repulse"},
                            "resize": true
                        },
                        "modes": {
                            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                            "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                            "repulse": {"distance": 200, "duration": 0.4},
                            "push": {"particles_nb": 4},
                            "remove": {"particles_nb": 2}
                        }
                    },
                    "retina_detect": true
                });
            },
        },
        mounted() {
            console.log(1);
            this.startAnimation();
        },
    }
</script>
