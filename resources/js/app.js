
require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import '../css/app.css'

import router from './routes';
import Index from './Index';

window.Vue = require('vue').default;


Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    components:{
        "Index" :Index
    },
        
});
