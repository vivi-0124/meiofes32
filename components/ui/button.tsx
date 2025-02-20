import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/../lib/utils/helpers";
import { LoadingSpinner } from "./loading-spinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        festival: "bg-[#E84D8A] text-white hover:bg-[#E84D8A]/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface BaseButtonProps extends ButtonVariants {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, BaseButtonProps {}

interface LinkButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps>, BaseButtonProps {
  href: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant,
    size,
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...rest
  } = props;

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }), 
        isLoading ? "cursor-wait" : ""
      )}
      ref={ref}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading && (
        <LoadingSpinner 
          size="sm" 
          className="mr-2 border-current/30 border-t-current"
        />
      )}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
});

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>((props, ref) => {
  const {
    className,
    variant,
    size,
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    href,
    ...rest
  } = props;

  return (
    <a
      className={cn(buttonVariants({ variant, size, className }), 
        isLoading ? "cursor-wait" : ""
      )}
      ref={ref}
      href={href}
      {...rest}
    >
      {isLoading && (
        <LoadingSpinner 
          size="sm" 
          className="mr-2 border-current/30 border-t-current"
        />
      )}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </a>
  );
});

Button.displayName = "Button";
LinkButton.displayName = "LinkButton";

export { Button, LinkButton, buttonVariants };
export type { ButtonProps, LinkButtonProps, ButtonVariants };