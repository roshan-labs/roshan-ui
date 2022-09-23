<template>
  <component :is="element" class="r-typography r-title" :class="classes">
    <code v-if="code" class="r-typography-code"><slot /></code>
    <del v-else-if="del" class="r-typography-delete"><slot /></del>
    <slot v-else />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  /** 添加代码样式 */
  code: { type: Boolean },
  /** 添加删除线样式 */
  delete: { type: Boolean },
  /** 禁用文本 */
  disabled: { type: Boolean },
  /** 标题等级，相当于 h1、h2、h3、h4、h5 */
  level: { type: Number, default: 1 },
})

const element = computed(() => `h${props.level}`)
// 消除 delete 关键字 eslint 报错
const del = computed(() => props.delete)

const classes = computed(() => ({
  [`r-title-h${props.level}`]: true,
  'r-typography-disabled': props.disabled,
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

.r-title-h4 {
  @apply text-[20px] leading-[1.4];
}

.r-title-h5 {
  @apply text-[16px] leading-normal;
}
</style>
