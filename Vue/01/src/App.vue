<template>
  <div id="app">
    <Todo id="todo" />
    <Joke id="joke" />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import Joke from "./components/Joke.vue";

export default {
  name: "App",
  components: {
    Todo,
    Joke,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: none;
}

#app {
  font-family: "黑体";
}

#todo,
#joke {
  margin: 10px;
  border: #900 1px dashed;
}
</style>