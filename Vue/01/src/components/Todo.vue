<template>
  <div>
    <h1>Simple Note</h1>
    <input
      v-model="inputValue"
      @keyup.enter="Add"
      autofocus="autofocus"
      autocomplete="off"
      placeholder="Typehere"
    />
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <button @click="Remove(index)">X</button>
        <span>{{ index }}: </span>
        <label>{{ item }}</label>
      </li>
    </ul>
    <div v-if="list.length > 0">{{ list.length }} item(s)</div>
    <button @click="Clear">Delete All</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["Eat", "Sleep", "Cry"],
      inputValue: "",
    };
  },
  methods: {
    Add: function () {
      if (this.inputValue != "") {
        this.list.push(this.inputValue);
        this.inputValue = "";
      }
    },
    Remove: function (index) {
      this.list.splice(index, 1);
    },
    Clear: function () {
      this.list = [];
    },
  },
};
</script>