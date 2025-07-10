import { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    avatar: {
      control: 'text',
      description: 'URL of the avatar image',
    },
    name: {
      control: 'text',
      description: 'User`s name',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the avatar',
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    size: 'medium',
    name: 'Eugene Kravchenko',
  },
}

export const Small: Story = {
  args: {
    avatar: 'https://i.pravatar.cc/300',
    name: 'Eugene Kravchenko',
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    avatar: 'https://i.pravatar.cc/300',
    name: 'Eugene Kravchenko',
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    // avatar: 'https://i.pravatar.cc/300',
    name: 'Eugene Kravchenko',
    size: 'large',
  },
}
