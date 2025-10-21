interface MaxWidthWrapperProps {
  children: React.ReactNode;
}

export function MaxWidthWrapper({ children }: MaxWidthWrapperProps) {
  return <div className="mx-auto max-w-7xl px-5">{children}</div>;
}
