"use client";

import React from "react";
import { MessageSquare, ShoppingCart, Compass, MessageCircle } from "lucide-react";
import { retentionDashboardData } from "@/data/servicesPage";

const iconMap = {
  ShoppingCart,
  Compass,
  MessageCircle,
};

export function RetentionDashboardCard() {
  const {
    badge,
    title,
    growthBadge,
    attributedRevenueLabel,
    attributedRevenueValue,
    storeShareText,
    automatedFlowsPercent,
    manualCampaignsPercent,
    metrics,
  } = retentionDashboardData;

  return (
    <div className="rounded-3xl bg-[#0a1926] p-6 sm:p-7 text-white shadow-2xl border border-white/5 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/20 text-[#ffbd12]">
            <MessageSquare className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {badge}
            </p>
            <h2 className="text-sm font-bold text-white">{title}</h2>
          </div>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20">
          {growthBadge}
        </span>
      </div>

      <div className="mt-5 rounded-2xl bg-[#0d2133] p-5 border border-white/5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400 font-medium">{attributedRevenueLabel}</span>
          <span className="font-semibold text-emerald-400">{storeShareText}</span>
        </div>
        <p className="mt-1.5 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {attributedRevenueValue}
        </p>

        <div className="mt-4 flex h-2 w-full overflow-hidden rounded-full bg-slate-700">
          <div
            className="h-full bg-[#df8a25] rounded-full"
            style={{ width: `${automatedFlowsPercent}%` }}
          />
          <div
            className="h-full bg-slate-600 rounded-full"
            style={{ width: `${manualCampaignsPercent}%` }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
          <span>Automated Flows: {automatedFlowsPercent}%</span>
          <span>Manual Campaigns: {manualCampaignsPercent}%</span>
        </div>
      </div>

      <div className="mt-4 space-y-2.5">
        {metrics.map((item) => {
          const IconComp = iconMap[item.icon] || MessageSquare;

          return (
            <div
              className="flex items-center justify-between rounded-xl bg-[#0d2133]/60 px-4 py-3 border border-white/5"
              key={item.id}
            >
              <div className="flex items-center gap-3">
                <span className="text-amber-400">
                  <IconComp className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white">{item.title}</p>
                  <p className="text-[11px] text-slate-400">{item.caption}</p>
                </div>
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-200">{item.stat}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RetentionDashboardCard;
