<template>
  <div class="wuhu-tabs">
    <div class="wuhu-tabs-nav" ref="container">
      <div class="wuhu-tabs-nav-item"
           :class="{selected: t===selected}"
           v-for="(t,index) in titles"
           :key="index"
           :ref='el =>{
             if (el)
               navItems[index] =el
           }'
           @click="select(t)"
      >{{ t }}
      </div>
      <div class="wuhu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="wuhu-tabs-content">
      <component
          class="wuhu-tabs-content-item"
          :class="{selected:c.props.title === selected}"
          v-for="(c,index) in defaults"
          :key="index"
          :is="c"
      />
    </div>
  </div>
</template>

<script lang="ts">

import Tab from './Tab.vue';
import {ref, onMounted,onUpdated} from 'vue';

export default {
  name: 'Tabs.vue',
  props: {
    selected: {
      type: String,
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });

    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x= () => {
      const divs = navItems.value;
      const result = divs.filter(div => div.classList.contains('selected'))[0];
      const {width} = result.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const {left:left1} =container.value.getBoundingClientRect()
      const {left:left2} =result.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left  = left +'px'
    }
    onMounted(x);
    onUpdated(x)

    return {
      defaults,
      titles,
      select,
      navItems,
      indicator,
      container
    };

  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.wuhu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>