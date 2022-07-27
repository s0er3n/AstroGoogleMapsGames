import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import { astroImageTools } from "astro-imagetools";
// https://astro.build/config
export default defineConfig({
  experimental: { integrations: true },
  integrations: [tailwind(), astroImageTools],
})
