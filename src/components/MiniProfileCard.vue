<template>
  <div class="card mb-3 widgets">
    <div class="upper">
      <img
        :src="'https://picsum.photos/id/548/100/100'"
        alt="picture of a man"
      />
    </div>
    <div class="lower">
      <h2 class="card-title widget-title">{{ Articles.autour }}</h2>
      <ul class="">
        <li class="d-flex">
          <h3>
            <i
              class="fa-solid fa-file-code"
              style="padding-left: 2px; color: #372f42"
            ></i>
            {{ Articles.topic }}
          </h3>
        </li>
        <li class="d-flex">
          <h3>
            <i
              class="fa-solid fa-calendar"
              style="padding-right: 2px; color: #372f42"
            ></i>
            {{ Articles.date }}
          </h3>
        </li>
        <li class="d-flex">
          <h3>
            <i
              class="fa-solid fa-eye"
              style="padding-right: 2px; color: #372f42"
            ></i>
            {{ Articles.reader }}
          </h3>
        </li>
        <li class="d-flex">
          <button class="btn subscribe">
            <i
              class="fa-solid fa-bookmark"
              style="padding-right: 2px; color: #372f42"
            ></i>
            Save
          </button>
          <button class="btn subscribe">
            <i
              class="fa-solid fa-square-share-nodes"
              style="padding-right: 2px; color: #372f42"
            ></i>
            Share
          </button>
        </li>
      </ul>
      <button class="btn subscribe">
        <i
          class="fa-solid fa-plus"
          style="padding-right: 12px; color: #372f42"
        ></i
        >follow
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Articles: {
      required: true,
    },
  },
  data() {
    return {
      successMessageVisible: false,
    };
  },
  methods: {
    onSubmit() {
      // Code to submit email form here
      // If submission is successful, set successMessageVisible to true
      this.successMessageVisible = true;
    },
  },
};
</script>

<style scoped>
.widgets {
  background: hwb(80 90% 5% / 0.924);
  color: #372f42;
  border-radius: 9px;
  padding: 7%;
  margin-bottom: 30px;
}

P {
  color: #e4e1ea;
}

.form-control {
  border-radius: 20px;
  background: #e4e1ea;
}

.subscribe {
  background-color: #d7b8ff !important;
  width: 100% !important;
  border-radius: 9px;
  border: 0px;
  color: #372f42;
}
.subscribe:hover {
  background-color: #e4e1ea !important;
}
.container {
  width: 300px;
  height: 450px;
  border-radius: 20px;
  box-shadow: 6px 6px 10px #ccc, 6px 6px 20px #ccc;
}

.upper img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-bottom: 2%;
}

.lower h2 {
  font-weight: 500;
  font-size: 1.4rem;
}
.lower h3 {
  font-weight: 400;
  font-size: 1rem;
}
.lower ul {
  width: 100%;
  padding-left: 0px;
}
</style>
