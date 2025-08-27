import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";
import "./globals.css";

export const metadata = {
  title: " | 平井駅から徒歩4分 | リラクゼーションサロン",
  description:
    "平井駅徒歩4分のリラクゼーションサロンVEIN。ボディケア、フットケア、アイヘッドケア、ハンドケア、腸ケア、肩甲骨はがしなど多彩なメニューで、疲れを解消し元気な毎日をサポート。心地よい空間で癒しのひとときをお過ごしください。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// test
