// @ts-check
import { defineConfig, fontProviders } from 'astro/config'; 
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from "astro-pagefind";

export default defineConfig({
    site: 'https://rmwiklist.vercel.app',
    integrations: [
        mdx(), 
        pagefind(),
        sitemap() 
    ],
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Atkinson',
            cssVariable: '--font-atkinson',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/atkinson-regular.woff'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                    {
                        src: ['./src/assets/fonts/atkinson-bold.woff'],
                        weight: 700,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
    ],
    vite: {
        ssr: {
            noExternal: ['astro-pagefind'],
        },
        // 🔑 AÑADIMOS ESTO: Habilita los hilos para PPSSPP en localhost de forma segura
        server: {
            headers: {
                'Cross-Origin-Opener-Policy': 'same-origin',
                'Cross-Origin-Embedder-Policy': 'require-corp',
            },
        },
    },
});