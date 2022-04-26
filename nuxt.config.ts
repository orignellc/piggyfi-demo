import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        '@nuxtjs/google-fonts'
    ],
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
    },
    googleFonts: {
        families: {
            Karla: [100, 200, 300, 400, 500, 600, 700]
        },
        prefetch: true
    },
})
