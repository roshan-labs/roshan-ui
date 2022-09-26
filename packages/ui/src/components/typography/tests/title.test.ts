import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Title from '../title.vue'
import * as stories from '../title.stories'

describe('Title', () => {
  it('renders title', () => {
    const wrapper = shallowMount(Title, {
      slots: {
        default: stories.H1.args?.default,
      },
    })

    expect(wrapper.classes()).toContain('r-typography')
    expect(wrapper.classes()).toContain('r-title')
    expect(wrapper.text()).toBe(stories.H1.args?.default)
  })

  it('code', () => {
    const wrapper = shallowMount(Title, { props: stories.Code.args })
    const code = wrapper.find('code')

    expect(code.exists()).toBe(true)
    expect(code.classes()).toContain('r-typography-code')
  })

  it('level', () => {
    const wrapper = shallowMount(Title, { props: stories.H2.args })

    expect(wrapper.element.tagName).toBe('H2')
    expect(wrapper.classes()).toContain('r-title-h2')
  })

  it('delete', () => {
    const wrapper = shallowMount(Title, { props: stories.Delete.args })
    const del = wrapper.find('del')

    expect(del.exists()).toBe(true)
    expect(del.classes()).toContain('r-typography-delete')
  })

  it('disabled', () => {
    const wrapper = shallowMount(Title, { props: stories.Disabled.args })

    expect(wrapper.classes()).toContain('r-typography-disabled')
  })

  it('mark', () => {
    const wrapper = shallowMount(Title, { props: stories.Mark.args })
    const mark = wrapper.find('mark')

    expect(mark.exists()).toBe(true)
    expect(mark.classes()).toContain('r-typography-mark')
  })

  it('italic', () => {
    const wrapper = shallowMount(Title, { props: stories.Italic.args })

    expect(wrapper.find('i').exists()).toBe(true)
  })

  it('success', () => {
    const wrapper = shallowMount(Title, { props: stories.Success.args })

    expect(wrapper.classes()).toContain('r-typography-success')
  })

  it('secondary', () => {
    const wrapper = shallowMount(Title, { props: stories.Secondary.args })

    expect(wrapper.classes()).toContain('r-typography-secondary')
  })

  it('warning', () => {
    const wrapper = shallowMount(Title, { props: stories.Warning.args })

    expect(wrapper.classes()).toContain('r-typography-warning')
  })

  it('danger', () => {
    const wrapper = shallowMount(Title, { props: stories.Danger.args })

    expect(wrapper.classes()).toContain('r-typography-danger')
  })

  it('underline', () => {
    const wrapper = shallowMount(Title, { props: stories.Underline.args })
    const u = wrapper.find('u')

    expect(u.exists()).toBe(true)
    expect(u.classes()).toContain('r-typography-underline')
  })
})
