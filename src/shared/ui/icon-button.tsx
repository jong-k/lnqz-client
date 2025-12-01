import { cn } from "../shadcn-ui/lib";

interface IconButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export function IconButton({ children, className }: IconButtonProps) {
  return (
    <button
      className={cn(
        "cursor-pointer text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
        className
      )}
    >
      {children}
    </button>
  );
}
