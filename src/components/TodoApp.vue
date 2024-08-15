<!--Rename your existing code file to TodoApp.vue and make sure it matches the new path.-->
<!-- src/components/TodoApp.vue -->
<template>
    <div class="container">
      <Header />
      <div class="todo-app">
        <h2>Your TO-DO list <img src="/src/assets/images.jpg" alt="just some image" /></h2>
        <div class="row">
          <input type="text" v-model="newTask" id="input-box" placeholder="Add a note" />
          <button @click="addTask">Add</button>
        </div>
        <ul id="list-container">
          <li v-for="(task, index) in tasks" :key="index" :class="{ checked: task.checked }" @click="toggleTask(index)">
            {{ task.text }}
            <span @click.stop="removeTask(index)">×</span>
          </li>
        </ul>
      </div>
    </div>
  
    <RouterView />
  </template>
  
  <script setup>
  import Header from './Header.vue';
  import { ref, onMounted } from 'vue';
  
  const newTask = ref('');
  const tasks = ref([]);
  
  function addTask() {
    if (newTask.value.trim() === '') {
      alert('You must write something!');
    } else {
      tasks.value.push({ text: newTask.value, checked: false });
      newTask.value = '';
      saveData();
    }
  }
  
  function saveData() {
    localStorage.setItem('tasks', JSON.stringify(tasks.value));
  }
  
  function removeTask(index) {
    tasks.value.splice(index, 1);
    saveData();
  }
  
  function toggleTask(index) {
    tasks.value[index].checked = !tasks.value[index].checked;
    saveData();
  }
  
  function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      tasks.value = JSON.parse(savedTasks);
    }
  }
  
  onMounted(() => {
    loadTasks();
  });
  </script>
  
  <style>
  /* Your existing styles here */
  </style>
  