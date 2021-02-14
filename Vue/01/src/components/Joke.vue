<template>
  <div>
    <button @click="GetJoke">Get Joke!</button>
    <!-- <p v-for="(item, index) in jokes" :key="index">{{ item }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      jokes: [],
    };
  },
  methods: {
    GetJoke: function () {
      this.axios
        .get("https://autumnfish.cn/api/joke/list?num=2")
        .then((response) => {
          // this.jokes = response.data.jokes;
          // console.log(response.data.jokes);
          console.log(this, response);
        });
    },
  },
};
</script>

<style scoped>
</style>