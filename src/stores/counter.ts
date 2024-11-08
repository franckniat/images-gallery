import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('search', () => {
  const searchQuery = ref('')
  const searchResults = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  return { searchQuery, searchResults, isLoading, error }
})
