import { defineStore } from 'pinia'
import axios from 'axios'

export const useOrderStore = defineStore('orders', {
  state: () => ({
    orders: [],
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchOrders() {
      this.loading = true
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_ORDER_URL}/api/orders`)
        this.orders = response.data
      } catch (error) {
        // this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})