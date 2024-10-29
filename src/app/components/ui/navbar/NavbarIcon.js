"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useBreakpoint from "src/app/hooks/useBreakpoints";

export default function NavbarIcon({ icon, label = undefined, path = "/" }) {
  const { sm } = useBreakpoint();

  const barRef = useRef(null);
  const [mouseHover, setMouveHover] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const Icon = icon;
  const barWidth = sm ? "86px" : "40px";

  useEffect(() => {
    if (barRef.current) {
      if (
        pathname.split("/").filter((path) => !!path)[0] ===
        path.replace("/", "")
      ) {
        barRef.current.style.width = barWidth;
      } else {
        if (mouseHover) {
          barRef.current.style.width = barWidth;
        } else {
          barRef.current.style.width = "0px";
        }
      }
    }
  }, [mouseHover, pathname, path, barWidth]);

  return (
    <div
      className="flex items-center justify-center flex-col gap-1 cursor-pointer"
      onMouseEnter={() => setMouveHover(true)}
      onMouseLeave={() => setMouveHover(false)}
      onClick={() => router.push(path)}
    >
      <Icon color="white" size="32px" />
      {sm && <span className="text-sm">{label}</span>}
      <div
        ref={barRef}
        className="w-0 h-[2px] bg-white transition-all rounded-xl"
      />
    </div>
  );
}
