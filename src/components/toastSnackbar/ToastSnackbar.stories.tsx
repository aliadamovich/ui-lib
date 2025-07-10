import type { Meta, StoryObj } from '@storybook/react'
import { ToastSnackbar } from './ToastSnackbar'
import { Button } from '../button'
import { toast } from 'react-toastify'

const meta: Meta<typeof ToastSnackbar> = {
  title: 'Components/ToastSnackbar',
  parameters: {
    layout: 'centered',
  },
  component: ToastSnackbar,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ToastSnackbar>

export const Error: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.error('This is error!')}>Show Error Toast</Button>
      <ToastSnackbar />
    </>
  ),
}

export const Warning: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.warn('This is Warning!')}>Show Warning Toast</Button>
      <ToastSnackbar />
    </>
  ),
}

export const Success: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.success('This is Success Toast!')}>Show Success Toast</Button>
      <ToastSnackbar />
    </>
  ),
}

export const Info: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.info('This is Info Toast!')}>Show Info Toast</Button>
      <ToastSnackbar />
    </>
  ),
}
