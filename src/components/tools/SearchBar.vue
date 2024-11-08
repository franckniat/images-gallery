<script lang="ts" setup>
import { Search } from "lucide-vue-next";
import Input from "../ui/input/Input.vue";
import Button from "../ui/button/Button.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useSearchHistoryStore } from "@/stores/search";

const search = ref("");
const router = useRouter();
const isSearchFocus = ref(true);
const searchHistory = useSearchHistoryStore();
const handleSearch = () => {
  if (search.value.trim() === "") return;
  searchHistory.addSearchHistory(search.value);
  router.push(`/search/${search.value}`);
};
</script>

<template>
  <div class="relative max-w-2xl w-full">
    <form @submit.prevent="handleSearch">
      <Input
        v-model="search"
        placeholder="Search images ..."
        required
        class="h-12 focus:drop-shadow-lg search-input transition-all"
      />
      <DropdownMenu :default-open="isSearchFocus">
        <DropdownMenuContent >
          <DropdownMenuLabel>Recents searchs</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            v-for="history in searchHistory.$state.searchHistory.filter(
              (history) => history.includes(search)
            )"
            :key="history"
            @click="search = history">
            {{ history }}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        type="submit"
        variant="default"
        size="icon"
        class="absolute top-1/2 -translate-y-1/2 h-10 w-10 right-1 hover:w-20 group transition-all"
      >
        <Search :size="25" />
        <span class="group-hover:opacity-100 group-hover:block hidden opacity-0"
          >Search</span
        >
      </Button>
    </form>
  </div>
</template>

<style scoped></style>
