<template>
    <div>
  <!--value不仅仅是初始状态，还可以表示更新后的状态-->
        <!--:value是变量，value是字符串 -->
        <!--@input对应Switch组件中的emit中的接收的第一个事件，
       $event对应emit中的!props.value -->

<Switch :value = "y" @input=" y = $event" />
    </div>
</template>

<script lang="ts">
    import Switch from '../lib/Switch.vue';
    import { ref } from 'vue'
  export default {
    components: {Switch},
    setup(){
      const y = ref(false)
      return {y}
    }
  }
</script>

<style lang="scss" scoped>

</style>