import React from "react";
import { TrendingUp, Medal, CheckCircle2 } from "lucide-react";

const iconMap = {
  TrendingUp,
  Medal,
  CheckCircle2,
};

export function AboutHighlightCard({ highlight }) {
  const Icon = iconMap[highlight.iconName] || TrendingUp;

  return (
    <div>
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${highlight.background} ${highlight.color}`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-base font-bold text-[#101b32]">{highlight.title}</h3>
      <p className="mt-2 text-sm leading-5 text-slate-500">{highlight.description}</p>
    </div>
  );
}

export default AboutHighlightCard;

