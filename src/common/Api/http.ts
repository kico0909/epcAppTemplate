/*
 * @Author: ChunkDing
 * @Date: 2022-06-20 21:54:23
 * @Description: 
 * Copyright (c) 2022 by ChunkDing, All Rights Reserved. 
 */

/*
eslint no-param-reassign: ["off"],
consistent-return: ["off"]
*/
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

function SetToken(token: string) {
  window.sessionStorage.setItem('gdjwt_', token)
}

function GetToken(cfg?: AxiosRequestConfig): string {
  const token = window.sessionStorage.getItem('gdjwt_')
  // jwt 不存在
  if (!token && cfg) {
    const { baseURL, url } = cfg;
    if (`${baseURL}${url}` === import.meta.env.VITE_APP_Login_api_path) return ''
    window.location.href = import.meta.env.VITE_APP_Login_url as string;
    return ''
  }
  return token ? token : ''
}

const Http = axios.create({
  baseURL: '', // api请求的baseURL
  timeout: 600000,
  withCredentials: true, // 允许跨域 cookie
  headers: {
    'Content-Type': 'application/json'
  },
  maxContentLength: 2000
})

// 请求拦截器
Http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    ;(config.headers as any).Token = GetToken(config)
    return config
  },
  (err: AxiosRequestConfig) => {
    return Promise.reject(err)
  }
)

Http.interceptors.response.use(
  (response: AxiosResponse) => {
    switch (response.status) {
      default:
        if (
          response.config.responseType === 'blob' ||
          response.config.responseType === 'arraybuffer'
        ) {
          return response.data
        }
        if (response.data.code && response.data.code === 802) {
          window.location.href = `${import.meta.env.VITE_APP_Login_url}`
        }
        return response.data
    }
  },
  (err: any) => {
    const ErrMsg = `服务器请求[${err.config.baseURL}${err.config.url}],返回错误! 错误代码[${err.toJSON().status}]`
    const rs = { code: err.response.status, message: ErrMsg, data: null, success: false }
    ElMessage.error(ErrMsg)
    return rs
  }
)

export { Http, SetToken, GetToken }

// export default {
//   async install(app: any) { /* eslint-disable-line */
//     app.config.globalProperties.$Http = Http;
//   },
// };
