<template>
  <Nav></Nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import Nav from "../components/front/Nav.vue";
const { VITE_APIURL, VITE_APIPATH } = import.meta.env;
export default {
  components: { RouterView, Nav },
  mounted() {
    console.log(VITE_APIURL, VITE_APIPATH);
  },
};
</script>
