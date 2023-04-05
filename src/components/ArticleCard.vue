<template>
  <div class="row px-4">
    <div
      v-for="topic in topics"
      :key="topic.id"
      class="col-md-12 col-lg-6 mb-6 cards-style"
    >
      <div class="card">
        <div class="position-relative">
          <img
            loading="lazy"
            class="card-img-top rounded-4"
            :src="topic.imageUrl"
            alt="Build CRUD APIs Using Apollo Server(Graphql), MongoDB and Node.Js"
          />
          <ul
            class="list-inline card-badge"
            style="position: absolute; top: 0; left: 0"
          >
            <li class="list-inline-item">
              <a href="/categories/node" class="login">{{ topic.topic }}</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h3 class="h3 card-title">
            <a
              class="text-decoration-none text-reset tit"
              href="/tutorial-graphql-apollo-server-nodejs-mongodb/"
              >{{ topic.name }}</a
            >
          </h3>
          <ul class="list-inline card-meta d-flex align-items-center mb-3">
            <li class="list-inline-item d-flex align-items-center">
              <img
                src="https://reflectoring.io/images/authors/ajibade_hu311bbdf7993e90112ceb55987250c547_351348_40x0_resize_q90_h2_box_3.webp"
                alt="Olaoluwa Ajibade"
                class="card-avatar rounded-circle me-2 imgPofile"
                width="20"
                height="20"
              />
              <a
                href="/authors/ajibade"
                class="text-decoration-none text-reset"
                >{{ topic.autour }}</a
              >
            </li>
            <li class="list-inline-item d-flex align-items-center">
              <i class="far fa-calendar-alt me-2"></i>
              <span>{{ topic.date }}</span>
            </li>
          </ul>
          <p class="card-text small mb-3">{{ topic.description }}</p>
          <a
            href="/tutorial-graphql-apollo-server-nodejs-mongodb/"
            class="btn btn-outline-primary btn-sm addArticle"
            >Read more</a
          >
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
.rounded-4 {
  border-radius: 10px !important;
}
.w-100 {
  width: 100% !important;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}
.card-meta li {
  font-size: 0.8rem;
  font-weight: 400;
}
.card {
  height: 100%;
  border-radius: 10px !important;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}

.login {
  font-size: 0.7rem;
  display: block;
  padding: 0.1em 0.9em;
}
a,
a:hover,
a:focus {
  text-decoration: none;
}

.pt-4 {
  padding-top: 1.5rem !important;
}
.mb-5 {
  margin-bottom: 3rem !important;
}
.border {
  border: 1px solid #e1e1e1 !important;
}
.rounded {
  border-radius: 6px !important;
}
.list-inline-item {
  padding-left: 1rem;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
}
.cards-style {
  margin-bottom: 3%;
}
</style>
