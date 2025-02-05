// @ts-check
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.fransek.dev',
  integrations: [tailwind(), sitemap()],
  output: 'server',
  adapter: vercel({
    imageService: true,
    isr: {
      expiration: 60 * 60 * 24,
    },
  }),
})
