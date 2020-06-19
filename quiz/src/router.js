import Vue from 'vue'
import Router from 'vue-router';
import FormValidation from './components/FormValidation.vue'
import About from './components/About.vue'


Vue.use(Router)

export default new Router({
    routes :[
        {
            path: '/',
            name: 'FormValidation',
            component: FormValidation
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})