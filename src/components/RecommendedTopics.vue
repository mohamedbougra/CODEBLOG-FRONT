<template>
  <div class="container-fluid recommended-topics">
    <div class="topic-buttons">
      <a
        v-for="topic in topics"
        :key="topic.id"
        :href="topic.url"
        class="btn btn-sm recommaded"
        >#{{ topic.name }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendedTopic",
  props: {
    topics: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.recommended-topics {
  margin-bottom: 30px;
}

.topic-buttons {
  display: flex;
  flex-wrap: wrap;
}

.btn {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
