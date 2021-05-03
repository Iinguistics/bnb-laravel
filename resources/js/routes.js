import VueRouter from 'vue-router';
import Bookables from './bookables/Bookables';
import Bookable from './bookable/Bookable';
import About from './components/About';
import Test from './bookables/Test';
import TestTwo from './components/TestTwo';

const routes = [
    {
        path: "/",
        component: Bookables,
        name: 'home'
    },
    {
        path: "/bookable/:id",
        component: Bookable,
        name: 'bookable'
    },
    {
        path: "/about",
        component: About,
        name: 'about'
    },
    {
        path: "/test",
        component: Test,
        name: 'test'
    },
    {
        path: "/test2",
        component: TestTwo,
        name: 'test2'
    }
];


const router = new VueRouter({
    routes,
    mode: 'history'

});

export default router;