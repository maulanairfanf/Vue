<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label for>Blog Title:</label>
      <input type="text" v-model="blog.title" />
      <label for>Blog Content:</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label for>Berenang</label>
        <input type="checkbox" value="Berenang" v-model="blog.categories" />
        <label for>Bola</label>
        <input type="checkbox" value="Bola" v-model="blog.categories" />
        <label for>Basket</label>
        <input type="checkbox" value="Basket" v-model="blog.categories" />
        <label for>Futsal</label>
        <input type="checkbox" value="Futsal" v-model="blog.categories" />
      </div>
      <label for>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" v-bind:key="author">{{author}}</option>
      </select>
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title : {{blog.title}}</p>
      <p>Blog content : {{blog.content}}</p>
      <p>Blog categories :</p>
      <ul>
        <li v-for="category in blog.categories" v-bind:key="category">{{category}}</li>
      </ul>
      <p>Author : {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["Maulana", "irfan", "Firdian"],
      submitted: false
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("http://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        })
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    }
  }
};
</script>
<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  /* width: 100%; */
}
#preview {
  padding: 10px 20px;
  border: 2px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>

