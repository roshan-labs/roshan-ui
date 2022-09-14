import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import Button from '../button.vue'
import * as Stories from '../button.stories'

describe('Button', () => {
  it('renders button', () => {
    const wrapper = mount(Button)

    expect(wrapper.classes()).toContain('r-button')
    expect(wrapper.classes()).toContain('r-button-default')
  })

  it('primary button', () => {
    const wrapper = mount(Button, { props: Stories.Primary.args })

    expect(wrapper.classes()).toContain('r-button-primary')
  })

  it('dashed button', () => {
    const wrapper = mount(Button, { props: Stories.Dashed.args })

    expect(wrapper.classes()).toContain('r-button-dashed')
  })

  it('text button', () => {
    const wrapper = mount(Button, { props: Stories.Text.args })

    expect(wrapper.classes()).toContain('r-button-text')
  })

  it('link button', () => {
    const wrapper = mount(Button, { props: Stories.Link.args })

    expect(wrapper.classes()).toContain('r-button-link')
  })

  it('block', () => {
    const wrapper = mount(Button, { props: Stories.Block.args })

    expect(wrapper.classes()).toContain('r-button-block')
  })

  it('default danger', () => {
    const wrapper = mount(Button, { props: Stories.Danger.args })

    expect(wrapper.classes()).toContain('r-button-default-danger')
  })

  it('primary danger', () => {
    const wrapper = mount(Button, { props: Stories.PrimaryDanger.args })

    expect(wrapper.classes()).toContain('r-button-primary-danger')
  })

  it('dashed danger', () => {
    const wrapper = mount(Button, { props: Stories.DashedDanger.args })

    expect(wrapper.classes()).toContain('r-button-dashed-danger')
  })

  it('text danger', () => {
    const wrapper = mount(Button, { props: Stories.TextDanger.args })

    expect(wrapper.classes()).toContain('r-button-text-danger')
  })

  it('link danger', () => {
    const wrapper = mount(Button, { props: Stories.LinkDanger.args })

    expect(wrapper.classes()).toContain('r-button-link-danger')
  })

  it('disabled', () => {
    const wrapper = mount(Button, { props: Stories.Disabled.args })

    expect(Object.keys(wrapper.attributes())).toContain('disabled')
  })

  it('default ghost', () => {
    const wrapper = mount(Button, { props: Stories.Ghost.args })

    expect(wrapper.classes()).toContain('r-button-default-ghost')
  })

  it('primary ghost', () => {
    const wrapper = mount(Button, { props: Stories.PrimaryGhost.args })

    expect(wrapper.classes()).toContain('r-button-primary-ghost')
  })

  it('dashed ghost', () => {
    const wrapper = mount(Button, { props: Stories.DashedGhost.args })

    expect(wrapper.classes()).toContain('r-button-dashed-ghost')
  })

  it('danger ghost', () => {
    const wrapper = mount(Button, { props: Stories.DangerGhost.args })

    expect(wrapper.classes()).toContain('r-button-danger-ghost')
  })

  it('href', () => {
    const wrapper = mount(Button, {
      props: Stories.Href.args,
      slots: {
        default: Stories.Href.args?.default,
      },
    })

    expect(wrapper.find('a').exists()).toBeTruthy()
    expect(wrapper.attributes('type')).toBeFalsy()
    expect(wrapper.attributes('href')).toBe('https://www.google.com')
    expect(wrapper.text()).toBe('Google')
  })

  it('html-type', () => {
    const wrapper = mount(Button, { props: Stories.HtmlType.args })

    expect(wrapper.attributes('type')).toBe('button')
  })

  it('circle shape', () => {
    const wrapper = mount(Button, {
      props: Stories.CircleShape.args,
      slots: Stories.CircleShape.args?.default,
    })

    expect(wrapper.classes()).toContain('r-button-circle')
  })

  it('round shape', () => {
    const wrapper = mount(Button, {
      props: Stories.RoundShape.args,
      slots: Stories.RoundShape.args?.default,
    })

    expect(wrapper.classes()).toContain('r-button-round')
  })

  it('large size', () => {
    const wrapper = mount(Button, { props: Stories.LargeSize.args })

    expect(wrapper.classes()).toContain('r-button-large')
  })

  it('small size', () => {
    const wrapper = mount(Button, { props: Stories.SmallSize.args })

    expect(wrapper.classes()).toContain('r-button-small')
  })
})
