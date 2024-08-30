"use client";

import Image from "next/image";
import AuthBackground from "public/assets/authBackground.jpg";
import styles from "./auth-layout.module.css";
import { motion } from "framer-motion";

export default function layout({ children }) {
  /**
   * Here i'm using a trick to handle animation to "Sobre nós" in the first load, but not in the next ones.
   */
  return (
    <>
      <motion.div
        className={`${styles.auth_container} h-5/6 w-3/4 sm:w-2/4 lg:w-1/4 flex flex-col p-5`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        {children}
        <a
          className="text-white mt-auto text-center"
          target="_blank"
          href="https://enzomosman.com/"
          rel="noopener noreferrer"
        >
          Sobre nós
        </a>
      </motion.div>
      <Image
        className="h-screen w-screen absolute top-0 left-0 object-cover object-center z-0"
        src={AuthBackground}
        alt="Background login image"
        quality={100}
      />
    </>
  );
}
