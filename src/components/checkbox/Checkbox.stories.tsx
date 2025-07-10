import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { Checkbox } from './Checkbox'

const meta = {
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Checkbox',
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [isChecked, setIsChecked] = useState(args.checked ?? false)

    useEffect(() => {
      setIsChecked(args.checked ?? false)
    }, [args.checked])

    return (
      <Checkbox
        {...args}
        checked={isChecked}
        onCheckedChange={checked => setIsChecked(!!checked)}
      />
    )
  },
  args: {
    label: 'Check-box',
    checked: false,
    disabled: false,
  },
}

export const WithError: Story = {
  args: {
    label: 'Check-box',
    errorMessage: 'You need to agree to Terms & Conditions',
  },
}
