import type { Meta, Story } from '@storybook/vue3'

import RIcon from './icon.vue'
import IconAntDesign from '~icons/ant-design/ant-design-outlined'

const meta: Meta = {
  title: 'design-system/General/Icon',
  component: RIcon,
  argTypes: {
    color: {
      description: '颜色',
      control: 'color',
    },
    size: {
      description: '尺寸',
      control: 'number',
    },
    onClick: {
      description: '点击图标时的回调',
      action: 'click',
    },
  },
}

const Template: Story = (args) => ({
  components: {
    RIcon,
    IconAntDesign,
  },
  setup: () => ({ args }),
  template: `
    <r-icon v-bind="args">
      <icon-ant-design />
    </r-icon>
  `,
})

export const Default = Template.bind({})

export const Rotate = Template.bind({})
Rotate.args = {
  rotate: 180,
}

export const Color = Template.bind({})
Color.args = {
  color: '#2f54eb',
}

export const Size = Template.bind({})
Size.args = {
  size: 68,
}

export const Spin = Template.bind({})
Spin.args = {
  spin: true,
}

export const Component = Template.bind({})
Component.args = {
  component: IconAntDesign,
}

export default meta
