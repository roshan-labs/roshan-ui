import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Divider from '../divider.vue'
import * as stories from '../divider.stories'

describe('divider', () => {
  it('renders divider', () => {
    const wrapper = shallowMount(Divider, { props: stories.Default.args })

    expect(wrapper.classes()).toContain('r-divider')
    expect(wrapper.classes()).toContain('r-divider-horizontal')
  })

  it('dashed', () => {
    const wrapper = shallowMount(Divider, { props: stories.Dashed.args })

    expect(wrapper.classes()).toContain('r-divider-dashed')
  })

  it('orientation left', () => {
    const wrapper = shallowMount(Divider, {
      props: stories.Left.args,
      slots: { default: stories.Left.args?.default },
    })

    expect(wrapper.classes()).toContain('r-divider-text')
    expect(wrapper.classes()).toContain('r-divider-text-left')
    expect(wrapper.text()).toBe(stories.Left.args?.default)
  })

  it('orientation right', () => {
    const wrapper = shallowMount(Divider, {
      props: stories.Right.args,
      slots: { default: stories.Right.args?.default },
    })

    expect(wrapper.classes()).toContain('r-divider-text-right')
  })

  it('left orientation margin', () => {
    const wrapper = shallowMount(Divider, {
      props: stories.LeftOrientationMarginWithZero.args,
      slots: { default: stories.LeftOrientationMarginWithZero.args?.default },
    })
    const inner = wrapper.find('.r-divider-inner-text')

    expect(inner.attributes('style')).toContain('margin-left: 0px')
    expect(inner.attributes('style')).toContain('padding-left: 0px')
  })

  it('right orientation margin', () => {
    const wrapper = shallowMount(Divider, {
      props: stories.RightOrientationMarginWithZero.args,
      slots: { default: stories.RightOrientationMarginWithZero.args?.default },
    })
    const inner = wrapper.find('.r-divider-inner-text')

    expect(inner.attributes('style')).toContain('margin-right: 0px')
    expect(inner.attributes('style')).toContain('padding-right: 0px')
  })

  it('plain', () => {
    const wrapper = shallowMount(Divider, {
      props: stories.Plain.args,
      slots: { default: stories.Plain.args?.default },
    })

    expect(wrapper.classes()).toContain('r-divider-plain')
  })

  it('vertical', () => {
    const wrapper = shallowMount(Divider, {
      props: stories.Vertical.args,
    })

    expect(wrapper.classes()).toContain('r-divider-vertical')
  })
})
