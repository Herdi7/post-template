module.exports = {
    content: ["./public/**/*.{html, js}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                "primary": "#3C05B1",
                "success": "#31D616",
                "light": "#F6F6F6"
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1rem',
                lg: '5px',
                xl: '1rem',
            },
        },
        fontFamily: {
            "roboto": ['Roboto', 'sans-serif']
        },
    },
    plugins: [],
}