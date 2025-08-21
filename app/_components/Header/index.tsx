import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <nav>
        <Link href="/">Home</Link> | <Link href="/info">お知らせ</Link>
      </nav>
    </header>
  );
}
