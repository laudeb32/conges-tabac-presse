import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      source: "index.yml",
      type: "data",
      schema: z.object({
        hero: z.object({
          title: z.string().nonempty(),
          description: z.string().nonempty(),
        }),
        intro: z.object({
          headline: z.string().nonempty(),
          title: z.string().nonempty(),
          description: z.string().nonempty(),
          features: z.array(
            z.object({
              title: z.string().nonempty(),
              description: z.string().nonempty(),
              icon: z.string().nonempty(),
            })
          ),
        }),
        testimonials: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              avatar: z.object({
                src: z.string().nonempty(),
                  alt: z.string().nonempty(),
                })
                .optional(),
            }),
          })
        ),
        why: z.object({
          title: z.string().nonempty(),
          features: z.array(
            z.object({
              title: z.string().nonempty(),
              description: z.string().nonempty(),
              icon: z.string().nonempty(),
            })
          ),
        }),
      }),
    }),
  },
});
