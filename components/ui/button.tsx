import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({
  className,
  children,
  disabled,
  type = "button",
  ...props
}, ref) => {
  return (
    <button
    className={cn(
      `
        w-auto
        rounded-full
        bg-black
        border-transparent
        px-5
        py-3
        disabled:cursor-not-allowed
        text-white
        font-semibold
        hover:opacity-75
        transition
      `
    )}
      ref={ref}
    >{children}</button>
  )
})

Button.displayName = "Button";

export default Button;
