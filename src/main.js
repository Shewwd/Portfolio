import './assets/base.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './app.vue';
import Landing from './pages/landing.vue';
import About from './pages/about.vue';
import Work from './pages/work.vue';

const routes = [
    { path: '/', component: Landing },
    { path: '/about', component: About },
    { path: '/work', component: Work },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

const app = createApp(App); // Pass App component here

app.use(router);

app.mount('#app');