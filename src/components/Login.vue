<template>
    <div class="login-container">
      <h2>Login</h2>
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const router = useRouter();
  
  function login() {
    if (username.value === 'user' && password.value === 'password') {
      localStorage.setItem('authenticated', true);
      router.push('/todos');
    } else {
      alert('Incorrect username or password');
    }
  }
  </script>
  
  <style>
  .login-container {
    width: 100%;
    max-width: 400px;
    margin: 100px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    text-align: center;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #28a745;
    color: #fff;
    cursor: pointer;
  }
  </style>
  