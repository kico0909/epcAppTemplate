/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>

  export default component
}

interface ImportMetaEnv {
  // 环境变量声明
  VITE_APP_service: string // epc 业务组件 远程请求的域信息
  VITE_APP_token: string // epc 业务组件 远程请求的认证密钥
}
