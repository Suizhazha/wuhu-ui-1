<template>
	<h1>Tabs 组件示例</h1>
	<Demo :component="Tabs1" />
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Tabs1 from './Tabs1.vue';

export default {
  components: {
    Demo
  },
  setup(){
    return {
      Tabs1
    }
  }
}
</script>