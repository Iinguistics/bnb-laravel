import VueRouter from 'vue-router';
import Bookables from './bookables/Bookables';
import About from './components/About';



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
    }
];


const router = new VueRouter({
    routes,
    mode: 'history'

});

export default router;