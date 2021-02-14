<template>
  <div id="app">
    <NavBar />
    <div id="nav">
      <!-- <router-link to="/NavBar">NavBar</router-link> -->
      <router-link to="/Home">Home</router-link> / 
      <router-link to="/Page">Page</router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a:hover {
  color: aqua;
}

* {
  transition: 0.25s;
  color: #000;
  text-decoration: none;
  border: none;
  padding: 0;
  margin: 0;
}
</style>