<template>
  <div class="home">
    <h3>有空常来</h3>
    <img src="../assets/01.png" />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style scoped>
.home {
  margin: 5px;
  padding: 5px;
}

.home h3 {
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

.home img {
  display: block;
  width: 90%;
  margin: auto;
}
</style>