import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../views/Msite/Msite'
import Order from '../views/Order/Order'
import Profile from '../views/Profile/Profile'
import Seavch from '../views/Seavch/Seavch'

Vue.use(VueRouter)

const routes = [{
    path: "/msite",
    component: Msite
}, {
    path: "/order",
    component: Order
}, {
    path: "/profile",
    component: Profile
}, {
    path: "/seavch",
    component: Seavch
}]

const router = new VueRouter({
    routes
})

export default router