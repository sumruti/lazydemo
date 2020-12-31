import Vue from 'vue';
import Router from 'vue-router';
//import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: 'http://localhost:8080',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
        },{
            path: '/application',
            name: 'application',
            component: () => import('./views/Application.vue'),
        },{
            path: '/manufacturer',
            name: 'manufacturer',
            component: () => import('./views/Manufacturer.vue'),
        },{
            path: '/vehicle',
            name: 'vehicle',
            component: () => import('./views/Vehicle.vue'),
        },{
            path: '/stocklist',
            name: 'stocklist',
            component: () => import('./views/Stocklist.vue'),
        },{
            path: '/modal-number',
            name: 'modal',
            component: () => import('./views/ModalVue.vue'),
        }
        
    ]
});



export default router;