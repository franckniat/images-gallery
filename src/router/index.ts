import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import FeatureView from "@/views/FeatureView.vue";
import SearchView from '@/views/SearchView.vue';
import SearchResultView from '@/views/SearchResultView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/popular',
      children: [
        {
          path: '/:feature',
          component: FeatureView,
        }
      ]
    },
    {
      path: "/search",
      component: SearchView,
      children: [
        {
          path: ":query",
          component: SearchResultView,
        }
      ]
    }
  ]
})

export default router
