import { defineCollection, z } from 'astro:content';

const fwdproducts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    price: z.string(),
    status: z.enum(['in_stock', 'custom']), // Matches your new CMS dropdown
    category: z.string().optional(),
    // UPDATED: Now looks for a gallery of images with captions
    gallery: z.array(
      z.object({
        image: z.string(),
        caption: z.string().optional(),
      })
    ).max(10),
    material: z.string().optional(),
    is_cc_by: z.boolean().default(false),
    designer_name: z.string().optional(),
    source_link: z.string().optional(),
  }),
});

const fwboysproducts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    price: z.string(),
    status: z.enum(['in_stock', 'custom']),
    // UPDATED: Now looks for a gallery of images with captions
    gallery: z.array(
      z.object({
        image: z.string(),
        caption: z.string().optional(),
      })
    ).max(10),
    material: z.string().optional(),
    is_cc_by: z.boolean().default(false),
    designer_name: z.string().optional(),
    source_link: z.string().optional(),
  }),
});

export const collections = {
  'fwdproducts': fwdproducts,
  'fwboysproducts': fwboysproducts,
};