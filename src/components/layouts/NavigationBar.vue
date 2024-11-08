<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { AlignJustify } from "lucide-vue-next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/vue";
import { useColorMode } from "@vueuse/core";

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode({
  disableTransition: false,
});

const socialsLinks = [
  {
    name: "X",
    icon: "pajamas:twitter",
    link: "https://x.com/manuel_niat",
  },
  {
    name: "Github",
    icon: "lineicons:github",
    link: "https://github.com/franckniat",
  },
];
</script>

<template>
  <nav class="bg-background/90 backdrop-blur sticky top-0 z-10">
    <div class="max-w-[1280px] mx-auto px-2 border-b border-foreground/5">
      <div class="flex items-center justify-between h-[75px]">
        <div class="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <AlignJustify :size="25" />
          </Button>
          <h1 class="text-lg font-bold">
            Images <span class="text-primary">Gallery</span>
          </h1>
        </div>
        <div class="flex items-center gap-3">
          <!-- <router-link :to="'/login'" class="font-medium hover:text-primary"
            >Login</router-link
          >
          <span class="bg-foreground/10 h-6 w-px ml-3"></span> -->
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Icon
                  icon="radix-icons:moon"
                  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
                <Icon
                  icon="radix-icons:sun"
                  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <span class="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem @click="mode = 'light'">
                Light
              </DropdownMenuItem>
              <DropdownMenuItem @click="mode = 'dark'"> Dark </DropdownMenuItem>
              <DropdownMenuItem @click="mode = 'auto'">
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <span class="bg-foreground/10 h-6 w-px"></span>
          <ul class="list-none flex items-center">
            <li v-for="(social, index) in socialsLinks" :key="index">
              <Button variant="ghost" size="icon">
                <a :href="social.link" :title="social.name" target="_blank">
                  <Icon :icon="social.icon" />
                </a>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
