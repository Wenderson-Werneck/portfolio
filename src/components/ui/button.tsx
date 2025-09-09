import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-pixel ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 transform active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 border-primary hover:shadow-glow",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive",
        outline: "border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-secondary",
        ghost: "hover:bg-accent hover:text-accent-foreground border-transparent hover:border-accent",
        link: "text-primary underline-offset-4 hover:underline border-transparent",
        hero: "bg-gradient-hero text-primary-foreground border-hero-gold hover:shadow-glow hover:scale-105",
        quest: "bg-quest-blue text-foreground border-quest-blue hover:bg-quest-blue/90 hover:shadow-magic",
        magic: "bg-magic-green text-foreground border-magic-green hover:bg-magic-green/90 hover:shadow-magic",
        inventory: "bg-item-bronze text-foreground border-item-bronze hover:bg-item-bronze/90",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-8 py-4",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
