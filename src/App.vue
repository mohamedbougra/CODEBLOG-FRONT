<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">CodeBlog</router-link>
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
            <router-link
              class="btn btn-outline-primary addArticle"
              to="/add-article"
              ><i class="fa-regular fa-pen-to-square" style="color: #eef2e6"></i
              >Write</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="btn btn-primary login" to="/login"
              >Login</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />

  <!-- footer -->
  <footer class="footer-06">
    <div class="container">
      <div class="row align-items-center align-items-stretch mb-5">
        <div
          class="col-md-4 py-4 py-md-5 aside-stretch d-flex align-items-center"
        >
          <div class="w-100">
            <span class="subheading">Subscribe to our</span>
            <h3 class="heading-section">CodeBlog</h3>
          </div>
        </div>
        <div
          class="col-md-8 py-4 py-md-5 d-flex align-items-center pl-md-5 aside-stretch-right"
        >
          <form action="#" class="subscribe-form w-100">
            <div class="form-group d-flex">
              <input
                type="text"
                class="form-control rounded-left"
                placeholder="Search..."
              />
              <button type="submit" class="form-control submit">
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="row pt-4">
        <div class="col-md-3 col-lg-6 order-md-last">
          <div class="row justify-content-end">
            <div class="col-md-12 col-lg-9 text-md-right mb-md-0 mb-4">
              <h2 class="footer-heading">
                <a href="#" class="logo">CodeBlog</a>
              </h2>
              <p class="copyright">
                Copyright ©2023 All rights reserved
                <a href="#" target="_blank">CodeBlog.com</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-9 col-lg-6">
          <div class="row">
            <div class="col-md-4 mb-md-0 mb-4">
              <h2 class="footer-heading">Information</h2>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="py-1 d-block"
                    ><span class="ion-ios-checkmark-circle-outline mr-2"></span
                    >About</a
                  >
                </li>
                <li>
                  <a href="#" class="py-1 d-block"
                    ><span class="ion-ios-checkmark-circle-outline mr-2"></span
                    >Data</a
                  >
                </li>

                <li>
                  <a href="#" class="py-1 d-block"
                    ><span class="ion-ios-checkmark-circle-outline mr-2"></span
                    >Contact Us</a
                  >
                </li>
                <li>
                  <a href="#" class="py-1 d-block"
                    ><span class="ion-ios-checkmark-circle-outline mr-2"></span
                    >Support</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-4 mb-md-0 mb-4">
              <h2 class="footer-heading">Application</h2>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="py-1 d-block"
                    ><span class="ion-ios-checkmark-circle-outline mr-2"></span
                    >Download</a
                  >
                </li>
                <li>
                  <a href="#" class="py-1 d-block"
                    ><span class="ion-ios-checkmark-circle-outline mr-2"></span
                    >Bike Provider</a
                  >
                </li>
                <li>
                  <a href="#" class="py-1 d-block"
                    ><span class="ion-ios-checkmark-circle-outline mr-2"></span
                    >How to Used</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-4 mb-md-0 mb-4">
              <h2 class="footer-heading">API</h2>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="py-1 d-block"
                    ><span class="ion-ios-checkmark-circle-outline mr-2"></span
                    >Documentation</a
                  >
                </li>
                <li>
                  <a href="#" class="py-1 d-block"
                    ><span class="ion-ios-checkmark-circle-outline mr-2"></span
                    >Credential</a
                  >
                </li>
                <li>
                  <a href="#" class="py-1 d-block"
                    ><span class="ion-ios-checkmark-circle-outline mr-2"></span
                    >Developer info</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}

body {
  font-family: "Montserrat";
  background: #eef2e6;
}

.container-fluid {
  padding: 3% 5%;
}

h1 {
  padding-top: 4%;
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  font-weight: 700;
}
h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: 700;
}

h3,
h4,
h6 {
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 1rem;
  color: #302939;
}
p {
  color: #8f8f8f;
}

/* navigation bar */

.navbar {
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 2%;
  background: #322b3c !important;
}
.searchbar {
  margin-bottom: auto;
  margin-top: auto;
  height: 60px;
  background-color: #302939;
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
  caret-color: #eef2e6;
  transition: width 0.4s linear;
}

.searchbar:hover > .search_icon {
  background: #eef2e6;
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
  display: block ruby;
}
.nav-link {
  font-size: 1.2rem;
  font-family: "Montserrat";
  font-weight: 300;
  border-radius: 20px;
  margin-bottom: 0px;
}

.addArticle {
  background: #302939;
  color: #eef2e6 !important;
  border-radius: 20px;
  margin-bottom: 0px;
  border: 0px;
}
.addArticle:hover {
  background: #eef2e6;
  color: #372f42 !important;
}

.login:hover {
  background: #302939;
  color: #eef2e6 !important;
}

.login {
  background: #eef2e6;
  color: #372f42 !important;
  border-radius: 20px;
  margin-bottom: 0px;
  border: 0px;
  justify-content: center;
}

/* Title */
#title {
  background: #d9c1fb;
  color: #372f42;
  margin-bottom: 30px;
}

.prmpage {
  padding-top: 20%;
  padding-bottom: 10%;
  text-align: center;
}
.flt {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 8%;
  margin-bottom: 8%;
  background-color: #eef2e6;
  padding: 13px;
  border-radius: 35px;
}

.pad {
  padding-left: 0px;
  padding-right: 0px;
  border: none;
  outline: none;
}
.form-control {
  border-radius: 20px;
  background-color: #eef2e6;
}

/* section 2 */

.skill-row {
  margin: 100px auto 100px auto;
  text-align: left;
}
.img-appar1 {
  width: 10em;
  float: left;
  margin-right: 30px;
}
.img-appart2 {
  width: 10em;
  float: right;
  margin-left: 30px;
}

