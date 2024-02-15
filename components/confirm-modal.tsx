'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger
} from './ui/alert-dialog'
import { Dialog } from './ui/dialog'

interface ConfirmModalProps {
  children: React.ReactNode
  disabled?: boolean
  onConfirm: () => void
  header: string
  description: string
}

export const ConfirmModal = ({
  children,
  disabled,
  onConfirm,
  header,
  description
}: ConfirmModalProps) => {
  const handleConfirm = () => {
    onConfirm()
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>{header}</AlertDialogHeader>
        <AlertDialogDescription>{description}</AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm} disabled={disabled}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
