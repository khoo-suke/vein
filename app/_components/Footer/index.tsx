"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/">
          <Image
            src="/logo_white.png"
            alt="Vein Logo"
            width={275}
            height={88}
            priority
          />
        </Link>
        <nav>
          <Link href="/">HOME</Link>
          <Link href="/">BOOKING</Link>
          <Link href="/info">INFO</Link>
        </nav>
      </div>
      <small>© 2025 VEIN. All rights reserved.</small>
    </footer>
  );
}

export default Footer;
