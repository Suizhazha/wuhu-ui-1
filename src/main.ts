import { createApp } from 'vue'

import './lib/wuhu.scss'
import './index.scss'
import App from "./App.vue"
import {router} from './router';

const app = createApp(App)

//使用路由
app.use(router)
app.mount('#app')

