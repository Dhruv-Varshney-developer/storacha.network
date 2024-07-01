// https://nuxt.com/docs/api/configuration/nuxt-config

const PUBLIC_SITE_URL = import.meta.env.NUXT_PUBLIC_SITE_URL || 'https://storacha.network'

export default defineNuxtConfig({

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/fontaine',
    '@nuxtjs/plausible',
    '@nuxtjs/seo',
    '@nuxt/image',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  features: {
    inlineStyles: false,
  },

  ogImage: {
    // disable playwright and chromium binary downloads
    // https://nuxtseo.com/og-image/guides/chromium#prerenderer-ci-chromium
    compatibility: {
      prerender: {
        chromium: false,
      },
    },
  },

  experimental: {
    // TODO: fix payload extraction for IPFS hosting
    // see: https://github.com/nuxt/nuxt/issues/19478
    // payloadExtraction: false,
    componentIslands: true,
  },

  sitemap: {
    discoverImages: false,
    exclude: [
      '/__nuxt_island/**',
    ],
  },

  // reduce CLS by calculating font metrics ahead of load
  fontMetrics: {
    fonts: ['Manrope', 'Poppins', 'Fira Mono'],
  },

  site: {
    // seoKit
    url: PUBLIC_SITE_URL,
    name: 'Storacha Network',
    description: 'Meta.',
    defaultLocale: 'en-US',
    identity: {
      type: 'Organization',
    },
    twitter: '@x',
    splash: false,
    // seoKit
  },

  linkChecker: {
    enabled: false,
  },

  plausible: {
    autoOutboundTracking: true,
  },

  runtimeConfig: {
    public: {
      contactEmail: 'hello@storacha.network',
      twitter: 'https://twitter.com/x',
      linkedin: '',
      mailingListUrl: 'https://945c6cfe.sibforms.com/serve/MUIFAJsqje9uA4owcVGYYaQWZarreW_oOzT9j0aXOY1QcOdsXQ7ZjvWvrpXKqNm9sBilY3Pum8s9CyPAkA2ELLEyJp3DVvzEDFg-Ov967IegSH6PXRAG6ulFhavIwebzTu3XsMZbpnyWbsDp5hexye1aXcFs4C9oIFFJWX2Aar8ElyUJDCPSsoeMAdj6puyREL1zUrjNpq2ZobYx',
    },
  },

  unocss: {
    nuxtLayers: true,
  },

  devtools: {
    enabled: true,
  },
})
