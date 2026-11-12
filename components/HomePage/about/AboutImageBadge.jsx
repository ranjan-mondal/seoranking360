import React from "react";
import Image from "next/image";
import { Users } from "lucide-react";
import { aboutData } from "@/data/about";

export function AboutImageBadge() {
  const { image, clientStats } = aboutData;

  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[500px]">
      <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-[0_18px_35px_rgba(15,35,60,0.12)]">
        <Image
          alt="SEO experts collaborating around a performance dashboard"
          className="object-cover"
          fill
          sizes="(min-width: 1024px) 42vw, (min-width: 768px) 48vw, 100vw"
          src={image}
        />
      </div>

      <div className="absolute -bottom-6 sm:-bottom-8 left-4 sm:left-8 flex items-center gap-3 sm:gap-4 rounded-2xl bg-white px-4 sm:px-5 py-4 sm:py-5 shadow-[0_14px_28px_rgba(15,35,60,0.16)]">
        <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
          <Users className="h-6 w-6 sm:h-7 sm:w-7" />
        </span>
        <div>
          <p className="text-xl sm:text-2xl font-bold text-[#101b32]">{clientStats.count}</p>
          <p className="text-xs sm:text-sm text-slate-500">{clientStats.label}</p>
          <div className="mt-1.5 sm:mt-2 flex -space-x-2">
            {clientStats.avatars.map((bgColor, idx) => (
              <span
                className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full border-2 border-white ${bgColor}`}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutImageBadge;
