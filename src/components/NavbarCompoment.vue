<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img
          src="../assets/logo/CBlogo-nav.svg"
          alt="CodeBlog Logo"
          width="30"
          height="30"
          class="d-inline-block align-top"
        />
        CodeBlog</router-link
      >
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
        <div class="container h-100">
          <form>
            <div class="d-flex justify-content-center h-100">
              <div class="searchbar">
                <input
                  class="search_input"
                  type="text"
                  name=""
                  placeholder="Search..."
                />
                <a href="#" class="search_icon"
                  ><i class="fas fa-search"></i
                ></a>
              </div>
            </div>
          </form>
        </div>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="btn addArticle nav-link" to="/add-article"
              >Write</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="btn login nav-link" to="/login"
              >Login</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script></script>
<style scoped>
.navbar {
  padding-left: 15%;
  padding-right: 15%;
  padding-bottom: 0px;
  padding-top: 1%;
  background: #372f42 !important;
}
.searchbar {
  margin-bottom: auto;
  margin-top: auto;
  height: 60px;
  background-color: #372f42;
  border-radius: 30px;
  padding: 10px;
}

.search_input {
  color: white;
  border: 0;
  outline: 0;
  background: none;
  width: 0;
  caret-color: transparent;
  line-height: 40px;
  transition: width 0.4s linear;
}

.searchbar:hover > .search_input {
  padding: 0 10px;
  width: 300px;
  caret-color: #372f42;
  transition: width 0.4s linear;
}

.searchbar:hover > .search_icon {
  background: #e4e1ea;
  color: #302939;
}

.search_icon {
  height: 40px;
  width: 40px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  text-decoration: none;
}
.nav-item {
  padding: 0 15px;
  margin-bottom: 0px;
  display: flex;
}
.nav-link {
  font-size: 1.2rem;
  font-family: "Montserrat";
  font-weight: 300;
  margin-bottom: 0px;
}
</style>
