import type { Meta, Story } from '@storybook/vue3'

import RTitle from './title.vue'

export default {
  title: 'design-system/General/Title',
  component: RTitle,
} as Meta

const Template: Story = (args) => ({
  components: { RTitle },
  setup: () => ({ args }),
  template: '<r-title v-bind="args">{{ args.default }}</r-title>',
})

export const H1 = Template.bind({})
H1.args = {
  default: 'Title',
}

export const H2 = Template.bind({})
H2.args = {
  ...H1.args,
  level: 2,
}

export const H3 = Template.bind({})
H3.args = {
  ...H1.args,
  level: 3,
}

export const H4 = Template.bind({})
H4.args = {
  ...H1.args,
  level: 4,
}

export const H5 = Template.bind({})
H5.args = {
  ...H1.args,
  level: 5,
}

export const Code = Template.bind({})
Code.args = {
  ...H1.args,
  code: true,
}

export const Delete = Template.bind({})
Delete.args = {
  ...H1.args,
  delete: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...H1.args,
  disabled: true,
}

export const Mark = Template.bind({})
Mark.args = {
  ...H1.args,
  mark: true,
}

export const Italic = Template.bind({})
Italic.args = {
  ...H1.args,
  italic: true,
}

export const Success = Template.bind({})
Success.args = {
  ...H1.args,
  type: 'success',
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...H1.args,
  type: 'secondary',
}

export const Warning = Template.bind({})
Warning.args = {
  ...H1.args,
  type: 'warning',
}

export const Danger = Template.bind({})
Danger.args = {
  ...H1.args,
  type: 'danger',
}

export const Underline = Template.bind({})
Underline.args = {
  ...H1.args,
  underline: true,
}
