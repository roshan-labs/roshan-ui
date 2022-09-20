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
})
