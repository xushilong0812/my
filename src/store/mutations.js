/*
vuex 的 mutations 模块
*/
import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPLIST,
    RECEIVE_FOODLIST,
    RECEIVE_USERMSG
} from './mutation-types'
// [方法名](state,{param}){}————实现更改state
export default {
    [RECEIVE_ADDRESS](state, { address }) { //调度地址信息
        state.address = address
    },
    [RECEIVE_SHOPLIST](state, { shoplist }) { //商品列表信息
        state.shoplist = shoplist
    },
    [RECEIVE_FOODLIST](state, { foodlist }) { //食品列表信息
        state.foodlist = foodlist
    },
    [RECEIVE_USERMSG](state, { userMsg }) { //食品列表信息
        state.userMsg = userMsg
    },
}