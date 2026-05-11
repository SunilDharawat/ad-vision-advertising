// src/lib/queries.ts

// ─── Portfolio ───────────────────────────────────────────────
export const ALL_PROJECTS_QUERY = `
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    category,
    tags,
    description,
    "imageUrl": mainImage.asset->url,
    "slug": slug.current,
    publishedAt
  }
`;

export const PROJECT_BY_SLUG_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    category,
    tags,
    description,
    body,
    mainImage,
    "imageUrl": mainImage.asset->url,
    publishedAt
  }
`;

export const PROJECTS_BY_CATEGORY_QUERY = `
  *[_type == "project" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    category,
    tags,
    "imageUrl": mainImage.asset->url,
    "slug": slug.current
  }
`;

// ─── Blog ────────────────────────────────────────────────────
export const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    publishedAt,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    "category": category->title,
    "readTime": round(length(pt::text(body)) / 5 / 180)
  }
`;

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    excerpt,
    publishedAt,
    body,
    mainImage,
    "imageUrl": mainImage.asset->url,
    "category": category->title,
    "readTime": round(length(pt::text(body)) / 5 / 180)
  }
`;

export const RECENT_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    publishedAt,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    "category": category->title
  }
`;
