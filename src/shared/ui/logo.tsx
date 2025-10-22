import Image, { type ImageProps } from "next/image";

type LogoProps = Omit<ImageProps, "src"> & {
  height?: number;
  width?: number;
};

export function Logo({ alt = "Link Squeeze", height = 100, priority, width = 100, ...props }: LogoProps) {
  return <Image alt={alt} height={height} priority={priority} src="/images/logo.png" width={width} {...props} />;
}
