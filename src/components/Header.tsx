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

  // スムーススクロール関数
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between px-4">
        <a
          href="#home"
          className="relative w-48 sm:w-56 md:w-64 h-16 transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/nizi_pale/logo/logo.png"
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
                  onClick={(e) => handleNavClick(href, e)}
                  className="relative py-2 text-sm font-medium transition-colors text-foreground hover:text-primary cursor-pointer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* モバイルメニューボタン - 右寄せ */}
        <button
          type="button"
          className="md:hidden p-3 transition-colors rounded-lg hover:bg-gray-100 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          <div className="w-6 h-6 relative">
            <span
              className={`absolute w-full h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen
                  ? "top-3 rotate-45"
                  : "top-1 opacity-100 transform-none"
              }`}
            />
            <span
              className={`absolute w-full h-0.5 bg-current top-3 transition-all duration-300 ${
                isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`absolute w-full h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen
                  ? "top-3 -rotate-45"
                  : "top-5 opacity-100 transform-none"
              }`}
            />
          </div>
        </button>
      </div>

      {/* モバイルメニュー */}
      <nav
        className={`md:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300 ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="px-4 py-6">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(href, e)}
                className="block py-3 text-lg font-medium transition-all cursor-pointer text-foreground hover:text-primary hover:translate-x-2"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* オーバーレイ */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
}
