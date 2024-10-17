import styles from "src/app/assets/styles/ui/card.module.css";

export default function Card({ children, className }) {
  return (
    <div className={`${styles.card_container} ${className}`}>{children}</div>
  );
}
