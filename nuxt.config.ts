
export default defineNuxtConfig({
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/weatherApp/'
  },
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_PUBLIC_API_KEY
    }
  },
  devtools: { enabled: true },
  plugins: [
    '~/plugins/vuex.js',
  ]
})
