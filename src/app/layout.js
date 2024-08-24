import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learner",
  description: "An educational platform for programming students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="learner-theme bg-background min-h-screen	min-w-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
