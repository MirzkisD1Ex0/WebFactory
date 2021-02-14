<template>
  <div class="joke">
    <div>
      <button @click="GetJoke">{{ title }}</button>
      <input
        v-model="jokesCount"
        placeholder="你想看几条?"
        @change="CountCheck"
        @input="InputCheck"
      />
    </div>
    <p v-for="(item, index) in jokes" :key="index">
      {{ index + 1 }}.{{ item }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jokesCount: null,
      jokes: [],
      title: "没有内鬼,来点笑话!",
    };
  },
  methods: {
    GetJoke: function () {
      var that = this;
      this.$axios
        .get(`https://autumnfish.cn/api/joke/list?num=${this.jokesCount}`)
        .then(
          function (response) {
            that.jokes = response.data.jokes;
            that.title = "要不要再来点?";
          },
          function (err) {
            console.log(err);
            that.title = "没能加载成功!";
          }
        );
    },
    InputCheck: function () {
      var that = this;
      that.jokesCount = that.jokesCount.replace(/[^\d]/g, "");
    }, // 输入限制
    CountCheck: function () {
      var that = this;
      if (that.jokesCount > 10) {
        that.jokesCount = 10;
        that.title = "哦我的老天,10条够看好一会儿了吧?";
      }
    },
  },
};
</script>

<style scoped>
.joke div {
  display: flex;
  margin: 0 auto;
  font-size: 18px;
  padding: 0;
  width: 95%;
}
.joke div button {
  border: 1px dashed #42b983;
  border-radius: 1em;
  display: block;
  width: 70%;
  margin: 5px 5px 5px 0;
  height: 30px;
  line-height: 1em;
  background: #fff;
  text-align: center;
}
.joke div input {
  display: block;
  border: 1px dashed #42b983;
  border-radius: 1em;
  width: 30%;
  height: 28px;
  line-height: 1em;
  margin: 5px auto;
  background: #fff;
  text-align: center;
}
.joke p {
  border: 1px dashed #42b983;
  border-radius: 1em;
  display: block;
  width: 92%;
  padding: 6px;
  margin: 1em auto;
  font-size: 12px;
}
</style>