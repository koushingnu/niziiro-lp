import type { NewsItem } from "../lib/news";

type NewsListProps = {
  items: NewsItem[];
};

export function NewsList({ items }: NewsListProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="card">
          <time className="text-sm text-primary font-medium">{item.date}</time>
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 hover:text-primary transition-colors"
            >
              {item.title}
              <span className="sr-only">（新しいタブで開く）</span>
            </a>
          ) : (
            <p className="mt-2">{item.title}</p>
          )}
        </div>
      ))}
    </div>
  );
}
