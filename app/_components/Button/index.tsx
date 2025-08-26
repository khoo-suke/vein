"use client";
import styles from "./index.module.scss";

export const CustomButton = ({ text }: { text: string }) => {
  return (
    <button className={styles.button} type="button">
      {text}
    </button>
  );
};
