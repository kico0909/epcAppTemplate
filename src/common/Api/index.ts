// 这里是API 的定义区
import { ckAjax } from 'chunk-ui'

ckAjax.setBasePath(import.meta.env.VITE_APP_ajax_base_url)

// ... .... .... ... .... ....
// ... 如何定义API根据需求随意 ...
// ... .... .... ... .... ....

export default new ckAjax()