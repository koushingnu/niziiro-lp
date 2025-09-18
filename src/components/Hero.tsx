import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 flex items-center"
    >
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/allmember.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-24 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          NiziIRO
          <br />
          ぱれっと
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          鮮やかな個性とハーモニーで魅了するボーイズグループ。
          <br />
          ライブ・映像・SNSを通じて多彩な『色』を届けます。
        </p>
        <SocialLinks className="text-white" />
      </div>
    </section>
  );
}
