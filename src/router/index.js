import { createRouter, createWebHistory } from 'vue-router';
import TodoApp from '../components/TodoApp.vue';
import MaincomponentModified from '@/components/MaincomponentModified.vue';
import App from '@/components/App.vue';

const routes = [
  {
    path: '/mytodo',
    name: 'App',
    component: App
  },
  { 
    path: '/',
    component: Login 
  },
  {
    path: '/todolist',
    //name: 'App1',
    component: MaincomponentModified
  },
  {
    path: '/todos', 
    name: 'TodoApp', 
    component: TodoApp,
   
  },
  
];

// Create the router instance STEP 1 COMPLETE
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Use HTML5 history mode
  routes, // Routes configuration
});

export default router; // Export the router instance
