<template>
  <div class="timer">
    <div>
      <button @click="GetDate">ASDASD</button>
    </div>
    <p>2021.02.10.08.58</p>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      time: "",
    };
  },
  methods: {
    GetDate: function () {
      var that = this;
      that.time = "sd";
    },
  },
};
</script>

<style scoped>
.timer div {
  display: flex;
  margin: 0 auto;s
  font-size: 18px;
  padding: 0;
  width: 95%;
}
.timer div button {
  border: 1px dashed #42b983;
  border-radius: 1em;
  display: block;
  width: 100%;
  margin: 5px auto;
  height: 30px;
  line-height: 1em;
  background: #fff;
  text-align: center;
}
</style>