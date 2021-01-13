/**
 * 基于 axios 封装的请求模块
 */

import axios from 'axios'

// 创建一个axios 实例
// 我们通过这个实例区发送请求，把需要的配置给这个实例来处理
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 请求的基本路径
})

// 导出请求方法
export default request
