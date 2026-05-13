// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { siteConfig } from "../lib/config";
import { sanityFetch } from "../lib/sanity";
import { ALL_PROJECTS_QUERY, ALL_POSTS_QUERY } from "../lib/queries";
import type { SanityProject, SanityPost } from "../types/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];

  // Dynamic blog post pages
  let blogPages: MetadataRoute.Sitemap = [];
  let portfolioPages: MetadataRoute.Sitemap = [];

  try {
    const posts = await sanityFetch<SanityPost[]>(ALL_POSTS_QUERY);
    blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    const projects = await sanityFetch<SanityProject[]>(ALL_PROJECTS_QUERY);
    portfolioPages = projects.map((project) => ({
      url: `${baseUrl}/portfolio/${project.slug}`,
      lastModified: new Date(project.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));
  } catch (e) {
    // Sanity not connected yet — skip dynamic pages
    console.log("Sitemap: Sanity fetch skipped", e);
  }

  return [...staticPages, ...blogPages, ...portfolioPages];
}
