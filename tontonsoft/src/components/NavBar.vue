<template>
  <div class="nav-bar">
    <img src="../assets/images/logo.jpg" />
    <div>豚豚软件站<br />盗版大师</div>

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
      controlButton: [
        "首页",
        "技术共享",
        "其他技术",
        "生活杂谈",
        "关于我们",
        "搜索",
      ],
    };
  },
};
</script>

<style scoped>
.nav-bar {
  border: 1px dashed #900;
  display: flex;
  vertical-align: middle;
}

.nav-bar img {
  width: 6em;
  height: 3em;
  margin-right: 10px;
}

.nav-bar div {
  text-align: left;
  font-size: 16px;
  line-height: 1.5em;
  padding-left: 10px;
  border-left: 2px solid #eaeaea;
}

.nav-bar ul {
  font-size: 18px;
  display: flex;
  background: red;
  height: 1em;
}

.nav-bar ul li {
  line-height: 1em;
  height: 1em;
  list-style: none;
}

.nav-bar ul li a {
  padding: 10px;
}

.nav-bar ul li a:hover {
  color: #42b983;
}
</style>