"use client";

import React, { useState, useEffect } from "react";

function calculatePolicyDate() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDate = now.getDate();

  let targetYear = currentYear;
  let targetMonth = currentMonth;
  if (currentDate < 30) {
    targetMonth = currentMonth - 1;
    if (targetMonth < 0) {
      targetMonth = 11;
      targetYear -= 1;
    }
  }
  const lastDay = new Date(targetYear, targetMonth + 1, 0).getDate();
  const day = Math.min(30, lastDay);
  const dateObj = new Date(targetYear, targetMonth, day);
  return dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function PolicyDateText({ fallback = "October 30, 2026" }) {
  const [dateStr, setDateStr] = useState(fallback);

  useEffect(() => {
    setDateStr(calculatePolicyDate());
  }, []);

  return <>{dateStr}</>;
}

export default PolicyDateText;

