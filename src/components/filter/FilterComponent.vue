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
import { filterStore } from '@/stores/filter'

const filter = filterStore()

const typeFilter = ref("all");

filter.filter(typeFilter)
filter.listData = JSON.parse(localStorage.getItem("tasks"))
</script>

<style scoped>
.filter-todo__container {
  width: 12rem;
  position: relative;
  overflow: hidden;
}

.select-todo {
  color: var(--primary-color-btn);
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  width: 12rem;
  padding: 1rem;
}

.filter-todo__container::after {
  content: "\25BC";
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  background: #ff6f47;
  cursor: pointer;
  pointer-events: none;
}
</style>
