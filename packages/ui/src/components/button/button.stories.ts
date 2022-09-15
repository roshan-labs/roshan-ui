import type { Meta, Story } from '@storybook/vue3'

import RButton from './button.vue'
import IconSearchOutlined from '~icons/ant-design/search-outlined'

const meta: Meta = {
  title: 'DESIGN-SYSTEM/General/Button',
  component: RButton,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'primary', 'dashed', 'text', 'link'],
    },
    htmlType: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    shape: {
      control: { type: 'select' },
      options: ['default', 'circle', 'round'],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'middle', 'small'],
    },
  },
}

const Template: Story = (args) => ({
  components: { RButton },
  setup: () => ({ args }),
  template: '<r-button v-bind="args">{{ args.default }}</r-button>',
})

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  default: 'Button',
}

export const Primary = Template.bind({})
Primary.args = {
  ...Default.args,
  type: 'primary',
}

export const Dashed = Template.bind({})
Dashed.args = {
  ...Default.args,
  type: 'dashed',
}

export const Text = Template.bind({})
Text.args = {
  ...Default.args,
  type: 'text',
}

export const Link = Template.bind({})
Link.args = {
  ...Default.args,
  type: 'link',
}

export const Block = Template.bind({})
Block.args = {
  ...Primary.args,
  block: true,
}

export const Danger: Story = Template.bind({})
Danger.args = {
  default: 'Default',
  danger: true,
}

export const PrimaryDanger: Story = Template.bind({})
PrimaryDanger.args = {
  default: 'Primary',
  type: 'primary',
  danger: true,
}

export const DashedDanger: Story = Template.bind({})
DashedDanger.args = {
  default: 'Dashed',
  type: 'dashed',
  danger: true,
}

export const TextDanger: Story = Template.bind({})
TextDanger.args = {
  default: 'Text',
  type: 'text',
  danger: true,
}

export const LinkDanger: Story = Template.bind({})
LinkDanger.args = {
  default: 'Link',
  type: 'link',
  danger: true,
}

export const Disabled: Story = (args) => ({
  components: { RButton },
  setup: () => ({ args }),
  template: `
    <div class="children:(block mb-[8px])">
      <r-button v-bind="args" type="primary">Primary(disabled)</r-button>
      <r-button v-bind="args">Default(disabled)</r-button>
      <r-button v-bind="args" type="dashed">Dashed(disabled)</r-button>
      <r-button v-bind="args" type="text">Text(disabled)</r-button>
      <r-button v-bind="args" type="link">Link(disabled)</r-button>
      <r-button v-bind="args" danger>Danger Default(disabled)</r-button>
      <r-button v-bind="args" type="text" danger>Danger Text(disabled)</r-button>
      <r-button v-bind="args" type="link" danger>Danger Link(disabled)</r-button>
    </div>
  `,
})
Disabled.args = {
  disabled: true,
}

export const Ghost: Story = Template.bind({})
Ghost.decorators = [() => ({ template: '<div class="bg-gray-400 p-md"><story /></div>' })]
Ghost.args = {
  default: 'Ghost',
  ghost: true,
}

export const PrimaryGhost: Story = Template.bind({})
PrimaryGhost.decorators = Ghost.decorators
PrimaryGhost.args = {
  ...Ghost.args,
  type: 'primary',
}

export const DashedGhost: Story = Template.bind({})
DashedGhost.decorators = Ghost.decorators
DashedGhost.args = {
  ...Ghost.args,
  type: 'dashed',
}

export const DangerGhost: Story = Template.bind({})
DangerGhost.decorators = Ghost.decorators
DangerGhost.args = {
  ...Ghost.args,
  danger: true,
}

export const Href = Template.bind({})
Href.args = {
  default: 'Google',
  type: 'link',
  href: 'https://www.google.com',
}

export const HtmlType = Template.bind({})
HtmlType.args = {
  ...Primary.args,
  htmlType: 'button',
}

export const CircleShape: Story = Template.bind({})
CircleShape.args = {
  default: 'A',
  shape: 'circle',
}

export const RoundShape: Story = Template.bind({})
RoundShape.args = {
  default: 'A',
  shape: 'round',
}

export const LargeSize: Story = (args) => ({
  components: { RButton },
  setup: () => ({ args }),
  template: `
    <div class="mb-[16px] children:mr-[8px]">
      <r-button v-bind="args" type="primary">Button</r-button>
      <r-button v-bind="args">Button</r-button>
      <r-button v-bind="args" type="dashed">Button</r-button>
      <r-button v-bind="args" type="link">Button</r-button>
    </div>
    <div class="children:mr-[8px]">
      <r-button v-bind="args" type="primary">A</r-button>
      <r-button v-bind="args" type="primary" shape="circle">A</r-button>
      <r-button v-bind="args" type="primary" shape="round">A</r-button>
      <r-button v-bind="args" type="primary" shape="round">Button</r-button>
    </div>
  `,
})
LargeSize.args = {
  size: 'large',
}

export const SmallSize: Story = LargeSize.bind({})
SmallSize.args = {
  size: 'small',
}

export const Target = Template.bind({})
Target.args = {
  ...Href.args,
  target: '_blank',
}

export const Icon: Story = (args) => ({
  components: {
    RButton,
    IconSearchOutlined,
  },
  setup: () => ({ args }),
  template: `
    <div class="children:mr-[8px]">
      <r-button v-bind="args">
        <template #icon>
          <icon-search-outlined />
        </template>
        search
      </r-button>
      <r-button v-bind="args">
        <template #icon>
          <icon-search-outlined />
        </template>
      </r-button>
      <r-button v-bind="args" shape="circle">
        <template #icon>
          <icon-search-outlined />
        </template>
      </r-button>
    </div>
  `,
})
Icon.args = {
  type: 'primary',
}

export default meta
