/**
 * Contact Us Page and CTA Data
 */

export const contactPageData = {
  headingPart1: "Tell us about your business and your goals, ",
  headingHighlight: "and we'll follow up with a free proposal.",
  description:
    "Get in touch with our SEO specialists to review your current rankings, identify competitive opportunities, and receive a customized roadmap for sustainable search growth.",
  contactDetails: [
    {
      id: "call",
      label: "CALL",
      value: "+917814042409",
      href: "tel:+917814042409",
      icon: "phone",
    },
    {
      id: "email",
      label: "EMAIL",
      value: "contact@seoranking360.com",
      href: "mailto:contact@seoranking360.com",
      icon: "mail",
    },
    {
      id: "hours",
      label: "HOURS",
      value: "Mon-Fri 9am-6pm ET",
      icon: "clock",
    },
  ],
  trustBadges: [
    {
      id: "reviews",
      rating: "4.9",
      stars: "★★★★★",
      label: "from 2,100+ client reviews",
    },
    {
      id: "inc5000",
      badge: "Inc. 5000",
      label: "Ten years on the Inc. 5000",
    },
  ],
  card: {
    heading: "Ready to outperform?",
    subtitle:
      "Get a free proposal from the team behind $2.1 billion+ in client revenue.",
    teamAvatars: [
      "/images/4fd2ee111936a3e844273736220684913092c0a8.webp",
      "/images/c5ce6f268e3acb7769cdfca85c7050fe9ce9cde9.webp",
      "/images/c961ef14d5881da04fda691f401fc3e286ebaf9b.webp",
    ],
    serviceOptions: [
      "SEO Services",
      "Paid Advertising (PPC)",
      "Web Design & Development",
      "Social Media Management",
      "Email & SMS Marketing",
      "SEO Audit & Strategy",
    ],
    buttonText: "Get Started",
    subtext: "We reply within one business day.",
    callButtonText: "Call +917814042409",
    meetingButtonText: "Book a Meeting",
  },
};

export const contactData = {
  ...contactPageData.card,
  heading: contactPageData.card.heading,
  subtitle: contactPageData.card.subtitle,
  teamAvatars: contactPageData.card.teamAvatars,
  serviceOptions: contactPageData.card.serviceOptions,
  testimonials: [
    {
      image: "/images/4fd2ee111936a3e844273736220684913092c0a8.webp",
      quote:
        "On the first day of launching my campaign my phone was ringing and it never stopped. I thought SmartSites would help my small business, but I had no idea it was going to be so fast!",
      name: "Tanya Martinez-Cardenas",
      company: "Untive Counseling Services · Client review",
    },
    {
      image: "/images/c5ce6f268e3acb7769cdfca85c7050fe9ce9cde9.webp",
      quote:
        "The team turned our marketing into a steady source of qualified conversations and measurable growth.",
      name: "Sarah Williams",
      company: "Growth partner · Client review",
    },
    {
      image: "/images/c961ef14d5881da04fda691f401fc3e286ebaf9b.webp",
      quote:
        "Clear reporting, thoughtful strategy, and a team that always knows what to do next.",
      name: "Michael Carter",
      company: "Operations lead · Client review",
    },
  ],
};

export default contactPageData;
