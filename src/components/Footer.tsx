import { SocialLinks } from "./SocialLinks";
import siteData from "../data/site.json";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <SocialLinks className="text-white" />

          <p className="text-sm">
            &copy; {new Date().getFullYear()} {siteData.siteName}
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
            トップへ戻る
          </a>
        </div>
      </div>
    </footer>
  );
}
