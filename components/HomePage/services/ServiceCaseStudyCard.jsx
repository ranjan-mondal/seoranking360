import React from "react";
import Image from "next/image";

export function ServiceCaseStudyCard({ service }) {
  if (!service) return null;

  return (
    <article className="relative w-full overflow-hidden rounded-[26px] sm:rounded-3xl bg-[#061626] border border-white/5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex flex-col justify-between h-full select-none">
        <div className="relative w-full h-[220px] xs:h-[240px] sm:h-[180px] overflow-hidden">
          <Image
            alt={`${service.caseTitle || service.title} case study`}
            className="object-cover object-center"
            fill
            key={service.image}
            priority
            sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
            src={service.image}
          />

          <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-b from-transparent via-[#061626]/50 to-[#061626]" />

          <div className="absolute left-6 sm:left-7 top-[42%] -translate-y-1/2 z-10 w-[74px] sm:w-[78px] rounded-2xl bg-[#e9a419] p-3 text-[#07192d] shadow-lg">
            <span className="block text-2xl font-black tracking-tight leading-none text-[#07192d]">
              {service.metric}
            </span>
            <span className="block text-[11px] sm:text-xs font-bold leading-tight text-[#07192d] mt-1.5 whitespace-pre-line">
              {service.metricLabel}
            </span>
          </div>
        </div>

        <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">
              {service.caseTitle}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-400 font-normal">
              {service.caseSubtitle || service.caseDescription}
            </p>

            <div className="my-6 sm:my-7 h-px bg-white/10" />

            {service.quote && (
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="relative shrink-0">
                  <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-full overflow-hidden border border-white/20 shadow-xs">
                    <Image
                      alt={service.author?.name || "Client"}
                      className="object-cover"
                      fill
                      sizes="48px"
                      src={service.author?.avatar || "/images/christian-t-avatar.webp"}
                    />
                  </div>

                  <div className="absolute -bottom-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-white shadow-xs p-0.5">
                    <svg className="h-full w-full" viewBox="0 0 24 24">
                      <path
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-100 font-normal">
                    {service.quote}
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    <strong className="font-bold text-white">{service.author?.name}</strong>
                    {service.author?.company && `, ${service.author.company}`}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-5 sm:mt-6 flex justify-end items-center text-xs sm:text-sm text-slate-400">
            <span className="font-bold text-white mr-1.5">{service.reviewsCount || "39"}</span>
            <span>client reviews</span>
          </div>
        </div>
    </article>
  );
}

export default ServiceCaseStudyCard;
