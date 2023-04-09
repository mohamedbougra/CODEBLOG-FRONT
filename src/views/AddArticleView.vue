<template>
  <div class="create-post">
    <div class="container">
      <div class="blog-info">
        <input type="text" placeholder="Enter Blog Title" v-model="blogTitle" />
      </div>
      <div class="text">
        <QuillEditor theme="snow" toolbar="full" />
      </div>
      <div class="blog-actions">
        <button @click="uploadBlog">Publish Blog</button>
       
      </div>
    </div>
  </div>

</template>




<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

</script>


<style lang="css">
button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
button:hover {
  background-color: #0062cc;
}


.create-post {
  position: relative;
  height: 100%;
}

.create-post button {
  margin-top: 0;
}

.create-post .router-button {
  text-decoration: none;
  color: #fff;
}

.create-post label,
.create-post button,
.create-post .router-button {
  transition: 0.5s ease-in-out all;
  align-self: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
  padding: 12px 24px;
  color: #fff;
  background-color: #303030;
  text-decoration: none;
}

.create-post label:hover,
.create-post button:hover,
.create-post .router-button:hover {
  background-color: rgba(48, 48, 48, 0.7);
}

.create-post .container {
  position: relative;
  height: 100%;
  padding: 10px 25px 60px;
}

.create-post .invisible {
  opacity: 0 !important;
}



.create-post .blog-info {
  display: flex;
  margin-bottom: 32px;
  background-color: #eef2e6; 
}

.create-post .blog-info input:nth-child(1) {
  min-width: 300px;
}

.create-post .blog-info input {
  transition: 0.5s ease-in-out all;
  padding: 10px 4px;
  border: none;
  border-bottom: 1px solid #303030;
}

.create-post .blog-info input:focus {
  outline: none;
  box-shadow: 0 1px 0 0 #303030;
}

.create-post .blog-info .upload-file {
  flex: 1;
  margin-left: 16px;
  position: relative;
  display: flex;
}

.create-post .blog-info .upload-file input {
  background-color: #eef2e6; 
  display: none;
}

.create-post .editor {
  height: 60vh;
  display: flex;
  flex-direction: column;
}

.create-post .editor .quillWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.create-post .editor .ql-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
}

.create-post .editor .ql-editor {
  padding: 20px 16px 30px;
}
.create-post .text {
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  box-shadow: 0 1px 0 0 #303030;
  background-color:#fff;
}

.create-post .blog-actions {
  margin-top: 32px;
}

.create-post .blog-actions button {
  margin-right: 16px;
}
</style>

