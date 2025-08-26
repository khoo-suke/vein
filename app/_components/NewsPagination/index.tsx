"use client";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import type { NewsItem } from "../../_lib/microcms";
import styles from "./index.module.scss";

type Props = {
  newsList: NewsItem[];
  itemsPerPage?: number;
};

function NewsPagination({ newsList, itemsPerPage = 5 }: Props) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = newsList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(newsList.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % newsList.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ul className={styles.newsList}>
        {currentItems.map((news) => {
          const formattedDate = new Date(news.publishedAt).toLocaleDateString(
            "ja-JP",
            {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }
          );

          return (
            <li key={news.id}>
              <Link href={`/info/${news.id}`}>
                <span className={styles.date}>{formattedDate}</span>
                {news.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<<"
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </>
  );
}

export default NewsPagination;
