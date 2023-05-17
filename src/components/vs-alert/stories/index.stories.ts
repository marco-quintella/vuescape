import type { Meta } from '@storybook/vue3'
import { createStory } from '@vuescape/vuescape/__storybook__'
import { VsAlertBasicStory } from '@vuescape/vuescape/components/vs-alert/stories'
import VsAlert from '@vuescape/vuescape/components/vs-alert/vs-alert.vue'
import { defaultSizes } from '@vuescape/vuescape/shared'

export default {
  component: VsAlert,
  title: 'Components/Alert',
  argTypes: {
    size: {
      options: defaultSizes,
    },
  },
} as Meta<typeof VsAlert>

export const Basic = createStory(VsAlertBasicStory)
