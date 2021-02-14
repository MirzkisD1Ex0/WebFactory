<template>
  <div class="timer">
    <div class="title">
      <button @click="GetDate"><strong>砸瓦鲁多(The World)</strong></button>
    </div>
    <div class="text">
      该功能用于创建快照，以便在宇宙发生不可预测的灾难时恢复进度。
    </div>
    <div class="snapshot" v-for="(item, index) in timeArray" :key="index">
      <p>{{ item }}</p>
      <span>{{ tip }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeArray: [],
      tip: "√ 创建成功",
    };
  },
  methods: {
    GetDate: function () {
      var that = this;
      var date = new Date();
      var year = date.getFullYear();
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minute =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var second =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      var millisecond = date.getMilliseconds();
      if (millisecond < 10) {
        millisecond = "00" + millisecond;
      } else if (millisecond < 100) {
        millisecond = "0" + millisecond;
      }
      that.timeArray.push(
        year +
          "." +
          month +
          "." +
          day +
          " " +
          hour +
          ":" +
          minute +
          ":" +
          second +
          ":" +
          millisecond
      );
    },
  },
};
</script>

<style scoped>
.timer .title {
  display: flex;
  margin: 0 auto;
  font-size: 18px;
  padding: 0;
  width: 95%;
}
.timer .title button {
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

.timer .text {
  border: 1px dashed #aaa;
  border-radius: 30px;
  display: block;
  width: 95%;
  margin: 5px auto;
  font-size: 10px;
  height: 26px;
  color: #aaa;
  line-height: 28px;
  background: #fff;
  text-align: center;
}
.timer .snapshot {
  border: 1px dashed #999;
  border-radius: 1em;
  display: block;
  margin: 10px auto;
  font-size: 12px;
  height: 1.5em;
  line-height: 1.5em;
  padding: 0;
  display: flex;
  width: 95%;
}
.timer .snapshot p {
  width: 80%;
  /* background: red; */
  padding-left: 1em;
}
.timer .snapshot span {
  border-left: 1px dashed #999;
  padding-right: 1em;
  text-align: right;
  /* background: green; */
  overflow: hidden;
  width: 25%;
}
</style>