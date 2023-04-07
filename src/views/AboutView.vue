<template>
  <!-- navbar -->
  <NavbarCompoment></NavbarCompoment>

  <div class="about">
    <h1>This is a About page</h1>
  </div>

  <!-- footer -->
  <FooterCompoment></FooterCompoment>
</template>
<script>
import NavbarCompoment from "@/components/NavbarCompoment.vue"; // @ is an alias to /src
import FooterCompoment from "@/components/FooterCompoment.vue"; // @ is an alias to /src
export default {
  name: "AboutView",
  components: {
    NavbarCompoment,
    FooterCompoment,
  },
};
</script>
