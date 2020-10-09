import axios from 'axios'
/**
 * 封装ajax
 * @param {string} url 请求地址
 * @param {object} data 请求要携带的数据
 * @param {string} method 请求方法
 * @returns {promise} promise
 */
function ajax(url = '', data = {}, method = 'GET') {
    // 封装一个ajax方法，在内部使用axios发送请求
    // 可以传发请求时的方法，地址，数据data
    return new Promise(function(resolve, reject) {
        // 为了能够先执行axios的promise，先把axios的promise存一下，执行后，再把结果抛出
        let promise
            // 先判断要发get,还是post请求
        if (method === 'GET') {
            // 如果要发送get, 还携带了数据， 就把数据加在地址后面
            let dataStr = ''
                //keys 获取对象for in 转换成数组
                // forEac 遍历数组
            Object.keys(data).forEach(key => {
                    dataStr += `${key}=${data[key]}&`
                })
                // 如果data为空呢, 不为空的时候，说明有数据，加到url后面
            if (dataStr !== '') {
                // 截取掉最后一个&
                //substring 转化成字符串
                //   lastIndexOf获取（）匹配的下标
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url += `?${dataStr}`
            }
            promise = axios.get(url)
        } else {
            // 如果到这里，说明方法为post
            promise = axios.post(url, data)
        }

        promise
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export default ajax