"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/">
          {/* eslint-disable @next/next/no-img-element */}
          <Link href="/">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo_vein.svg`}
              alt="Vein Logo"
              width={151}
              height={49}
            />
          </Link>
          {/* eslint-enable @next/next/no-img-element */}
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
          <Link href="/contact">CONTACT</Link>
          <a
            href="https://www.instagram.com/vein__relaxation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/instagram_white.svg`}
              alt="instagram"
              width={20}
              height={20}
              priority
            />
          </a>
        </nav>
      </div>
    </header>
  );
};
