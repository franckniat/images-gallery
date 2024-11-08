<script lang="ts" setup>
import { Search } from "lucide-vue-next";
import Input from "../ui/input/Input.vue";
import Button from "../ui/button/Button.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSearchHistoryStore } from "@/stores/search";
const search = ref("");
const router = useRouter();
const searchHistory = useSearchHistoryStore();
const handleSearch = () => {
  if (search.value.trim() === "") return;
  searchHistory.addSearchHistory(search.value);
  router.push(`/search/${search.value}`);
};
</script>

<template>
  <form class="relative max-w-[500px] w-full" @submit.prevent="handleSearch">
    <Input
      v-model="search"
      placeholder="Search images ..."
      autofocus
      class="h-14 focus:drop-shadow-lg transition-all"
    />
    <Button
      type="submit"
      variant="default"
      size="icon"
      class="absolute top-1/2 -translate-y-1/2 h-12 w-12 right-1 hover:w-20 group transition-all"
    >
      <Search :size="25" />
      <span
        class="group-hover:opacity-100 group-hover:block hidden opacity-0 transition-all"
      >
        Search
      </span>
    </Button>
  </form>
</template>
