<template>
  <div class="card mb-3 widgets">
    <div class="card-body">
      <h2 class="card-title widget-title">Simplify! Newsletter</h2>
      <p class="card-text">
        <em
          >"You can't just <strong>keep</strong> it simple.
          <strong>Make</strong> it simple, then it's easy."</em
        >
      </p>
      <p class="card-text">
        Join more than 6,000 software engineers to get
        <strong>exclusive productivity and growth tips</strong> directly to your
        inbox.
      </p>
      <form>
        <!-- class="needs-validation"
        action="#"
        data-code=""
        method="post"
        target="_blank"
        novalidate -->
        <div class="form-row">
          <div class="col-12 mb-3">
            <input
              type="email"
              class="form-control"
              id="newsletter-email"
              name="fields[email]"
              placeholder="Enter your email"
              required
            />
            <div class="invalid-feedback">
              Please provide a valid email address.
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary subscribe">
          Subscribe
        </button>

        <div v-if="successMessageVisible" class="ml-form-successBody mt-3">
          <h4>Thank you!</h4>
          <p>
            Almost done! Please check your inbox to validate your email address.
          </p>
        </div>
      </form>
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
  background: #322b3c;
  color: #d7b8ff;
  text-align: center;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 30px;
}

.widget-title {
  margin-bottom: 45px;
}

P {
  color: #eef2e6;
}
.form-control {
  border-radius: 20px;
  background: #eef2e6;
}

.subscribe {
  background-color: #d7b8ff !important;
  width: 100% !important;
  border-radius: 20px;
  border: 0px;
  color: #322b3c;
}
.subscribe:hover {
  background-color: #eef2e6 !important;
}
</style>
