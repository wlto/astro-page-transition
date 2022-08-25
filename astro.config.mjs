import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite : {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css : {
      preprocessorOptions : {
        scss : {
          additionalData : `
            @use "sass:math";
            @import "@/styles/_shared.scss";
          `,
        },
      },
    }
  }
});