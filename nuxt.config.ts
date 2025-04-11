export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  imports: { dirs: ["schemas"] },
  modules: ["@nuxt/ui-pro", "@nuxt/content", "@nuxthub/core"],
  content: { preview: { api: "https://api.nuxt.studio" } },
});
