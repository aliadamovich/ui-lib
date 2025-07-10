import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  parameters: {
    layout: 'centered',
  },
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: 'Message displayed under the loader',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    fullScreen: {
      control: 'boolean',
      description: 'Whether render full-screen loader or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    reduced: {
      control: 'boolean',
      description: 'Smaller sized loader',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Loader>

export const Default: Story = {
  args: {
    fullScreen: true,
    reduced: false,
  },
}

export const WithMessage: Story = {
  args: {
    message: 'Loading...',
    fullScreen: true,
    reduced: false,
  },
}

export const Reduced: Story = {
  args: {
    fullScreen: true,
    reduced: true,
  },
}
