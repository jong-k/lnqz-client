import { cn } from "@/shared/shadcn-ui/lib";

interface ResponsiveWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function ResponsiveWrapper({ children, className }: ResponsiveWrapperProps) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5", className)}>{children}</div>;
}
