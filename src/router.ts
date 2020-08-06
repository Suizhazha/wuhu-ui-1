// @ts-ignore
import Home from './views/Home.vue'

// @ts-ignore
import Doc from './views/Doc.vue'

// @ts-ignore
import SwitchDemo from './components/SwitchDemo.vue';
// @ts-ignore
import ButtonDemo from './components/ButtonDemo.vue';
// @ts-ignore
import DialogDemo from "./components/DialogDemo.vue";
// @ts-ignore
import TabsDemo from "./components/TabsDemo.vue";


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
        {
          path: 'switch',component: SwitchDemo
        },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo }
      ]}
  ]

})
