// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ["nuxt-viewport", '@nuxtjs/i18n', '@nuxt/eslint', '@pinia/nuxt'],
  i18n: {
    locales: ['ee', 'ru'],
    defaultLocale: 'ee',
    vueI18n: './i18n.config.ts',
    fallbackLocale: 'ee',
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})