import { defineCollection, z } from 'astro:content';

const fwdProducts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    price: z.string(),
    category: z.string().optional(),
  }),
});

const fwBoysProducts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    price: z.string(),
  }),
});

export const collections = {
  'FWDProducts': fwdProducts,
  'FWBoysProducts': fwBoysProducts, // Ensure this matches the folder name exactly
};