import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
    // CAMBIO AQUÍ: Usamos una función para acceder al helper 'image'
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        // CAMBIO AQUÍ: Ahora es una imagen de Astro, no un string
        heroImage: image().optional(), 
    }),
});

const games = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/games" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        heroImage: image().optional(), // También aquí por si acaso
        core: z.string().optional(),
        gameUrl: z.string().optional(),
        category: z.string(),
    }),
});

export const collections = { blog, games };