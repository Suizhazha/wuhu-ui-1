import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import test from './components/test.vue'
import test2 from './components/test2.vue'



//创建hash型路由，还有创建内存型路由和history型路由

import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()

//createRouter函数接收options: RouterOptions
//RouterOptions又包括history和router
const router = createRouter({
    history,
    routes: [
        { path: '/', component: test },
        { path: '/xxx', component: test2 }
    ]

})



const app = createApp(App)

//使用路由
app.use(router)
app.mount('#app')
