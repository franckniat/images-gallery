import { defineStore } from 'pinia'


export const useSearchHistoryStore = defineStore('searchHistory', {
  state: () => ({
    searchHistory: [
      'Vue',
      'React',
      'Angular',
      'Vite',
      'Webpack',
      'Rollup',
      'TypeScript',
      'JavaScript',
      'CSS',
      'HTML',
    ] as string[],
  }),
  actions: {
    addSearchHistory(keyword: string) {
      this.searchHistory = [...this.searchHistory, keyword]
    },
    clearSearchHistory() {
      this.searchHistory = []
    },
  },
})
