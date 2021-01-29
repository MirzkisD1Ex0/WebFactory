<template>
  <div class="control-bar">
    <ul>
      <li v-for="(button, index) in controlButton" :key="index">
        <a href="#"> {{ button }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      controlButton: ["文件", "编辑", "视图", "播放", "媒体库", "帮助"],
    };
  },
  methods: {},
};
</script>

<style scoped>
.control-bar {
  font-size: 16px;
}

.control-bar ul {
  display: flex;
}

.control-bar ul li {
  width: 60px;
  border: 1px #000 solid;
  line-height: 1.5em;
  margin: 5px;
  list-style: none;
}

.control-bar ul li :hover {
  background: orange;
}
</style>