import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import test from './components/test.vue'

//创建hash型路由，还有创建内存型路由和history型路由
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()

const router = createRouter({
    history,
    routes: [
        { path: '/', component: test }
    ]

})



createApp(App).mount('#app')
