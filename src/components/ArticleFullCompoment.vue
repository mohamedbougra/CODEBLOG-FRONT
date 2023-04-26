<template>
  <div class="" v-if="Articles">
    <div>
      <h1 class="title">{{ Articles.name }}</h1>
    </div>
    <div>
      <img
        loading="lazy"
        class="imageArticle"
        :src="Articles.imageUrl"
        alt="Build CRUD APIs Using Apollo Server(Graphql), MongoDB and Node.Js"
      />
    </div>
    <div class="article" v-html="Articles.description"></div>
  </div>
</template>

<script>
export default {
  props: {
    Articles: {
      required: true,
    },
  },
};
</script>

<style>
.title {
  padding-bottom: 4%;
  color: #322b3c;
}
.imageArticle {
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 5%;
  border-top-right-radius: 3%;
  border-top-left-radius: 3%;
  width: 100%;
}

.article h1 {
  color: #322b3c;
  font-size: 2rem;
  font-weight: 600;
  font-family: "Source Serif Pro", serif;
  padding-bottom: 2%;
}
.article h2 {
  font-size: 2rem;
  font-weight: 400;
  font-family: "Source Serif Pro", serif;
  padding-bottom: 2%;
}
.article h3 {
  font-size: 1.7rem;
  font-weight: 300;
  font-family: "Source Serif Pro", serif;
  padding-bottom: 2%;
}
.article p {
  font-size: 1.5rem;
  font-weight: 300;
  color: #000000;
  font-family: "Source Serif Pro", serif;
  padding-bottom: 2%;
}
.article img {
  width: auto;
  padding-bottom: 3%;
  padding-left: 3%;
  padding-right: 3%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 7%;
}
.article a {
  color: #a86df6;
}
.article a:hover {
  color: #322b3c;
  line-break: none;
}

/* display code */
.code-container {
  position: relative;
}

.copy-btn {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  background-color: #d7b8ff;
  font-size: 0.7rem;
  display: block;
  padding: 0.1em 0.9em;
  border-radius: 9px;
  border-color: #eef2e6;
  font-family: "Montserrat";
  font-weight: 400;
  cursor: pointer;
}

.copy-btn:hover {
  background-color: #eef;
  color: #322b3c;
}

/* .btn-outline-primary {
    border-color: #007bff;
    color: #007bff;
  }
  .btn-outline-primary:hover {
    background-color: #007bff;
    color: #fff;
  } */
</style>
