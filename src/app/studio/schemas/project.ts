// studio/schemas/project.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Portfolio Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Flex Printing",
          "Hoarding & Signage",
          "Event Branding",
          "Digital Marketing",
          "Vehicle Wrapping",
          "LED & Neon",
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "body",
      title: "Full Project Details",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "mainImage" },
  },
});
