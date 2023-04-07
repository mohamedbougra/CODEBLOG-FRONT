<template>
  <div v-for="f in whoFollow" :key="f.id" class="media text-muted pt-3 follow">
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
      <rect width="100%" height="100%" fill="#d7b8ff"></rect>
    </svg>

    <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
      <div class="d-flex justify-content-between align-items-center w-100">
        <strong class="text-gray-dark follow1">{{ f.name }}</strong>
        <a href="#" class="follow">Follow</a>
      </div>
      <span class="d-block follow1">{{ f.username }}</span>
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
.follow1 {
  color: #eef2e6;
}
</style>
