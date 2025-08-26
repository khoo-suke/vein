"use client";
import styles from "./index.module.scss";

function CustomButton({ text }: { text: string }) {
  return (
    <button className={styles.button} type="button">
      {text}
    </button>
  );
}

export default CustomButton;
