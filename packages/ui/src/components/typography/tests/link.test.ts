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
})
