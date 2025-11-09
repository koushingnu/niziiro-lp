"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type NewsItem = {
  id: number;
  genre: string;
  body_html: string;
  published_at: string;
  target_site: "LP" | "HP" | "BOTH";
};

export default function NewsList() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from("news")
          .select("id, genre, body_html, published_at, target_site")
          .eq("status", "published")
          .lte("published_at", new Date().toISOString())
          .order("published_at", { ascending: false });

        if (error) {
          console.error("Error fetching news:", error);
          setLoading(false);
          return;
        }

        if (data) {
          // HP または BOTH のニュースのみフィルタリング
          const filteredNews = data.filter(
            (n) => n.target_site === "HP" || n.target_site === "BOTH"
          );
          setNewsData(filteredNews);
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // 日付をフォーマット（YYYY.MM.DD形式）
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  // HTMLからテキストを抽出してタイトルとして使用
  const extractTitle = (html: string) => {
    // HTMLタグを削除
    const text = html.replace(/<[^>]*>/g, "");
    // 最初の100文字を取得（長すぎる場合は省略）
    return text.length > 100 ? text.substring(0, 100) + "..." : text;
  };

  if (loading) {
    return (
      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              NEWS
            </h2>
            <p className="text-lg text-gray-600">最新情報</p>
          </div>
          <div className="text-center text-gray-500">読み込み中...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            NEWS
          </h2>
          <p className="text-lg text-gray-600">最新情報</p>
        </div>

        <div className="space-y-6">
          {newsData.length === 0 ? (
            <div className="text-center text-gray-500">
              ニュースはまだありません
            </div>
          ) : (
            newsData.map((news) => (
              <div
                key={news.id}
                className="group bg-white hover:bg-gray-50 border-b border-gray-200 transition-colors duration-300"
              >
                <div className="py-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    <div className="flex items-center justify-between md:justify-start md:w-auto">
                      <p className="text-base font-medium text-gray-900 w-32 flex-shrink-0">
                        {formatDate(news.published_at)}
                      </p>
                      <span className="md:hidden w-24 px-3 py-1 text-xs font-medium tracking-wider text-white bg-black rounded-full text-center">
                        {news.genre}
                      </span>
                    </div>
                    <div className="hidden md:block flex-shrink-0">
                      <span className="w-24 px-3 py-1 text-xs font-medium tracking-wider text-white bg-black rounded-full text-center inline-block">
                        {news.genre}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base md:text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300 line-clamp-2 md:line-clamp-1">
                        {extractTitle(news.body_html)}
                      </h3>
                    </div>
                    <div className="hidden md:block flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
