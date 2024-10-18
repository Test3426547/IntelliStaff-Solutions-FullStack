// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/content',
    'shadcn-nuxt',
    'nuxt-gtag',
    '@vueuse/motion/nuxt'
  ],
  plugins: [{ src: "~/plugins/clarity.js", mode: "client" }],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      NUXT_CLARITY_ID: process.env.NUXT_CLARITY_ID,
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ['fsevents']
    }
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    }
  },
  compatibilityDate: '2024-10-18',
})