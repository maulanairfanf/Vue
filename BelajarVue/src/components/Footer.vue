<template>
  <footer>
    <p>{{copyright}} {{title}}</p>
  </footer>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      copyright: "Torque 2018"
    };
  }
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightblue;
  text-align: center;
}
</style>