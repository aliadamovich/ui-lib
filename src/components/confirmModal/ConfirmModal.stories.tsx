import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Button } from '../button'
import { ConfirmModal } from './ConfirmModal'

const meta = {
  component: ConfirmModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Confirmation Modal',
} satisfies Meta<typeof ConfirmModal>

export default meta

export const Default = {
  render: () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

    return (
      <>
        <Button onClick={() => setIsOpenModal(true)}>Open Modal</Button>

        <ConfirmModal
          title={'Delete Post'}
          description={'Are you sure you want to delete this post?'}
          isOpen={isOpenModal}
          setIsOpen={setIsOpenModal}
          onConfirm={() => console.log('Confirmed')}
        />
      </>
    )
  },
}
