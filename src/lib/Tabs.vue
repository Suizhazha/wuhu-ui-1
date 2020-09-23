<template>
  <div>
    <div v-for="(t,index) in titles" :key="index">{{t}}</div>
    <component v-for="(c,index) in defaults" :key="index" :is="c" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tabs.vue',
  setup(props,context){
    const defaults = context.slots.default()
    const titles = defaults.map((tab)=>{
      return tab.props.title
    })

    return {defaults,titles}
  }

}
</script>

<style lang="scss" scoped>

</style>