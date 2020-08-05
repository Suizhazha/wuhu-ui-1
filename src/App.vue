<template>

  <router-view />
</template>

<script lang="ts">
  import {ref,provide} from 'vue'

export default {
  name: "App",

  //通过变量（asideVisible）控制，并放入APP组件中
  //使用provide标记，让APP组件可以被子组件访问
  // Topnav和aside使用inject()访问
setup(){
    const width = document.documentElement.clientWidth
//页面宽度大于500，直接显示aside导航栏
    const asideVisible = ref(width<=500?false:true)

  //ctrl点击可查看其属性
  //如：function provide<T>(key: InjectionKey<T> | string, value: T)
  provide('asideVisible',asideVisible)//set
}
};
</script>

