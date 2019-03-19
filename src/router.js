import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import( /* webpackChunkName: "Home" */ './views/Home.vue')
const Login = () => import( /* webpackChunkName: "Login" */ './views/Login.vue')

const User = () => import( /* webpackChunkName: "User" */ './views/User/Index.vue')
const User1 = () => import( /* webpackChunkName: "User1" */ './views/User/User1.vue')
const Info1 = () => import( /* webpackChunkName: "User1" */ './views/User/Info1.vue')
const Dashboard = () => import( /* webpackChunkName: "Dashboard" */ './views/Dashboard.vue')

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            name: '',
            component: Home,
            children: [{
                    path: '',
                    name: 'index',
                    component: Dashboard,
                },
                {
                    path: '/user',
                    name: 'user',
                    component: User,
                    children: [{
                            path: '',
                            component: User1
                        },
                        {
                            path: 'info1',
                            name: 'info1',
                            component: Info1
                        }
                    ],
                }
            ]
        },
        {
            path: '/index',
            redirect: {
                name: 'index'
            }
        },
    ]
})