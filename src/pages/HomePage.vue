<template>
  <div>
    <header class="flex-box--center-x-y">
      <h1>To-Do List</h1>
    </header>
    <div class="control full-block flex-box--center-x-y">
      <div class="flex-box--center-x-y control__container">
        <AddTaskComponent />
        <FilterComponent />
      </div>
    </div>
    <TaskComponent />
  </div>
</template>

<script setup>
import AddTaskComponent from "../components/add-tasks/AddTaskComponent.vue";
import FilterComponent from "../components/filter/FilterComponent.vue";
import TaskComponent from "../components/tasks/TaskComponent.vue";
</script>

<style scoped>
header {
  height: 20vh;
  font-size: 5rem;
  font-weight: 500;
  color: white;
}

.control {
  height: 20vh;
}

.control__container {
  width: 800px;
  gap: 40px;
}

@media only screen and (max-width: 700px) {
  .control__container {
    flex-direction: column;
  }

  h1{
    font-size: 4rem;
  }
}
</style>
