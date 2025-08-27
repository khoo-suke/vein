export type NewsItem = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
};

const API_URL = process.env.MICROCMS_API_URL!;
const API_KEY = process.env.MICROCMS_API_KEY!;

export const getNewsList = async (): Promise<NewsItem[]> => {
  const res = await fetch(API_URL, {
    headers: { "X-MICROCMS-API-KEY": API_KEY },
    cache: "force-cache",
  });

  if (!res.ok) {
    console.error("MicroCMS fetch failed:", res.status, res.statusText);
    throw new Error(`Failed to fetch news list: ${res.status}`);
  }

  const data = await res.json();
  return data.contents;
};

export const getNewsItem = async (id: string): Promise<NewsItem> => {
  const res = await fetch(`${API_URL}/${id}`, {
    headers: { "X-MICROCMS-API-KEY": API_KEY },
    cache: "force-cache",
  });

  if (!res.ok) {
    console.error("MicroCMS fetch failed:", res.status, res.statusText);
    throw new Error(`Failed to fetch news item: ${res.status}`);
  }

  const data = await res.json();
  return data;
};
