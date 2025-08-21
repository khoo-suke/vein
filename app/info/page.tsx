import { getNewsList, type NewsItem } from '../_lib/microcms';
import Link from 'next/link';

export default async function NewsListPage() {
  const newsList: NewsItem[] = await getNewsList();

  return (
    <div style={{ padding: '1rem' }}>
      <h1>お知らせ一覧</h1>
      <ul>
        {newsList.map((news) => {
          const formattedDate = new Date(news.publishedAt).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            weekday: 'short',
          });

          return (
            <li key={news.id} style={{ marginBottom: '0.5rem' }}>
              <span style={{ marginRight: '0.5rem', color: '#888' }}>
                {formattedDate}
              </span>
              <Link href={`/info/${news.id}`}>{news.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
