import { defineCollection, z } from 'astro:content';

const fwdproducts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    price: z.string(),
    category: z.string().optional(),
  }),
});

const fwboysproducts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    price: z.string(),
  }),
});

export const collections = {
  // These keys MUST match your folder names exactly (all lowercase)
  'fwdproducts': fwdproducts,
  'fwboysproducts': fwboysproducts,
};