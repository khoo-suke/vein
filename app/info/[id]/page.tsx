import { getNewsItem, type NewsItem } from "../../_lib/microcms";

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

  const contentText = news.content.replace(/<[^>]*>/g, "");

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{news.title}</h1>
      <p>{contentText}</p>
      <p>{formattedDate}</p>
    </div>
  );
}
