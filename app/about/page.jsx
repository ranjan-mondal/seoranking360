import React from "react";
import {
  AboutHero,
  AboutStory,
  AboutTeam,
  AboutValues,
  AboutBanner,
} from "@/components/AboutPage";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutValues />
      <AboutBanner />
    </div>
  );
}

