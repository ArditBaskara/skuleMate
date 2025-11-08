import * as React from "react"

export type ToastProps = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  variant?: "default" | "destructive"
  action?: ToastActionElement
  duration?: number
  onOpenChange?: (open: boolean) => void
  open?: boolean
}

export type ToastActionElement = React.ReactElement<typeof ToastAction>
