import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Icon from '../icon.vue'
import IconAntDesign from '~icons/ant-design/ant-design-outlined'

describe('Icon', () => {
  it('renders icon', () => {
    const wrapper = mount(Icon, {
      slots: {
        default: IconAntDesign,
      },
    })

    expect(wrapper.classes()).toContain('r-icon')
    expect(wrapper.getComponent(IconAntDesign)).toBeTruthy()
  })
})
