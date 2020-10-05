<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1" />
    <Demo :component="Switch2" />
  </div>

</template>

<script lang="ts">
import {ref} from 'vue'

  import Button from '../../lib/Button.vue'
  import Switch1 from '../../components/switch/Switch1.vue'
  import Switch2 from '../../components/switch/Switch2.vue'
  import Demo from '../Demo.vue';


  import 'prismjs';
  import 'prismjs/themes/prism-solarizedlight.css'
  const Prism = (window as any).Prism


  export default {
    components: {Demo,Button},
    setup() {
        const bool = ref(false)
        return {
        bool,Switch2,Switch1, Prism
      }
    }
  }
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
	}
	</style>