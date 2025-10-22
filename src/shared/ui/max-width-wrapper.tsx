import { cn } from "@/shared/shadcn-ui/lib";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5", className)}>{children}</div>;
}
