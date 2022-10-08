import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Paragraph from '../paragraph.vue'
import * as stories from '../paragraph.stories'

describe('Paragraph', () => {
  it('renders paragraph', () => {
    const wrapper = shallowMount(Paragraph, {
      props: stories.Default.args,
      slots: { default: stories.Default.args?.default },
    })

    expect(wrapper.classes()).toContain('r-typography')
    expect(wrapper.classes()).toContain('r-paragraph')
    expect(wrapper.text()).toBe(stories.Default.args?.default)
  })

  it('code', () => {
    const wrapper = shallowMount(Paragraph, { props: stories.Code.args })
    const code = wrapper.find('code')

    expect(code.exists()).toBe(true)
    expect(code.classes()).toContain('r-typography-code')
  })

  it('delete', () => {
    const wrapper = shallowMount(Paragraph, { props: stories.Delete.args })
    const del = wrapper.find('del')

    expect(del.exists()).toBe(true)
    expect(del.classes()).toContain('r-typography-delete')
  })

  it('disabled', () => {
    const wrapper = shallowMount(Paragraph, { props: stories.Disabled.args })

    expect(wrapper.classes()).toContain('r-typography-disabled')
  })

  it('mark', () => {
    const wrapper = shallowMount(Paragraph, { props: stories.Mark.args })
    const mark = wrapper.find('mark')

    expect(mark.exists()).toBe(true)
    expect(mark.classes()).toContain('r-typography-mark')
  })

  it('strong', () => {
    const wrapper = shallowMount(Paragraph, { props: stories.Strong.args })
    const strong = wrapper.find('strong')

    expect(strong.exists()).toBe(true)
    expect(strong.classes()).toContain('r-typography-strong')
  })

  it('italic', () => {
    const wrapper = shallowMount(Paragraph, { props: stories.Italic.args })
    const italic = wrapper.find('i')

    expect(italic.exists()).toBe(true)
  })

  it('type', () => {
    const wrapper = shallowMount(Paragraph, { props: stories.Secondary.args })

    expect(wrapper.classes()).toContain('r-typography-secondary')
  })

  it('underline', () => {
    const wrapper = shallowMount(Paragraph, { props: stories.Underline.args })
    const underline = wrapper.find('u')

    expect(underline.exists()).toBe(true)
    expect(underline.classes()).toContain('r-typography-underline')
  })
})
