<template>
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
                  <router-link class="py-1 d-block" to="/contact-us"><span class="ion-ios-checkmark-circle-outline mr-2"></span
                    >Contact Us
                  </router-link>
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

<style scoped>
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
  background: #372f42;
}
.footer-06 .aside-stretch:after {
  background: #372f42;
}
.footer-06 .aside-stretch-right {
  background: #372f42;
}
.footer-06 .aside-stretch-right:after {
  background: #372f42;
} */
</style>
