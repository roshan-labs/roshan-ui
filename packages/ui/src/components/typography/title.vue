<template>
  <component :is="element" class="r-typography r-title" :class="classes">
    <code v-if="code" class="r-typography-code"><slot /></code>
    <del v-else-if="del" class="r-typography-delete"><slot /></del>
    <mark v-else-if="mark" class="r-typography-mark"><slot /></mark>
    <i v-else-if="italic" class="r-typography-italic"><slot /></i>
    <u v-else-if="underline" class="r-typography-underline"><slot /></u>
    <slot v-else />
  </component>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
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
  /** 添加标记样式 */
  mark: { type: Boolean },
  /** 是否斜体 */
  italic: { type: Boolean },
  /** 文本类型 */
  type: {
    type: String as PropType<'secondary' | 'success' | 'warning' | 'danger' | ''>,
    default: '',
  },
  /** 添加下划线样式 */
  underline: { type: Boolean },
})

const element = computed(() => `h${props.level}`)
// 消除 delete 关键字 eslint 报错
const del = computed(() => props.delete)

const classes = computed(() => ({
  [`r-title-h${props.level}`]: true,
  [`r-typography-${props.type}`]: props.type !== '',
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
