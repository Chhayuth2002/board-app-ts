'use client'

import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu'
import { Link2, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { useApiMutation } from '@/hook/use-api-mutation'
import { api } from '@/convex/_generated/api'
import { ConfirmModal } from './confirm-modal'

interface ActionsProps {
  children: React.ReactNode
  side?: DropdownMenuContentProps['side']
  sideOffSet?: DropdownMenuContentProps['sideOffset']
  id: string
  title: string
}
export const Actions = ({
  children,
  side,
  sideOffSet,
  id,
  title
}: ActionsProps) => {
  const { mutate, pending } = useApiMutation(api.board.remove)

  const onCopylink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success('Link copied'))
      .catch(() => toast.warning('Failed to copy link'))
  }

  const onDelete = () => {
    mutate({ id })
      .then(() => toast.success('Board deleted'))
      .catch(() => toast.warning('Failed to delete board'))
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        sideOffset={sideOffSet}
        className='w-60'
        onClick={e => e.stopPropagation()}
      >
        <DropdownMenuItem onClick={onCopylink}>
          <Link2 className='h-4 w-4 mr-2' />
          Copy board link
        </DropdownMenuItem>
        <ConfirmModal
          header='Delete board'
          description='This will delete this board and all it content'
          onConfirm={onDelete}
        >
          <DropdownMenuItem onClick={onDelete}>
            <Trash2 className='h-4 w-4 mr-2' />
            Delete board
          </DropdownMenuItem>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
