const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

/*Update the Router Configuration
Modify the router configuration to include the login route and protect the todo list route.*/
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import TodoApp from '../components/TodoApp.vue';
import Login from '../components/Login.vue';

// Define the routes for the application
const routes = [
  {
    path: '/login', // URL path for the login route
    name: 'Login', // Name of the route
    component: Login, // Component to render when this route is visited
  },
  {
    path: '/todos', // URL path for the todo list route
    name: 'TodoApp', // Name of the route
    component: TodoApp, // Component to render when this route is visited
    beforeEnter: (to, from, next) => {
      // Route guard to check if the user is authenticated
      if (!localStorage.getItem('authenticated')) {
        // If not authenticated, redirect to the login page
        next({ name: 'Login' });
      } else {
        // If authenticated, allow access to the route
        next();
      }
    },
  },
  {
    path: '/', // Default URL path
    redirect: '/login', // Redirect to the login route by default
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Use HTML5 history mode
  routes, // Routes configuration
});

export default router; // Export the router instance
