"use client";

import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // スクロール位置の監視
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // アクティブセクションの検出
      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto h-16 flex items-center">
        <a
          href="#home"
          className="relative w-64 h-16 transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/logo/logo.png"
            alt="NiziIRO ぱれっと"
            fill
            className="object-contain"
            priority
          />
        </a>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:block ml-auto">
          <ul className="flex gap-6">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-white hover:text-white/80"
                  } ${
                    activeSection === href.slice(1)
                      ? "after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-current after:rounded-full"
                      : ""
                  }`}
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
          className={`md:hidden p-2 transition-colors ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          <div className="w-6 h-5 relative">
            <span
              className={`absolute w-full h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen
                  ? "top-2 rotate-45"
                  : "top-0 opacity-100 transform-none"
              }`}
            />
            <span
              className={`absolute w-full h-0.5 bg-current top-2 transition-all duration-300 ${
                isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`absolute w-full h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen
                  ? "top-2 -rotate-45"
                  : "top-4 opacity-100 transform-none"
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
                className={`block py-3 text-lg font-medium transition-all ${
                  activeSection === href.slice(1)
                    ? "text-primary translate-x-2"
                    : "text-foreground hover:text-primary hover:translate-x-2"
                }`}
                onClick={() => setIsMenuOpen(false)}
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
