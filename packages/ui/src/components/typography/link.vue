<template>
  <a class="r-link" :class="classes" @click="onClick">
    <code v-if="code" class="r-typography-code"><slot /></code>
    <del v-else-if="del" class="r-typography-delete"><slot /></del>
    <kbd v-else-if="keyboard" class="r-typography-keyboard"><slot /></kbd>
    <mark v-else-if="mark" class="r-typography-mark"><slot /></mark>
    <strong v-else-if="strong" class="r-typography-strong"><slot /></strong>
    <i v-else-if="italic"><slot /></i>
    <u v-else-if="underline" class="r-typography-underline"><slot /></u>
    <slot v-else />
  </a>
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
  /** 添加键盘样式 */
  keyboard: { type: Boolean },
  /** 添加标记样式 */
  mark: { type: Boolean },
  /** 是否加粗 */
  strong: { type: Boolean },
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

const del = computed(() => props.delete)

const classes = computed(() => ({
  'r-typography-disabled': props.disabled,
  [`r-typography-${props.type}`]: !!props.type,
}))

const onClick = (e: Event) => {
  if (props.disabled) {
    e.preventDefault()
  }
}
</script>
