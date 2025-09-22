import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-16 flex items-center overflow-hidden"
    >
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/allmember.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
