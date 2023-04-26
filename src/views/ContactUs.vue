<template>
    <!-- navbar -->
    <NavbarCompoment></NavbarCompoment>


    <div class="container-fluid">
  <div class="row justify-content-center">
    <div class="col-md-10">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h1 class="heading mb-4">Let's talk about everything!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?</p>
          <p><img src="../assets/undraw-contact.svg" alt="Image" class="img-fluid"></p>
        </div>
   <div class="col-md-6">
          <form class="mb-5" method="post" id="contactForm" name="contactForm" novalidate="novalidate">
            <div class="form-group">
              <input type="text" class="form-control" name="name" id="name" placeholder="Your name">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="email" id="email" placeholder="Email">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject">
            </div>
            <div class="form-group">
              <textarea class="form-control" name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
            </div>
            <div class="form-group">
              <input type="submit" value="Send Message" class="btn btn-primary addArticle">
              <span class="submitting"></span>
            </div>
          </form>
          <div id="form-message-warning mt-4"></div>
          <div id="form-message-success">
            Your message was sent, thank you!
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  
    <!-- footer -->
    <FooterCompoment></FooterCompoment>
  </template>
  <script>
  import NavbarCompoment from "@/components/NavbarCompoment.vue"; // @ is an alias to /src
  import FooterCompoment from "@/components/FooterCompoment.vue"; // @ is an alias to /src
  export default {
    name: "ProfileView",
    components: {
      NavbarCompoment,
      FooterCompoment,
    },
  };
  </script>
  <style scoped>

.container-fluid{
    padding: 7rem 0;
}
.col-md-6{
  padding: 7rem 0;
}

</style>
  