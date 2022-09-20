import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Text from '../text.vue'
import * as stories from '../text.stories'

describe('Text', () => {
  it('renders text', () => {
    const wrapper = shallowMount(Text, {
      slots: {
        default: stories.Default.args?.default,
      },
    })

    expect(wrapper.classes()).toContain('r-typography')
    expect(wrapper.text()).toBe(stories.Default.args?.default)
  })

  it('code', () => {
    const wrapper = shallowMount(Text, { props: stories.Code.args })
    const code = wrapper.find('code')

    expect(code.exists()).toBe(true)
    expect(code.classes()).toContain('r-typography-code')
  })

  it('delete', () => {
    const wrapper = shallowMount(Text, { props: stories.Delete.args })
    const del = wrapper.find('del')

    expect(del.exists()).toBe(true)
    expect(del.classes()).toContain('r-typography-delete')
  })

  it('disabled', () => {
    const wrapper = shallowMount(Text, { props: stories.Disabled.args })

    expect(wrapper.classes()).toContain('r-typography-disabled')
  })

  it('keboard', () => {
    const wrapper = shallowMount(Text, { props: stories.Keyboard.args })
    const kbd = wrapper.find('kbd')

    expect(kbd.exists()).toBe(true)
    expect(kbd.classes()).toContain('r-text-keyboard')
  })

  it('strong', () => {
    const wrapper = shallowMount(Text, { props: stories.Strong.args })
    const strong = wrapper.find('strong')

    expect(strong.exists()).toBe(true)
    expect(strong.classes()).toContain('r-text-strong')
  })

  it('success', () => {
    const wrapper = shallowMount(Text, { props: stories.Success.args })

    expect(wrapper.classes()).toContain('r-text-success')
  })

  it('secondary', () => {
    const wrapper = shallowMount(Text, { props: stories.Secondary.args })

    expect(wrapper.classes()).toContain('r-text-secondary')
  })

  it('warning', () => {
    const wrapper = shallowMount(Text, { props: stories.Warning.args })

    expect(wrapper.classes()).toContain('r-text-warning')
  })

  it('danger', () => {
    const wrapper = shallowMount(Text, { props: stories.Danger.args })

    expect(wrapper.classes()).toContain('r-text-danger')
  })

  it('underline', () => {
    const wrapper = shallowMount(Text, { props: stories.Underline.args })
    const u = wrapper.find('u')

    expect(u.exists()).toBe(true)
    expect(u.classes()).toContain('r-text-underline')
  })
})
