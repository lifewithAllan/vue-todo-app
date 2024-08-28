import { createRouter, createWebHistory } from 'vue-router';
import App from '@/components/App.vue';
import Login from '@/Login.vue';

const routes = [
  { 
    path: '/',
    component: Login 
  },
  {
    path: '/mytodo',
    name: 'App',
    component: App
  },  
];

// Create the router instance STEP 1 COMPLETE
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes, // Routes configuration
});

export default router; // Export the router instance
