<template>
  <div>
    <ul class="dataList">
      <li v-for="(item, index) in reciveArray" :key="index">
        <div>Name: {{ item.name }}</div>
        <div>Password: {{ item.pw }}</div>
        <div>Rgx: {{ item.rgx }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    reciveArray: [],
  },
};
</script>

<style scoped>
.dataList {
  border: 2px #000 solid;
  padding: 1em;
  display: block;
  width: 450px;
}
.dataList ul li {
  border: 1px #900 solid;
  padding: 1em;
  margin: 0 0 8px 0;
}
</style>