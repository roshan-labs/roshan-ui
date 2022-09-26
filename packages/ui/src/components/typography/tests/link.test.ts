import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Link from '../link.vue'
import * as stories from '../link.stories'

describe('Link', () => {
  it('renders link', () => {
    const wrapper = shallowMount(Link, {
      props: stories.Default.args,
      slots: {
        default: stories.Default.args?.default,
      },
    })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.text()).toBe('Link')
  })

  it('code', () => {
    const wrapper = shallowMount(Link, { props: stories.Code.args })
    const code = wrapper.find('code')

    expect(code.exists()).toBe(true)
    expect(code.classes()).toContain('r-typography-code')
  })

  it('delete', () => {
    const wrapper = shallowMount(Link, { props: stories.Delete.args })
    const del = wrapper.find('del')

    expect(del.exists()).toBe(true)
    expect(del.classes()).toContain('r-typography-delete')
  })

  it('disabled', () => {
    const wrapper = shallowMount(Link, { props: stories.Disabled.args })

    expect(wrapper.classes()).toContain('r-typography-disabled')
  })

  it('keyboard', () => {
    const wrapper = shallowMount(Link, { props: stories.Keyboard.args })
    const kbd = wrapper.find('kbd')

    expect(kbd.exists()).toBe(true)
    expect(kbd.classes()).toContain('r-typography-keyboard')
  })

  it('mark', () => {
    const wrapper = shallowMount(Link, { props: stories.Mark.args })
    const mark = wrapper.find('mark')

    expect(mark.exists()).toBe(true)
    expect(mark.classes()).toContain('r-typography-mark')
  })

  it('strong', () => {
    const wrapper = shallowMount(Link, { props: stories.Strong.args })
    const strong = wrapper.find('strong')

    expect(strong.exists()).toBe(true)
    expect(strong.classes()).toContain('r-typography-strong')
  })

  it('italic', () => {
    const wrapper = shallowMount(Link, { props: stories.Italic.args })
    const italic = wrapper.find('i')

    expect(italic.exists()).toBe(true)
  })

  it('type', () => {
    const wrapper = shallowMount(Link, { props: stories.Success.args })

    expect(wrapper.classes()).toContain('r-typography-success')
  })

  it('underline', () => {
    const wrapper = shallowMount(Link, { props: stories.Underline.args })
    const u = wrapper.find('u')

    expect(u.exists()).toBe(true)
    expect(u.classes()).toContain('r-typography-underline')
  })
})
