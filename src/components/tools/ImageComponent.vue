<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { Download } from 'lucide-vue-next';
const props = defineProps({
  src: String,
  alt: String,
  author: String,
  authorLink: String,
  downloadLink: String,
});

</script>

<template>
  <div class="relative h-[300px] group">
    <img
      :src="props.src"
      :alt="props.alt"
      class="w-full h-full object-cover rounded-sm"
    />
    <div class="inset-0 opacity-0 group-hover:opacity-100 bg-foreground/50 absolute rounded-sm transition-opacity"/>
    <div class="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100">
      <span
        class="font-semibold text-white dark:text-black"
      >
        Photo by {{ props.author }}
      </span>
    </div>
    <Button variant="secondary" size="icon" class="absolute top-3 right-3 opacity-0 group-hover:opacity-100">
      <a :href="props.downloadLink" :download="'Photo by ' + props.author"><Download :size="20" /></a>
    </Button>
  </div>
</template>
