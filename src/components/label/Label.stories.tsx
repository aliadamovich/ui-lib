import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'
import { TextField } from '../textField'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  parameters: {
    layout: 'centered',
  },
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'The text displayed as the label.',
      control: 'text',
    },
    htmlFor: {
      description: 'The ID of the input element the label is associated with.',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    label: 'Email',
    children: <TextField />,
  },
}
