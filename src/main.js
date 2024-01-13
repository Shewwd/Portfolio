import './assets/base.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import LandingPage from './Pages/Landing.vue';
import Bio from './Pages/Bio.vue';
import Technologies from './Pages/Technologies.vue';
import Work from './Pages/Work.vue';

const routes = [
    { path: '/', component: LandingPage },
    { path: '/bio', component: Bio },
    { path: '/technologies', component: Technologies },
    { path: '/work', component: Work },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

const app = createApp(App); // Pass App component here

app.use(router);

app.mount('#app');