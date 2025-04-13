export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  content: { preview: { api: "https://api.nuxt.studio" } },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  imports: { dirs: ["schemas"] },
  modules: [
    "@nuxt/content",
    "@nuxt/scripts",
    "@nuxt/ui-pro",
    "@nuxthub/core",
    "nuxt-viewport",
  ],
  nitro: { compressPublicAssets: { brotli: true } },
  runtimeConfig: { nocodb: { apiToken: "" } },
});
