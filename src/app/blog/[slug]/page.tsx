// src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { sanityFetch } from "../../../lib/sanity";
import { POST_BY_SLUG_QUERY, RECENT_POSTS_QUERY } from "../../../lib/queries";
import type { SanityPost } from "../../../types/sanity";
import CtaBanner from "../../../components/sections/CtaBanner";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Portable Text components for rendering rich text
const ptComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-white/60 leading-relaxed mb-4">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display text-4xl text-white mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-display text-3xl text-white mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-brand-orange pl-5 my-6 text-white/50 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-none space-y-2 mb-4">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-white/60">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-2 text-white/60">
        <span className="text-brand-orange mt-1">▸</span> {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="text-white/80 italic">{children}</em>
    ),
    link: ({
      value,
      children,
    }: {
      value?: { href: string };
      children?: React.ReactNode;
    }) => (
      <a
        href={value?.href}
        className="text-brand-orange hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await sanityFetch<SanityPost>(POST_BY_SLUG_QUERY, {
    slug: params.slug,
  });
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: post.imageUrl ? [{ url: post.imageUrl }] : [] },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const [post, recentPosts] = await Promise.all([
    sanityFetch<SanityPost>(POST_BY_SLUG_QUERY, { slug: params.slug }),
    sanityFetch<SanityPost[]>(RECENT_POSTS_QUERY),
  ]);

  if (!post) notFound();

  const related = recentPosts.filter((p) => p.slug !== params.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-brand-dark">
        <div className="section-container">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-brand-orange text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          {post.category && (
            <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest mb-4 block">
              {post.category}
            </span>
          )}
          <h1 className="font-display text-5xl lg:text-7xl text-white leading-none mb-6 max-w-4xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-white/30 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> {post.readTime || 3} min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {post.imageUrl && (
        <div className="section-container mb-12">
          <div className="aspect-video relative rounded-2xl overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <section className="section-padding bg-brand-dark pt-0">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article body */}
            <article className="lg:col-span-2 prose-custom">
              {post.body ? (
                <PortableText
                  value={
                    post.body as Parameters<typeof PortableText>[0]["value"]
                  }
                  components={ptComponents}
                />
              ) : (
                <p className="text-white/40">No content yet.</p>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Share */}
                <div className="bg-brand-charcoal border border-white/8 rounded-2xl p-6">
                  <h3 className="text-white font-semibold text-sm mb-4">
                    Share This Post
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + typeof window !== "undefined" ? window.location.href : "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-xs bg-green-600/20 hover:bg-green-600/30 text-green-400 py-2 rounded-lg transition-colors"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-xs bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 py-2 rounded-lg transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>

                {/* Related Posts */}
                {related.length > 0 && (
                  <div className="bg-brand-charcoal border border-white/8 rounded-2xl p-6">
                    <h3 className="text-white font-semibold text-sm mb-4">
                      More Articles
                    </h3>
                    <div className="space-y-4">
                      {related.map((p) => (
                        <Link
                          key={p._id}
                          href={`/blog/${p.slug}`}
                          className="group flex gap-3"
                        >
                          <div className="w-14 h-14 rounded-lg overflow-hidden relative shrink-0 bg-brand-gray">
                            {p.imageUrl && (
                              <Image
                                src={p.imageUrl}
                                alt={p.title}
                                fill
                                className="object-cover"
                                sizes="56px"
                              />
                            )}
                          </div>
                          <div>
                            <p className="text-white/80 text-xs font-medium group-hover:text-brand-orange transition-colors line-clamp-2">
                              {p.title}
                            </p>
                            <p className="text-white/25 text-xs mt-1">
                              {formatDate(p.publishedAt)}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-brand-orange rounded-2xl p-6 text-center">
                  <p className="font-display text-2xl text-white mb-2">
                    NEED HELP?
                  </p>
                  <p className="text-white/80 text-xs mb-4">
                    Get a free quote for your project
                  </p>
                  <Link
                    href="/contact"
                    className="block bg-white text-brand-orange font-semibold text-sm py-2.5 rounded-xl hover:bg-brand-dark hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
