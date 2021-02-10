<template>
  <div class="home">
    <h3>有空常来</h3>
    <img src="../assets/1.png" />
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
.home * {
  border: 1px dashed #999;
  border-radius: 1em;
  margin: 5px;
  padding: 5px;
}

.home h3 {
  display: block;
  text-align: center;
}

.home img {
  display: block;
  width: 90%;
  margin: auto;
}
</style>