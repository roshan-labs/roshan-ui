<template>
  <component :is="element" class="r-typography r-title" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  /** 标题等级，相当于 h1、h2、h3、h4、h5 */
  level: { type: Number, default: 1 },
})

const element = computed(() => `h${props.level}`)

const classes = computed(() => ({
  'r-title-h1': props.level === 1,
  'r-title-h2': props.level === 2,
  'r-title-h3': props.level === 3,
}))
</script>

<style>
.r-title {
  @apply font-semibold mt-0 mb-[.5em] sibling:mt-[1.2em];
}

.r-title-h1 {
  @apply text-[38px] leading-[1.23];
}

.r-title-h2 {
  @apply text-[30px] leading-[1.35];
}

.r-title-h3 {
  @apply text-[24px] leading-[1.35];
}
</style>
