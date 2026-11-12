/**
 * Blog Posts and Insights Data
 */

export const blogCategories = [
  { id: "all", name: "All Posts", count: 24 },
  { id: "seo-tips", name: "SEO Tips", count: 12 },
  { id: "social-media", name: "Social Media", count: 5 },
  { id: "keyword-research", name: "Keyword Research", count: 4 },
  { id: "digital-marketing", name: "Digital Marketing", count: 3 },
];

export const blogsSectionHeader = {
  badge: "Our Blogs",
  title: "Latest Insights",
  titleHighlight: "& SEO Tips",
  description: "Browse our complete collection of actionable SEO, marketing, and growth guides.",
};

export const blogPostsData = [
  {
    id: "10-proven-seo-strategies",
    slug: "10-proven-seo-strategies",
    title: "10 Proven SEO Strategies to Boost Your Website Traffic",
    date: "March 26, 2020",
    category: "SEO Tips",
    readTime: "7 min read",
    image: "/images/b439103f59c00414aab74b9e7b2d24787b8e680f.webp",
    author: {
      name: "Marcus Vance",
      role: "Head of SEO Strategy",
      avatar: "/images/c5ce6f268e3acb7769cdfca85c7050fe9ce9cde9.webp",
    },
    excerpt:
      "Discover the 10 most impactful SEO strategies that top brands use to multiply their organic search traffic and outrank competitors consistently.",
    content: {
      intro:
        "Search engine optimization isn't about gaming algorithms anymore — it's about delivering undeniable value to users and building genuine domain authority. In this comprehensive guide, we unpack the ten proven strategies that have generated millions of qualified organic visitors for our enterprise and growth-stage clients.",
      sections: [
        {
          heading: "1. Prioritize Search Intent Over Raw Keyword Volume",
          paragraphs: [
            "Ranking for high-volume keywords is useless if those searchers have zero intention of buying your product or service. Modern search engines are semantic engines; they analyze user behavior to determine if a page actually solves the searcher's query.",
            "Segment your keyword targets into informational, commercial, and transactional buckets. Tailor your landing pages specifically to close transactional visitors, while using informational guides to capture top-of-funnel consideration.",
          ],
        },
        {
          heading: "2. Master Technical SEO and Core Web Vitals",
          paragraphs: [
            "A visually stunning website will still fail in organic search if Googlebot encounters crawl errors, slow Largest Contentful Paint (LCP), or unstable layout shifts. Fast, clean web performance is a prerequisite for competitive search terms.",
            "Ensure mobile-first responsiveness, implement semantic schema markup (JSON-LD), and audit crawl depth quarterly to prevent orphan pages from siphoning your crawl budget.",
          ],
        },
        {
          heading: "3. Build High-Quality Editorial Backlinks",
          paragraphs: [
            "Quantity of links has taken a back seat to link relevance and editorial authority. A single contextual mention from an industry publication like Forbes or Inc. carries far more algorithmic weight than dozens of directory submissions.",
            "Produce proprietary data studies, industry surveys, and definitive resources that journalists naturally link to as primary sources.",
          ],
        },
        {
          heading: "4. Continuous Content Refresh and Optimization",
          paragraphs: [
            "Search queries evolve every year. Review your top-performing articles every 6 months to refresh outdated statistics, replace dead external links, and add answers to new 'People Also Ask' questions.",
          ],
        },
      ],
      takeaways: [
        "Focus on search intent rather than vanity search volume.",
        "Pass Google Core Web Vitals with sub-2.5s LCP on mobile devices.",
        "Invest in original data assets to attract high-tier editorial backlinks.",
        "Update decaying content regularly to preserve top rankings.",
      ],
    },
  },
  {
    id: "how-social-media-marketing-can-grow-your-business",
    slug: "how-social-media-marketing-can-grow-your-business",
    title: "How Social Media Marketing Can Grow Your Business",
    date: "March 26, 2020",
    category: "Social Media",
    readTime: "6 min read",
    image: "/images/4fd2ee111936a3e844273736220684913092c0a8.webp",
    author: {
      name: "Elena Rostova",
      role: "VP of Social & Content",
      avatar: "/images/4fd2ee111936a3e844273736220684913092c0a8.webp",
    },
    excerpt:
      "Learn how to transform your social channels from passive broadcasting tools into active community hubs that drive real pipeline revenue.",
    content: {
      intro:
        "Social media marketing has matured far beyond follower counts and vanity likes. Today's most profitable brands use social platforms as direct feedback loops, customer service touchpoints, and organic distribution engines.",
      sections: [
        {
          heading: "Aligning Channel Selection With Buyer Demographics",
          paragraphs: [
            "Not every brand needs to be on TikTok, and not every B2B solution belongs on Pinterest. Spend time analyzing where your ideal customer profile (ICP) consumes educational and professional content.",
            "For B2B companies, LinkedIn remains the gold standard for executive thought leadership and demand generation. For D2C brands, short-form video on Instagram Reels and TikTok drives direct impulse conversion.",
          ],
        },
        {
          heading: "Community Building vs Broadcast Publishing",
          paragraphs: [
            "Brands that win on social don't just post corporate announcements; they participate in comments, reply to direct messages within minutes, and spotlight customer stories.",
          ],
        },
      ],
      takeaways: [
        "Select platforms where your target audience actively seeks solutions.",
        "Prioritize engagement rate and conversation over follower count.",
        "Incorporate user-generated content to build authentic social proof.",
      ],
    },
  },
  {
    id: "the-ultimate-guide-to-keyword-research",
    slug: "the-ultimate-guide-to-keyword-research",
    title: "The Ultimate Guide to Keyword Research",
    date: "March 26, 2020",
    category: "Keyword Research",
    readTime: "9 min read",
    image: "/images/c961ef14d5881da04fda691f401fc3e286ebaf9b.webp",
    author: {
      name: "David Kim",
      role: "Senior SEO Analyst",
      avatar: "/images/c961ef14d5881da04fda691f401fc3e286ebaf9b.webp",
    },
    excerpt:
      "A step-by-step masterclass on uncovering high-intent keywords, analyzing competitive SERP gaps, and structuring your content pillars.",
    content: {
      intro:
        "Keyword research is the architectural blueprint of search marketing. Without precise keyword mapping, even the highest quality content risks ranking for queries nobody ever types.",
      sections: [
        {
          heading: "Finding Seed Keywords & Competitor Gaps",
          paragraphs: [
            "Start by identifying the core terminology your customers use to describe their pain points. Often, internal corporate jargon differs drastically from the simple language real customers search for.",
            "Analyze competitor keyword overlap using tools like Ahrefs or Semrush to identify 'content gaps' — high-value keywords your competitors rank for that your domain has completely missed.",
          ],
        },
        {
          heading: "Topical Authority and Keyword Clustering",
          paragraphs: [
            "Rather than creating one article per keyword, group semantically related queries into unified topic clusters. Google rewards comprehensive topical depth rather than fragmented thin content.",
          ],
        },
      ],
      takeaways: [
        "Map keywords to specific stages of your customer buying journey.",
        "Cluster related keywords into single, comprehensive cornerstone pages.",
        "Evaluate SERP feature real estate (featured snippets, local packs).",
      ],
    },
  },
  {
    id: "technical-seo-checklist-for-2024",
    slug: "technical-seo-checklist-for-2024",
    title: "Technical SEO Checklist for 2024",
    date: "March 20, 2024",
    category: "SEO Tips",
    readTime: "8 min read",
    image: "/images/de9f6fd2d029434e6c93e4b1848027b90f7e96ac.webp",
    author: {
      name: "Marcus Vance",
      role: "Head of SEO Strategy",
      avatar: "/images/c5ce6f268e3acb7769cdfca85c7050fe9ce9cde9.webp",
    },
    excerpt:
      "Ensure your website meets Google's strict modern standards with our comprehensive technical audit checklist covering indexing, speed, and architecture.",
    content: {
      intro:
        "As Google's algorithms grow more sophisticated with AI and neural matching, maintaining a squeaky-clean technical foundation is no longer optional. Here is our exact checklist for auditing client sites in 2024.",
      sections: [
        {
          heading: "Crawlability & Indexing Efficiency",
          paragraphs: [
            "Audit your robots.txt and XML sitemaps to ensure search engines are indexing your money pages while ignoring staging environments, internal search filters, and duplicate parameters.",
            "Use canonical tags deliberately to resolve duplicate content issues across ecommerce variations and pagination sequences.",
          ],
        },
        {
          heading: "Interaction to Next Paint (INP)",
          paragraphs: [
            "In 2024, Google replaced First Input Delay with Interaction to Next Paint as a Core Web Vital. Test main-thread javascript execution and reduce input latency across all interactive widgets.",
          ],
        },
      ],
      takeaways: [
        "Audit robots.txt and XML sitemaps monthly.",
        "Optimize for Google's INP metric to maintain top mobile rankings.",
        "Eliminate 404 broken links and redirect chains immediately.",
      ],
    },
  },
  {
    id: "how-to-optimize-content-for-voice-search-ai",
    slug: "how-to-optimize-content-for-voice-search-ai",
    title: "How to Optimize Content for Voice Search & AI",
    date: "March 15, 2024",
    category: "Digital Marketing",
    readTime: "6 min read",
    image: "/images/cb8fda48f3b1bd308e8a88ea06c8b58d83f276e0.webp",
    author: {
      name: "Sarah Chen",
      role: "AI & Search Innovation Lead",
      avatar: "/images/4fd2ee111936a3e844273736220684913092c0a8.webp",
    },
    excerpt:
      "Prepare your search strategy for ChatGPT, Perplexity, and Google Gemini by structuring your content for conversational and generative search engines.",
    content: {
      intro:
        "Generative engines like ChatGPT, Gemini, and Perplexity don't just return ten blue links — they synthesize answers from trusted sources. Optimizing for this shift requires a new approach to brand authority.",
      sections: [
        {
          heading: "Conversational Phrasing and Natural Language Q&A",
          paragraphs: [
            "People search differently when speaking to an AI assistant or voice-enabled device. They ask complete, contextual questions rather than short keyword strings.",
            "Structure your content around clear, direct answers placed in the first 50 words of every subsection to optimize for AI citation extraction.",
          ],
        },
      ],
      takeaways: [
        "Provide concise, direct answers right below subheadings.",
        "Use schema markup to help AI scrapers parse key entities.",
        "Track brand mentions across LLM generated search overviews.",
      ],
    },
  },
  {
    id: "link-building-tactics-that-actually-work",
    slug: "link-building-tactics-that-actually-work",
    title: "Link Building Tactics That Actually Work",
    date: "March 26, 2020",
    category: "Digital Marketing",
    readTime: "7 min read",
    image: "/images/1960bbbb1da44d92817ef8d24041409cb5578aae.webp",
    author: {
      name: "Marcus Vance",
      role: "Head of SEO Strategy",
      avatar: "/images/c5ce6f268e3acb7769cdfca85c7050fe9ce9cde9.webp",
    },
    excerpt:
      "Say goodbye to spammy outreach. Learn modern digital PR and relationship-based link acquisition tactics that earn genuine high-authority editorial links.",
    content: {
      intro:
        "Cold email spam blast link building is dead. Top tier websites delete generic template requests immediately. To win links today, you need a proactive digital PR strategy that editors genuinely welcome.",
      sections: [
        {
          heading: "Digital PR and Original Research",
          paragraphs: [
            "When you publish unique survey findings, cost analyses, or industry benchmarks, writers seeking citations will naturally link to your original study.",
            "Build relationship pipelines with journalists covering your specific industry beat and offer executive quotes on breaking industry news.",
          ],
        },
      ],
      takeaways: [
        "Invest in original data assets journalists love quoting.",
        "Build genuine relationships with industry writers before asking for links.",
        "Focus on domain relevance over third-party vanity DA scores.",
      ],
    },
  },
];

/**
 * Retrieve blog by slug
 */
export function getBlogBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = slug.replace(/^\/blogs\/?/, "").toLowerCase();
  return (
    blogPostsData.find(
      (post) =>
        post.slug.toLowerCase() === cleanSlug || post.id.toLowerCase() === cleanSlug
    ) || null
  );
}

/**
 * Retrieve related blogs excluding current post
 */
export function getRelatedBlogs(currentSlug, limit = 3) {
  const cleanSlug = (currentSlug || "").replace(/^\/blogs\/?/, "").toLowerCase();
  return blogPostsData
    .filter((post) => post.slug.toLowerCase() !== cleanSlug)
    .slice(0, limit);
}

export default blogPostsData;
