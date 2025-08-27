import { getNewsItem, getNewsList, type NewsItem } from "../../_lib/microcms";

type Props = { params: { id: string } };

export default async function NewsDetailPage({ params }: Props) {
  if (!params?.id) {
    throw new Error("ID is missing");
  }

  const news: NewsItem = await getNewsItem(params.id);

  const formattedDate = new Date(news.publishedAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{news.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: news.content }} />
      <p>{formattedDate}</p>
    </div>
  );
}

// 動的ルートを静的生成するために必要
export async function generateStaticParams() {
  const newsList = await getNewsList();
  return newsList.map((item) => ({
    id: item.id,
  }));
}
