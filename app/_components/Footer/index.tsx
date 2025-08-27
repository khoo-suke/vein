"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <Link href="/">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo_white.png`}
              className={styles.footerLogo}
              alt="Vein Logo"
              width={275}
              height={88}
              priority
            />
          </Link>
          <div className={styles.tel}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/tel.svg`}
              className={styles.telIcon}
              alt="tel"
              width={14}
              height={14}
              priority
            />
            <a href="tel:03-5875-5598" className={styles.number}>
              03-5875-5598
            </a>
          </div>
        </div>
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
          <a
            href="https://www.instagram.com/vein__relaxation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/instagram_black.svg`}
              alt="instagram"
              width={20}
              height={20}
              priority
            />
          </a>
        </nav>
      </div>
      <small>© 2025 VEIN. All rights reserved.</small>
    </footer>
  );
};
