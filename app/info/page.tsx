import { NewsPagination } from "../_components/NewsPagination";
import { getNewsList, type NewsItem } from "../_lib/microcms";
import styles from "./page.module.scss";

export default async function NewsListPage() {
  const newsList: NewsItem[] = await getNewsList();

  return (
    <div className={styles.container}>
      <h1 className={styles.caption}>お知らせ一覧</h1>
      <NewsPagination newsList={newsList} itemsPerPage={8} />
    </div>
  );
}
