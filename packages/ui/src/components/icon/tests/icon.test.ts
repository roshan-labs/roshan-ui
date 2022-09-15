import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Icon from '../icon.vue'
import IconAntDesign from '~icons/ant-design/ant-design-outlined'
import * as stories from '../icon.stories'

describe('Icon', () => {
  it('renders icon', () => {
    const wrapper = shallowMount(Icon, {
      slots: {
        default: IconAntDesign,
      },
    })

    expect(wrapper.classes()).toContain('r-icon')
    expect(wrapper.getComponent(IconAntDesign)).toBeTruthy()
  })

  it('color', () => {
    const wrapper = shallowMount(Icon, {
      props: stories.Color.args,
    })

    expect(wrapper.attributes('style')).toContain(`color: ${stories.Color.args?.color}`)
  })

  it('rotate', () => {
    const wrapper = shallowMount(Icon, {
      props: stories.Rotate.args,
    })

    expect(wrapper.attributes('style')).toContain('transform: rotate(180deg)')
  })

  it('size', () => {
    const wrapper = shallowMount(Icon, { props: stories.Size.args })

    expect(wrapper.attributes('style')).toContain(`font-size: ${stories.Size.args?.size}`)
  })

  it('spin', () => {
    const wrapper = shallowMount(Icon, { props: stories.Spin.args })

    expect(wrapper.classes('r-icon-spin')).toBe(true)
  })

  it('component', () => {
    const wrapper = shallowMount(Icon, { props: stories.Component.args })

    expect(wrapper.getComponent(IconAntDesign)).toBeTruthy()
  })
})
