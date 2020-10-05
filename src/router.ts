import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchView from './components/switch/SwitchView.vue';
import ButtonView from './components/button/ButtonView.vue';
import DialogView from "./components/dialog/DialogView.vue";
import TabsDemo from "./components/TabsDemo.vue";
import Markdown from './components/Markdown.vue'
import {h} from 'vue'

//创建hash型路由，还有创建内存型路由和history型路由
import {createRouter, createWebHashHistory} from 'vue-router';

const history = createWebHashHistory()
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
//createRouter函数接收options: RouterOptions
//RouterOptions又包括history和router

 export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc,children:[
        {path:'intro',component:md('intro')},
        {path: 'get-started',component: md('getStarted')},
        {path: 'install',component: md('install')},
        { path: "switch", component: SwitchView },
        { path: "button", component: ButtonView },
        { path: "dialog", component: DialogView },
        { path: "tabs", component: TabsDemo }
      ]}
  ]

})
