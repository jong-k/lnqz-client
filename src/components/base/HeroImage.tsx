import Image from "next/image";

interface HeroImageProps {
  src: string;
}

export default function HeroImage({ src }: HeroImageProps) {
  return (
    <div className="h-heroImage relative w-full">
      <Image src={src} alt="hero-image" fill style={{ objectFit: "cover" }} />
    </div>
  );
}
