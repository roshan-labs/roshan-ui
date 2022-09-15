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
