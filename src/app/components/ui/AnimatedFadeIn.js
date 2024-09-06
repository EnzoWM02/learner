"use client";

import { motion } from "framer-motion";
import styles from "src/app/assets/styles/ui/auth-layout.module.css";

export default function AnimatedFadeIn({ children }) {
  /**
   * Here i'm using a trick to handle animation to "Sobre nós" in the first load, but not in the next ones.
   */
  return (
    <motion.div
      className={`${styles.auth_container} h-5/6 w-3/4 sm:w-2/4 lg:w-1/4 flex flex-col p-5`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
