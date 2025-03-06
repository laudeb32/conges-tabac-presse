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
        testimonials: z.object({
          title: z.string().nonempty(),
          description: z.string().nonempty(),
          items: z.array(
            z.object({
              quote: z.string().nonempty(),
              user: z.object({
                name: z.string().nonempty(),
                description: z.string().nonempty(),
                avatar: z
                  .object({
                    src: z.string().nonempty(),
                    alt: z.string().nonempty(),
                  })
                  .optional(),
              }),
            })
          ),
        }),
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
        pricing: z.object({
          one: z.object({
            price: z.string().nonempty(),
            fee: z.object({
              default: z.number().nonnegative(),
              annual: z.number().nonnegative(),
            }),
          }),
          two: z.object({
            price: z.string().nonempty(),
            discount: z.string().nonempty(),
            fee: z.object({
              default: z.number().nonnegative(),
              annual: z.number().nonnegative(),
            }),
          }),
          fee: z.object({
            label: z.string().nonempty(),
            description: z.string().nonempty(),
          }),
        }),
        form: z.object({
          quick: z.object({
            title: z.string().nonempty(),
            icon: z.string().nonempty(),
          }),
        }),
        faq: z.object({
          title: z.string().nonempty(),
          description: z.string().optional(),
          items: z.array(
            z.object({
              label: z.string().nonempty(),
              content: z.string().nonempty(),
            })
          ),
        }),
      }),
    }),
  },
});