/* features */

#features {
  padding: 7% 15%;
  background: #eef2e6;
}
.villes {
  padding-bottom: 4%;
}

.car {
  margin-bottom: 4%;
  border-radius: 10px;
}

/* .card-img-overlay{
  bottom: 0 ;
  background: linear-gradient(to top, #13443a, transparent, transparent);
  width: 100%;
  opacity: 0.80;
  font-size: 20px;

} */
/* .card-img-overlay:hover{
  bottom: 0 ;
  background: linear-gradient( to top , #000,#13443a);
  width: 100%;
  opacity: 0.70;
} */

/* testimonials */

#testimonials {
  background-color: #3d8361;
  text-align: center;
  font-family: "Montserrat";
  color: #fff;
}
.testimonials-img {
  width: 10%;
  border-radius: 100%;
  margin: 15px;
}
.carousel-item {
  padding: 7% 15%;
}

/* press */
#press {
  background-color: #3d8361;
  padding-bottom: 5%;
  text-align: center;
}
.press-img {
  width: 13%;
  padding: 0 1rem;
}
.icon {
  color: #ef8172;
  padding-bottom: 5%;
}
.icon:hover {
  color: #ff4c68;
}

/* pricing */

.bg-gradient {
  background: #fff2f2;
  text-align: center;
}

.btn-custom {
  background: #ef8172;
  color: #fff;
  border-radius: 20px;
}

.img-float {
  width: 50px;
  position: absolute;
  top: -3.5rem;
  right: 1rem;
}

.princing-item {
  transition: all 150ms ease-out;
  padding: 0.7rem;
}
.princing-item:hover {
  transform: scale(1.05);
}
.princing-item:hover .deco-layer--1 {
  -webkit-transform: translate3d(15px, 0, 0);
  transform: translate3d(15px, 0, 0);
}
.princing-item:hover .deco-layer--2 {
  -webkit-transform: translate3d(-15px, 0, 0);
  transform: translate3d(-15px, 0, 0);
}
.prix {
  padding-top: 4%;
}
/* cta */

#cta {
  background-color: #3d8361;
  text-align: center;
  padding: 8rem;
  color: #fff;
  font-weight: 900;
}
.cta-h3 {
  font-size: 3rem;
  line-height: 1.5;
}

/* foolter */

footer {
  padding: 7em 0;
  display: block;
}

.footer-06 {
  padding-top: 0 !important;
  background: #302939;
  position: relative;
  overflow: hidden;
  z-index: 0;
}
.footer-06:after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: "";
  opacity: 0.2;
  z-index: -1;
  background: #d7b8ff;
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    #d7b8ff 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, #d7b8ff),
    color-stop(100%, rgba(255, 255, 255, 0))
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    #d7b8ff 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -o-radial-gradient(
    center,
    ellipse cover,
    #d7b8ff 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    #d7b8ff 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -webkit-radial-gradient(
    center,
    ellipse,
    #d7b8ff 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -o-radial-gradient(
    center,
    ellipse,
    #d7b8ff 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: radial-gradient(
    ellipse at center,
    #d7b8ff 0%,
    rgba(255, 255, 255, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d7b8ff', endColorstr='#ffffff', GradientType=1 );
}
.footer-06 .subheading {
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 2px;
}
.footer-06 .heading-section {
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
}
.footer-06 .footer-heading {
  font-size: 20px;
  color: #fff;
  margin-bottom: 20px;
}
.footer-06 .footer-heading .logo {
  color: #fff;
}
.footer-06 p {
  color: rgba(255, 255, 255, 0.3);
}
.footer-06 a {
  color: #fff;
}
.footer-06 .list-unstyled li a {
  color: rgba(255, 255, 255, 0.5);
}
.footer-06 .subscribe-form {
  border-radius: 40px;
  background: #fff;
  padding: 3px;
}
.footer-06 .subscribe-form .form-group {
  position: relative;
  margin-bottom: 0;
  border-radius: 0;
}
.footer-06 .subscribe-form .form-group input {
  background: transparent !important;
  border: none !important;
  outline: none !important;
  color: rgba(0, 0, 0, 0.3) !important;
  font-size: 16px;
  height: 56px;
  border-radius: 0;
}
.footer-06 .subscribe-form .form-group input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: rgba(0, 0, 0, 0.3) !important;
}
.footer-06 .subscribe-form .form-group input::-moz-placeholder {
  /* Firefox 19+ */
  color: rgba(0, 0, 0, 0.3) !important;
}
.footer-06 .subscribe-form .form-group input:-ms-input-placeholder {
  /* IE 10+ */
  color: rgba(0, 0, 0, 0.3) !important;
}
.footer-06 .subscribe-form .form-group input:-moz-placeholder {
  /* Firefox 18- */
  color: rgba(0, 0, 0, 0.3) !important;
}
.footer-06 .subscribe-form .form-group input:focus {
  outline: none !important;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.footer-06 .subscribe-form .form-group .submit {
  color: #fff !important;
  display: block;
  width: 150px;
  height: 56px;
  font-size: 14px;
  background: #352d3f !important;
  border: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 40px;
}
.footer-06 .subscribe-form .form-group .submit:hover,
.footer-06 .subscribe-form .form-group .submit:focus {
  text-decoration: none !important;
  outline: none !important;
}
/*
 .footer-06 .aside-stretch {
  background: #322b3c;
}
.footer-06 .aside-stretch:after {
  background: #322b3c;
}
.footer-06 .aside-stretch-right {
  background: #372f42;
}
.footer-06 .aside-stretch-right:after {
  background: #372f42;
} */
</style>
