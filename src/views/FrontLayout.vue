<template>
  <Nav></Nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import Nav from "../components/front/Nav.vue";
const { VITE_APP_APIURL, VITE_APP_APIPATH } = import.meta.env;
export default {
  components: { RouterView, Nav },
  mounted() {
    console.log(VITE_APP_APIURL, VITE_APP_APIPATH);
  },
};
</script>
