
<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import MainSearchBar from "@/components/tools/MainSearchBar.vue";
import { RouterView, useRoute } from "vue-router";
const featuresLinks = [
  {
    name: "Popular",
    link: "/popular",
  },
  {
    name: "New",
    link: "/new",
  },
  {
    name: "Trending",
    link: "/trending",
  },
  {
    name: "Nature",
    link: "/nature",
  },
  {
    name: "Sport",
    link: "/sport",
  },
  {
    name: "Technology",
    link: "/technology",
  },
  {
    name: "Art",
    link: "/art",
  },
  {
    name: "Food",
    link: "/foods",
  },
]
const route = useRoute();
</script>

<template>
  <section class="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center pt-10 ">
    <div class="flex items-center flex-col gap-10 py-5">
      <a href="https://unsplash.com/" target="_blank" class="bg-primary/20 text-sm px-3 py-1 flex items-center gap-6 rounded-full justify-center border-foreground/20 border group">
        <span class="w-2 h-2 rounded-full bg-primary"></span>
        <span class="text-foreground/70 font-semibold">Powered by Unsplash</span>
        <ArrowRight :size="15" class="group-hover:translate-x-1 transition-transform"/>
      </a>
      <h1 class="text-5xl font-extrabold text-foreground/80">Discover the best images from Unsplash</h1>
      <p class="text-center text-xl font-medium text-foreground/80">
        Unsplash is a community of millions of creative people and
        amazing projects.
        <br class="">
        Find out beautiful images for your next project.
      </p>
      <MainSearchBar />
    </div>
    <div class="my-10">
      <div class="flex flex-col gap-5 items-center font-medium">
        <span class="text-foreground/70 font-bold">Explore by : </span>
        <div class="flex gap-5">
          <router-link
            v-for="feature in featuresLinks"
            :key="feature.name"
            :to="feature.link"
            :class="'text-foreground/70 hover:text-primary px-3 py-1 rounded-md transition-all' + (route.path === feature.link ? ' text-primary bg-foreground/5' : '')"
          >
            {{ feature.name }}
          </router-link>
        </div>
        <RouterView />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
