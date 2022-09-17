import { Meta, Story } from '@storybook/vue3'

import RText from './text.vue'

const meta: Meta = {
  title: 'design-system/General/Text',
  component: RText,
}

export default meta

const Template: Story = (args) => ({
  components: { RText },
  setup: () => ({ args }),
  template: '<r-text v-bind="args">{{ args.default }}</r-text>',
})

export const Default = Template.bind({})
Default.args = {
  default: 'Text',
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
