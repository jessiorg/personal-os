import { defineCollection, z } from 'astro:content';

const tasks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    bucket: z.enum(['today', 'upcoming', 'anytime', 'someday']),
    area: z.string(),
    project: z.string().optional(),
    status: z.enum(['open', 'blocked', 'done']).default('open'),
    priority: z.enum(['low', 'normal', 'high']).default('normal'),
    dueDate: z.string().optional(),
    note: z.string().optional(),
    sortOrder: z.number().int().optional(),
  }),
});

export const collections = {
  tasks,
};
