import type { Meta, Story } from '@storybook/vue3'

import RLink from './link.vue'

export default {
  title: 'design-system/General/Link',
  component: RLink,
} as Meta

const Template: Story = (args) => ({
  components: { RLink },
  setup: () => ({ args }),
  template: '<r-link v-bind="args">{{ args.default }}</r-link>',
})

export const Default = Template.bind({})
Default.args = {
  default: 'Link',
  href: 'https://www.google.com',
  target: '_blank',
}

export const Code = Template.bind({})
Code.args = {
  ...Default.args,
  code: true,
}

export const Delete = Template.bind({})
Delete.args = {
  ...Default.args,
  delete: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true,
}

export const Keyboard = Template.bind({})
Keyboard.args = {
  ...Default.args,
  keyboard: true,
}

export const Mark = Template.bind({})
Mark.args = {
  ...Default.args,
  mark: true,
}

export const Strong = Template.bind({})
Strong.args = {
  ...Default.args,
  strong: true,
}

export const Italic = Template.bind({})
Italic.args = {
  ...Default.args,
  italic: true,
}

export const Success = Template.bind({})
Success.args = {
  ...Default.args,
  type: 'success',
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Default.args,
  type: 'secondary',
}

export const Warning = Template.bind({})
Warning.args = {
  ...Default.args,
  type: 'warning',
}

export const Danger = Template.bind({})
Danger.args = {
  ...Default.args,
  type: 'danger',
}

export const Underline = Template.bind({})
Underline.args = {
  ...Default.args,
  underline: true,
}
