<template>
  <i :class="classes" :style="style">
    <slot>
      <component :is="component" v-if="component" />
    </slot>
  </i>
</template>

<script lang="ts" setup>
import type { PropType, Component, StyleValue } from 'vue'
import { computed } from 'vue'

import { addUnit } from '../../utils/helper'

const props = defineProps({
  /** Icon color */
  color: { type: String, default: '' },
  /** Rotate by n degrees (not working in IE9) */
  rotate: { type: Number },
  /** Icon size */
  size: { type: [String, Number], default: '' },
  /** Rotate icon with animation */
  spin: { type: Boolean },
  /** Icon component */
  component: { type: Object as PropType<Component> },
})

const style = computed<StyleValue>(() => {
  const result: StyleValue = {}

  if (props.color) {
    result.color = props.color
  }

  if (props.size) {
    result.fontSize = addUnit(props.size)
  }

  if (typeof props.rotate === 'number') {
    result.transform = `rotate(${props.rotate}deg)`
  }

  return result
})

const classes = computed(() => ({
  'r-icon': true,
  'r-icon-spin': props.spin,
}))
</script>
