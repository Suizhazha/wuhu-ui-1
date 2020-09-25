import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import Intro from './views/Intro.vue'
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'

//创建hash型路由，还有创建内存型路由和history型路由
import {createRouter, createWebHashHistory} from 'vue-router';

const history = createWebHashHistory()

//createRouter函数接收options: RouterOptions
//RouterOptions又包括history和router

 export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc,children:[
        {path:'intro',component:Intro},
        {path: 'get-started',component: GetStarted},
        {path: 'install',component: Install},
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo }
      ]}
  ]

})
