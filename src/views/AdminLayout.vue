<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="py-4">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import Navbar from "../components/admin/Nav.vue";
export default {
  methods: {},
  components: { RouterView, Navbar },
};
</script>
