import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Text from '../text.vue'

describe('Text', () => {
  it('renders text', () => {
    const wrapper = shallowMount(Text)

    expect(wrapper.classes()).toContain('r-text')
  })
})
