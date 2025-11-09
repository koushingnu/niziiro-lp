import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full flex items-center overflow-hidden"
      style={{ marginTop: "64px" }}
    >
      {/* 背景画像 */}
      <div
        className="absolute inset-0 z-0"
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      >
        <img
          src="/nizi_pale/allmember.jpg"
          alt="NiziIRO ぱれっと"
          className="w-full h-full object-cover"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            willChange: "transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        />
      </div>
    </section>
  );
}
