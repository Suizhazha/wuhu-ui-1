<template>
  <article class="markdown-body" v-html="md">

  </article>
</template>

<script lang="ts">
import md from '../markdown/getStarted.md';
export default {
  name: 'GetStarted.vue',
data(){
    return{
      md
    }
}
};

</script>

