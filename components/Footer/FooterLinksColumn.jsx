import React from "react";
import Link from "next/link";

export function FooterLinksColumn({ title, links = [] }) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-wide text-white">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => {
          const isObject = typeof link === "object";
          const label = isObject ? link.label : link;
          const href = isObject ? link.href : "/services";

          return (
            <li className="text-sm" key={label}>
              <Link
                className="transition-colors hover:text-[#ffb511] text-slate-300"
                href={href}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterLinksColumn;
