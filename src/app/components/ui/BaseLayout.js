"use client";

import ExperienceBar from "src/app/components/ui/navbar/ExperienceBar";
import Navbar from "src/app/components/ui/navbar/Navbar";

export default function BaseLayout({ children }) {
  return (
    <div className="h-screen w-screen bg-primary-950">
      <ExperienceBar />
      <Navbar />
      <div className="pl-[160px] pt-10 pr-10">{children}</div>
    </div>
  );
}
