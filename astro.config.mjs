// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
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

  // server: {
  //   host: true,
  //   port: 4321,
  // },

  integrations: [icon()],
});
