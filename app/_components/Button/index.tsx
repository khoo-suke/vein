"use client";
import styles from "./index.module.scss";

export const CustomButton = ({ text }: { text: string }) => {
  return (
    <a
      href="https://reserva.be/vein"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
    >
      {text}
    </a>
  );
};
