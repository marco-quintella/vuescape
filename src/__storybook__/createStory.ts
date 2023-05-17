import type { Component } from 'vue'
import { h } from 'vue'

export function createStory(component: Component, storyArgs: { classes?: string } = {}) {
  return (args: any) => ({
    setup: () => () =>
      h(
        'div',
        {
          class: `storybook-example ${storyArgs.classes || ''}`,
        },
        [h(component, args)],
      ),
  })
}
