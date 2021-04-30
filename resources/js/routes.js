import VueRouter from 'vue-router';
import Bookables from './bookables/Bookables';
import About from './components/About';
import Test from './bookables/Test';


const routes = [
    {
        path: "/",
        component: Bookables,
        name: 'home'
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
    }
];


const router = new VueRouter({
    routes,
    mode: 'history'

});

export default router;