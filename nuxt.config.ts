// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["@/assets/css/tailwind.css" ],
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  pinia: {
    storesDirs: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
  },

  imports: {
    dirs: ["./stores"],
  },
  icon: {
    mode: "svg",
  },
  runtimeConfig: {
    public: {
      baseURL: 'https://pokeapi.co/api/v2/'
    }
  }
})