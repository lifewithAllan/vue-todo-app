import { createRouter, createWebHistory } from 'vue-router';
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
  
];

// Create the router instance STEP 1 COMPLETE
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Use HTML5 history mode
  routes, // Routes configuration
});

export default router; // Export the router instance
