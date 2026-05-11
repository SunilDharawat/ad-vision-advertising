// src/types/sanity.ts

export interface SanityProject {
  _id: string;
  title: string;
  category: string;
  tags: string[];
  description?: string;
  imageUrl: string;
  slug: string;
  publishedAt: string;
  body?: unknown[];
}

export interface SanityPost {
  _id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  slug: string;
  imageUrl: string;
  category: string;
  readTime: number;
  body?: unknown[];
}
