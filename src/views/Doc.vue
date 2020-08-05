<template>
  <div>
    <Topnav/>
    <div class="content">
      <!--asideVisible变化,aside也要变化-->
      <aside v-if = 'asideVisible'>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>

          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>

          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>

          </li>
        </ol>
      </aside>

      <main>主内容</main>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue'
  import {inject, Ref} from 'vue'
  export default {
    components:{Topnav},
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible'); //get
      console.log('Doc aside 获取的 asideVisible 为：' + asideVisible.value);
      return {asideVisible}//v-if 需要return
    }
  }







</script>


<style lang="scss" scoped>
aside {
  background: deepskyblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
> h2 {
    margin-bottom: 4px;
  }
> ol {
  > li {
      padding: 4px 0;
    }
  }
}
</style>