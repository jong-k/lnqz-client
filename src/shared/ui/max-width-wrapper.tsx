import { cn } from "@/shared/lib";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return <div className={cn("mx-auto max-w-7xl px-5", className)}>{children}</div>;
}
