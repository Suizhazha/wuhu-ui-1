<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>WUHU UI</h1>
        <h2>基于Vue3.0的UI框架</h2>
        <p class="actions ">
          <router-link to="/doc/get-started">开始</router-link>
        </p>
      </div>
    </div>
   <div class="features">
    <ul>
      <li>
        <svg class="icon" >
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue3.0 </h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon" >
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于TypeScript </h3>
        <p>源代码采用TypeScript书写（非严格检查）</p>
      </li>
      <li>
        <svg class="icon" >
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读 </h3>
        <p>每个组件的远代码极其简洁</p>
      </li>
    </ul>
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
$green: #0fa5b3;
$color:#091841;

.topnavAndBanner {
  background: linear-gradient(148deg, rgba(243, 246, 252, 1) 0%, rgba(221, 231, 246, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  margin: 64px auto;

  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >.actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>