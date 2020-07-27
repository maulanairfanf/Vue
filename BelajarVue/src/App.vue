<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Ninjas from "./components/Ninjas.vue";
export default {
  components: {
    "app-ninjas": Ninjas,
    "app-header": Header,
    "app-footer": Footer
  },
  data() {
    return {
      ninjas: [
        { name: "Arinda", pekerjaan: "Petani", show: false },
        { name: "Opank", pekerjaan: "Tukang Listrik", show: false },
        { name: "Trias", pekerjaan: "Pabrik Limbah", show: false },
        { name: "Intan", pekerjaan: "Ngitung Duit", show: false },
        { name: "Raden", pekerjaan: "Bawahan Opank", show: false },
        { name: "Maulana", pekerjaan: "Fron-End", show: false }
      ],
      title: "Torque Doang"
    };
  },
  methods: {
    updateTitle: function(updateTitle) {
      this.title = updateTitle;
    }
  }
};
</script>

<style>
</style>
