import Image from "next/image";
import AuthBackground from "public/assets/authBackground.jpg";
import styles from "./auth-layout.module.css"

export default function layout({ children }) {
  return (
    <div> 
      <div className={`${styles.auth_container} h-3/4 w-3/4 sm:w-2/4 lg:w-1/4`}>{children}</div>
      <Image
        className="h-screen w-screen absolute top-0 left-0 object-cover object-center z-0"
        src={AuthBackground}
        alt="Background login image"
        quality={100}
      />
    </div>
  );
}
