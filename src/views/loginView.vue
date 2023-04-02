<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="text-center">
          <img src="../assets/logo.png" alt="Logo" class="mb-2" />
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        </div>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Email address</label>
            <input
              type="email"
              id="username"
              v-model="username"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="form-control"
              placeholder="Password"
              required
            />
          </div>
          <button
            class="btn btn-lg btn-primary btn-block addArticle"
            type="submit"
          >
            Sign in
          </button>
        </form>
        <div class="text-center mt-3">
          <span>Or sign in with:</span>
          <button class="btn btn-lg btn-google btn-block" type="submit">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { login } from "@/service/AuthenticationService";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const credentials = {
        username: this.username,
        password: this.password,
      };
      login(credentials)
        .then((result) => {
          this.$router.push({ name: "home" });
        })
        .catch((result) => {
          console.log(result.status);
        });
    },
  },
});
</script>
<style>
.btn-google {
  background-color: #dd4b39;
  color: #fff;
}
</style>
