import siteData from "../data/site.json";

export function ContactBlock() {
  return (
    <div className="text-center">
      <a
        href={`mailto:${siteData.contact}`}
        className="btn-primary inline-flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        メールでのお問い合わせ
      </a>
    </div>
  );
}
