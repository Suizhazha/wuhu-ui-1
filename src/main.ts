import { createApp } from 'vue'

// @ts-ignore
import App from "./App.vue"
import './index.scss'

// @ts-ignore
import Home from './views/Home.vue'

// @ts-ignore
import Doc from './views/Doc.vue'



//创建hash型路由，还有创建内存型路由和history型路由

import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()

//createRouter函数接收options: RouterOptions
//RouterOptions又包括history和router
const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        { path: '/xxx', component: Doc }
    ]

})



const app = createApp(App)

//使用路由
app.use(router)
app.mount('#app')
