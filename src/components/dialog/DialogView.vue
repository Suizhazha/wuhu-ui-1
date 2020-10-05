<template>
  <h1>Dialog 组件示例</h1>
  <Demo :component="Dialog1" />
  <Demo :component="Dialog2" />
</template>

<script lang="ts">
import Dialog2 from './Dialog2.vue';
import Dialog1 from './Dialog1.vue';
import Demo from '../Demo.vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Dialog1,
      Dialog2
    }
  }
}
</script>
