// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/content", "@nuxtjs/google-fonts"],
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            title: "NuxtJS - The Planets",
            meta: [
                {
                    name: "description",
                    content: "An overview of our planets in the solar system",
                },
            ],
            htmlAttrs: {
                lang: "en",
            }
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ["~/assets/css/main.css"],
    googleFonts: {
        families: {
            "League+Spartan": [400, 600],
            "Antonio": [500],
        },
        display: "swap",
        text: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        preconnect: true,
        prefetch: true,
        preload: true,
    },
});
