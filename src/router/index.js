import { createRouter, createWebHistory } from 'vue-router';
import TodoApp from '../components/TodoApp.vue';
import App from '@/components/App.vue';

const routes = [
  { 
    path: '/',
    component: Login 
  },
  {
    path: '/todos', 
    //name: 'TodoApp', 
    component: TodoApp,
    //beforeEnter: (to, from, next) => {
      // Route guard to check if the user is authenticated
      //if (!localStorage.getItem('authenticated')) {
        // If not authenticated, redirect to the login page
        //next({ name: 'Login' });
      //} else {
        // If authenticated, allow access to the route
        //next();
      //}
    //},
  },
  {
    path: '/mytodo',
    name: 'App',
    component: App
  }

];

// Create the router instance STEP 1 COMPLETE
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Use HTML5 history mode
  routes, // Routes configuration
});

export default router; // Export the router instance
