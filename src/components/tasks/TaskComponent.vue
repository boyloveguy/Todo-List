<template>
  <div class="flex-box--center-x-y-direction">
    <ul class="task__container full-block flex-box">
      <li
        class="task flex-box--center-y"
        v-for="(task, index) in filter.typeFilter === 'all'
          ? filter.listData
          : filter.typeFilter === 'completed'
          ? completeData()
          : unCompleteData()"
        :key="index"
      >
        <span
          class="task__content"
          :class="{ 'completed-task': task.completed }"
          >{{ task.text }}</span
        >
        <div class="flex-box--center-x-y control-task__container">
          <button
            class="icon check-icon flex-box--center-x-y"
            @click="completedTask(task.id)"
          >
            <font-awesome-icon :icon="['fas', 'check']" size="lg" />
          </button>
          <button
            class="icon trash-icon flex-box--center-x-y"
            @click="removeTask(task.id)"
          >
            <font-awesome-icon :icon="['fas', 'trash']" />
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, toRaw } from "vue";
import { filterStore } from '@/stores/filter';

const filter = filterStore()

filter.listData = reactive(JSON.parse(localStorage.getItem("tasks")));

// Handle filter completed tasks
const completeData = () => {
  filter.listData = reactive(JSON.parse(localStorage.getItem("tasks")));
  return toRaw(filter.listData).filter((data) => {
    if (toRaw(data).completed === true) {
      return data;
    }
  });
};

// Handle filter uncompleted tasks
const unCompleteData = () => {
  filter.listData = reactive(JSON.parse(localStorage.getItem("tasks")));
  return toRaw(filter.listData).filter((data) => {
    if (toRaw(data).completed === false) {
      return data;
    }
  });
};

// Handle make completed and uncompleted tasks
const completedTask = (id) => {
  filter.listData = reactive(JSON.parse(localStorage.getItem("tasks")));
  filter.listData.map((item) => {
    if (item.id === id) {
      item.completed = !item.completed;
      localStorage.setItem("tasks", JSON.stringify(toRaw(filter.listData)));
    }
  });
};

// Handle remove tasks
const removeTask = (id) => {
  filter.listData = reactive(JSON.parse(localStorage.getItem("tasks")));
  filter.listData = filter.listData.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(toRaw(filter.listData)));
};
</script>

<style src="./style.css" scoped>
</style>
