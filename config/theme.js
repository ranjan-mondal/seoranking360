/**
 * Design system colors, tokens, and visual configurations
 */
export const themeConfig = {
  colors: {
    // Brand Gold / Yellow Accents
    primary: {
      DEFAULT: "#ffb511",
      hover: "#ffc329",
      light: "#ffbd1a",
      dark: "#ffa611",
      deep: "#df8a25",
    },
    // Dark Navy Blue Palette
    navy: {
      DEFAULT: "#031d2b",
      surface: "#102945",
      card: "#0b2b47",
      dark: "#061d30",
      accent: "#062235",
      cta: "#0d2b46",
      highlight: "#132f4b",
    },
    // Badge / Tint Accents
    badge: {
      amberBg: "#fff1c8",
      amberText: "#a75c15",
      blueBg: "#eff6ff",
      blueText: "#3b82f6",
      emeraldBg: "#d7f8e9",
      emeraldText: "#10b981",
    },
    // Social Brand Colors
    social: {
      whatsapp: "#0ac454",
      telegram: "#209fdb",
    },
  },
  gradients: {
    primaryButton: "bg-linear-to-r from-[#ffc329] to-[#ff9f0b]",
    navbarButton: "bg-linear-to-r from-[#ffbd1a] to-[#ffa611]",
    aboutButton: "bg-linear-to-r from-[#ffc329] to-[#ffad10]",
    heroImageOverlay: "bg-linear-to-r from-[#031d2b] via-[#031d2b]/35 to-transparent",
    serviceImageOverlay: "bg-linear-to-b from-transparent via-[#061d30]/30 to-[#061d30]",
  },
  shadows: {
    primaryGlow: "shadow-[0_12px_24px_rgba(255,174,17,0.22)]",
    navbarGlow: "shadow-[0_5px_8px_rgba(255,173,16,0.2)]",
    cardGlow: "shadow-[0_18px_40px_rgba(7,25,45,0.18)]",
  },
};

export default themeConfig;

