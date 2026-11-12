import React from "react";
import Link from "next/link";
import {
  Shield,
  Lock,
  ChevronRight,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  FileText,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import PolicyDateText from "@/components/PolicyDateText";

export const metadata = {
  title: "Privacy Policy | SEO Ranking360",
  description:
    "Learn how SEO Ranking360 collects, protects, and manages your enterprise data, analytics, and personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

const TOC_ITEMS = [
  { id: "overview", label: "1. Overview & Scope" },
  { id: "collection", label: "2. Information We Collect" },
  { id: "usage", label: "3. How We Use Data" },
  { id: "analytics", label: "4. Analytics & GSC Access" },
  { id: "security", label: "5. Security & Protection" },
  { id: "cookies", label: "6. Cookies & Tracking" },
  { id: "rights", label: "7. Your Data Rights" },
  { id: "retention", label: "8. Data Retention" },
  { id: "contact", label: "9. Contact & Inquiries" },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-800 pb-20 sm:pb-28">
      <section className="relative overflow-hidden bg-[#031d2b] py-14 sm:py-20 lg:py-24 text-white border-b border-white/10">
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-linear-to-bl from-[#ffc329]/15 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-linear-to-tr from-[#2d6ca5]/20 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-400"
          >
            <Link className="transition-colors hover:text-[#ffc329]" href="/">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
            <span className="text-white font-medium">Privacy Policy</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#ffc329]/30 bg-[#ffc329]/10 px-4 py-1.5 text-xs font-semibold text-[#ffc329] mb-4">
            <Shield className="h-3.5 w-3.5" />
            <span>Enterprise Data Protection &amp; Compliance</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Privacy <span className="text-[#ffc329]">Policy</span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-300">
            This Privacy Policy describes our strict data handling protocols, data sovereignty
            guarantees, and how {siteConfig.name} protects your corporate search metrics,
            confidential client data, and personal communications.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400 border-t border-white/10 pt-6">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#ffc329]" />
              Last Updated: <strong className="text-white"><PolicyDateText /></strong>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>
              Effective Date: <strong className="text-white"><PolicyDateText /></strong>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>
              Governance: <strong className="text-[#ffc329]">GDPR • CCPA • SOC 2 Standard</strong>
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="lg:hidden mb-8 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 flex gap-2 touch-scroll">
          {TOC_ITEMS.map((item) => (
            <a
              className="shrink-0 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-xs active:bg-[#031d2b] active:text-white"
              href={`#${item.id}`}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-12 xl:gap-16 items-start">
          <aside className="hidden lg:block sticky top-28 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-2">
              Table of Contents
            </p>
            <nav className="space-y-1">
              {TOC_ITEMS.map((item) => (
                <a
                  className="block rounded-lg px-2.5 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#07192d]"
                  href={`#${item.id}`}
                  key={item.id}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500">
              <p className="font-semibold text-slate-700">Need legal support?</p>
              <a
                className="mt-1.5 inline-flex items-center gap-1 font-semibold text-[#2d6ca5] hover:underline"
                href={`mailto:${siteConfig.email}`}
              >
                Contact Legal Officer <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </aside>

          <article className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 lg:p-12 shadow-xs space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">
            <section className="scroll-mt-28" id="overview">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                1. Overview &amp; Scope
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  This Privacy Policy governs the manner in which {siteConfig.name} (&ldquo;we&rdquo;,
                  &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, maintains, protects, and discloses
                  information gathered from visitors, prospective clients, and active retainer
                  partners interacting with our web domain ({siteConfig.url}) and associated SEO
                  software applications.
                </p>
                <p>
                  By submitting an audit inquiry, executing a service proposal, or authorizing
                  third-party integrations with our SEO platform, you acknowledge that you have
                  reviewed and accepted the practices set forth in this document.
                </p>
                <div className="border-l-4 border-[#ffc329] bg-[#fff9ea] p-4 text-xs sm:text-sm text-slate-800 rounded-r-lg">
                  <strong className="font-bold text-[#07192d]">Core Commitment:</strong> We do not
                  sell, lease, or monetize your corporate contact data, keyword portfolios, or
                  proprietary analytics under any circumstances.
                </div>
              </div>
            </section>

            <section className="scroll-mt-28" id="collection">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                2. Information We Collect
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  We collect information necessary to prepare accurate technical audits and execute
                  enterprise search marketing campaigns:
                </p>
                <ul className="space-y-2.5 list-disc pl-5 text-slate-600">
                  <li>
                    <strong className="text-slate-800">Direct Contact Information:</strong> Full
                    name, corporate email address, telephone contact, job title, and company
                    affiliations provided via our proposal forms.
                  </li>
                  <li>
                    <strong className="text-slate-800">Website &amp; Technical Assets:</strong>{" "}
                    Domain names, staging URLs, CMS credentials, XML sitemaps, and server log files
                    shared for technical debugging and crawl optimization.
                  </li>
                  <li>
                    <strong className="text-slate-800">Diagnostic Web Telemetry:</strong> Anonymized
                    IP addresses, browser signatures, referring websites, and page performance metrics
                    collected through secure session cookies.
                  </li>
                </ul>
              </div>
            </section>

            <section className="scroll-mt-28" id="usage">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                3. How We Use Your Information
              </h2>
              <div className="mt-5 space-y-4">
                <p>We process collected information solely for legitimate commercial functions:</p>
                <div className="space-y-3">
                  {[
                    "Conducting technical website audits, competitor gap analyses, and organic ranking forecasts.",
                    "Formulating customized scope-of-work proposals and service retainer contracts.",
                    "Executing scheduled on-page optimizations, schema markup deployments, and backlink outreach.",
                    "Compiling transparent monthly organic traffic, conversion attribution, and ROI ranking reports.",
                    "Maintaining continuous platform security and preventing automated DDoS or spam abuse.",
                  ].map((text, i) => (
                    <div className="flex items-start gap-3" key={i}>
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-1" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="scroll-mt-28" id="analytics">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                4. Search Console &amp; Analytics Integrations
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  When clients delegate read or edit permissions for Google Search Console, Google
                  Analytics 4, Bing Webmaster Tools, or third-party rank trackers:
                </p>
                <ul className="space-y-2.5 list-disc pl-5 text-slate-600">
                  <li>
                    <strong className="text-slate-800">Restricted Authorization:</strong> Access is
                    restricted exclusively to authenticated engineers directly assigned to your
                    account team.
                  </li>
                  <li>
                    <strong className="text-slate-800">Zero Data Aggregation:</strong> Your internal
                    revenue metrics, conversion volumes, and customer lists are never aggregated into
                    public benchmarks.
                  </li>
                  <li>
                    <strong className="text-slate-800">Full Revocation Rights:</strong> You retain
                    unilateral administrative control and can revoke delegated user permissions at any
                    time from your Google workspace.
                  </li>
                </ul>
              </div>
            </section>

            <section className="scroll-mt-28" id="security">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                5. Security, Encryption &amp; Storage
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  We implement multi-layered administrative, technical, and physical safeguards:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <p className="font-bold text-[#07192d] text-sm">TLS 1.3 &amp; AES-256</p>
                    <p className="text-xs text-slate-600 mt-1">
                      All audit reports and data streams are encrypted both in transit and at rest.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <p className="font-bold text-[#07192d] text-sm">Role-Based Access Control</p>
                    <p className="text-xs text-slate-600 mt-1">
                      Staff accounts require mandatory hardware-key or authenticator-based MFA.
                    </p>
                  </div>
                </div>
                <p>
                  In the unlikely event of an unauthorized data exposure affecting client assets, we
                  commit to notifying impacted administrators within 48 hours in accordance with
                  statutory breach notification protocols.
                </p>
              </div>
            </section>

            <section className="scroll-mt-28" id="cookies">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                6. Cookies &amp; Tracking Technologies
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  Our site uses first-party session cookies to manage responsive navigation, protect
                  form submissions against CSRF exploits, and preserve user preferences. We do not
                  deploy invasive cross-site fingerprinting trackers.
                </p>
                <p>
                  You can set your browser to refuse all or some browser cookies, or to alert you
                  when cookies are being sent. If you disable cookies, please note that some parts of
                  this site may become inaccessible or not function properly.
                </p>
              </div>
            </section>

            <section className="scroll-mt-28" id="rights">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                7. Your Statutory Rights (GDPR &amp; CCPA)
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  Under international privacy frameworks, clients and visitors possess explicit
                  enforceable rights:
                </p>
                <ul className="space-y-2 list-disc pl-5 text-slate-600">
                  <li>The right to obtain confirmation and a machine-readable export of all stored data.</li>
                  <li>The right to rectify inaccurate, out-of-date, or incomplete contact records.</li>
                  <li>The right to demand permanent erasure of all records (&ldquo;Right to be Forgotten&rdquo;).</li>
                  <li>The right to restrict or lodge objections against specific automated processing routines.</li>
                </ul>
              </div>
            </section>

            <section className="scroll-mt-28" id="retention">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                8. Data Retention Timeline
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  We retain client project files and audit deliverables only as long as necessary to
                  fulfill the purposes for which they were collected, typically for the duration of the
                  active retainer plus an archival period of 24 months for audit verification.
                </p>
                <p>
                  Following the expiration of this retention window, all proprietary client assets
                  are permanently purged from our primary database stores and encrypted backups.
                </p>
              </div>
            </section>

            <section className="scroll-mt-28 pt-4 border-t border-slate-100" id="contact">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3">
                9. Legal Inquiries &amp; Data Protection Officer
              </h2>
              <p className="mt-2 text-slate-600">
                For questions concerning this Privacy Policy, to exercise your statutory data
                rights, or to request custom data processing addenda (DPA), please contact our legal
                affairs office:
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-[#07192d] text-base">{siteConfig.name} Legal Compliance</p>
                  <p className="text-xs text-slate-500 mt-0.5">Enterprise Privacy &amp; Regulatory Affairs</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600">
                    <a
                      className="font-semibold text-[#07192d] hover:text-[#df8a25] transition-colors"
                      href={`mailto:${siteConfig.email}`}
                    >
                      {siteConfig.email}
                    </a>
                    <span>•</span>
                    <a
                      className="font-semibold text-[#07192d] hover:text-[#df8a25] transition-colors"
                      href={`tel:${siteConfig.phone}`}
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <Link
                  className="rounded-full bg-[#031d2b] hover:bg-[#ffc329] hover:text-[#07192d] text-white px-5 py-2.5 text-xs sm:text-sm font-bold transition-colors inline-flex items-center gap-2"
                  href="/contact"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
