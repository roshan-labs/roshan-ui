<script lang="ts">
import type { PropType, StyleValue } from 'vue'
import { computed, defineComponent, ref, h } from 'vue'

import { filterChildren } from '../../utils/helper'

export default defineComponent({
  props: {
    /** 是否虚线 */
    dashed: { type: Boolean },
    /** 分割线标题的位置 */
    orientation: { type: String as PropType<'left' | 'right' | 'center'>, default: 'center' },
    /** 标题和最近 left/right 边框之间的距离，去除了分割线，同时 orientation 必须为 left 或 right */
    orientationMargin: { type: [String, Number], default: '' },
    /** 文字是否显示为普通正文样式 */
    plain: { type: Boolean },
    /** 水平还是垂直类型 */
    type: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
  },
  setup(props, { slots }) {
    const hasSlot = ref(false)

    const hasOrientationLeft = computed(
      () =>
        props.type === 'horizontal' &&
        hasSlot.value &&
        props.orientation === 'left' &&
        props.orientationMargin !== ''
    )

    const hasOrientationRight = computed(
      () =>
        props.type === 'horizontal' &&
        hasSlot.value &&
        props.orientation === 'right' &&
        props.orientationMargin !== ''
    )

    const classes = computed(() => ({
      'r-divider': true,
      'r-divider-horizontal': props.type === 'horizontal',
      'r-divider-vertical': props.type === 'vertical',
      'r-divider-dashed': props.dashed,
      'r-divider-text': props.type === 'horizontal' && hasSlot.value,
      'r-divider-text-dashed': props.dashed && hasSlot.value,
      'r-divider-text-left': props.type === 'horizontal' && props.orientation === 'left',
      'r-divider-text-right': props.type === 'horizontal' && props.orientation === 'right',
      'r-divider-plain': props.plain,
      'r-divider-orientation-left': hasOrientationLeft.value,
      'r-divider-orientation-right': hasOrientationRight.value,
    }))

    const innerStyle = computed<StyleValue>(() => {
      const style: StyleValue = {}

      if (hasOrientationLeft.value) {
        style.marginLeft = `${props.orientationMargin}px`

        if (String(props.orientationMargin) === '0') {
          style.paddingLeft = '0px'
        }
      }

      if (hasOrientationRight.value) {
        style.marginRight = `${props.orientationMargin}px`

        if (String(props.orientationMargin) === '0') {
          style.paddingRight = '0px'
        }
      }

      return style
    })

    return () => {
      hasSlot.value = filterChildren(slots.default?.()).length > 0

      return h(
        'div',
        { class: classes.value },
        props.type === 'horizontal' && hasSlot.value
          ? h('span', { class: 'r-divider-inner-text', style: innerStyle.value }, slots.default?.())
          : undefined
      )
    }
  },
})
</script>
