interface Window {
  __EPC__: {
    getUserInfo: () => any
  }
}

interface ImportMetaEnv {
  // 环境变量声明
  VITE_APP_service: string // epc 业务组件 远程请求的域信息
  VITE_APP_token: string // epc 业务组件 远程请求的认证密钥
  VITE_APP_app_title: string // epc 应用标题
  VITE_APP_app_short_title: string // epc 应用短标题
  VITE_APP_ajax_base_url: string // 请求的基础URL
}