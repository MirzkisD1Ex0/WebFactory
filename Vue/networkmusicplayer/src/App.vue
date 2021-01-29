<template>
  <div id="app">
    <ControlBar />
    <MusicList />
  </div>
</template>

<script>
import ControlBar from "./components/ControlBar.vue";
import MusicList from "./components/MusicList.vue";

export default {
  name: "App",
  components: {
    ControlBar,
    MusicList,
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
  margin-top: 60px;
}
* {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "黑体";
  color: #000;
  transition: 0.5s;
}

a {
  text-decoration: none;
}
</style>
