<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>芜湖UI</h1>
        <h2>基于Vue3.0的UI框架</h2>
        <p class="actions ">
          <a href="https://github.com/Suizhazha">Github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
   <div class="features">
     <svg class="icon" >
       <use xlink:href="#icon-vue"></use>
     </svg>
     <svg class="icon" >
       <use xlink:href="#icon-ts"></use>
     </svg>
     <svg class="icon" >
       <use xlink:href="#icon-light"></use>
     </svg>
   </div>
  </div>

</template>


<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav}
};
</script>

<style lang="scss" scoped>
$border-radius: 4px;

.topnavAndBanner {
  background: linear-gradient(148deg, rgba(243, 246, 252, 1) 0%, rgba(221, 231, 246, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.banner {
  color:#091841;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #0fa5b3;
      color: white;
      display: inline-block;
      border-radius: $border-radius;
      padding: 8px 24px;
    }
  }
}
.features{
>svg{
  width: 54px;
  height:54px;
}
}
</style>