// https://nuxt.com/docs/api/configuration/nuxt-config

// the base url used for all API requests
const enable_dark_theme = false

export default defineNuxtConfig({
  app: {
    head: {
      // enable dark theme
      htmlAttrs: {
        'lang': 'en',
        'data-bs-theme': enable_dark_theme ? "dark" : ""
      },
      // include bootstrap css
      link: [{
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css',
        crossorigin: 'anonymous'
      }]
    }
  },
  devtools: { enabled: true },
})
