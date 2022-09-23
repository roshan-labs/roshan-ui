<template>
  <span :class="classes">
    <code v-if="code" class="r-typography-code"><slot /></code>
    <del v-else-if="del" class="r-typography-delete"><slot /></del>
    <kbd v-else-if="keyboard" class="r-text-keyboard"><slot /></kbd>
    <mark v-else-if="mark" class="r-typography-mark"><slot /></mark>
    <strong v-else-if="strong" class="r-text-strong"><slot /></strong>
    <i v-else-if="italic"><slot /></i>
    <u v-else-if="underline" class="r-text-underline"><slot /></u>
    <slot v-else />
  </span>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'

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
  type: { type: String as PropType<'secondary' | 'success' | 'warning' | 'danger'>, default: '' },
  /** 添加下划线样式 */
  underline: { type: Boolean },
})

// 消除 delete 关键字 eslint 报错
const del = computed(() => props.delete)

const classes = computed(() => ({
  'r-typography': true,
  'r-typography-disabled': props.disabled,
  'r-text-success': props.type === 'success',
  'r-text-secondary': props.type === 'secondary',
  'r-text-warning': props.type === 'warning',
  'r-text-danger': props.type === 'danger',
}))
</script>

<style>
.r-typography {
  @apply text-content break-words;
}

.r-typography-code {
  @apply text-[85%] leading-base px-[.4em] pt-[.2em] pb-[.1em] mx-[.2em] rounded-[3px] border border-solid border-[rgba(100,100,100,.2)] bg-[rgba(150,150,150,.1)];
}

.r-typography-delete {
  @apply line-through;
}

.r-typography-disabled {
  @apply text-disabled-text select-none cursor-not-allowed;
}

.r-text-keyboard {
  @apply text-[90%] leading-base pt-[.15em] px-[.4em] pb-[.1em] mx-[.2em] border border-b-2 border-solid border-[rgba(100,100,100,.2)] rounded-[3px] bg-[rgba(150,150,150,.06)];
}

.r-typography-mark {
  @apply p-0 bg-[#ffe58f];
}

.r-text-strong {
  @apply font-semibold;
}

.r-text-success {
  @apply text-success-base;
}

.r-text-secondary {
  @apply text-[#00000073];
}

.r-text-warning {
  @apply text-warning-base;
}

.r-text-danger {
  @apply text-error-base;
}

.r-text-underline {
  @apply underline;
}
</style>
