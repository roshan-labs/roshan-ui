import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Title from '../title.vue'
import * as stories from '../title.stories'

describe('Title', () => {
  it('renders title', () => {
    const wrapper = shallowMount(Title, {
      slots: {
        default: stories.Default.args?.default,
      },
    })

    expect(wrapper.classes()).toContain('r-typography')
    expect(wrapper.classes()).toContain('r-title')
    expect(wrapper.text()).toBe(stories.Default.args?.default)
  })

  it('level', () => {
    const wrapper = shallowMount(Title, { props: stories.H2.args })

    expect(wrapper.element.tagName).toBe('H2')
    expect(wrapper.classes()).toContain('r-title-h2')
  })
})
