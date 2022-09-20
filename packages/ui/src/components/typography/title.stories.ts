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

export const Default = Template.bind({})
Default.args = {
  default: 'Title',
}

export const H2 = Template.bind({})
H2.args = {
  ...Default.args,
  level: 2,
}

export const H3 = Template.bind({})
H3.args = {
  ...Default.args,
  level: 3,
}
