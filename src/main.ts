import { createApp } from 'vue'

// @ts-ignore
import App from "./App.vue"
import './index.scss'
import {router} from './router';

const app = createApp(App)

//使用路由
app.use(router)
app.mount('#app')

