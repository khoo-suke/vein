"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/logo_vein.png"
          alt="Vein Logo"
          width={151}
          height={49}
          priority
        />
      </Link>
      <nav>
        <Link href="/">HOME</Link>
        <Link href="/">BOOKING</Link>
        <Link href="/info">INFO</Link>
      </nav>
    </header>
  );
}

export default Header;
