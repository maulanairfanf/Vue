<template>
  <div id="Ninjas">
    <!-- <p>{{ninjas}}</p> -->
    <ul>
      <li v-for="ninja in ninjas" v-bind:key="ninja" v-on:click="ninja.show = !ninja.show">
        <h2>{{ninja.name}}</h2>
        <h3 v-show="ninja.show">{{ninja.pekerjaan}}</h3>
      </li>
    </ul>
    <button v-on:click="Delete">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    ninjas: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    Delete: function() {
      this.ninjas.pop();
    }
  },
  //lifecycle hooks
  // beforeCreate(){
  //   alert('beforeCreate');
  // },
  // created(){
  //   alert('created');
  // },
  // beforeMount(){
  //   alert('beforeMount');
  // },
  // mounted(){
  //   alert('mounted');
  // },
  // beforeUpdate(){
  //   alert('beforeUpdate');
  // },
  // update(){
  //   alert('update');
  // }
};
</script>

<style scoped>
#Ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 2px solid black;
  margin: 10px;
  background-color:whitesmoke;
}
</style>