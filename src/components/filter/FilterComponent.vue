<template>
  <div class="filter-todo__container">
    <select name="todo" class="select-todo" v-model="typeFilter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { filterStore } from "@/stores/filter";

const filter = filterStore();

const typeFilter = ref("all");

filter.filter(typeFilter);
filter.listData = JSON.parse(localStorage.getItem("tasks"));
</script>

<style src="./style.css" scoped>
</style>
