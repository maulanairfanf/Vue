<template>
  <div v-theme="narrow" id="show-blogs">
    <h1>All Blog Article</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <button type="button" class="btn btn-primary">Primary</button>
    <div v-for="blog in filteredBlogs" v-bind:key="blog" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id ">
        <h2>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  }
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 10px 0;
  box-sizing: border-box;
  background-color: whitesmoke;
}
input {
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>j