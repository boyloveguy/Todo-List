import { defineStore } from 'pinia'

export const dataListStore = defineStore('dataList', {
    state: () => {
        return {
            dataList: JSON.parse(localStorage.getItem("tasks"))
                ? JSON.parse(localStorage.getItem("tasks"))
                : [],
        }
    },
})