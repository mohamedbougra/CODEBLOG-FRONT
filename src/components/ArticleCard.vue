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
            alt="codeBlog-image"
          />
          <ul
            class="list-inline card-badge"
            style="position: absolute; top: 0; left: 0"
          >
            <li class="list-inline-item">
              <a href="/categories/node" class="recommaded">{{
                topic.topic
              }}</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div class="divCard">
            <div class="divSub1">
              <h3 class="h3 card-title">
                <a
                  class="text-decoration-none text-reset tit"
                  href="/tutorial-graphql-apollo-server-nodejs-mongodb/"
                  >{{ topic.name }}</a
                >
              </h3>
            </div>
            <div class="divSub2">
              <ul class="list-inline card-meta d-flex align-items-center mb-3">
                <li class="list-inline-item d-flex align-items-center">
                  <img
                    src="https://reflectoring.io/images/authors/ajibade_hu311bbdf7993e90112ceb55987250c547_351348_40x0_resize_q90_h2_box_3.webp"
                    alt="Olaoluwa Ajibade"
                    class="card-avatar rounded-circle me-2 liCard"
                    width="20"
                    height="20"
                  />
                  <a href="/profile" class="text-decoration-none text-reset">{{
                    topic.autour
                  }}</a>
                </li>
                <li class="list-inline-item d-flex align-items-center">
                  <i class="far fa-calendar-alt me-2 liCard"></i>
                  <span>{{ topic.date }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="divCard">
            <div class="divSub1">
              <p class="card-text small mb-3">
                {{
                  topic.description.length > 187
                    ? topic.description.substring(0, 187) + "..."
                    : topic.description
                }}
              </p>
            </div>
            <div class="divSub2">
              <router-link class="btn btn-sm more" to="/article"
                >more</router-link
              >
              <router-link class="btn btn-sm addArticle save" to="">
                <i
                  class="fa-solid fa-bookmark"
                  style="padding-right: 2px; color: #372f42"
                ></i>
              </router-link>
              <span style="position: absolute; right: 1rem; color: #8f8f8f">
                <i class="fa-solid fa-eye" style="padding-right: 2px"></i>
                {{ topic.reader }}
              </span>
            </div>
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
.position-relative {
  height: 36%;
}
.divCard {
  height: 50%;
}
.divSub1 {
  height: 64%;
}
.divSub2 {
  height: 33.34%;
}
.card-body {
  height: 66.66%;
}
.more {
  background-color: transparent;
  color: #302939;
  border-color: #302939;
  border-radius: 9px;
}
.rounded-4 {
  border-radius: 10px !important;
  height: 100%;
  width: 100%;
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
  height: 36.199rem;
  border-radius: 10px !important;
}

.img-fluid {
  max-width: 100%;
  height: 100%;
}

.recommaded {
  background-color: #d7b8ff;
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
  padding-top: 0.8rem;
  padding-right: 0.8rem;
  padding-left: 0.8rem;
  padding-bottom: 0.8rem;
}
.cards-style {
  margin-bottom: 3%;
}
.liCard {
  margin-right: 5px;
}
.save {
  background-color: transparent;
}
</style>
