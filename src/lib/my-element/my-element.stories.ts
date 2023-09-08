import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './my-element'

export default {
  title: 'Example/My Element',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onOpen: { action: 'onClick' },
  },
  render: (args) => html`<my-button @click=${args.onOpen} name=${args.name}></my-button>`,
} as Meta

export const Default: StoryObj = {
  name: 'Default',
  args: {
    name: 'Lit',
  },
}