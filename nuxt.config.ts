export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  modules: ["@nuxt/ui-pro", "@nuxt/content", "nuxt-nodemailer"],
  nodemailer: {
    from: "",
    host: "",
    port: "",
    secure: "",
    auth: { user: "", pass: "" },
  },
});
