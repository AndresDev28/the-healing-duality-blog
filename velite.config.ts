import { defineConfig, defineCollection, s } from 'velite'

// Definición del esquema para los posts del blog
const posts = defineCollection({
    name: 'Post',
    pattern: 'posts/**/*.mdx',
    schema: s
        .object({
            title: s.string().max(100),
            description: s.string().max(160),
            date: s.isodate(),
            published: s.boolean().default(true),
            image: s.string(), // Ruta a la imagen de portada
            videoID: s.string().optional(), // ID de YouTube
            tags: s.array(s.string()),
            // Metadatos calculados automáticamente
            slug: s.slug('posts'),
            content: s.mdx(),
            metadata: s.metadata(),
        })
        // Validación: Si hay videoID, que tenga el formato correcto (11 caracteres)
        .transform((data) => ({
            ...data,
            permalink: `/blog/${data.slug}`,
        }))
})

export default defineConfig({
    collections: { posts },
})