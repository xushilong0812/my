// 这个文件要把具体的请求包装，所以它依赖于刚才封装的发送请求的ajax
import ajax from './ajax'

const url = '/api'
    /**
     *1根据经纬度获取位置详情
     * @param {string} geohash 经纬度
     */
export const reqAddress = geohash => ajax(`${url}/position/${geohash}`)

/**
 * 2获取食品分类列表
 */
export const reqCategorys = () => ajax(`${url}/index_category`)

/**
 * 3、根据经纬度获取商铺列表
 * @param {*} param
 */
export const reqShops = ({ latitude, longitude }) =>
    ajax(url + '/shops', { latitude, longitude })

/**
 * 4、根据经纬度和关键字搜索商铺列表
 * @param {*} geohash
 * @param {*} keyword
 */
export const reqSearchShop = (geohash, keyword) =>
    ajax(url + '/search_shops', { geohash, keyword })

/**
 * 5、获取一次性验证码
 * @param {*}
 */
export const getCaptcha = () => {
        ajax(`${url} + '/captcha`)
    }
    //  TODO export const

/**
 * 6、用户名密码登陆
 * @param {*} param0
 */
export const reqPwdLogin = ({ name, pwd, captcha }) =>
    ajax(url + '/login_pwd', { name, pwd, captcha }, 'POST')

/**
 * 7、发送短信验证码
 * @param {*} phone
 */
export const reqSendCode = phone => ajax(url + '/sendcode', { phone })

/**
 * 8手机号验证码登陆
 * @param {*} phone
 * @param {*} code
 */
export const reqSmsLogin = (phone, code) => {
    return ajax(`${url}/login_sms`, { phone, code }, 'POST')
}

/**
 * 9、根据会话获取用户信息
 */
export const reqUserInfo = () => ajax(url + '/userinfo')

/**
 * 10、用户登出
 */
export const reqLogout = () => ajax(url + '/logout')