"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { href: "#home", label: "HOME" },
  { href: "#news", label: "NEWS" },
  { href: "#profile", label: "PROFILE" },
  { href: "#about", label: "ABOUT" },
  { href: "#music", label: "MUSIC" },
  { href: "#mv", label: "MV" },
  { href: "#contact", label: "CONTACT" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="relative w-32 h-8">
          <Image
            src="/logo/logo.png"
            alt="NiziIRO ぱれっと"
            fill
            className="object-contain"
            priority
          />
        </a>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* モバイルメニューボタン */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="メニューを開く"
        >
          <div className="w-6 h-5 relative">
            <span
              className={`absolute w-full h-0.5 bg-foreground transition-all ${
                isMenuOpen ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute w-full h-0.5 bg-foreground top-2 transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute w-full h-0.5 bg-foreground transition-all ${
                isMenuOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </div>
        </button>
      </div>

      {/* モバイルメニュー */}
      <nav
        className={`md:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-sm transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="px-4 py-6 space-y-4">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
