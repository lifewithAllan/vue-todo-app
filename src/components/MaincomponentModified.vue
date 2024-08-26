<!-- Modify the main component to use the new router configuration. -->
<template>
    <div id="app">
      <RouterView />
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  onMounted(() => {
    if (!localStorage.getItem('authenticated')) {
      router.push('/login');
    }
  });
  </script>
  
  <style>
  body {
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f5f5f5;
  }
  #app {
    margin-top: 50px;
  }
  </style>
  