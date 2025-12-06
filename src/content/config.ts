import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  posts,
};
