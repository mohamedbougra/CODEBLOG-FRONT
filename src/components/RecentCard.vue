<template>
  <div class="row">
    <div
      v-for="topic in topics"
      :key="topic.id"
      class="col-md-12 col-lg-6 mb-6"
    >
      <div class="card">
        <img :src="topic.imageUrl" class="card-img-top" alt="Topic image" />
        <div class="card-body">
          <h5 class="card-title">{{ topic.name }}</h5>
          <p class="card-text">{{ topic.description }}</p>
          <router-link :to="topic.url" class="btn addArticle"
            >Explore {{ topic.name }}</router-link
          >
          <div class="text-muted"><p>Last updated 3 mins ago</p></div>

          <router-link to="/profile">{{ topic.autour }}</router-link>
          <div>
            <button
              type="input"
              class="btn btn-light btn-sm"
              style="border-radius: 35px; background: #e3e3e3"
            >
              {{ topic.topic }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topics: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4%;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}
.card-text {
  font-size: 0.9rem;
  color: #757575;
  margin-bottom: 1rem;
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
