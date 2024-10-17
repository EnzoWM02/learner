import styles from "src/app/assets/styles/ui/container.module.css";

export default function Container({ children, className, ...props }) {
  return (
    <div
      className={`${styles.container} ${className} bg-primary-400 border-solid border-2 border-primary-500`}
      {...props}
    >
      {children}
    </div>
  );
}
