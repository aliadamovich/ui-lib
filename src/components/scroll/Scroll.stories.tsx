import { Meta, StoryObj } from '@storybook/react'

import './stories.css'

import { Scroll } from './Scroll'

//import '../scroll.css'; // Ensure your styles are loaded in Storybook

const meta = {
  component: Scroll,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Scroll',
  tags: ['autodocs'],
} satisfies Meta<typeof Scroll>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className={'content'}>
        {[...Array(20).keys()].map(i => (
          <div key={i} className={'item'}>
            Item {i + 1}
          </div>
        ))}
      </div>
    ),
    className: 'container',
  },
}

export const Horizontal: Story = {
  args: {
    children: (
      <div className={'horizontalContent'}>
        {[...Array(20).keys()].map(i => (
          <div key={i} className={'item'}>
            Item {i + 1}
          </div>
        ))}
      </div>
    ),

    className: 'horizontalContainer',
  },
}
