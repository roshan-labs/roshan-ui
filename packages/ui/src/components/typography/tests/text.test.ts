import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Text from '../text.vue'
import * as stories from '../text.stories'

describe('Text', () => {
  it('renders text', () => {
    const wrapper = shallowMount(Text)

    expect(wrapper.classes()).toContain('r-text')
  })

  it('code', () => {
    const wrapper = shallowMount(Text, { props: stories.Code.args })
    const code = wrapper.find('code')

    expect(code.exists()).toBe(true)
    expect(code.classes()).toContain('r-text-code')
  })

  it('delete', () => {
    const wrapper = shallowMount(Text, { props: stories.Delete.args })
    const del = wrapper.find('del')

    expect(del.exists()).toBe(true)
    expect(del.classes()).toContain('r-text-delete')
  })

  it('disabled', () => {
    const wrapper = shallowMount(Text, { props: stories.Disabled.args })

    expect(wrapper.classes()).toContain('r-text-disabled')
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
})
