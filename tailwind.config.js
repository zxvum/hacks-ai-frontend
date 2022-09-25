/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        container: false
    },
    content: [
        "./src/**/*.{js,jsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        function ({addComponents}) {
            addComponents({
                '.container': {
                    padding: '0 40px',
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '860px',
                    },
                    '@screen lg': {
                        maxWidth: '1240px',
                    },
                    '@screen xl': {
                        maxWidth: '1320px',
                    },
                }
            })
        }
    ],
}
