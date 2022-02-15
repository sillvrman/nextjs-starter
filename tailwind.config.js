// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
    future: {
        purgeLayersByDefault: true,
        applyComplexClasses: true,
    },
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // 'media' or 'class'
    theme: {
        container: {
            center: true,
        },
        maxWidth: {
            '1170': '1170px',
        },
        extend: {
            gridAutoColumns: {
                '2fr': 'minmax(0, 2fr)',
                '3fr': 'minmax(0, 3fr)',
            },
            zIndex: {},
            fontSize: {
                '17px': '17px',
            },
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                opacity: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
                spinner: {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: ' rotate(360deg)',
                    },
                },

                fadeLeft: {
                    '0%': {
                        transform: 'translateX(-50px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        opacity: 1,
                    },
                },
                fadeRight: {
                    '0%': {
                        transform: 'translateX(50px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        opacity: 1,
                    },
                },
            },
            spacing: {
                190: '40rem',
            },
            screens: {
                'm-h-400': { 'raw': '(max-height: 400px)' },
                'print': { 'raw': 'print' },
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.5s ease-out',
                spinner: ' spinner 1s linear infinite',
                opacity: 'opacity 0.2s ease-in-out',
                fadeLeft: 'fadeLeft 1s ease-in-out',
                fadeRight: 'fadeRight 1s ease-in-out',
            },
            width: {
                'max-content': 'max-content',
            },
            maxWidth: {
                '8xl': '1920px',
            },
            colors: {
                gray: {
                    ...colors.gray,
                },
                blue: {
                    DEFAULT: '#3275bb',
                    ...colors.blue,
                },
                green: {
                    ...colors.green,
                },
                yellow: {
                    ...colors.yellow,
                },
            },
            textColor: {},
            boxShadow: {
                'outline-2': '0 0 0 2px var(--accents-2)',
                magical:
                    'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
            },
            height: {
                '30px': '30px',
                '90px': '90px',
                '75px': '75px',
            },
            lineHeight: {
                'extra-loose': '2.2',
            },
            scale: {
                120: '1.2',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
