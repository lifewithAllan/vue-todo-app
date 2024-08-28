<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit" @click="login">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const router = useRouter();

  // Hardcoded credentials
  const hardcodedUsername = 'walker';
  const hardcodedPassword = '123456789';
  
  const login = () => {
    //console.log('Login function called');
      if (username.value === hardcodedUsername && password.value === hardcodedPassword) {
        //console.log('Credentials match');
        router.push({ name: 'App' });
      } else {
        //console.log('Invalid username or password');
        alert('Invalid username or password');
      }
    };
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
    border-style: solid;
    border-color: crimson;
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
  