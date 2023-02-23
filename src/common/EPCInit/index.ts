import {ElMessage, ElMessageBox, ElMessageBoxOptions, ElNotification, NotificationParams} from 'element-plus'
import {ckPostMessage} from 'chunk-ui'
import {VNode} from 'vue'

const isTop = (top === window)

window.EPC = {
  message: {
    send(message: string, options?: {[key: string]: any}) {
      const opt = {
        ...options,
        message,
      }
      if (isTop) {
        ElMessage(opt)
        return
      }
      const sck = new ckPostMessage(window.parent)
      sck.send('subMessage', opt)
    },
    confirm(message: string | VNode | (() => VNode), title?: string, options?: ElMessageBoxOptions) {
      if (isTop) {
        return ElMessageBox.confirm(message, title, options)
      }
      const sck = new ckPostMessage(window.parent)
      return sck.send('subMessageBox', {
        mType: 'confirm',
        ...options,
        message
      })
    },
    alert(message: string | VNode | (() => VNode), title?: string, options?: ElMessageBoxOptions) {
      if (isTop) {
        return ElMessageBox.alert(message, title, options)
      }
      const sck = new ckPostMessage(window.parent)
      return sck.send('subMessageBox', {
        mType: 'alert',
        ...options,
        message
      })
    },
    prompt(message: string | VNode | (() => VNode), title?: string, options?: ElMessageBoxOptions) {
      if (isTop) {
        return ElMessageBox.prompt(message, title, options)
      }
      const sck = new ckPostMessage(window.parent)
      return sck.send('subMessageBox', {
        mType: 'prompt',
        ...options,
        message
      })
    }
  },
  pop: {
    open: <T>(options: {
      mask: boolean
      width?: number
      height?: number
      contUrl: string
    }):Promise<T> => {
      const isFullUrl = /^[http|https]:\/\/.*/gi
      const opt = {
        ...options
      }
      if (!isFullUrl.test(opt.contUrl)) {
        opt.contUrl = `${window.location.origin}${opt.contUrl}`
      }
      if (isTop) {
        throw console.error('顶级页面弹窗呼起等待实现')
      }
      const sck = new ckPostMessage(window.parent)
      
      return sck.send('openPOP', opt) as Promise<T>
    }
  },
  notification(message: string, title?: string, options?: {[key: string]: any}) {
    if (isTop) {
      ElNotification({
        ...options,
        message,
        title
      })
      return
    }
    const sck = new ckPostMessage(window.parent)
    sck.send('openNotification', {
      ...options,
      message,
      title
    })
  }
}

export {}