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

const completeData = () => {
  filter.listData = reactive(JSON.parse(localStorage.getItem("tasks")));
  return toRaw(filter.listData).filter((data) => {
    if (toRaw(data).completed === true) {
      return data;
    }
  });
};

const unCompleteData = () => {
  filter.listData = reactive(JSON.parse(localStorage.getItem("tasks")));
  return toRaw(filter.listData).filter((data) => {
    if (toRaw(data).completed === false) {
      return data;
    }
  });
};

const completedTask = (id) => {
  filter.listData = reactive(JSON.parse(localStorage.getItem("tasks")));
  filter.listData.map((item) => {
    if (item.id === id) {
      item.completed = !item.completed;
      localStorage.setItem("tasks", JSON.stringify(toRaw(filter.listData)));
    }
  });
};

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
  overflow: hidden;
  text-overflow: ellipsis;
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
