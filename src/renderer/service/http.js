/**
 * axios 请求封装
 * 响应拦截 错误处理
 */
import axios from 'axios'
import Vue from 'vue'
import store from '@/store'


let vm = new Vue()
axios.defaults.baseURL = '' //服务器地址
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.timeout = 15000
/** request拦截器 -> 对请求参数做处理 */
axios.interceptors.request.use(config => {
    if (store.state.token) {
        config.headers.Authorization = `token ${store.state.token}`
    }
    return config
}, error => {

    Promise.reject(error)
})
/** respone拦截器 -> 对响应做处理 */
axios.interceptors.response.use(
    response => { 
        switch (response.data.code) {
        case '200':
            break;
        
        case '230':
            vm.$Message.error('抱歉，密码错误')
            break;
        case '202':
            vm.$Message.error('抱歉，修改失败')
            break;
        case '300':
            vm.$Message.error('未登录，请登录账号')
            sessionStorage.clear()
            router.replace({ 
                path: 'login',
                query: {
                    redirect: router.currentRoute.fullPath
                }
            });
            break;
        case '400':
            vm.$Message.error('抱歉，您没有权限访问')
            break;
        case '404':
            vm.$Message.error('抱歉，资源不存在')
            break;
        case '401':
            vm.$Message.error('抱歉，时间错误')
            break;
        case '403':
            vm.$Message.error('抱歉，输入数据不能为空')
            break;
        case '500':
            vm.$Message.error('抱歉，服务器内部出错')
            break;

        }
        return response
    },
    error => { 
        Promise.reject(error)
    }
)

export default {
    post(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, data)
                .then(
                    res => resolve(res.data)
            )
                .catch(
                    err => reject(err)
            )
        })
    },
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params
            })
                .then(
                    res => resolve(res.data)
            )
                .catch(
                    err => reject(err)
            )
        })
    },
    getFile(url, params, headers) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                headers: headers,
                params: params
            })
                .then(
                    res => resolve(res.data)
            )
                .catch(
                    err => reject(err)
            )
        })
    },
    postFile() {
        return new Promise((resolve, reject) => {
            axios.post(url, param, config)
                .then(
                    res => resolve(res.data)
            )
                .catch(
                    err => reject(err)
            )
        })
   

    }
}