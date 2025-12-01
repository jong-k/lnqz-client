import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../shadcn-ui/lib";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};

export function IconButton({ children, className, type = "button", ...rest }: IconButtonProps) {
  return (
    <button
      className={cn(
        "cursor-pointer text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
        className
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
