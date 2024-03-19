import { defineStore } from 'pinia'

export const filterStore = defineStore('filter', {
  state: () => {
    return { typeFilter: "all"}
  },

  actions: {
    filter(type) {
      this.typeFilter = type;
    },
  },
})