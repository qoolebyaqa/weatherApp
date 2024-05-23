
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_PUBLIC_API_KEY
    }
  },
  devtools: { enabled: true },
  plugins: [
    '~/plugins/vuex.js',
  ],
  ssr: true,
})
