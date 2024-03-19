import { defineStore } from 'pinia'

export const filterStore = defineStore('filter', {
  state: () => {
    return {
      typeFilter: "all",
      dataList: JSON.parse(localStorage.getItem("tasks"))
        ? JSON.parse(localStorage.getItem("tasks"))
        : [],
    }
  },

  actions: {
    filter(type) {
      this.typeFilter = type;
    },
    
  },
})