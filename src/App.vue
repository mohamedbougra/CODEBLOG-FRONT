<template>
  <router-view />
</template>

<style>
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
a {
  color: #322b3c;
}

/* bottons principales */

.addArticle {
  display: ruby;
  background: #302939;
  color: #eef2e6 !important;
  border-radius: 20px;
  margin-bottom: 0px;
  border: 0px;
  font-family: "Montserrat" !important;
  font-weight: 400 !important;
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
  font-family: "Montserrat" !important;
  font-weight: 400 !important;
}

/* section 1 : Title */

#title {
  background: #d9c1fb;
  color: #372f42;
  margin-bottom: 30px;
}

/* section 1 : features */
#features {
  padding: 7% 15%;
  background: #eef2e6;
}
</style>
