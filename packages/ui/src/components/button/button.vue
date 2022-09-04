<template>
  <component
    :is="href ? 'a' : 'button'"
    :class="classes"
    :href="href"
    :type="typeof href === 'string' ? null : htmlType"
    :target="typeof href === 'string' ? target : null"
    :disabled="disabled"
  >
    <r-icon v-if="$slots.icon">
      <slot name="icon" />
    </r-icon>
    <span v-if="$slots.default" :class="{ 'ml-[8px]': hasIcon }">
      <slot />
    </span>
  </component>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { ref, computed, useSlots, onBeforeUpdate } from 'vue'

import RIcon from '../icon/icon.vue'

const props = defineProps({
  /** 将按钮宽度调整为其父宽度的选项 */
  block: { type: Boolean },
  /** 设置危险按钮 */
  danger: { type: Boolean },
  /** 按钮失效状态 */
  disabled: { type: Boolean },
  /** 幽灵属性，使按钮背景透明 */
  ghost: { type: Boolean },
  /** 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 */
  // eslint-disable-next-line vue/require-default-prop
  href: { type: String },
  /** 设置 button 原生 type 值 */
  htmlType: { type: String as PropType<'button' | 'submit' | 'reset'>, default: 'button' },
  /** 设置按钮形状 */
  shape: { type: String as PropType<'default' | 'circle' | 'round'>, default: 'default' },
  /** 设置按钮大小 */
  size: { type: String as PropType<'large' | 'middle' | 'small'>, default: 'middle' },
  /** 相当于 a 链接的 target 属性，href 存在时生效 */
  // eslint-disable-next-line vue/require-default-prop
  target: { type: String },
  /** 按钮类型 */
  type: {
    type: String as PropType<'default' | 'primary' | 'dashed' | 'text' | 'link'>,
    default: 'default',
  },
})

// const emit = defineEmits(['click'])

const slots = useSlots()
/** 是否包含图标插槽 */
const hasIcon = ref(!!slots.icon)
/** 是否包含默认内容插槽 */
const hasDefault = ref(!!slots.default)

const classes = computed(() => ({
  'r-button': true,
  // Type
  'r-button-default': props.type === 'default',
  'r-button-primary': props.type === 'primary',
  'r-button-dashed': props.type === 'dashed',
  'r-button-text': props.type === 'text',
  'r-button-link': props.type === 'link',
  // Block
  'r-button-block': props.block,
  // Danger
  'r-button-default-danger': props.danger && props.type === 'default',
  'r-button-primary-danger': props.danger && props.type === 'primary',
  'r-button-dashed-danger': props.danger && props.type === 'dashed',
  'r-button-text-danger': props.danger && props.type === 'text',
  'r-button-link-danger': props.danger && props.type === 'link',
  // Ghost
  'r-button-default-ghost': props.ghost && props.type === 'default',
  'r-button-primary-ghost': props.ghost && props.type === 'primary',
  'r-button-dashed-ghost': props.ghost && props.type === 'dashed',
  'r-button-danger-ghost': props.ghost && props.danger,
  // Shape
  'r-button-circle': props.shape === 'circle',
  'r-button-circle-small': props.shape === 'circle' && props.size === 'small',
  'r-button-circle-large': props.shape === 'circle' && props.size === 'large',
  'r-button-round': props.shape === 'round',
  'r-button-round-small': props.shape === 'round' && props.size === 'small',
  'r-button-round-large': props.shape === 'round' && props.size === 'large',
  // Size
  'r-button-large': props.size === 'large',
  'r-button-small': props.size === 'small',
  // Icon
  'r-button-icon': hasIcon.value && !hasDefault.value && props.size === 'middle',
  'r-button-icon-small': hasIcon.value && !hasDefault.value && props.size === 'small',
  'r-button-icon-large': hasIcon.value && !hasDefault.value && props.size === 'large',
}))

onBeforeUpdate(() => {
  hasIcon.value = !!slots.icon
  hasDefault.value = !!slots.default
})
</script>
