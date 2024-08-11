import Image from "next/image";

interface HeroImageProps {
  src: string;
}

export default function HeroImage({ src }: HeroImageProps) {
  return (
    <div className="relative w-full h-[420px]">
      <Image src={src} fill objectFit="cover" alt="hero-image" />
    </div>
  );
}
