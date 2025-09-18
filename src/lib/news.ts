import { z } from "zod";
import siteData from "../data/site.json";

// ニュース項目のスキーマ定義
const NewsItemSchema = z.object({
  date: z.string(),
  title: z.string(),
  url: z.string().url().optional(),
});

const NewsResponseSchema = z.object({
  items: z.array(NewsItemSchema),
});

export type NewsItem = z.infer<typeof NewsItemSchema>;

/**
 * ニュースフィードを取得する
 * @returns Promise<NewsItem[]>
 */
export async function getNews(): Promise<NewsItem[]> {
  const feedUrl = process.env.NEWS_FEED_URL;

  // フィードURLが未設定の場合はフォールバック
  if (!feedUrl) {
    console.warn("NEWS_FEED_URL is not set, using fallback news");
    return siteData.newsFallback;
  }

  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: 3600 }, // 1時間キャッシュ
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    const data = await response.json();
    const validated = NewsResponseSchema.parse(data);
    return validated.items;
  } catch (error) {
    console.error("Error fetching news:", error);
    return siteData.newsFallback;
  }
}
