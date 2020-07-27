<template>
  <header>
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {},
  methods: {
    changeTitle: function() {
      this.$emit("changeTitle", "Torque Changed");
    }
  }
};
</script>

<style scoped>
header {
  background: lightblue;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>