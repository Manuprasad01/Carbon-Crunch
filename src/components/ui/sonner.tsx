
import { Toaster as Sonner } from "sonner"

import { cn } from "../../lib/utils"
type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ className, ...props }: ToasterProps) => {
  return (
    <Sonner
      className={cn(className)}
      toastOptions={{
        classNames: {
          toast:
            "group toast group flex w-full items-center border border-border bg-background p-4 pr-8 shadow-lg relative pointer-events-auto data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full rounded-md",
          title: "text-sm font-semibold [&+div]:text-xs",
          description: "text-sm",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          closeButton:
            "absolute right-2 top-2 p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
