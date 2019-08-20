import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import Base from './views/Base.vue';
import Form1 from './views/Form1.vue';
import Form2 from './views/Form2.vue';

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            children: [
                {
                    path: '/',
                    name: 'base',
                    component: Base
                },
                {
                    path: '/form1',
                    name: 'form1',
                    component: Form1
                },
                {
                    path: '/form2',
                    name: 'form2',
                    component: Form2
                }
            ]
        }
    ]
});
