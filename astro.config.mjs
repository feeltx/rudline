// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rudline.pl",
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Commissioner",
      cssVariable: "--font-commissioner",
      options: {
        variants: [
          {
            src: ["./src/assets/commissioner.woff2"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
  ],

  integrations: [
    icon(),
    sanity({
      projectId: "uj4br4j4",
      dataset: "production",
      apiVersion: "2026-03-01",
      useCdn: false,
    }),
    react(),
  ],
});
