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
import { filterStore } from '@/stores/filter';

const filter = filterStore();

let valueInput = defineModel("input");

localStorage.setItem("tasks", JSON.stringify([]))

const handleToDoAdd = () => {
  if(valueInput.value === undefined || valueInput.value === ''){
    return false
  }
  toRaw(filter.listData).push({
    text: valueInput.value,
    completed: false,
    id: Date.now() + Math.random(),
  });
  localStorage.setItem("tasks", JSON.stringify(toRaw(filter.listData)));
  filter.listData = reactive(JSON.parse(localStorage.getItem("tasks")));
  valueInput.value = "";
};
</script>

<style scoped>
.todo__control-add {
  background-color: white;
  height: 53px;
  width: 450px;
}

.input {
  padding: 0 10px;
  font-size: 2rem;
  font-weight: 500;
}

.add-todo__button {
  height: 100%;
  width: 10%;
  padding: 8px;
  cursor: pointer;
  transition: 0.4s;
}

.add-todo__button:hover {
  background-color: var(--primary-color-btn);
}

.add-todo__button:hover .add-todo__icon {
  color: white;
}

.add-todo__icon {
  color: var(--primary-color-btn);
}
</style>
