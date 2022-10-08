import type { Meta, Story } from '@storybook/vue3'

import RDivider from './divider.vue'

export default {
  title: 'DESIGN-SYSTEM/Layout/Divider',
  component: RDivider,
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    type: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
} as Meta

const Template: Story = (args) => ({
  components: { RDivider },
  setup: () => ({ args }),
  template: `
    <component :is="args.type === 'vertical' ? 'span' : 'p'">啊</component>
    <r-divider v-bind="args">{{ args.default }}</r-divider>
    <component :is="args.type === 'vertical' ? 'span' : 'p'">啊</component>
  `,
})

export const Default = Template.bind({})

export const Dashed = Template.bind({})
Dashed.args = {
  dashed: true,
}

export const Left = Template.bind({})
Left.args = {
  default: '左',
  orientation: 'left',
}

export const Center = Template.bind({})
Center.args = {
  default: '中',
}

export const Right = Template.bind({})
Right.args = {
  default: '右',
  orientation: 'right',
}

export const LeftOrientationMarginWithZero = Template.bind({})
LeftOrientationMarginWithZero.args = {
  ...Left.args,
  orientationMargin: 0,
}

export const RightOrientationMarginWithZero = Template.bind({})
RightOrientationMarginWithZero.args = {
  ...Right.args,
  orientationMargin: 0,
}

export const Plain = Template.bind({})
Plain.args = {
  ...Left.args,
  plain: true,
}

export const Vertical = Template.bind({})
Vertical.args = {
  type: 'vertical',
}
