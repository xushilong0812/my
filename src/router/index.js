import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../views/Msite/Msite'
import Order from '../views/Order/Order'
import Profile from '../views/Profile/Profile'
import Seavch from '../views/Seavch/Seavch'
import Login from '../views/Login/Login'
import ShopGoods from '../views/Shop/ShopGoods/ShopGoods'
import Shop from '../views/Shop/Shop'
import ShopRatings from '../views/Shop/ShopRatings/ShopRatings'
import ShopInof from '../views/Shop/ShopInof/ShopInof'



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
    },
    { //Shop 主页面
        path: "/shop",
        component: Shop,
        // 子路由
        children: [{
            path: '/',
            redirect: '/shopgoods'
        }, { //shopGood  商品区
            path: "/shopgoods",
            component: ShopGoods,
        }, {
            path: "/shopratings",
            component: ShopRatings,
        }, {
            path: "/shopinof",
            component: ShopInof,
        }]
    },
]

const router = new VueRouter({
    routes
})

export default router