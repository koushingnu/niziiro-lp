import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NiziIRO ぱれっと",
  description:
    "鮮やかな個性とハーモニーで魅了するボーイズグループ。ライブ・映像・SNSを通じて多彩な『色』を届けます。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
