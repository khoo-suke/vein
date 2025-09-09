import styles from "./page.module.scss";

export const metadata = {
  title: "VEIN ベイン | お問い合わせ",
  description:
    "平井駅徒歩4分のリラクゼーションサロンVEIN。ボディケア、フットケア、アイヘッドケア、ハンドケア、腸ケア、肩甲骨はがしなど多彩なメニューで、疲れを解消し元気な毎日をサポート。心地よい空間で癒しのひとときをお過ごしください。",
};

export default function NewsListPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className={styles.subPageCaptionArea}>
        <div className={styles.inner}>
          <h1 className={styles.subPageCaption}>CONTACT</h1>
          <span>お問い合わせ</span>
        </div>
      </div>
      {children}
    </main>
  );
}
