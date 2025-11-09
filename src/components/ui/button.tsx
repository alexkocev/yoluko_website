import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl hover:scale-105",
  {
    variants: {
      variant: {
        default: "bg-primary/80 text-primary-foreground hover:bg-primary/90 shadow-primary/25",
        destructive:
          "bg-destructive/80 text-destructive-foreground hover:bg-destructive/90 shadow-destructive/25",
        outline:
          "border border-white/30 bg-white/10 hover:bg-white/20 hover:text-accent-foreground backdrop-blur-lg",
        secondary:
          "bg-secondary/80 text-secondary-foreground hover:bg-secondary/90 shadow-secondary/25",
        ghost: "bg-white/5 hover:bg-white/15 hover:text-accent-foreground border-white/10",
        link: "text-primary underline-offset-4 hover:underline bg-transparent border-transparent shadow-none hover:shadow-none hover:scale-100",
        glass: "bg-white/10 text-foreground hover:bg-white/20 border-white/20 backdrop-blur-xl shadow-white/10",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
