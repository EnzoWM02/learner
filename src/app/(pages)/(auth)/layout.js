import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import AuthBackground from "public/assets/authBackground.jpg";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import AnimatedFadeIn from "src/app/components/ui/AnimatedFadeIn";

export default async function layout({ children }) {
  const session = await getServerSession(authOptions);

  if (session) {
    // Redirect to home if user is authenticated
    return redirect("/");
  }

  /**
   * Here i'm using a trick to handle animation to "Sobre nós" in the first load, but not in the next ones.
   */
  return (
    <>
      <AnimatedFadeIn>{children}</AnimatedFadeIn>
      <a
        className="text-white mt-auto text-center"
        target="_blank"
        href="https://enzomosman.com/"
        rel="noopener noreferrer"
      >
        Sobre nós
      </a>
      <Image
        className="h-screen w-screen absolute top-0 left-0 object-cover object-center z-0"
        src={AuthBackground}
        alt="Background login image"
        quality={100}
      />
    </>
  );
}
