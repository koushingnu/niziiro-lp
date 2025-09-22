import type { NewsItem } from "../lib/news";

type NewsListProps = {
  items: NewsItem[];
};

export function NewsList({ items }: NewsListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={`group relative bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-lg ${
            item.url ? "hover:-translate-y-1 cursor-pointer" : ""
          }`}
        >
          {/* カラーアクセント */}
          <div className="absolute top-0 left-0 w-1 h-full bg-primary group-hover:w-2 transition-all duration-300" />

          <div className="p-6">
            {/* 日付 */}
            <time className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-sm font-medium">
              {item.date}
            </time>

            {/* タイトル */}
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 group-hover:text-primary transition-colors"
              >
                <h3 className="text-lg font-bold leading-relaxed">
                  {item.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </h3>
                <span className="sr-only">（新しいタブで開く）</span>
              </a>
            ) : (
              <h3 className="mt-4 text-lg font-bold leading-relaxed">
                {item.title}
              </h3>
            )}
          </div>

          {/* デコレーション */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-transparent" />
        </div>
      ))}
    </div>
  );
}
