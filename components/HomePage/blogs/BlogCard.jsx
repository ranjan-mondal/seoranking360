import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BlogCard({ post }) {
  const cleanSlug = (post.slug || post.id || "").replace(/^\/blogs\/?/, "");
  const linkHref = `/blogs/${cleanSlug}`;

  return (
    <article className="text-center group">
      <Link className="relative block overflow-visible" href={linkHref}>
        <div className="relative aspect-[1.65] overflow-hidden rounded-xl bg-slate-800">
          <Image
            alt={post.title}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            src={post.image}
          />
        </div>
        <span className="absolute -bottom-4 sm:-bottom-5 right-3 sm:right-4 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-4 border-[#031d2b] bg-white text-[#071d2b] shadow-lg transition-transform group-hover:translate-x-1">
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
      </Link>
      <p className="mt-7 sm:mt-9 text-xs font-medium text-[#ffbd12]">{post.date}</p>
      <h3 className="mx-auto mt-2.5 sm:mt-3 max-w-sm text-base sm:text-lg lg:text-xl font-semibold leading-6 sm:leading-7 text-white transition-colors group-hover:text-[#ffbd12]">
        <Link href={linkHref}>{post.title}</Link>
      </h3>
      <Link
        className="mt-3 sm:mt-4 inline-block text-xs sm:text-sm underline underline-offset-4 text-slate-300 transition-colors hover:text-[#ffbd12]"
        href={linkHref}
      >
        Read More
      </Link>
    </article>
  );
}

export default BlogCard;
