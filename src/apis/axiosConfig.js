import axios from 'axios'

import { baseUrl } from './env.js'
import qs from 'qs'

const ax = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    withCredentials: true // 允许携带cookie
})

// 添加请求拦截器
ax.interceptors.request.use(function(config) {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, function(error) {
    return Promise.reject(error);
});

// 添加响应拦截器
ax.interceptors.response.use(function(response) {
    if (process.env.NODE_ENV == 'development') {
        console.log(response.data)
    }
    // switch (response.data.code) {

    // }
    return response;
}, function(error) {
    return Promise.reject(error);
});
export default ax
