import { defineStore } from 'pinia'

export const useAuthenticationStore = defineStore({
  id: 'authentication',
  state: () => ({
    isAuthenticated: false
  }),
  getters: {
  },
  actions: {
  }
})
