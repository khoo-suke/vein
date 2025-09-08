import { CustomButton } from "@/app/_components/Button";
import { NewsPagination } from "@/app/_components/NewsPagination";
import { ShopInfoMap } from "@/app/_components/ShopInfoMap";
import { getNewsList, type NewsItem } from "@/app/_lib/microcms";
import Image from "next/image";
import styles from "./page.module.scss";

export default async function Page() {
  const newsList: NewsItem[] = await getNewsList();

  return (
    <div>
      <h1 className={styles.fv}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/fv.png`}
          alt="VEIN"
          width={1200}
          height={650}
        />
      </h1>
      <div className={styles.first}>
        <h2>
          継続ケアで疲れとサヨナラ
          <br />
          元気な毎日を手に入れる。
        </h2>
        <p className={styles.description}>
          VEINでは、ボディケア、フットケア、アイヘッドケア、ハンドケア、腸ケア、肩甲骨はがしの充実したサービスを提供しています。
          <br />
          お客様のリラックスと健康を最優先に考え、心地よい空間で癒しのひとときをお過ごしいただけます。
        </p>
        <CustomButton text="ご予約はこちら" />
      </div>

      <div className={styles.menu}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>MENU</h2>
          <span>リラクゼーション&nbsp;メニュー</span>
        </div>
        <div className={styles.note}>
          <div className={styles.menuFirstItem}>
            <h3>ボディケア</h3>
            <ul>
              <li>
                <span>
                  <em>30</em>分
                </span>
                <span>
                  <em>3,300</em>円(税込)
                </span>
              </li>
              <li>
                <span>
                  <em>60</em>分
                </span>
                <span>
                  <em>6,600</em>円(税込)
                </span>
              </li>
              <li>
                <span>
                  <em>90</em>分
                </span>
                <span>
                  <em>9,900</em>円(税込)
                </span>
              </li>
              <li>
                <span>
                  <em>120</em>分
                </span>
                <span>
                  <em>13,200</em>円(税込)
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.menuSubItem}>
            <div className={styles.menuItem}>
              <h3>フットケア</h3>
              <ul>
                <li>
                  <span>
                    <em>30</em>分
                  </span>
                  <span>
                    <em>3,800</em>円(税込)
                  </span>
                </li>
                <li>
                  <span>
                    <em>40</em>分
                  </span>
                  <span>
                    <em>4,900</em>円(税込)
                  </span>
                </li>
                <li>
                  <span>
                    <em>60</em>分
                  </span>
                  <span>
                    <em>7,100</em>円(税込)
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.menuItem}>
              <h3>アイヘッドケア</h3>
              <ul>
                <li>
                  <span>
                    <em>10</em>分
                  </span>
                  <span>
                    <em>1,100</em>円(税込)
                  </span>
                </li>
                <li>
                  <span>
                    <em>20</em>分
                  </span>
                  <span>
                    <em>2,200</em>円(税込)
                  </span>
                </li>
                <li>
                  <span>
                    <em>30</em>分
                  </span>
                  <span>
                    <em>3,300</em>円(税込)
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.menuItem}>
              <h3>ハンドケア</h3>
              <ul>
                <li>
                  <span>
                    <em>20</em>分
                  </span>
                  <span>
                    <em>2,200</em>円(税込)
                  </span>
                </li>
                <li>
                  <span>
                    <em>30</em>分
                  </span>
                  <span>
                    <em>3,300</em>円(税込)
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.menuItem}>
              <h3>腸ケア</h3>
              <ul>
                <li>
                  <span>
                    <em>10</em>分
                  </span>
                  <span>
                    <em>1,100</em>円(税込)
                  </span>
                </li>
                <li>
                  <span>
                    <em>20</em>分
                  </span>
                  <span>
                    <em>2,200</em>円(税込)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <CustomButton text="ご予約はこちら" />
      </div>

      <div className={styles.info}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>INFO</h2>
          <span>店舗からのお知らせ</span>
        </div>
        <div className={styles.container}>
          <NewsPagination newsList={newsList} itemsPerPage={5} />
        </div>
      </div>

      <ShopInfoMap />
    </div>
  );
}
