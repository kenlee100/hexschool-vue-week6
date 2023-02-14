<template>
  <Nav></Nav>
  <div class="container">
    <div class="py-4">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import Nav from "../components/admin/Nav.vue";
const { VITE_APP_APIURL, VITE_APP_APIPATH } = import.meta.env;
export default {
  methods: {},
  components: { RouterView, Nav },
};
</script>
