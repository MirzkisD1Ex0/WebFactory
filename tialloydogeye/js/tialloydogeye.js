var vueApplication = new Vue({
    el: '#mainBackground',
    data() {
        return {
            interval: 0,
            r: 255,
            g: 255,
            b: 255,
        }
    },
    computed: {
        // CrazyStyle: function () {
        //     return `background: rgba(${this.r},${this.g},${this.b},1);`;
        // },
        // CrazyFont: function () {
        //     return `color: rgba(${this.r},${this.g},${this.b},1);`;
        // }
    },
    methods: {
        BeginTorture: function () {
            this.interval = setInterval(this.CrazyColor, 300);
        },
        StopTorture: function () {
            clearInterval(this.interval);
        },
        CrazyColor: function () {
            this.r = Math.floor(Math.random() * 255);
            this.g = Math.floor(Math.random() * 255);
            this.b = Math.floor(Math.random() * 255);
            this.$refs.mB.style.background = `rgba(${this.r},${this.g},${this.b},1)`;
            this.$refs.tT.style.color = `rgba(${this.r},${this.g},${this.b},1)`;
        }
    },
})