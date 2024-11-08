<script lang="ts" setup>
import Skeleton from "@/components/ui/skeleton/Skeleton.vue";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";
import type { SearchResponse } from "@/types";
import ImageComponent from "@/components/tools/ImageComponent.vue";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";

const route = useRoute();
const images = ref<SearchResponse>({} as SearchResponse);
const loading = ref(false);
const currentPage = ref(1);
const router = useRouter();

watch(
  () => route.params.query,
  (query) => {
    fetchImages(1, query as string);
  }
);
const fetchImages = async (page: number, query: string) => {
  loading.value = true;
  const response = await fetch(
    "https://api.unsplash.com/search/photos?query=" +
      query +
      "&per_page=16&page=" +
      page,
    {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
      },
    }
  );
  const data = await response.json();
  images.value = data;
  loading.value = false;
};

const handlePageChange = (page: number) => {
  currentPage.value = page;
  router.push({ query: { ...route.query, page } });
  fetchImages(page, route.params.query as string);
};

onMounted(() => {
  const page = parseInt(route.query.query as string) || 1;
  currentPage.value = page;
  fetchImages(page, route.params.query as string);
});
</script>

<template>
  <div class="grid grid-cols-4 gap-2" v-if="loading === true">
    <Skeleton class="w-[300px] h-[300px]" v-for="i in 12" :key="i" />
  </div>

  <div class="grid grid-cols-4 gap-2" v-else>
    <ImageComponent
      v-for="image in images.results"
      :key="image.id"
      :src="image.urls.small"
      :alt="image.description"
      :author="image.user.name"
      :author-link="image.user.portfolio_url"
      :download-link="image.links.download"
    />
  </div>
  <div class="pagination my-5 flex justify-center">
    <Pagination
      v-slot="{ page }"
      :items-per-page="12"
      :total="images.total_pages"
      :sibling-count="1"
      show-edges
      :default-page="1"
      @update:page="handlePageChange"
    >
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
        <PaginationFirst />
        <PaginationPrev />

        <div :key="index" v-for="(item, index) in items">
          <PaginationListItem
            v-if="item.type === 'page'"
            :key="index"
            :value="item.value"
            as-child
          >
            <Button
              class="w-10 h-10 p-0"
              :variant="item.value === page ? 'default' : 'outline'"
            >
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </div>
        <PaginationNext />
        <PaginationLast />
      </PaginationList>
    </Pagination>
  </div>
</template>
