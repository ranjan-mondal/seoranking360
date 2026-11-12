# SEO360 — Premium Digital Marketing & SEO Platform

A modern, high-performance, mobile-first responsive web application for **SEO360**, engineered with **Next.js 16 (App Router & Turbopack)**, **React 19**, **Tailwind CSS v4**, and **Motion (Framer Motion)**.

---

## 🚀 Key Highlights & Architectural Features

- **Global Typography**: Implemented **Plus Jakarta Sans** across the entire project with fluid typographic scaling, balanced line-heights, and crisp rendering.
- **Brand Aesthetic & Palette**:
  - Deep Navy Canvas: `#031d2b`, `#07192d`, `#0b2438`
  - High-Conversion Amber Gold: `#ffc329`, `#ffbe2a`, `#ffb511`, `#ffa800`
  - Strategic Accent Blue: `#2d6ca5`
  - Clean Surface Neutrals: `#ffffff`, `#f8fafc`, `#f0f4f9`
- **100% Mobile-First Responsive Design**:
  - Fully optimized for Small Phones (320px–360px), Standard iPhones / Androids (375px–390px), Large Pro Max sizes (414px–430px), Tablets (768px–820px, iPad Mini/Air/Pro), and Desktops (1024px–1440px+).
  - Touch-friendly tap targets ($\ge 44\text{px}$), swipe gestures on mobile carousels, zero horizontal scrollbars, and notch / safe-area compliance.
- **Image Pipeline & WebP Optimization**:
  - All visual assets converted and compressed to modern `.webp` format using `sharp` (averaging 92–95% file size reduction).
  - Built with `next/image` using dynamic responsive `sizes`, automatic lazy loading, and priority flags on above-the-fold hero graphics.
- **Accessible Motion & Transitions**:
  - Encapsulated reusable motion primitives (`MotionSection`, `MotionFade`, `MotionStagger`, `MotionInteractive`) respecting `prefers-reduced-motion` with zero DOM property leakage.
- **Zero Dead Links & Full SEO Compliance**:
  - Comprehensive internal routing connecting all navigation links, service cards, blog articles, legal pages (`/privacy`, `/terms`), automated XML sitemap (`/sitemap.xml`), and `robots.txt`.

---

## 📁 Project Architecture

