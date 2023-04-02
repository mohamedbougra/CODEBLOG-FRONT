<template>
  <div v-for="f in whoFollow" :key="f.id" class="media text-muted pt-3">
    <svg
      class="bd-placeholder-img mr-2 rounded"
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: 32x32"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#322b3c"></rect>
      <text x="50%" y="50%" fill="#322b3c" dy=".3em"></text>
    </svg>

    <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
      <div class="d-flex justify-content-between align-items-center w-100">
        <strong class="text-gray-dark">{{ f.name }}</strong>
        <a href="#">Follow</a>
      </div>
      <span class="d-block">{{ f.username }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "whoFollow",
  props: {
    whoFollow: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
a {
  color: #322b3c;
}
</style>
