// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    siteURL: import.meta.env.SITE_URL || 'http://localhost:3000'
  },
  nitro: {
    preset: 'cloudflare-module',
    cloudflare: {
      nodeCompat: true,
      deployConfig: true,
      wrangler: {
        name: 'web-nuxt4',
        preview_urls: true,
        routes: [
          {
            pattern: 'laut.ar',
            custom_domain: true
          },
          {
            pattern: 'www.laut.ar',
            custom_domain: true
          }
        ]
      }
    }
  }
})
