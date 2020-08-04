<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blog></show-blog> -->
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs.vue";
import header from "./components/Header.vue";

export default {
  components: {
    "add-blog": addBlog,
    "show-blog": showBlogs,
    "app-header": header,
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>

