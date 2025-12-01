import { cn } from "../shadcn-ui/lib";

interface IconButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function IconButton({ children, className, onClick }: IconButtonProps) {
  return (
    <button
      className={cn(
        "cursor-pointer text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
        className
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
