/*
 * @Author: ChunkDing
 * @Date: 2022-01-28 09:54:05
 * @Description:
 * Copyright (c) 2022 by ChunkDing, All Rights Reserved.
 */
/*
  API 请求封装
  ChunkDing
  2022-01-21 15:24:00
*/
/*
eslint class-methods-use-this: ["off"]
*/
import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import { ElMessage } from 'element-plus'
import { Http, SetToken } from './http'

Http.defaults.baseURL = `${import.meta.env.VITE_APP_API_Prefix}/api`

type AjaxReturnType = {
  // 请求的基本返回结构
  code: number
  success: boolean
  data: any
  message: string
  pageNum?: number
  pageSize?: number
  total?: number
  totalPages?: number
}

class Api {
  protected SetToken = SetToken

  protected post(url: string, data?: any, config?: AxiosRequestConfig) {
    return new Promise<AjaxReturnType>((resolve, reject) => {
      // 防止报错
      if (config) {
        console.log(config)
      }
      return Http.post(url, data)
        .then((rs: any) => {
          if ((rs as any as AjaxReturnType).code === 200) {
            resolve(rs as any as AjaxReturnType)
            return
          }
          if ((rs as any as AjaxReturnType).code === 803) {
            ElMessage.warning((rs as any as AjaxReturnType).message)
            window.location.href = import.meta.env.VITE_APP_Login_url as string
            return
          }
          reject(rs)
        })
        .catch((e: any) => {
          reject(e)
        })
    })
  }

  protected get(
    url: string,
    data?: { [key: string]: any },
    config?: AxiosRequestConfig,
    type = 'default'
  ) {
    const params: Array<any> = []

    for (const x in data) {
      params.push(`${x}=${data[x]}`)
    }
    return new Promise<AjaxReturnType>((resolve, reject) => {
      const cfg: AxiosRequestConfig = {}
      Http.get(`${url}?${params.join('&')}`, cfg)
        .then((rs: any) => {
          if (rs.code === 200) {
            resolve(rs as any as AjaxReturnType)
            return
          }
          type === 'default' ? reject(rs) : resolve(rs as any as AjaxReturnType)
        })
        .catch((e: any) => {
          reject(e)
        })
    })
  }

  protected delete(url: string, data?: any, config?: AxiosRequestConfig, type: string = 'default') {
    const params: Array<any> = []

    for (const x in data) {
      /* esline-disable-line */
      params.push(`${x}=${data[x]}`)
    }
    return new Promise<AjaxReturnType>((resolve, reject) => {
      let cfg: AxiosRequestConfig = {}

      if (config) {
        cfg = config
      }
      Http.delete(`${url}?${params.join('&')}`, cfg)
        .then((rs: any) => {
          if (rs.code === 200) {
            resolve(rs as any as AjaxReturnType)
            return
          }
          type === 'default' ? reject(rs) : resolve(rs as any as AjaxReturnType)
        })
        .catch((e: any) => {
          reject(e)
        })
    })
  }

  protected put(url: string, data?: any, config?: AxiosRequestConfig, type: string = 'default') {
    return new Promise<AjaxReturnType>((resolve, reject) => {
      let cfg: AxiosRequestConfig = {}

      if (config) {
        cfg = config
      }
      Http.put(url, data, cfg)
        .then((rs: any) => {
          if (rs.code === 200) {
            resolve(rs as any as AjaxReturnType)
            return
          }
          type === 'default' ? reject() : resolve(rs as any as AjaxReturnType)
        })
        .catch((e: any) => {
          reject(e)
        })
    })
  }
}

export default Api

export type { AjaxReturnType, AxiosRequestConfig }
