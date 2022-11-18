<template>
  <div id="app">
    <Header />
    <main class="main">
      <Container>
        <router-view />
        <Footer />
      </Container>

    </main>

    <footer class="footer__">
    </footer>
    
  </div>
</template>

<script>
import Header from "./components/Header";
import CustomText from "./components/CustomText";
import Container from "./components/Container.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    CustomText,
    Container,
    Footer
  },
};
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css';
@import'assets/style.css';
</style>

<style scoped>

.main {
  padding-top: 60px;
  /*background-color: rgb(250, 250, 250);*/
}
.footer__{
  /*background-color: rgb(250, 250, 250);*/
}
</style>

