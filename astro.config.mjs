// @ts-check
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel({
    imageService: true,
    isr: {
      expiration: 60 * 60,
    },
  }),
})
