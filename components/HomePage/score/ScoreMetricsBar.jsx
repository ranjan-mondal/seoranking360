import React from "react";
import { scoreMetrics } from "@/data/score";

export function ScoreMetricsBar() {
  return (
    <div className="mt-6 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-center text-xs text-slate-300">
      {scoreMetrics.map((item, index) => (
        <React.Fragment key={item.label}>
          <span>
            <strong className="text-white">{item.value}</strong> {item.label}
          </span>
          {index < scoreMetrics.length - 1 && (
            <span className="hidden sm:inline text-slate-600">•</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ScoreMetricsBar;
