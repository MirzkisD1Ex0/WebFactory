<template>
  <div>
    <form class="dataForm">
      <input type="text" placeholder="name" v-model="nameValue" />
      <input type="password" placeholder="password" v-model="pwValue" />
      <input type="text" placeholder="rgx" v-model="rgxValue" />
      <input type="button" value="Button" @click="submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [],
      nameValue: "",
      pwValue: "",
      rgxValue: "",
    };
  },
  methods: {
    submit: function () {
      this.array.push({
        name: this.nameValue,
        pw: this.pwValue,
        rgx: this.rgxValue,
      });
      this.$emit("usbmit", () => this.array);
    },
  },
};
</script>

<style scoped>
.dataForm {
  border: 2px #000 solid;
  padding: 1em;
}
.dataForm input {
  display: block;
  font-size: 18px;
  line-height: 1.5em;
  border: 1px #900 solid;
  margin: 2px;
}
</style>