const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            minHeight: {
                '80': '80px',
                '100': '100vh',
            },
            colors: {
                'custom-gray': 'rgb(252, 249, 249)',
            },
        },
    },
    plugins: [],
});