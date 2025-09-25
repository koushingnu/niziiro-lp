import type { NewsItem } from "../lib/news";

type NewsListProps = {
  items: NewsItem[];
};

export function NewsList({ items }: NewsListProps) {
  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className={`group relative border-b border-gray-200 pb-4 ${
            item.url ? "cursor-pointer" : ""
          }`}
        >
          <div className="flex items-start gap-8">
            {/* 日付 */}
            <time className="text-gray-500 font-medium italic min-w-32">
              {item.date}
            </time>

            {/* カテゴリー */}
            <div className="text-primary font-medium min-w-16">TV</div>

            {/* タイトル */}
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:text-primary transition-colors flex-1"
              >
                <h3 className="text-lg leading-relaxed">{item.title}</h3>
              </a>
            ) : (
              <h3 className="text-lg leading-relaxed flex-1">{item.title}</h3>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
