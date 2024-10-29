"use client";

import ExperienceBar from "src/app/components/ui/navbar/ExperienceBar";
import Navbar from "src/app/components/ui/navbar/Navbar";

export default function BaseLayout({ children }) {
  return (
    <div className="h-screen w-screen bg-primary-950 overflow-y-auto">
      <ExperienceBar />
      <Navbar />
      <div className="px-5 sm:pl-[160px] pt-10 pb-[100px] sm:py-10 sm:pr-10">
        {children}
      </div>
    </div>
  );
}
