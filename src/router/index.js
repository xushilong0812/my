import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../views/Msite/Msite'
import Order from '../views/Order/Order'
import Profile from '../views/Profile/Profile'
import Seavch from '../views/Seavch/Seavch'
import Login from '../views/Login/Login'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/msite'
    },
    {
        path: "/msite",
        component: Msite,
        meta: { infooter: true }
    }, {
        path: "/order",
        component: Order,
        meta: { infooter: true }
    }, {
        path: "/profile",
        component: Profile,
        meta: { infooter: true }
    }, {
        path: "/seavch",
        component: Seavch,
        meta: { infooter: true }
    }, {
        path: "/login",
        component: Login,
        meta: { infooter: false }
    }
]

const router = new VueRouter({
    routes
})

export default router