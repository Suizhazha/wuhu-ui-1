<template>
  <div>
    导航栏
    |
    <router-link to="/">test</router-link>|
    <router-link to="/xxx">test2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
