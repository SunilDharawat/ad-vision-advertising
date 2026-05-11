// src/app/blog/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { siteConfig } from "../../lib/config";
import { sanityFetch } from "../../lib/sanity";
import { ALL_POSTS_QUERY } from "../../lib/queries";
import type { SanityPost } from "../../types/sanity";
import PageHero from "../../components/ui/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description: `Advertising tips, printing guides, and marketing insights from ${siteConfig.name}. Learn how to get more from your advertising budget in Indore.`,
  keywords: [
    "advertising tips Indore",
    "flex printing guide",
    "outdoor advertising MP",
    "digital marketing tips",
  ],
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await sanityFetch<SanityPost[]>(ALL_POSTS_QUERY);
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        label="Blog & Insights"
        title="ADVERTISING"
        titleAccent="KNOW-HOW."
        description="Tips on printing, outdoor advertising, digital marketing, and brand building — written by practitioners, not theorists."
      />

      <section className="section-padding bg-brand-dark">
        <div className="section-container">
          {posts.length === 0 ? (
            // Empty state
            <div className="text-center py-20 border border-white/8 rounded-2xl">
              <p className="text-5xl mb-4">✍️</p>
              <h3 className="font-display text-3xl text-white mb-2">
                NO POSTS YET
              </h3>
              <p className="text-white/40 text-sm">
                Add your first blog post in Sanity Studio at{" "}
                <code className="text-brand-orange">localhost:3333</code>
              </p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featured && (
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group block mb-16"
                >
                  <div className="grid lg:grid-cols-2 gap-0 bg-brand-charcoal border border-white/8 hover:border-brand-orange/30 rounded-2xl overflow-hidden transition-all">
                    {/* Image */}
                    <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                      {featured.imageUrl ? (
                        <Image
                          src={featured.imageUrl}
                          alt={featured.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          priority
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-brand-dark flex items-center justify-center">
                          <span className="text-6xl">📰</span>
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Featured
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      {featured.category && (
                        <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest mb-3">
                          {featured.category}
                        </span>
                      )}
                      <h2 className="font-display text-4xl lg:text-5xl text-white leading-tight mb-4 group-hover:text-brand-orange transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-white/30 text-xs mb-6">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />{" "}
                          {formatDate(featured.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {featured.readTime || 3} min read
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-2 text-brand-orange text-sm font-medium group-hover:gap-3 transition-all">
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Post Grid */}
              {rest.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post) => (
                    <Link
                      key={post._id}
                      href={`/blog/${post.slug}`}
                      className="group bg-brand-charcoal border border-white/8 hover:border-brand-orange/30 rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                    >
                      {/* Image */}
                      <div className="aspect-video relative overflow-hidden">
                        {post.imageUrl ? (
                          <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-dark flex items-center justify-center">
                            <span className="text-4xl">📝</span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        {post.category && (
                          <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest">
                            {post.category}
                          </span>
                        )}
                        <h3 className="text-white font-semibold text-lg mt-1 mb-2 group-hover:text-brand-orange transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-white/25 text-xs">
                          <span className="flex items-center gap-1">
                            <Calendar size={11} />{" "}
                            {formatDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={11} /> {post.readTime || 3} min
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
