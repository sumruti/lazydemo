import Vue from 'vue';
import Router from 'vue-router';
//import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: '',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
        },{
            path: '/application/:car_id',
            name: 'application',
            component: () => import('./views/Application.vue'),
        },{
            path: '/manufacturer',
            name: 'manufacturer',
            component: () => import('./views/Manufacturer.vue'),
        },{
            path: '/cars/view/:car_id',
            name: 'vehicle',
            component: () => import('./views/Vehicle.vue'),
        },{
            path: '/cars',
            name: 'cars',
            component: () => import('./views/Stocklist.vue'),
        },{
            path: '/modal-number',
            name: 'modal',
            component: () => import('./views/ModalVue.vue'),
        },{
            path: '/blog',
            name: 'blogListing',
            component: () => import('./views/blogListing.vue'),
        },{
            path: '/blog-listing',
            name: 'blog',
            component: () => import('./views/blog.vue'),
        },{
            path: '/finance-calculater',
            name: 'finance-calculater',
            component: () => import('./views/finance-calculater.vue'),
        },{
            path: '/help-advise',
            name: 'help-advise',
            component: () => import('./views/help-advise.vue'),
        },{
            path: '/help-and-advice-content/:id',
            name: 'help-and-advice-content',
            component: () => import('./views/help-and-advice-content.vue'),
        },{
            path: '/how-it-work',
            name: 'how-it-work',
            component: () => import('./views/how-it-work.vue'),
        },{
            path: '/login',
            name: 'login',
            component: () => import('./views/login.vue'),
        }
        
    ]
});



export default router;