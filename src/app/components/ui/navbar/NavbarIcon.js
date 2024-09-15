"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function NavbarIcon({ icon, label = undefined, path = "/" }) {
  const barRef = useRef(null);
  const [mouseHover, setMouveHover] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const Icon = icon;

  useEffect(() => {
    if (barRef.current) {
      if (pathname === path) {
        barRef.current.style.width = "86px";
      } else {
        if (mouseHover) {
          barRef.current.style.width = "86px";
        } else {
          barRef.current.style.width = "0px";
        }
      }
    }
  }, [mouseHover, pathname, path]);

  return (
    <div
      className="flex items-center justify-center flex-col gap-1 cursor-pointer"
      onMouseEnter={() => setMouveHover(true)}
      onMouseLeave={() => setMouveHover(false)}
      onClick={() => router.push(path)}
    >
      <Icon color="white" size="32px" />
      <span className="text-sm">{label}</span>
      <div
        ref={barRef}
        className="w-0 h-[2px] bg-white transition-all rounded-xl"
      />
    </div>
  );
}
