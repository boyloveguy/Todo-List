<template>
  <div class="flex-box--center-x-y-direction">
    <ul class="task__container full-block flex-box">
      <li
        class="task flex-box--center-y"
        v-for="(task, index) in store.filter == 'all'
          ? store.listData
          : store.filter == 'completed'
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
import { store } from "@/store.js";

store.listData = reactive(JSON.parse(localStorage.getItem("tasks")));

const completeData = () => {
  store.listData = reactive(JSON.parse(localStorage.getItem("tasks")));
  return toRaw(store.listData).filter((data) => {
    if (toRaw(data).completed === true) {
      return data;
    }
  });
};

const unCompleteData = () => {
  store.listData = reactive(JSON.parse(localStorage.getItem("tasks")));
  return toRaw(store.listData).filter((data) => {
    if (toRaw(data).completed === false) {
      return data;
    }
  });
};

const completedTask = (id) => {
  store.listData = reactive(JSON.parse(localStorage.getItem("tasks")));
  store.listData.map((item) => {
    if (item.id === id) {
      item.completed = !item.completed;
      localStorage.setItem("tasks", JSON.stringify(toRaw(store.listData)));
    }
  });
};

const removeTask = (id) => {
  store.listData = reactive(JSON.parse(localStorage.getItem("tasks")));
  store.listData = store.listData.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(toRaw(store.listData)));
};
</script>

<style scoped>
.task__container {
  width: 50%;
  gap: 10px;
  flex-direction: column;
}

.task {
  width: 100%;
  height: 53px;
  background-color: white;
  justify-content: space-between;
}

.task__content {
  padding: 0 0.5rem;
}

.icon {
  color: white;
}

.check-icon {
  background-color: #0bd4a2;
  height: 53px;
  width: 53px;
}

.trash-icon {
  background-color: var(--primary-color-btn);
  height: 53px;
  width: 53px;
}

.completed-task {
  text-decoration: line-through;
  color: gray;
}
</style>
