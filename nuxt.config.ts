// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare-module',
    cloudflare: {
      nodeCompat: true,
      deployConfig: true,
      wrangler: {
        name: 'web-nuxt4',
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
