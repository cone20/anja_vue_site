<template>
  <div>
    <Navbar />
    <ContentAbout />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./../1menu/Navbar";
import Footer from "../3footerr/Footer.vue";
import ContentAbout from "./about_content/About_content.vue";
export default {
  name: "About",
  components: { Navbar, Footer, ContentAbout },
};
</script>

<style></style>
