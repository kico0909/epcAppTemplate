declare interface Window {
  export EPC: {
    message: {
      send: (message: string, options?: {[key: string]: any}) => void,
      confirm: (message: string | import('vue').VNode | (() => import('vue').VNode), title?: string, options?: {[key: string]: any}) => void | Promise<any>
      alert: (message: string | import('vue').VNode | (() => import('vue').VNode), title?: string, options?: {[key: string]: any}) => void | Promise<any>
      prompt: (message: string | import('vue').VNode | (() => import('vue').VNode), title?: string, options?: {[key: string]: any}) => void | Promise<any>
    },
    
    pop: {
      open: <T>(options: {
        mask?: boolean
        width?: number
        height?: number
        contUrl: string
      }) => Promise<T>,
    },

    notification: (message: string, title?: string, options?: {[key: string]: any}) => void
  }
}