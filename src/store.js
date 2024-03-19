import { reactive } from 'vue'

export const store = reactive({
    dataList: JSON.parse(localStorage.getItem("tasks"))
        ? JSON.parse(localStorage.getItem("tasks"))
        : [],
    filter: "all",
    dataUncompleted: JSON.parse(localStorage.getItem("tasks"))
        ? JSON.parse(localStorage.getItem("tasks"))
        : [],
})