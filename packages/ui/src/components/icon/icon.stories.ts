import type { Meta, Story } from '@storybook/vue3'

import RIcon from './icon.vue'
import IconAntDesign from '~icons/ant-design/ant-design-outlined'
import IconSmileTwotone from '~icons/ant-design/smile-twotone'
import IconCarFilled from '~icons/ant-design/car-filled'

const meta: Meta = {
  title: '设计系统/通用/图标 Icon',
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

export const Default: Story = (args) => ({
  components: {
    RIcon,
    IconAntDesign,
    IconSmileTwotone,
    IconCarFilled,
  },
  setup: () => ({ args }),
  template: `
    <n-icon v-bind="args">
      <icon-ant-design />
    </n-icon>
    <n-icon v-bind="args">
      <icon-smile-twotone />
    </n-icon>
    <n-icon v-bind="args">
      <icon-car-filled />
    </n-icon>
  `,
})
Default.args = {
  size: 68,
  color: '#2f54eb',
}

export const Rotate = Template.bind({})
Rotate.args = {
  rotate: 180,
}

export const Size = Template.bind({})
Size.args = {
  size: 68,
}

export const Color = Template.bind({})
Color.args = {
  ...Size.args,
  color: '#2f54eb',
}

export const Component: Story = (args) => ({
  components: { RIcon },
  setup: () => ({ args }),
  template: '<n-icon v-bind="args" />',
})
Component.args = {
  ...Size.args,
  component: IconSmileTwotone,
}

export default meta
