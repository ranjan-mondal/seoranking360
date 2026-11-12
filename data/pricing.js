/**
 * Pricing Plans Data matching exact screenshot
 */

export const pricingHeader = {
  badge: "OUR PRICING",
  titlePart1: "Flexible Plans for ",
  titleHighlight: "Every",
  titlePart2: " Business",
  description: "Choose a plan that fits your needs. No hidden fees. Cancel anytime.",
};

export const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Perfect for small businesses starting their digital journey.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    popular: false,
    ctaText: "Get Started",
    ctaHref: "/contact",
    features: [
      "SEO Optimization (5 keywords)",
      "Monthly Report",
      "Basic Support",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    tagline: "Ideal for growing businesses looking to accelerate growth.",
    monthlyPrice: 89,
    yearlyPrice: 71,
    popular: true,
    badgeText: "MOST POPULAR",
    ctaText: "Get Started",
    ctaHref: "/contact",
    features: [
      "SEO Optimization (15 keywords)",
      "Content Marketing (4 blogs)",
      "Monthly Report",
      "Priority Support",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "For established brands aiming for industry dominance.",
    monthlyPrice: 149,
    yearlyPrice: 119,
    popular: false,
    ctaText: "Get Started",
    ctaHref: "/contact",
    features: [
      "SEO Optimization (30 keywords)",
      "Content Marketing (8 blogs)",
      "Link Building (10 backlinks)",
      "Monthly Report",
      "Dedicated Support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Custom solutions for large businesses & high volume.",
    isCustom: true,
    monthlyPrice: "Custom",
    priceLabel: "Pricing",
    popular: false,
    ctaText: "Contact Us",
    ctaHref: "/contact",
    features: [
      "All Standard Features",
      "Advanced SEO & Strategy",
      "Dedicated Account Manager",
      "24/7 Priority Support",
    ],
  },
];

export default pricingPlans;
