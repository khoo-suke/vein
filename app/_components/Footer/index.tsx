"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

export const Footer = () => {
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
          <a
            href="https://reserva.be/vein"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOKING
          </a>
          <Link href="/info">INFO</Link>
          <Link href="/">CONTACT</Link>
          <Link href="/">
            <Image
              src="/instagram_black.svg"
              alt="instagram"
              width={20}
              height={20}
              priority
            />
          </Link>
        </nav>
      </div>
      <small>© 2025 VEIN. All rights reserved.</small>
    </footer>
  );
};
