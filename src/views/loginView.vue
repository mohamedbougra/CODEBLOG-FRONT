<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="text-center">
          <router-link  to="/"
              ><img src="../assets/logo/CBLogo.svg" alt="Logo" class="mb-2 logo" /></router-link
            > 
          <h1 class="h3 mb-3 font-weight-normal">Sign in to your account.</h1>
        </div>
        <form @submit.prevent="login">
          <div class="form-group">
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
        <div>
          <span> Already have an account? </span>
          <span
            ><router-link class="a" to="/Sign-up"
              ><b>Sign up</b></router-link
            ></span
          >
        </div>
        <button
          class="btn btn-lg btn-google btn-block addArticle"
          type="submit"
        >
          <i class="vds-icon" role="img" aria-label="google" aria-hidden="false"
            ><svg width="24" height="24" viewBox="0 0 24 24">
              <g fill="none">
                <path
                  fill="#4285F4"
                  d="M23.49,12.27 C23.49,11.48 23.42,10.73 23.3,10 L12,10 L12,14.51 L18.47,14.51 C18.18,15.99 17.33,17.24 16.07,18.09 L16.07,21.09 L19.93,21.09 C22.19,19 23.49,15.92 23.49,12.27 Z"
                ></path>
                <path
                  fill="#34A853"
                  d="M12,24 C15.24,24 17.95,22.92 19.93,21.09 L16.07,18.09 C14.99,18.81 13.62,19.25 12,19.25 C8.87,19.25 6.22,17.14 5.27,14.29 L1.29,14.29 L1.29,17.38 C3.26,21.3 7.31,24 12,24 Z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M5.27,14.29 C5.02,13.57 4.89,12.8 4.89,12 C4.89,11.2 5.03,10.43 5.27,9.71 L5.27,6.62 L1.29,6.62 C0.47,8.24 0,10.06 0,12 C0,13.94 0.47,15.76 1.29,17.38 L5.27,14.29 Z"
                ></path>
                <path
                  fill="#EA4335"
                  d="M12,4.75 C13.77,4.75 15.35,5.36 16.6,6.55 L20.02,3.13 C17.95,1.19 15.24,0 12,0 C7.31,0 3.26,2.7 1.29,6.62 L5.27,9.71 C6.22,6.86 8.87,4.75 12,4.75 Z"
                ></path>
              </g></svg
          ></i>
          Sign in with Google
        </button>
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

<style scoped>
.btn-google {
  background-color: #f8fbf1;
  color: #372f42 !important;
  width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
}
.btn-google:hover {
  background-color: transparent;
  color: #372f42;
}
.logo {
  width: 25%;
}

.text-center {
  padding: 5%;
}
.vds-icon {
  padding-right: 2%;
}
</style>
