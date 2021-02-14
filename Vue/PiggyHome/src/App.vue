<template>
  <div id="app" @click="Resize">
    <div id="nav">
      <router-link to="/">豚豚之家</router-link>
      <router-link to="/timer">地球快照</router-link>
      <router-link to="/joke">豹笑</router-link>
      <router-link to="/reserving">功能预留</router-link>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  components: {
    Footer,
  },
  methods: {
    Resize: function () {
      var bodyCmpt = document.getElementById("app");
      bodyCmpt.style.width = window.screen.width;
      bodyCmpt.style.height = 500;
      console.log(bodyCmpt.style.height);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "黑体";
  border: none;
  color: #000;
}

html,
body {
  height: 100%;
  width: 100%;
}

#app {
  height: 100%;
  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.95),
      rgba(255, 255, 255, 0.95)
    ),
    url("./assets/01.png");
  background-size: contain;
}

#nav {
  display: flex;
  text-align: center;
  margin: 10px 0 10px;
}

#nav a {
  font-weight: bold;
  width: 25%;
  height: 1em;
  line-height: 1em;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  border: 1px solid #000;
  border-radius: 1em;
  margin: 1px;
  padding: 2px;
}

#nav a.router-link-exact-active {
  color: #42b983;
  font-size: 16px;
  border: 1px solid #42b983;
}
</style>
