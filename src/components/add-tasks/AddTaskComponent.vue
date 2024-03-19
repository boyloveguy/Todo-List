<template>
  <div class="flex-box todo__control-add">
    <input
      type="text"
      class="full-block input"
      required
      v-model="valueInput"
      @keyup.enter="handleToDoAdd()"
      placeholder="Enter your task"
    />
    <button class="add-todo__button" @click="handleToDoAdd()" type="submit">
      <font-awesome-icon
        :icon="['fas', 'square-plus']"
        class="add-todo__icon"
        size="2xl"
      />
    </button>
  </div>
</template>

<script setup>
import { defineModel, toRaw, reactive } from "vue";
import { filterStore } from "@/stores/filter";

const filter = filterStore();

let valueInput = defineModel("input");


// Handle add tasks
const handleToDoAdd = () => {
  // Handle validate blank
  if (valueInput.value === undefined || valueInput.value === "") {
    return false;
  }

  // Handle add localStorage
  if (toRaw(filter.listData)) {
    toRaw(filter.listData).push({
      text: valueInput.value,
      completed: false,
      id: Date.now() + Math.random(),
    });
  } else {
    localStorage.setItem("tasks", JSON.stringify([]));
    filter.listData = JSON.parse(localStorage.getItem("tasks"));

    toRaw(filter.listData).push({
      text: valueInput.value,
      completed: false,
      id: Date.now() + Math.random(),
    });
  }
  localStorage.setItem("tasks", JSON.stringify(toRaw(filter.listData)));
  filter.listData = reactive(JSON.parse(localStorage.getItem("tasks")));
  valueInput.value = "";
};
</script>

<style src="./style.css" scoped></style>
