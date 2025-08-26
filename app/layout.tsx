import Header from "./_components/Header";
import "./globals.css";

export const metadata = {
  title: "VEIN コーポレート",
  description: "お知らせサイト",
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
      </body>
    </html>
  );
}
