import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => ({
    user: null,
    isLoggedIn: false
  }),
  
  actions: {
  }
})