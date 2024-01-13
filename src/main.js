import './assets/base.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import LandingPage from './components/Landing.vue';

const routes = [
    { path: '/', component: LandingPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

const app = createApp(App); // Pass App component here

app.use(router);

app.mount('#app');