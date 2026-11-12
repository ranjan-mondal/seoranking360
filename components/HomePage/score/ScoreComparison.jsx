import React from "react";
import { Check, X } from "lucide-react";
import { traditionalReports, revenueProof } from "@/data/score";

export function ScoreComparison() {
  return (
    <div className="max-w-5xl mx-auto mt-10 grid overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.2)] md:grid-cols-2 lg:grid-cols-[0.86fr_1.14fr]">
      <div className="bg-[#102945] p-6 sm:p-7 lg:p-8">
        <h3 className="text-sm sm:text-base font-bold text-white">
          What traditional agencies report:
        </h3>
        <ul className="mt-6 space-y-4 sm:space-y-5">
          {traditionalReports.map((item) => (
            <li className="flex items-start gap-3 text-xs sm:text-sm leading-5 text-slate-300" key={item}>
              <X className="h-4 w-4 shrink-0 rounded-full bg-[#661c29] p-0.5 text-red-400 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 sm:p-7 lg:p-8 text-[#182941]">
        <h3 className="text-sm sm:text-base font-bold text-[#182941]">
          What our Revenue Hub proves:
        </h3>
        <ul className="mt-6 space-y-3.5 sm:space-y-4">
          {revenueProof.map(({ title, description }) => (
            <li className="flex items-start gap-3 text-xs sm:text-sm leading-5 text-slate-600" key={title}>
              <Check className="h-4 w-4 shrink-0 rounded-full bg-[#d7f8e9] p-0.5 text-emerald-500 mt-0.5" />
              <span>
                <strong className="font-bold text-[#182941]">{title}</strong> {description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ScoreComparison;
