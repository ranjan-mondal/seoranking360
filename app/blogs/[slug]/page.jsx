import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  CheckCircle2,
  MoveRight,
  BookmarkCheck,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import BlogCard from "@/components/HomePage/blogs/BlogCard";
import { blogPostsData, getBlogBySlug, getRelatedBlogs } from "@/data/blogs";

export function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found | SEO Ranking360",
    };
  }

  const postUrl = `https://seoranking360.com/blogs/${post.slug}`;

  return {
    title: `${post.title} | SEO Ranking360`,
    description: post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      publishedTime: post.date,
      authors: [post.author?.name || "SEO Ranking360"],
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function BlogDetailSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-[#031d2b] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0">
          <div className="h-4 w-36 rounded-full bg-white/10 animate-pulse" />
          <div className="mt-6 h-12 w-3/4 rounded-xl bg-white/10 animate-pulse" />
          <div className="mt-6 flex gap-4">
            <div className="h-10 w-10 rounded-full bg-white/10 animate-pulse" />
            <div className="h-10 w-48 rounded bg-white/10 animate-pulse" />
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0">
          <div className="aspect-[16/9] w-full rounded-2xl bg-slate-100 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

async function BlogDetailsContent({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogs(slug, 3);
  const postUrl = `https://seoranking360.com/blogs/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://seoranking360.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author?.name || "SEO Ranking360 Team",
      jobTitle: post.author?.role,
    },
    publisher: {
      "@type": "Organization",
      name: "SEO Ranking360",
      logo: {
        "@type": "ImageObject",
        url: "https://seoranking360.com/images/SEOReport.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  return (
    <article className="min-h-screen bg-white">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        type="application/ld+json"
      />

      <section className="border-b border-white/5 bg-[#031d2b] py-12 sm:py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400">
            <Link className="transition-colors hover:text-[#ffb511]" href="/">
              Home
            </Link>
            <span>/</span>
            <Link className="transition-colors hover:text-[#ffb511]" href="/blogs">
              Blog
            </Link>
            <span>/</span>
            <span className="truncate text-slate-200">{post.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#ffb511] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#07192d]">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-300">
              <Clock className="h-3.5 w-3.5 text-[#ffb511]" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-300">
              <Calendar className="h-3.5 w-3.5 text-[#ffb511]" />
              {post.date}
            </span>
          </div>

          <h1 className="mt-6 max-w-5xl text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white break-words">
            {post.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20">
                <Image
                  alt={post.author.name}
                  className="object-cover"
                  fill
                  sizes="48px"
                  src={post.author.avatar}
                />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{post.author.name}</p>
                <p className="text-xs text-slate-400">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 mr-2 flex items-center gap-1">
                <Share2 className="h-3.5 w-3.5" /> Share:
              </span>
              <a
                aria-label="Share on LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-slate-200 transition-colors hover:bg-[#ffb511] hover:text-[#031d2b]"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                in
              </a>
              <a
                aria-label="Share on Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-slate-200 transition-colors hover:bg-[#ffb511] hover:text-[#031d2b]"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(postUrl)}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                x
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] items-start">
            <div className="min-w-0">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  alt={post.title}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1280px) 850px, (min-width: 1024px) 65vw, 100vw"
                  src={post.image}
                />
              </div>

              <div className="mt-10 rounded-2xl border-l-4 border-[#ffb511] bg-slate-50 p-6 sm:p-8">
                <p className="text-base sm:text-lg leading-relaxed text-slate-700 italic">
                  &ldquo;{post.content.intro}&rdquo;
                </p>
              </div>

              <div className="mt-10 space-y-10 text-slate-700">
                {post.content.sections.map((section, idx) => (
                  <div id={`section-${idx + 1}`} key={idx}>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#07192d]">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4 text-base sm:text-lg leading-8 text-slate-600">
                      {section.paragraphs.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {post.content.takeaways && (
                <div className="mt-12 rounded-2xl border border-emerald-100 bg-[#f0fbf6] p-6 sm:p-8">
                  <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[#07192d]">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    Key Strategic Takeaways
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {post.content.takeaways.map((takeaway, tIdx) => (
                      <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700" key={tIdx}>
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-12 border-t border-slate-200 pt-8 flex items-center justify-between">
                <Link
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#07192d] hover:text-[#ffb511] transition-colors"
                  href="/blogs"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to all articles
                </Link>
              </div>
            </div>

            <aside className="hidden lg:block space-y-8 sticky top-24">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a75c15]">
                  <BookmarkCheck className="h-4 w-4" /> In This Guide
                </p>
                <nav className="mt-4 space-y-2.5">
                  {post.content.sections.map((section, idx) => (
                    <a
                      className="block text-xs font-medium text-slate-600 hover:text-[#df8a25] transition-colors line-clamp-1"
                      href={`#section-${idx + 1}`}
                      key={idx}
                    >
                      {section.heading}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xs">
                <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full border-2 border-[#ffb511] shadow-sm">
                  <Image
                    alt={post.author.name}
                    className="object-cover"
                    fill
                    sizes="80px"
                    src={post.author.avatar}
                  />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#07192d]">{post.author.name}</h3>
                <p className="text-xs font-semibold text-[#df8a25]">{post.author.role}</p>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Leading search marketing operations and organic pipeline strategy for enterprise brands.
                </p>
              </div>

              <div className="rounded-2xl bg-[#061d30] p-6 text-white text-center shadow-lg relative overflow-hidden">
                <span className="inline-flex rounded-full bg-[#ffb511] px-3 py-1 text-[11px] font-bold text-[#07192d] mb-3">
                  <Sparkles className="h-3 w-3 mr-1 inline" /> Free Analysis
                </span>
                <h3 className="text-lg font-bold">Want Rankings Like This?</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Get a complimentary SEO ranking audit and custom pipeline revenue roadmap from our team.
                </p>
                <Link
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#ffc329] to-[#ff9f0b] py-3 text-xs font-bold text-[#07192d] transition-transform hover:scale-[1.02]"
                  href="/contact"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  Get Free Proposal
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="bg-[#031d2b] py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-flex rounded-full bg-[#fff1c8] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#a75c15]">
                  RECOMMENDED READING
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
                  Related <span className="text-[#ffbd12]">Insights</span>
                </h2>
              </div>
              <Link
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffbd12] hover:underline"
                href="/blogs"
              >
                View all posts <MoveRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {relatedPosts.map((relPost) => (
                <BlogCard key={relPost.id} post={relPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

export default function BlogDetailsPage({ params }) {
  return (
    <Suspense fallback={<BlogDetailSkeleton />}>
      <BlogDetailsContent params={params} />
    </Suspense>
  );
}
