"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo_vein.png`}
          alt="Vein Logo"
          width={151}
          height={49}
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
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/instagram_white.svg`}
            alt="instagram"
            width={20}
            height={20}
            priority
          />
        </Link>
      </nav>
    </header>
  );
};
