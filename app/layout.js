import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#031d2b",
};

export const metadata = {
  metadataBase: new URL(siteConfig.url || "https://seoranking360.com"),
  title: {
    default: "SEO Ranking360 | Expert SEO Marketing Services for Higher Rankings",
    template: "%s | SEO Ranking360",
  },
  description:
    "Get found, get more customers and grow your business with data-driven SEO strategies that deliver measurable pipeline revenue. #1 SEO agency for enterprise and high-growth brands.",
  keywords: [
    "SEO Agency",
    "SEO Services",
    "Search Engine Optimization",
    "Higher Google Rankings",
    "Organic Traffic Growth",
    "PPC Advertising",
    "Technical SEO Audit",
    "Revenue Attribution",
    "Enterprise SEO Company",
    "Link Building",
    "Conversion Rate Optimization",
  ],
  authors: [{ name: "SEO Ranking360 Team", url: "https://seoranking360.com" }],
  creator: "SEO Ranking360",
  publisher: "SEO Ranking360",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seoranking360.com",
    title: "SEO Ranking360 | Rank Higher. Grow Faster.",
    description:
      "Proven SEO marketing services driving over $3.4B in client pipeline revenue. Transparent reporting, guaranteed strategy.",
    siteName: "SEO Ranking360",
    images: [
      {
        url: "/images/SEOReport.png",
        width: 1200,
        height: 630,
        alt: "SEO Ranking360 Performance Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Ranking360 | Rank Higher. Grow Faster.",
    description:
      "Proven SEO marketing services driving over $3.4B in client pipeline revenue.",
    creator: "@seoranking360",
    images: ["/images/SEOReport.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://seoranking360.com/#organization",
      name: "SEO Ranking360",
      url: "https://seoranking360.com",
      logo: {
        "@type": "ImageObject",
        url: "https://seoranking360.com/images/SEOReport.png",
      },
      sameAs: [
        siteConfig.social.facebook,
        siteConfig.social.twitter,
        siteConfig.social.linkedin,
        siteConfig.social.instagram,
        siteConfig.social.youtube,
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://seoranking360.com/#website",
      url: "https://seoranking360.com",
      name: "SEO Ranking360",
      description: "Expert SEO Marketing Services for Higher Rankings",
      publisher: {
        "@id": "https://seoranking360.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://seoranking360.com/blogs?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} font-sans h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          type="application/ld+json"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
