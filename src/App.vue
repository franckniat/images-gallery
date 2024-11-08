<script setup lang="ts">
import {RouterView} from "vue-router";
import NavigationBar from "./components/layouts/NavigationBar.vue";
</script>

<template>
  <NavigationBar />
  <div class="max-w-[1280px] mx-auto px-2 py-5">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
