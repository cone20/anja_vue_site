<template>
  <div>
    <Navbar />
    <h1 class="brand-text">Welcome to Animal Shop</h1>
    <Content />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./../1menu/Navbar";
import Footer from "./../3footerr/Footer.vue";
import Content from "./home_content/Content";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Content,
  },
};
</script>

<style>
.brand-text {
  text-align: center;
  margin-top: 10px;
  font-weight: 800;
}
</style>
