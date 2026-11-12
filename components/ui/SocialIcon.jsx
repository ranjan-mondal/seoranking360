import React from "react";

export function SocialIcon({ type = "whatsapp", href, className = "" }) {
  const isWhatsApp = type === "whatsapp";
  const defaultHref = isWhatsApp ? "https://wa.me/917814042409" : "https://t.me/seoranking360";

  return (
    <a
      aria-label={isWhatsApp ? "WhatsApp" : "Telegram"}
      className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105 ${
        isWhatsApp ? "bg-[#0ac454]" : "bg-[#209fdb]"
      } ${className}`}
      href={href || defaultHref}
      rel="noreferrer"
      target="_blank"
    >
      {isWhatsApp ? (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
          <path
            d="M19.1 4.9A9.9 9.9 0 0 0 3.4 16.8L2 22l5.3-1.4A9.9 9.9 0 0 0 19.1 4.9Z"
            stroke="white"
            strokeWidth="1.8"
          />
          <path
            d="M8.2 7.8c.2-.4.4-.4.8-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c.6 1.1 1.5 2 2.7 2.6l.5-.5c.2-.2.4-.2.7-.1l1.7.7c.3.1.4.3.4.6-.1 1-.7 1.5-1.6 1.5-2.2 0-5.3-2.9-6-5.7-.2-.7-.1-1.5.7-2Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
          <path d="m4 11 16-7-4.8 16-3.1-6.1L4 11Z" fill="white" />
          <path d="m12.1 13.9 2.8-6.1-6.8 3.1" stroke="#209fdb" strokeWidth="1.2" />
        </svg>
      )}
    </a>
  );
}

export default SocialIcon;

