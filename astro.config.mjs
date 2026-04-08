import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import node from '@astrojs/node'
// For production on Cloudflare, replace with:
// import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
  site: 'https://www.hom.estate',
  adapter: node({ mode: 'standalone' }),
  // For production: adapter: cloudflare(),
  integrations: [react(), sitemap()],
})
