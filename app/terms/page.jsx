import React from "react";
import Link from "next/link";
import {
  FileCheck,
  ChevronRight,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import PolicyDateText from "@/components/PolicyDateText";

export const metadata = {
  title: "Terms & Conditions | SEO Ranking360",
  description:
    "Review the terms, service agreements, and conditions governing the engagement and delivery of SEO Ranking360's digital marketing platform.",
  alternates: {
    canonical: "/terms",
  },
};

const TOC_TERMS = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "services", label: "2. SEO Services & Scope" },
  { id: "obligations", label: "3. Client Responsibilities" },
  { id: "intellectual-property", label: "4. Deliverables & IP Ownership" },
  { id: "algorithms", label: "5. Search Algorithm Disclaimers" },
  { id: "retainers", label: "6. Retainers & Invoicing" },
  { id: "confidentiality", label: "7. Confidentiality & Non-Disclosure" },
  { id: "liability", label: "8. Limitation of Liability" },
  { id: "termination", label: "9. Term & Termination" },
  { id: "contact", label: "10. Inquiries & Custom SOW" },
];

export default function TermsPage() {
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
            <span className="text-white font-medium">Terms &amp; Conditions</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#ffc329]/30 bg-[#ffc329]/10 px-4 py-1.5 text-xs font-semibold text-[#ffc329] mb-4">
            <FileCheck className="h-3.5 w-3.5" />
            <span>Master Service Agreement &amp; Commercial Terms</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Terms &amp; <span className="text-[#ffc329]">Conditions</span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-300">
            These terms define the legal and operational framework governing client engagements with{" "}
            {siteConfig.name}, including technical SEO deliverables, link acquisition campaigns,
            reporting commitments, and billing schedules.
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
              Applicable To: <strong className="text-[#ffc329]">All Clients &amp; Retainers</strong>
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="lg:hidden mb-8 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 flex gap-2 touch-scroll">
          {TOC_TERMS.map((item) => (
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
              {TOC_TERMS.map((item) => (
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
              <p className="font-semibold text-slate-700">Need custom enterprise terms?</p>
              <a
                className="mt-1.5 inline-flex items-center gap-1 font-semibold text-[#2d6ca5] hover:underline"
                href={`mailto:${siteConfig.email}`}
              >
                Request Custom SOW <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </aside>

          <article className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 lg:p-12 shadow-xs space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">
            <section className="scroll-mt-28" id="acceptance">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                1. Acceptance of Terms
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  By accessing the websites, tools, or applications of {siteConfig.name} (&ldquo;Company&rdquo;,
                  &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) or by countersigning an
                  executive Statement of Work (SOW), you (&ldquo;Client&rdquo; or &ldquo;you&rdquo;)
                  agree to be bound unconditionally by these Terms &amp; Conditions and our Privacy
                  Policy.
                </p>
                <p>
                  These terms constitute the entire master service agreement between the parties with
                  respect to the subject matter hereof, superseding all prior informal proposals,
                  discussions, or preliminary marketing materials.
                </p>
              </div>
            </section>

            <section className="scroll-mt-28" id="services">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                2. SEO Services &amp; Scope of Work
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  {siteConfig.name} provides strategic search engine marketing and organic optimization
                  programs. While specific monthly deliverables are itemized in each client&apos;s
                  individual Statement of Work, standard retainer scopes encompass:
                </p>
                <ul className="space-y-2.5 list-disc pl-5 text-slate-600">
                  <li>
                    <strong className="text-slate-800">Technical Site Auditing:</strong> Crawl
                    budget optimization, page speed / Core Web Vitals remediation, XML sitemap
                    refinement, and canonicalization audits.
                  </li>
                  <li>
                    <strong className="text-slate-800">Commercial Keyword Architecture:</strong>{" "}
                    Intent-driven search term research, competitive gap analysis, and content
                    recommendations.
                  </li>
                  <li>
                    <strong className="text-slate-800">Content &amp; Schema Engineering:</strong>{" "}
                    Creation and optimization of landing pages, structured data (JSON-LD), and
                    conversion copy.
                  </li>
                  <li>
                    <strong className="text-slate-800">Digital PR &amp; Link Acquisition:</strong>{" "}
                    White-hat editorial link outreach, unlinked brand mention reclamation, and
                    industry citation building.
                  </li>
                </ul>
              </div>
            </section>

            <section className="scroll-mt-28" id="obligations">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                3. Client Responsibilities &amp; Staging Access
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  The success of an SEO campaign relies on timely collaboration. Client agrees to:
                </p>
                <div className="space-y-3">
                  {[
                    "Provide delegated access to Google Search Console, Google Analytics, and relevant staging environments within 5 business days of onboarding.",
                    "Review, approve, or provide editorial feedback on submitted technical tickets and content drafts within 7 business days of delivery.",
                    "Notify our account team prior to executing major website redesigns, CMS migrations, or URL restructuring that may impact crawlability.",
                    "Ensure that all text, imagery, and branding assets supplied to us do not infringe on third-party copyrights or trademarks.",
                  ].map((text, i) => (
                    <div className="flex items-start gap-3" key={i}>
                      <CheckCircle2 className="h-4 w-4 text-[#df8a25] shrink-0 mt-1" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="scroll-mt-28" id="intellectual-property">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                4. Deliverables &amp; Intellectual Property Ownership
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  Upon receipt of full payment for the applicable invoicing period, the Client
                  receives full, perpetual, and exclusive worldwide ownership of all custom articles,
                  graphic assets, on-page copy, and technical documentation created specifically for the
                  Client.
                </p>
                <div className="border-l-4 border-[#2d6ca5] bg-[#f0f7ff] p-4 text-xs sm:text-sm text-slate-800 rounded-r-lg">
                  <strong className="font-bold text-[#07192d]">Agency Pre-Existing IP:</strong>{" "}
                  {siteConfig.name} retains sole ownership of its proprietary audit scripts, scoring
                  algorithms, internal workflows, and generic prompt frameworks developed independently
                  of the client deliverables.
                </div>
              </div>
            </section>

            <section className="scroll-mt-28" id="algorithms">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                5. Search Engine Algorithm Disclaimers
              </h2>
              <div className="mt-5 space-y-4">
                <div className="rounded-xl bg-amber-500/10 border border-amber-500/25 p-5 flex items-start gap-3.5">
                  <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-800">
                    <strong className="font-bold text-[#07192d]">Algorithmic Reality:</strong> Search
                    engines such as Google continually update their proprietary ranking systems. No
                    reputable agency can guarantee specific #1 rankings on non-branded keywords.
                  </div>
                </div>
                <p>
                  {siteConfig.name} strictly follows Google Search Essentials and white-hat guidelines.
                  We guarantee disciplined execution of agreed-upon deliverables, transparent
                  analytics reporting, and proactive adjustments when search engines release core
                  algorithm refreshes.
                </p>
              </div>
            </section>

            <section className="scroll-mt-28" id="retainers">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                6. Retainers, Invoicing &amp; Payment Schedules
              </h2>
              <div className="mt-5 space-y-4">
                <ul className="space-y-2.5 list-disc pl-5 text-slate-600">
                  <li>
                    <strong className="text-slate-800">Invoicing Cycle:</strong> Monthly retainers
                    are billed in advance at the start of each service cycle and are payable within
                    14 calendar days via ACH, credit card, or international wire.
                  </li>
                  <li>
                    <strong className="text-slate-800">Delinquent Balances:</strong> Invoices
                    outstanding past 30 days are subject to a 1.5% late fee per month or the legal
                    maximum, and may result in a temporary suspension of link acquisition and active
                    ticket execution.
                  </li>
                  <li>
                    <strong className="text-slate-800">Taxes &amp; Fees:</strong> Client is
                    responsible for any applicable state sales taxes or VAT mandated by the Client&apos;s
                    operating jurisdiction.
                  </li>
                </ul>
              </div>
            </section>

            <section className="scroll-mt-28" id="confidentiality">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                7. Confidentiality &amp; Non-Disclosure
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  Throughout the engagement, both parties will exchange sensitive commercial,
                  financial, and technical information (&ldquo;Confidential Information&rdquo;). Both
                  parties agree to protect such materials with the same degree of care they exercise
                  with their own proprietary intelligence (and never less than reasonable care), and
                  shall not disclose Confidential Information to third parties without prior written
                  consent.
                </p>
              </div>
            </section>

            <section className="scroll-mt-28" id="liability">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                8. Limitation of Liability
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  To the maximum extent permitted by applicable law, neither party shall be liable for
                  any indirect, incidental, special, consequential, or punitive damages, including loss
                  of profits, business interruption, or server downtime.
                </p>
                <p>
                  The aggregate cumulative liability of {siteConfig.name} arising out of or related to
                  any engagement shall not exceed the total fees paid by the Client to the Company
                  during the three (3) months immediately preceding the event giving rise to liability.
                </p>
              </div>
            </section>

            <section className="scroll-mt-28" id="termination">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3 border-b border-slate-100">
                9. Term, Renewal &amp; Cancellation
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  Standard retainer engagements have an initial duration of three (3) months to allow
                  search engines sufficient time to crawl, index, and attribute ranking authority.
                  Following the initial term, agreements automatically renew on a month-to-month
                  basis.
                </p>
                <p>
                  Either party may terminate the agreement after the initial term by providing thirty
                  (30) calendar days written notice via corporate email.
                </p>
              </div>
            </section>

            <section className="scroll-mt-28 pt-4 border-t border-slate-100" id="contact">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07192d] tracking-tight pb-3">
                10. Legal Inquiries &amp; Custom SOW Requests
              </h2>
              <p className="mt-2 text-slate-600">
                To execute custom enterprise Statements of Work, request mutual Non-Disclosure
                Agreements, or clarify any clause in these terms, please contact our legal operations
                desk:
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-[#07192d] text-base">{siteConfig.name} Legal Affairs</p>
                  <p className="text-xs text-slate-500 mt-0.5">Corporate Contracts &amp; Commercial Partnerships</p>
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
                  <span>Request Custom SOW</span>
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
