import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchProducts() {
      this.loading = true
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_SHOPPING_URL}/api/products`)
        this.products = response.data
      } catch (error) {
        // this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})