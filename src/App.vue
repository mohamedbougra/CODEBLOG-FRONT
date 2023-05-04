<template>
  <router-view />
</template>

<style>
body {
  font-family: "Montserrat";
  background: #e4e1ea;
}

.container-fluid {
  padding: 3% 5%;
}

h1 {
  padding-top: 4%;
  font-family: "Montserrat", sans-serif;
  font-size: 2.5rem;
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
  color: #372f42;
}

.cancel {
  background: #e4e1ea3e;
  color: #e4e1ea !important;
  border-radius: 9px;
  font-family: "Montserrat" !important;
  font-weight: 400 !important;
}
.cancel:hover {
  color: #e4e1ea;
  background: #453957 !important;
}
/* bottons principales */

.addArticle {
  display: ruby;
  background: #302939;
  color: #e4e1ea !important;
  border-radius: 9px;
  margin-bottom: 0px;
  border: 0px;
  font-family: "Montserrat" !important;
  font-weight: 400 !important;
}
.addArticle:hover {
  color: #302939 !important;
  background: #e4e1ea !important;
}

.login:hover {
  color: #302939 !important;
  background: #e4e1ea !important;
}

.login {
  background: #372f42;
  color: #e4e1ea !important;
  border-radius: 9px;
  margin-bottom: 0px;
  border-color: #e4e1ea;
  font-family: "Montserrat" !important;
  font-weight: 400 !important;
}
.recommaded {
  background: #e4e1ea;
  color: #372f42 !important;
  border-radius: 9px;
  margin-bottom: 0px;
  font-family: "Montserrat" !important;
  font-weight: 400 !important;
}
.recommaded:hover {
  background: #302939;
  color: #e4e1ea !important;
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
  background: #e4e1ea;
}
</style>
