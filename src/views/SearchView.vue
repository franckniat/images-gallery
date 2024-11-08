<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";
import SearchBar from "@/components/tools/SearchBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="pt-5">
    <div class="space-y-4 flex flex-col items-center">
      <Breadcrumb>
        <BreadcrumbList class="font-medium">
          <BreadcrumbItem>
            <BreadcrumbLink href="/"> Home </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage class="text-primary"> Search </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 class="text-2xl font-bold">Search</h1>
      <p class="text-center text-lg font-medium text-foreground/60">
        Find the best images for your work.
      </p>
      <SearchBar />
      <div class="py-5">
        <RouterView />
      </div>
    </div>
  </div>
</template>
