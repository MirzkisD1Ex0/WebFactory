<template>
  <div id="app">
    <Table class="appTable" @usbmit="recive" />
    <List class="appList" :reciveArray="tampArray" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Table from "./components/Table.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Table,
    List,
  },
  data() {
    return {
      tampArray: [],
    };
  },
  methods: {
    recive: function (payload) {
      this.tampArray = payload();
    },
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
  display: flex;
}

.appTable {
}

.appList {
  margin-left: 16px;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
}
</style>