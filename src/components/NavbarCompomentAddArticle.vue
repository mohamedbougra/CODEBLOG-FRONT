<template>
  <nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <div
        class="navbar-collapse collapse w-100 justify-content-cente"
        id="navbarNav"
      >
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <div class="blog-actions">
              <button class="btn publish" @click="uploadBlog">
                <i class="fa-solid fa-upload" style="padding-right: 3px"></i
                >Publish
              </button>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="btn cancel" to="/">Cancel</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script></script>
<style scoped>
.navbar {
  padding-top: 2%;
  padding-bottom: 1%;
  padding-left: 15%;
  padding-right: 15%;
  background: #322b3c !important;
}
.publish {
  background: #eef2e6;
  color: #372f42 !important;
  border-radius: 9px;
  font-family: "Montserrat" !important;
  font-weight: 400 !important;
}
.publish:hover {
  color: #eef2e6 !important;
  background: #453957 !important;
}
.cancel {
  background: #eef2e63e;
  color: #eef2e6 !important;
  border-radius: 9px;
  font-family: "Montserrat" !important;
  font-weight: 400 !important;
}
.cancel:hover {
  color: #eef2e6;
  background: #453957 !important;
}
</style>