```
seoranking360/
├── app/                             # Next.js 16 App Router
│   ├── layout.js                    # Global root layout, Plus Jakarta Sans font, metadata & Schema.org JSON-LD
│   ├── globals.css                  # Global Tailwind CSS directives & custom utility classes
│   ├── page.js                      # Homepage route
│   ├── services/                    # SEO Services hub page
│   ├── about/                       # About Us page
│   ├── pricing/                     # Transparent pricing packages & FAQ
│   ├── contact/                     # Proposal request & audit form page
│   ├── blogs/                       # Blog index and dynamic [slug] article views
│   ├── privacy/                     # Privacy Policy page
│   ├── terms/                       # Terms of Service page
│   ├── sitemap.xml/                 # Dynamic XML Sitemap
│   ├── robots.txt/                  # Dynamic Robots configuration
│   ├── favicon.ico                  # 32x32 Favicon
│   ├── icon.svg                     # High-res SVG favicon with brand squircle
│   └── apple-icon.png               # 180x180 Apple touch icon
├── components/                      # Modular Component Architecture
│   ├── HomePage/                    # Home-specific sections
│   │   ├── hero/                    # HeroContent, HeroCarousel (3D peek slider), HeroAccolades
│   │   ├── services/                # Interactive ServiceTabItem, ServiceCaseStudyCard
│   │   ├── score/                   # ScoreMetricsBar, ScoreComparison (Traditional vs Revenue Hub)
│   │   ├── testimonials/            # TestimonialFilterTabs, TestimonialCard (Interactive reviews slider)
│   │   ├── blogs/                   # Featured BlogCard
│   │   └── contact/                 # ContactFormCard, ContactTestimonialSlider
│   ├── ServicesPage/                # Modular Services components
│   │   ├── ServicesHero.jsx         # Services hero with breadcrumbs & retention badge
│   │   ├── RetentionDashboardCard.jsx # Live retention rate interactive card
│   │   ├── WhatWeDeliver.jsx        # Deliverables grid
│   │   ├── ProcessSteps.jsx         # 4-stage optimization roadmap
│   │   └── AuditCtaSection.jsx      # High-conversion audit consultation CTA
│   ├── AboutPage/                   # Modular About Us components
│   │   ├── AboutHero.jsx            # About hero with company culture photography
│   │   ├── AboutStory.jsx           # Founding timeline & headquarters photography
│   │   ├── AboutTeam.jsx            # SEO analytics specialists & leadership
│   │   ├── AboutValues.jsx          # Core agency tenets
│   │   └── AboutBanner.jsx          # Growth discovery call CTA banner
│   ├── Navbar/                      # Navigation components
│   │   ├── BrandLogo.jsx            # Scalable SVG brand logo
│   │   ├── NavLinks.jsx             # Desktop navigation links
│   │   ├── NavActions.jsx           # Phone quick-call & Proposal CTA
│   │   └── MobileMenu.jsx           # Full-screen touch-optimized drawer
│   ├── Footer/                      # Footer modules
│   │   ├── FooterBrand.jsx          # Brand description & social profiles
│   │   ├── FooterLinksColumn.jsx    # Categorized link groups
│   │   ├── NewsletterForm.jsx       # Email newsletter subscription
│   │   └── FooterBottom.jsx         # Copyright, terms, and privacy links
│   ├── motion/                      # Motion wrapper components
│   │   ├── MotionSection.jsx        # Scroll-triggered section reveals
│   │   ├── MotionFade.jsx           # Directional fade animations
│   │   ├── MotionStagger.jsx        # Staggered children transitions
│   │   └── MotionInteractive.jsx    # Micro-interaction hover/tap scaling
│   └── ui/                          # Shared UI primitives
│       ├── Button.jsx, Card.jsx, Container.jsx, Badge.jsx, Input.jsx, CustomSelect.jsx, RatingStars.jsx
├── data/                            # Decoupled Mock & Content Data Layers
│   ├── hero.js, services.js, servicesPage.js, score.js, testimonials.js, blogs.js, about.js, contact.js, pricing.js
└── public/
    └── images/                      # Optimized WebP visual assets
```

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [Next.js](https://nextjs.org/) `16.4.6` (App Router, Turbopack, Partial Prerendering)
- **Library**: [React](https://react.dev/) `19.3.0`
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) `v4` with `@tailwindcss/postcss`
- **Animations**: [Motion](https://motion.dev/) (Framer Motion) `12.x`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Processing**: [Sharp](https://sharp.pixelplumbing.com/) `0.35.5`
- **Typography**: [Google Fonts (Plus Jakarta Sans)](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

## 💻 Getting Started

### 1. Prerequisites
- Node.js `18.18+` or `20.x+`
- npm, yarn, or pnpm

### 2. Installation
```bash
# Navigate to the application directory
cd seoranking360

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
Generates an optimized, statically prerendered build across all 22 application routes.

### 5. Production Preview
```bash
npm run start
```

---

## 📱 Viewport Breakpoints & Responsive Verification

The design system incorporates continuous testing across all standard viewport widths:

| Device Category | Target Viewport | Layout Adaptation |
|---|---|---|
| **Small Phones** | `320px` – `360px` | Single-column stack, compact typography, horizontal slider scroll, 44px tap targets |
| **Standard Phones** | `375px` – `390px` | Fluid card widths, side-by-side CTA buttons, touch swipe indicators |
| **Large Phones** | `414px` – `430px` | Enhanced padding, two-column stats grids, touch-friendly menu drawer |
| **Tablets (Portrait)** | `768px` – `820px` | 2-column card layouts, balanced hero stack, visible navigation links |
| **Tablets (Landscape)** | `1024px` | 2-column hero split with 3D carousel peek, 4-column metric bars |
| **Desktops** | `1280px` – `1440px+` | Full 12-column grid system, edge-to-edge bleed carousels, refined hover micro-interactions |

---

## 📄 License
Private & Proprietary — Developed for PixelPro / 2Digit Innovations.
