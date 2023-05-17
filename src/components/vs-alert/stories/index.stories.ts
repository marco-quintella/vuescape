import type { Meta, StoryObj } from '@storybook/vue3'
import VsAlert from '@vuescape/vuescape/components/vs-alert/vs-alert.vue'
import { borderRadiusArgsType, spacingArgsType } from '@vuescape/vuescape/shared'
import { h } from 'vue'
import { VsAlertBasicStory } from '.'

export default {
  component: VsAlert,
  title: 'Components/Alert',
  argTypes: {
    ...spacingArgsType(),
    ...borderRadiusArgsType(),
    gap: {
      control: 'text',
    },
    bg: {
      control: 'color',
    },
  },
} as Meta<typeof VsAlert>

type Story = StoryObj<typeof VsAlert>

export const Basic: Story = {
  render: args => h(VsAlertBasicStory, args),
}
