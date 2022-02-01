module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            boxShadow: {
                '3xl': '4px 10px 30px 5px rgb(120 84 16)',
                '2xl': '-13px 14px 16px 7px rgb(215 215 215 / 89%)',
                'connect': '-2px 3px 0px 0px #ffaf40, -5px 6px 0px 0px #4b4b4b;',
                'faq': '7px -7px 0px 0px #6e2b91, 12px -12px 0px 2px #ffd400, 18px -17px 0px 2px #665c27;'
            },
            backgroundImage: {
                'quote': "url('~/assets/images/head.png')",
                'background': "url('~/assets/images/background-12.png')"

            },

        },
    },
    plugins: [],
}