<template>
  <router-view />
</template>

<style>
body {
  font-family: "Montserrat";
  background: #efecf6;
}

.container-fluid {
  padding: 3% 4%;
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
  color: #efecf6 !important;
  border-radius: 9px;
  font-family: "Montserrat" !important;
  font-weight: 400 !important;
}
.cancel:hover {
  color: #efecf6;
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
  background: #efecf6 !important;
}

.login:hover {
  color: #302939 !important;
  background: #efecf6 !important;
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
  background: #efecf6;
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
  background: #efecf6;
}
</style>
